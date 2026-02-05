import { createContext, useState, useEffect, useContext } from "react";
import { convertUserFromAPI, getAllJournalEntriesForUserAPI, getAllModelsAPI } from '../api/utilities.js'

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState('')
  const [entries, setEntries] = useState([])

  const fetchData = async () => {
    try {
      const users = await getAllModelsAPI('users')
      const newUsers = users.map(convertUserFromAPI)
      setUsers(newUsers);
      
      const userToSelect = users[8]
      setSelectedUser(userToSelect)

      const entries = await getAllJournalEntriesForUserAPI(userToSelect.id)
      const newEntries = entries.map(convertEntryFromAPI)
      setEntries(newEntries)
    } catch (error) {
        console.error('err fetch', error)
    } finally {
      setLoading(false)
    }
  }

  const convertEntryFromAPI = (entryAPI) => {
    const newEntry = {
      ...entryAPI,
      movements: entryAPI.movements.map(movement => Number(movement.id)),
      moodsBefore: entryAPI.moods_before.map(moodBefore => Number(moodBefore.id)),
      moodsAfter: entryAPI.moods_after.map(moodAfter => Number(moodAfter.id)),
    }
    delete newEntry['moods_before'];
    delete newEntry['moods_after'];

    return newEntry
  }

//   const convertUserFromAPI = (userAPI) => {
//   const newUser = {
//     ...userAPI,
//     journalEntries: userAPI.journal_entries
//   };
//   delete userAPI.journal_entries;
//   return newUser;
// }

  const fetchEntries = async () => {
    if (selectedUser) {
      try {
        const entries = await getAllJournalEntriesForUserAPI(selectedUser.id)
        const newEntries = entries.map(convertEntryFromAPI)
        setEntries(newEntries)
      } catch (error) {
        console.error('err fetching entries', error)
      }
    }
  }

  useEffect(() => {
    fetchEntries();
  }, [selectedUser])

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <DataContext.Provider value={ { 
      loading, 
      users,
      selectedUser,
      setSelectedUser,
      entries,
      setEntries
      } }>
      {children}
    </DataContext.Provider>
  )
}

const useData = () => useContext(DataContext);

export { DataProvider, useData };
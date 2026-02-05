import { createContext, useState, useEffect, useContext } from "react";
import { convertUserFromAPI, getAllJournalEntriesForUserAPI, getAllModelsAPI } from '../api/utilities.js'

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState('')
  const [entriesCache, setEntriesCache] = useState({})
  const [entries, setEntries] = useState([])

  const fetchData = async () => {
    try {
      const users = await getAllModelsAPI('users')
      const newUsers = users.map(convertUserFromAPI)
      setUsers(newUsers);
      
      const userToSelect = users[8]
      setSelectedUser(userToSelect)

      const entries = await getAllJournalEntriesForUserAPI(userToSelect.id)
      setEntries(entries)
    } catch (error) {
        console.error('err fetch', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchEntries = async () => {
    if (selectedUser) {
      try {
        const entries = await getAllJournalEntriesForUserAPI(selectedUser.id)
        setEntries(entries)
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

  const addEntryToCache = (userId, newEntry) => {
    setEntriesCache(
      prev => ({
        ...prev,
        [userId]: [...(prev[userId] || []), newEntry]
      })
    )
  }

  return (
    <DataContext.Provider value={ { 
      loading, 
      users,
      selectedUser,
      setSelectedUser,
      entriesCache,
      setEntriesCache,
      addEntryToCache,
      entries,
      setEntries
      } }>
      {children}
    </DataContext.Provider>
  )
}

const useData = () => useContext(DataContext);

export { DataProvider, useData };
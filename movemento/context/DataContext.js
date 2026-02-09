import { createContext, useState, useEffect, useContext } from "react";
import { convertUserFromAPI, getAllJournalEntriesForUserAPI, convertEntryFromAPI, getAllModelsAPI } from '../api/utilities.js'

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
      
      const userToSelect = users[9]
      setSelectedUser(userToSelect)

      const entries = await getAllJournalEntriesForUserAPI(userToSelect.id)
      const newEntries = entries.map(convertEntryFromAPI)
      setEntries(newEntries.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at)
      }))
    } catch (error) {
        console.error('err fetch', error)
    } finally {
      setLoading(false)
    }
  }

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
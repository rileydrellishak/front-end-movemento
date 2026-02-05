import { createContext, useState, useEffect, useContext } from "react";
import { convertUserFromAPI, getAllModelsAPI } from '../api/utilities.js'

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState('')
  const [entriesCache, setEntriesCache] = useState({})

  const fetchData = async () => {
    try {
      const users = await getAllModelsAPI('users')
      const newUsers = users.map(convertUserFromAPI)
      setUsers(newUsers);
      setSelectedUser(prevUser => prevUser || users[8])

    } catch (error) {
        console.error('err fetch', error)
    } finally {
      setLoading(false)
    }
  }

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
      addEntryToCache
      } }>
      {children}
    </DataContext.Provider>
  )
}

const useData = () => useContext(DataContext);

export { DataProvider, useData };
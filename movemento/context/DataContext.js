import { createContext, useState, useEffect, useContext } from "react";
import { convertMovementFromAPI, convertUserFromAPI, getAllModelsAPI } from '../api/utilities.js'

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [movements, setMovements] = useState([]);
  const [moods, setMoods] = useState([]);
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState('')
  const [entries, setEntries] = useState([])

  const fetchData = async () => {
    try {
      const movements = await getAllModelsAPI('movements')
      const moods = await getAllModelsAPI('moods')
      const users = await getAllModelsAPI('users')

      const newMovements = movements.map(convertMovementFromAPI);
      const newUsers = users.map(convertUserFromAPI)

      setMovements(newMovements);
      setUsers(newUsers);
      setMoods(moods);
      setSelectedUser(users[0]);

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
    <DataContext.Provider value={ {movements, moods, loading, users, selectedUser, setSelectedUser } }>
      {children}
    </DataContext.Provider>
  )
}

const useData = () => useContext(DataContext);

export { DataProvider, useData };
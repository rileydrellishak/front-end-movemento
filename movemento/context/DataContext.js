import { createContext, useState, useEffect, useContext } from "react";
import { getAllMovementsAPI } from "../api/movements";
import { getAllMoodsAPI } from "../api/moods";
import { getAllUsersAPI } from "../api/users";

const DataContext = createContext();

const convertMovementFromAPI = (movementAPI) => {
  const newMovement = {
    ...movementAPI,
    isOutdoor: movementAPI.is_outdoor
  };
  delete movementAPI.is_outdoor;
  return newMovement;
}

const convertUserFromAPI = (userAPI) => {
  const newUser = {
    ...userAPI,
    journalEntries: userAPI.journal_entries
  };
  delete userAPI.journal_entries;
  return newUser;
}

const DataProvider = ({ children }) => {
  const [movements, setMovements] = useState([]);
  const [moods, setMoods] = useState([]);
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState('')

  const fetchData = async () => {
    try {
      const movements = await getAllMovementsAPI()
      const moods = await getAllMoodsAPI()
      const users = await getAllUsersAPI()
      const newMovements = movements.map(convertMovementFromAPI);
      const newUsers = users.map(convertUserFromAPI)
      setMovements(newMovements);
      setUsers(newUsers)
      setMoods(moods)
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
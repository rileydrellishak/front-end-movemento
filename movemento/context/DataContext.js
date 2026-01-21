import { createContext, useState, useEffect, useContext } from "react";
import { getAllMovementsAPI } from "../api/movements";
import { getAllMoodsAPI } from "../api/moods";

const DataContext = createContext();

const convertMovementFromAPI = (movementAPI) => {
  const newMovement = {
    ...movementAPI,
    isOutdoor: movementAPI.is_outdoor
  };
  delete movementAPI.is_outdoor;
  return newMovement;
}

const DataProvider = ({ children }) => {
  const [movements, setMovements] = useState([]);
  const [moods, setMoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const movements = await getAllMovementsAPI()
      const moods = await getAllMoodsAPI()
      const newMovements = movements.map(convertMovementFromAPI);
      setMovements(newMovements);
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
    <DataContext.Provider value={ {movements, moods, loading} }>
      {children}
    </DataContext.Provider>
  )
}

const useData = () => useContext(DataContext);

export { DataProvider, useData };
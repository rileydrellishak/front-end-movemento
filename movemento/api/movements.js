import axios from 'axios'

const kBaseURL = 'https://back-end-movemento.onrender.com'

const getAllMovementsAPI = () => {
  return axios.get(`${kBaseURL}/movements`)
  .then(response => response.data)
  .catch(error => console.log(error))
}

export { getAllMovementsAPI };
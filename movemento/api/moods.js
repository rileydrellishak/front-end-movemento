import axios from 'axios'

const kBaseURL = 'https://back-end-movemento.onrender.com'

const getAllMoodsAPI = () => {
  return axios.get(`${kBaseURL}/moods`)
  .then(response => response.data)
  .catch(error => console.log(error))
}

export { getAllMoodsAPI };
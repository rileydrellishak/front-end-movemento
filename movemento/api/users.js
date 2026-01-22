import axios from 'axios'

const kBaseURL = 'https://back-end-movemento.onrender.com'

const getAllUsersAPI = () => {
  return axios.get(`${kBaseURL}/users`)
  .then(response => response.data)
  .catch(error => console.log(error))
}

export { getAllUsersAPI };
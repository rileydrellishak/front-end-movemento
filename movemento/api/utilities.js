import axios from 'axios'

const kBaseURL = 'https://back-end-movemento.onrender.com'

const getAllModelsAPI = (models) => {
  return axios.get(`${kBaseURL}/${models}`)
  .then(response => response.data)
  .catch(error => console.log(error))
}

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

const createJournalEntryAPI = (newEntry) => {
  return axios.post(`${kBaseURL}/users/${newEntry.user_id}/entries`, newEntry)
  .then(response => response.data)
  .catch(error => console.log(error))
}

const getAllJournalEntriesForUserAPI = (user_id) => {
  return axios.get(`${kBaseURL}/users/${user_id}/entries`)
  .then(response => response.data)
  .catch(error => console.log(error))
}

const deleteJournalEntryAPI = (user_id, entry_id) => {
  return axios.delete(`${kBaseURL}/users/${user_id}/entries/${entry_id}`)
  .catch(error => console.log(error))
}

const updateJournalEntryAPI = (user_id, entry_id, updates) => {
  return axios.patch(`${kBaseURL}/users/${user_id}/entries/${entry_id}`, updates)
  .catch(error => console.log(error))
}

const photoPostRequest = (photoURI, entry_id) => {
    if (photoURI !== '') {
      const formData = new FormData();
      formData.append('photo', {
        uri: photoURI,
        name: `entry_${entry_id}`,
        type: 'image/jpeg'
      })
      return postPhotoForJournalEntryAPI(entry_id, formData)
    } else {
      console.log('no photo added')
      return Promise.resolve(null)
    }
  }

const postPhotoForJournalEntryAPI = (entry_id, file) => {
  return axios.post(`${kBaseURL}/entries/${entry_id}/photo`, file, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data'
    }
  })
  .then(response => response.data)
  .catch(error => {
    console.error('Photo upload failed:', error.response?.status, error.response?.data)
    throw error
  })
}
export { convertMovementFromAPI, convertUserFromAPI, getAllModelsAPI, createJournalEntryAPI, getAllJournalEntriesForUserAPI, deleteJournalEntryAPI, updateJournalEntryAPI, photoPostRequest };
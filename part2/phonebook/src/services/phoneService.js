import axios from 'axios'
const baseUrl = "http://localhost:3001/persons"

function getData(promise) {
  return promise.then(response => response.data)
}

function getAll() {
  return getData(axios.get(baseUrl))
}

function create(newObj) {
  return getData(axios.post(baseUrl, newObj))
}

function update(id, newObj) {
  return getData(axios.put(`${baseUrl}/${id}`, newObj))
}

function deleteData(id) {
  return axios.delete(`${baseUrl}/${id}`)
}


export default { getAll, create, update, deleteData }

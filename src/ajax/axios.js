import axios from 'axios'
import api from './api'

function get (url) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      baseURL: api.HOST
    })
      .then(data => resolve(data))
      .catch(error => reject(error))
  })
}

export default {
  get
}

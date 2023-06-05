import axios from 'axios'

const getFirebaseConfig = () => {
  console.log('prod')
  return new Promise((resolve, reject) => {
    axios
      .get('/__/firebase/init.json')
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
  })
}

export default getFirebaseConfig

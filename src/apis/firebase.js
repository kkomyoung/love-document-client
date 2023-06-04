import getFirebaseConfig from './firebase.config'
import firebase from 'firebase/compat/app'

async function init() {
  const config = await getFirebaseConfig()

  firebase.initializeApp(config)
}

export { init }
export default firebase

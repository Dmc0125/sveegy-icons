import { initializeApp, deleteApp } from 'firebase/app'
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import dotenv from 'dotenv'

dotenv.config()

const {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} = process.env

const app = initializeApp({
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
})

export const disconnectFirestore = async () => {
  await deleteApp(app)
}

const db = getFirestore(app)

type IconData = {
  id: string
  stroke: string[] | null
  fill: string[] | null
}

const getIcons = async () => {
  const iconsSnapshot = await getDocs(collection(db, 'icons'))
  const icons: IconData[] = []
  iconsSnapshot.forEach((icon) => {
    const { stroke, fill } = icon.data() as Omit<IconData, 'id'>
    icons.push({
      id: icon.id,
      stroke,
      fill,
    })
  })
  return icons
}

export default getIcons

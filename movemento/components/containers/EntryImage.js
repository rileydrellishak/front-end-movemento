import { Image } from 'react-native'

const EntryImage = ({ url }) => {
  if (!url) return null;

  const OCI_READ_PAR_URL = process.env.EXPO_PUBLIC_OCI_READ_PAR_URL
  const imageURL = `${OCI_READ_PAR_URL}/${url}`
  
  return (
    <Image
      source={{ uri: imageURL }}
      style={{ width: 120, height: 120, borderRadius: 8}}
    />
  )
}

export default EntryImage;
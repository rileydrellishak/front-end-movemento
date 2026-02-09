import { Image, StyleSheet } from 'react-native'

const EntryImage = ({ url, style }) => {
  if (!url) return null;

  const OCI_READ_PAR_URL = process.env.EXPO_PUBLIC_OCI_READ_PAR_URL
  const imageURL = `${OCI_READ_PAR_URL}/${url}`
  
  return (
    <Image
      source={{ uri: imageURL }}
      style={[styles.image, style]}
    />
  )
}

export default EntryImage;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    maxWidth: 320,
    aspectRatio: 1,
    borderRadius: 12,
    alignSelf: 'center',
  },
})
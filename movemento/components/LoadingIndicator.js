import { ActivityIndicator } from 'react-native-paper'

const LoadingIndicator = () => {
  return (
    <ActivityIndicator 
      animating={true}
      hidesWhenStopped={true}
      size='large'
    />
  )
}

export default LoadingIndicator;
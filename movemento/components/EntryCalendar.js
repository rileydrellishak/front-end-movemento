import { CalendarProvider, Calendar } from 'react-native-calendars'
import { useTheme } from 'react-native-paper'
import { View } from 'react-native'
const EntryCalendar = ({ entries }) => {
  const theme = useTheme()
  // const dateObj = new Date(entry.created_at)
  // const displayDate = dateObj.toLocaleDateString() // mm/dd/year
  // // markedDates must be in form year-mm-dd as string
  // const formatDateToCustom = (date) => {
  //   const year = date.getFullYear();
  //   const month = (date.getMonth() + 1).toString().padStart(2, '0')
  //   const day = date.getDate().toString.padStart(2, '0')
  //   return `${year}-${month}-${day}`
  // }
  // const markedDates = entries.map(formatDateToCustom)

  return (

      <Calendar style={{backgroundColor: theme.colors.background}}date={new Date().toISOString()} onDayPress={(day) => console.log('Day pressed:', day)}/>
  )
}

// Marked dates will be the days that a user has an entry!

export default EntryCalendar;
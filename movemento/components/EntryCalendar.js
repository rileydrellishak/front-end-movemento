import { CalendarProvider, Calendar } from 'react-native-calendars'
import { useTheme } from 'react-native-paper'
import { View } from 'react-native'
const EntryCalendar = ({ entries }) => {
  const theme = useTheme();
  const entryDates = entries.map((e) => {
    return e.created_at
  })

  const formatDateToCustom = (dateString) => {
    const dateObj = new Date(dateString)
    return dateObj.toISOString().split('T')[0]
  }

  const markedDates = entryDates.map(formatDateToCustom)

  const markedDatesObjects = markedDates.reduce(
    (objects, date) => {
      objects[date] = {
        startingDay: true,
        endingDay: true,
        color: theme.colors.tertiary,
        textColor: theme.colors.onTertiary
      }
      return objects
    }, {}
  )

  return (
      <Calendar
        style={{backgroundColor: theme.colors.background}}
        theme={{calendarBackground: theme.colors.background}}
        date={new Date().toISOString()}
        markingType={'period'}
        markedDates={markedDatesObjects}/>
  )
}

// Marked dates will be the days that a user has an entry!

export default EntryCalendar;
import { Calendar } from 'react-native-calendars'
import { useTheme } from 'react-native-paper'

const EntryCalendar = ({ entries }) => {
  const theme = useTheme();

  const entryDateStrings = entries.map((e) => {
    return e.created_at
  })

  const formattedDates = (dateString) => {
    const dateObj = new Date(dateString)
    return dateObj.toISOString().split('T')[0]
  }

  const entryDateTimes = entryDateStrings.map(formattedDates)

  const markedDatesObjects = entryDateTimes.reduce(
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
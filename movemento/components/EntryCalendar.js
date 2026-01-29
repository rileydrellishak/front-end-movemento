import { CalendarProvider, WeekCalendar } from 'react-native-calendars'
import { View } from 'react-native'
const EntryCalendar = () => {
  return (
    <CalendarProvider date={new Date().toISOString()} onDayPress={(day) => console.log('Day pressed:', day)}>
      <View>
        <WeekCalendar firstDay={1}/>
      </View>
    </CalendarProvider>
  )
}

// Marked dates will be the days that a user has an entry!

export default EntryCalendar
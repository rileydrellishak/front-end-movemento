import { CalendarProvider, WeekCalendar } from 'react-native-calendars'
import { View } from 'react-native'
const EntryCalendar = () => {
  return (
    <View>
      <CalendarProvider date={new Date().toISOString()} onDayPress={(day) => console.log('Day pressed:', day)}>
          <WeekCalendar firstDay={1}/>
      </CalendarProvider>
    </View>
  )
}

// Marked dates will be the days that a user has an entry!

export default EntryCalendar
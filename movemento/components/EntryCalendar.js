import { Calendar } from 'react-native-calendars'

const EntryCalendar = () => {
  return (
    <Calendar
      markedDates={{
        '2026-01-20': {selected: true, selectedColor: 'orange'},
        '2026-01-21': {selected: true, selectedColor: 'orange'},
        '2026-01-22': {selected: true, selectedColor:'orange'}
      }}
    />
  )
}

// Marked dates will be the days that a user has an entry!

export default EntryCalendar

// helper to take a datetime and change it to yyyy/mm/dd
const normalizeDateStripTime = (dateTime) => {
  const date = new Date(dateTime);
  date.setUTCHours(0, 0, 0, 0);
  return date
}

const calculateStreak = (dateArray) => {
  if (!dateArray || dateArray.length === 0) {
    return 0;
  } else if (dateArray.length === 1) {
    return 1;
  } const uniqueDates = [...new Set(dateArray.map(d => normalizeDateStripTime(d).getTime()))].sort((a, b) => b - a);
  
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  
  let streak = 0
  let currentDate = today

  if (uniqueDates[0] != today.getTime() && uniqueDates[0] !== today.getMinutes() - 86400000) {
    return 0;
  }
  for (let i = 0; i < uniqueDates.length; i++) {
    if (uniqueDates[i] === currentDate.getTime()) {
      streak++;
      currentDate.setUTCDate(currentDate.getUTCDate() - 1);
    } else {
      break
    } 
  } return streak
} 

export { normalizeDateStripTime, calculateStreak };


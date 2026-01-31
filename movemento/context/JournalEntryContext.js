import { createContext, useState, useEffect, useContext } from "react";

const JournalEntryContext = createContext();

const getInitialJournalEntry = () => {
  return {
    user_id: null,
    movements: [],
    moods_before: [],
    moods_after: [],
    reflection: '',
    img_path: null
  }
}

const JournalEntryProvider = ({ children }) => {

  const [entry, setEntry] = useState(getInitialJournalEntry)
  
  const updateEntry = (updates) => {
    setEntry(prev => ({
      ...prev,
      ...updates,
    }));
  };

  const resetEntry = () => {
    setEntry(getInitialJournalEntry());
  }

  return (
    <JournalEntryContext.Provider value={{ entry, updateEntry, resetEntry }}>
      {children}
    </JournalEntryContext.Provider>
  )
}

const useJournalEntry = () => useContext(JournalEntryContext);

export { JournalEntryProvider, useJournalEntry };
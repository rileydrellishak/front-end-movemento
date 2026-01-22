import { createContext, useState, useEffect, useContext } from "react";

const JournalEntryContext = createContext();

const initialJournalEntry = {
    userId: null,
    movementIds: [],
    moodsBeforeIds: [],
    moodsAfterIds: [],
    reflection: ''
  }

const JournalEntryProvider = ({ children }) => {

  const [entry, setEntry] = useState(initialJournalEntry)
  
  const updateEntry = (updates) => {
    setEntry(prev => ({
      ...prev,
      ...updates,
    }));
  };

  const resetEntry = () => {
    setEntry(initialJournalEntry);
  }

  return (
    <JournalEntryContext.Provider value={{ entry, updateEntry, resetEntry }}>
      {children}
    </JournalEntryContext.Provider>
  )
}

const useJournalEntry = () => useContext(JournalEntryContext);

export { JournalEntryProvider, useJournalEntry };
import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';

function App() {

  const [entries, setEntries] = useState([{weight:174,date:'4-21-2022'},{weight:175,date:'4-22-2022'}])

  function addNewEntry(entry) {
    let tempEntries = [...entries, entry ];

        setEntries(tempEntries);
  }

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntryProperty={addNewEntry} />
    </div>
  );
}

export default App;

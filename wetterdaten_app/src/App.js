import React from 'react'
import './App.css';
import Statistic from './components/statistic';


const regentage = {
  "Januar": 6.5,
  "Februar": 4.8,
  "März": 7.9,
  "April": 9.4,
  "Mai": 10.4,
  "Juni": 14.7,
  "Juli": 10.1,
  "August": 9.9,
  "September": 8.6,
  "Oktober": 7.8,
  "November": 6.9,
  "Dezember": 9.2
}

const regentageDaten = {
  title: "Durchschnittliche Regentage in Köln",
  unit: "d",
  scale: 10,
  data: regentage
}

const niederschlag = {
  2020: {
    "Januar": 30.0,
    "Februar": 75.6,
    "März": 40.8,
    "April": 94.4,
    "Mai": 10.4,
    "Juni": 84.7,
    "Juli": 74.1,
    "August": 55.9,
    "September": 30.6,
    "Oktober": 70.8,
    "November": 64.9,
    "Dezember": 90.2
  },
  2021: {
    "Januar": 100.0,
    "Februar": 95.6,
    "März": 45.8,
    "April": 84.4,
    "Mai": 54.4,
    "Juni": 68.7,
    "Juli": 70.1,
    "August": 59.9,
    "September": 44.6,
    "Oktober": 88.8,
    "November": 54.9,
    "Dezember": 70.2
  }
}

const niederschlagDaten = {
  title: 'Niederschlagsdaten Köln',
  unit: 'l/m²',
  scale: 2,
  data: niederschlag
}

function App() {
  return (
    <div className="App">
      <Statistic
        data={regentage}
        title={regentage.title}
        unit={regentage.unit}
        scale={regentage.scale}
      />
      <Statistic
        data={niederschlagDaten}
        title={niederschlagDaten.title}
        unit={niederschlagDaten.unit}
        scale={niederschlagDaten.scale}
      />
      
    </div>
  );
}

export default App;

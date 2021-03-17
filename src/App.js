import './App.css';
import React from 'react';
import Header from './components/header';
import GeneralForm from './components/generalInformationForm';
import EducationForm from './components/educationForm';
import WorkExperienceForm from './components/workExperienceForm';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <GeneralForm/>
      <EducationForm/>
      <WorkExperienceForm/>
    </div>
  );
}

export default App;

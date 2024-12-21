import React from 'react';
import Navbar from './components/Navbar'; // Import the Navbar component
import './App.css';  // Import your custom CSS
function App() {
  

  return (
    <div className="App">
    <Navbar />  {/* Display the Navbar component */}

    <header className="App-header">
      {/* You can add other content here, such as your logo or hero section */}
      <h1 className="text-3xl text-blue-600">Welcome to My Portfolio</h1>
      <p className="text-lg">This is a simple portfolio built with React and Tailwind CSS.</p>
    </header>
  </div>
  )
}

export default App

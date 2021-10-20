import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideo from './components/RecommendedVideo';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      <div className="app__page">
        {/* Sidebar */}
        <Sidebar />

        {/* Recommended Video */}
        <RecommendedVideo />
      </div>
    </div>
  );
}

export default App;

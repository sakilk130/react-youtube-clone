import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideo from './components/RecommendedVideo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        {/* Header */}
        <Header />
        <Switch>
          <Route path="/search/:searchItem">
            <div className="app__page">
              {/* Sidebar */}
              <Sidebar />
              {/* Recommended Video */}
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              {/* Sidebar */}
              <Sidebar />
              {/* Recommended Video */}
              <RecommendedVideo />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

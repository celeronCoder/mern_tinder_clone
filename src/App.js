import './App.css';
import Header from  './components/header';
import TinderCards from './components/tinderCards';

// Helmet for document title
import { Helmet } from 'react-helmet'

function App() {
  return (
    // BEM Class naming convention starting from small letter
    <div className="app">
      <Helmet>
          <title>Tinder Clone</title>
      </Helmet>
      <Header />
      {/* Tinder Card */}
      <TinderCards />
      {/* Swipe Buttons */}
    </div>
  );
}

export default App;

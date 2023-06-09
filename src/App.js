import './index.css';
import Navbar from './components/Navbar';
import NewsContent from './components/NewsContent';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/sports' element={<NewsContent key="sports" category="sports" />} />
        <Route exact path='/business' element={<NewsContent key="business" category="business" />} />
        <Route exact path='/science' element={<NewsContent key="science" category="science" />} />
        <Route exact path='/technology' element={<NewsContent key="technology" category="technology" />} />
        <Route exact path='/health' element={<NewsContent key="health" category="health" />} />
        <Route exact path='/entertainment' element={<NewsContent key="entertainment" category="entertainment" />} />
        <Route exact path='/' element={<NewsContent key="general" category="general" />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebarr from './Pages/Sidebarr';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import CharInfo from './Pages/CharInfo';
import Topbarr from './Pages/Topbarr';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import Episodes from './Pages/Episodes';
import EpisodeDetail from './Pages/EpisodeDetail';
import { MyApi } from './Helpers/constants';
import { NameContext } from './Contexts/charContext';

function App() {

  const [charachersList, setCharachersList] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    Axios.get(`${MyApi}/characters`)
      .then((response) => {
        setCharachersList(response.data);
      });
    Axios.get(`${MyApi}/episodes?series=Breaking+Bad`).then((response) => {
      setEpisodes(response.data);
    });
  }, []);


  return (
    <div className="App">
      <NameContext.Provider value={{ name, setName }}>
        <Router>
          <Sidebarr />
          <Topbarr />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/characters' exact element={<Menu charList={charachersList} />} />
            <Route path='/characters/:id' exact element={<CharInfo charList={charachersList} />} />
            <Route path='/episodes' exact element={<Episodes episodes={episodes} />} />
            <Route path='/episodes/:id' exact element={<EpisodeDetail episodes={episodes} charList={charachersList} />} />
          </Routes>
        </Router>
      </NameContext.Provider>
    </div>
  );
}

export default App;

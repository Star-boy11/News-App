import "./App.css";
import React, {useState } from "react"
import NavBar from "./components/NavBar";
import News from "./components/News";
import {BrowserRouter as Router, Routes,Route,} from "react-router-dom"; 
import LoadingBar from 'react-top-loading-bar'


const App = ()=> {
  const pageSize=9;
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  const [Mode,setMode] = useState('light');



  function toggleMode() {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#00002b';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
    return (
      <div>
        <Router>
        <NavBar Mode={Mode} toggleMode={toggleMode}/>
        <LoadingBar
        height={1.5}
        color='#f11946'
        progress={progress}
        />
        <Routes>
          <Route exact path="/health" element={<News Mode={Mode} setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route exact path="/sports" element={<News Mode={Mode} setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route exact path="/general" element={<News Mode={Mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/science" element={<News Mode={Mode} setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route exact path="/entertainment" element={<News Mode={Mode} setProgress={setProgress} apiKey={apiKey} key="entertaintment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path="/business" element={<News Mode={Mode} setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route exact path="/technology" element={<News Mode={Mode} setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
          <Route exact path="/" element={<News Mode={Mode}/>}/>
        </Routes>
        </Router>
      </div>
    )
}

export default App;

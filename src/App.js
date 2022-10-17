import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import Navigation from './Containers/Navigation/Navigations';
import Middle from './Containers/MiddleContent/Middle';
import Intro from './Containers/AboutMe/AboutMe';
import Resume from './Containers/Resume/Resume';
import Contact from './Containers/ContactMe/Contact';
import Footer from './Containers/Footers/Footer';
import axios from './axios';

function App() {

  const [config, setConfig] = useState({});

  useEffect(() => {
    axios.get('/config.json')
      .then(response => {
        setConfig(response.data);
      }).catch(error => {
        console.log(error);
      })
  }, []);

  if(Object.keys(config).length === 0 ) {
    return null;
  }

  return (
    <Fragment>
      <Navigation resumeUrl={config.resumeUrl} />
      <Intro intro={{...config.intro, name: config.aboutMe?.name}} />
      <Middle aboutMe={config.aboutMe} resumeUrl={config.resumeUrl} />
      <Resume {...config} />
      <Contact aboutMe={config.aboutMe} />
      <Footer aboutMe={config.aboutMe} />
    </Fragment>
  )
}


export default App;

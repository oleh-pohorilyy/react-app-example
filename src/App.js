import { useState } from 'react';
import './App.css';

import { AboutUs } from './about-us/AboutUs';
import { Profile } from './profile/Profile';
import { Home } from './home/Home';

const TAB = {
  HOME: 'home',
  PROFILE: 'profile',
  ABOUT_US: 'about-us'
}

const App = () => {
  const [tab, setTab] = useState()

  const tabs = {
    [TAB.HOME]: <Home />,
    [TAB.PROFILE]: <Profile />,
    [TAB.ABOUT_US]: <AboutUs />,
  }

  return (
    <div className="App">
      <div className='App__header'>
        <span onClick={() => setTab(TAB.HOME)} className={tab === TAB.HOME ? 'active' : ''}>Home</span>
        <span onClick={() => setTab(TAB.PROFILE)} className={tab === TAB.PROFILE ? 'active' : ''}>Profile</span>
        <span onClick={() => setTab(TAB.ABOUT_US)} className={tab === TAB.ABOUT_US ? 'active' : ''}>About Us</span>
      </div>

      <div className='App__content'>
        {tabs[tab]}
      </div>
    </div>
  );
}

export default App;

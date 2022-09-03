import { useState } from 'react'
import './App.css'

import { AboutUs } from './about-us/AboutUs'
import { Profile } from './profile/Profile'
import { Home } from './home/Home'
import { TabButton } from './TabButton'

const TAB = {
  HOME: 'home',
  PROFILE: 'profile',
  ABOUT_US: 'about-us',
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
      <div className="App__header">
        <TabButton tabId={TAB.HOME} setTab={setTab} tab={tab} label="Home" />
        <TabButton
          tabId={TAB.PROFILE}
          setTab={setTab}
          tab={tab}
          label="Profile"
        />
        <TabButton
          tabId={TAB.ABOUT_US}
          setTab={setTab}
          tab={tab}
          label="About Us"
        />
      </div>

      <div className="App__content">{tabs[tab]}</div>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'

import { AboutUs } from './about-us/AboutUs'
import { Profile } from './profile/Profile'
import { Home } from './home/Home'
import { TabButton } from './TabButton'
import { Books } from './books/Books'

const TAB = {
  HOME: 'home',
  PROFILE: 'profile',
  ABOUT_US: 'about-us',
  BOOKS: 'books',
}

const App = () => {
  const [tab, setTab] = useState(TAB.BOOKS)

  const tabs = {
    [TAB.HOME]: <Home />,
    [TAB.PROFILE]: <Profile />,
    [TAB.ABOUT_US]: <AboutUs />,
    [TAB.BOOKS]: <Books />,
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
        <TabButton tabId={TAB.BOOKS} setTab={setTab} tab={tab} label="Books" />
      </div>

      <div className="App__content">{tabs[tab]}</div>
    </div>
  )
}

export default App

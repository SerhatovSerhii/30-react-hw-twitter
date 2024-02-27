
import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import Navigation from './components/Navigation'
import { TwitterContext } from './utils/context'

function App() {
  const [user, setUser] = useState(
    {
      name: 'Robot',
      avatar: 'https://gravatar.com/avatar/000?d=robohash'
    }
  )

  const [stats, setStats] = useState(
    {
      followers: 100,
      following: 1000
    }
  )

  const changeAvatar = url => {
    setUser(prevUser => ({
      ...prevUser,
      avatar: url || prevUser.avatar
    }))
  }

  const handleMouseClick = (e) => {
    e.preventDefault();
    if (e.button === 0 && stats.followers > 0) {
      setStats(prevStats => ({
        ...prevStats,
        followers: prevStats.followers + 1
      }))
    } else if (e.button === 2 && stats.followers > 0) {
      setStats(prevStats => ({
        ...prevStats,
        followers: prevStats.followers - 1
      }))
    }
  }
  return (

    <div className='app'>
      <TwitterContext.Provider value={{ user, stats, changeAvatar, handleMouseClick }}>
        <Navigation />
        <Body />
      </TwitterContext.Provider>

    </div>


  )
}

export default App

import './App.css'
import About from './components/AboutUs'
import Client from './components/Client'
import FAQPage from './components/FAQ'
import Service from './components/Service'
import NFWrapper from './hoc/NFWrapper'
import { useState } from 'react'
import Home from './components/Home'
import ProfileCard from './components/Teams'
import PrivacyPolicy from './components/Privacy'
import DebtCollectionServices from './components/ClentDubai'
import DebtRecoverySolutions from './components/Clientindia'
import ContactSection from './components/ContactSection'

function App() {
  const [activePage, setActivePage] = useState('home')

  const activePageData = {
    home: <Home setActivePage={setActivePage} />,
    about: <About />,
    faq: <FAQPage />,
    service: <Service />,
    client: <Client />,
    teams: <ProfileCard />,
    Privacy: <PrivacyPolicy setActivePage={setActivePage}/>,
    clientDubai: <DebtCollectionServices />,
    clientIndia: <DebtRecoverySolutions />,
    contact: <ContactSection />
  }

  return (
    <NFWrapper activePage={activePage} setActivePage={setActivePage}>
      {activePageData[activePage]}
    </NFWrapper>
  )
}

export default App

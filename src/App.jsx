import './App.css'
import { Navbar, Cta } from './components'
import { Features, Footer, Header, Outlook, About } from './containers'

function App() {

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <About />
      <Outlook />
      <Features />
      <Cta />
      <Footer />
    </div>
  )
}

export default App

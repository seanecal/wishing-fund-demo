import './App.css'
import { Navbar, Cta, Brand } from './components'
import { Blog, Features, Footer, Header, Outlook, About } from './containers'

function App() {

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      {/* <Brand /> */}
      <About />
      <Outlook />
      <Features />
      <Cta />
      {/* <Blog /> */}
      <Footer />
    </div>
  )
}

export default App

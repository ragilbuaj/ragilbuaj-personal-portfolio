import './App.css'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'

function App() {

  return (
    <>
      <div className='background bg-main-background bg-cover min-h-screen px-16 py-3'>
        <Navbar />
        <div className='flex py-8'>
          <About />
        </div>
      </div>
    </>
  )
}

export default App

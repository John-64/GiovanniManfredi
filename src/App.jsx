import './App.css'
import './index.css'
import Header from './Header'
import ChiSono from './ChiSono'

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="h-10"></div>
        <ChiSono />
      </main>
      <div className="h-200"></div>
    </>
  )
}

export default App
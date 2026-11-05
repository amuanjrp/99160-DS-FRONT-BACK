import './App.css'
import { Header } from './assets/components/Header/header'
import { Footer } from './assets/components/Footer/footer'
import { Home } from './assets/pages/Home/index'
import { SobreNos } from './assets/pages/SobreNos/index'
import { FaleConosco } from './assets/pages/FaleConosco/index'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
     <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
        </Routes>

      </main>
      <Footer />
     </div>
    </>
  )
}

export default App
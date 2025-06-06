import { Container } from 'react-bootstrap'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'



function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            {/* HomePage */}
            <Route path='/' element={<HomeScreen/>} />
            <Route path='/product/:id' element={<ProductScreen/>}/>
            <Route path='/cart/:id?' element={<CartScreen/>}/>
            


          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;

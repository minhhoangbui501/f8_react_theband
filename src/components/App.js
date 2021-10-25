import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Modal from './Modal'
import Slider from './Slider'

function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <Slider />
        <Content />
        <Footer />
      </div>
      <Modal />
    </>
  )
}

export default App

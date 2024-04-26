import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Post from './pages/Post'
import Add from './pages/Add'
import Update from './pages/Update'
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Post/>} />
        <Route  path='/add' element={<Add/>} />
        <Route  path='/update/:id' element={<Update/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

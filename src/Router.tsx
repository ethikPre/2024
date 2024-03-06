import { Suspense, lazy } from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Slider from './components/TSX/Slider.tsx'

function Router() {

  const Confirm = lazy(()=>import('./components/TSX/Confirm.tsx'))

  return (
    <Suspense>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Slider/>}/>
        <Route path='/confirm' element={<Confirm/>}/>
      </Routes>
    </BrowserRouter>
    </Suspense>
  )
}

export default Router

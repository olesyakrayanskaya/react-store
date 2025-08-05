import AppRoutes from '../AppRoutes/AppRoutes'
import './App.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCategories } from '../../features/categories/categoriesSlice'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch])

  return (
    <div className='app'>
      <Header />
      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  )
}

export default App

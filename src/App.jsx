import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/AboutPage/AboutPage'
import HomePage from './pages/HomePage/HomePage'
import IntroPage from './pages/IntroPage/IntroPage'
import Layout from './pages/Layout/Layout'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import OrderPage from './pages/OrderPage/OrderPage'

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<IntroPage/>}/>
                        <Route path={'/menu'} element={<HomePage />} />
                        <Route path={'/about'} element={<AboutPage />} />
                        <Route path={'/order'} element={<OrderPage />} />
                        <Route path={'*'} element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

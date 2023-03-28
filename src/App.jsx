import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/AboutPage/AboutPage'
import HomePage from './pages/HomePage/HomePage'
import IntroPage from './pages/IntroPage/IntroPage'
import Layout from './pages/Layout/Layout'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import { store } from './redux/store'

function App() {

    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            <Route index element={<IntroPage/>}/>
                            <Route path={'/menu'} element={<HomePage />} />
                            <Route path={'/about'} element={<AboutPage />} />
                            <Route path={'*'} element={<NotFoundPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </Provider>
    )
}

export default App

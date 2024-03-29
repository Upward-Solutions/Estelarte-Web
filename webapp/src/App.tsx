import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from "react"
import { Galeria } from "./pages/galeria/Galeria"
import { Layout } from './pages/layout/Layout'

export const App: React.FC = () => {
    return <Router>
        <Layout>
            <Routes>
                <Route path="/" Component={Galeria}/>
            </Routes>
        </Layout>
    </Router>
}
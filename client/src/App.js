import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Login2 from './pages/Login/studentLogin'
import Register from './pages/Register/Register'
import Register2 from './pages/Register/studentRegister'
import Dashboard from './pages/Dashboard'
import Homepage from './pages/Homepage'

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/login/institutionLogin" exact element={<Login/>} />
					<Route path="/login/studentLogin" exact element={<Login2/>} />
					<Route path="/register/institutionReg" exact element={<Register/>} />
					<Route path="/register/studentReg" exact element={<Register2/>} />
					<Route path="/dashboard" exact element={<Dashboard/>} />
					<Route path="/homepage" exact element={<Homepage/>} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
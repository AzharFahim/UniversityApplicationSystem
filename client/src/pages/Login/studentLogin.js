import { useState } from 'react'

function App() {
	const [studentEmail, setStudentEmail] = useState('')
	const [studentPassword, setStudentPassword] = useState('')

	async function loginStudent(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3001/api/login/studentLogin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				studentEmail,
				studentPassword,
			}),
		})

		const data = await response.json()

		if (data.student) {
			localStorage.setItem('token', data.student)
			alert('Login successful')
			window.location.href = '/homepage'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
		<div>
			<h1>Student Login</h1>
			<form onSubmit={loginStudent}>
				<input
					value={studentEmail}
					onChange={(e) => setStudentEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={studentPassword}
					onChange={(e) => setStudentPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="Login" />
			</form>

		</div>
	)
}

export default App
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
	const navigate = useNavigate()
	const Stud_ID = Math.random()
	const [studentName, setStudentName] = useState('')
	const [studentEmail, setStudentEmail] = useState('')
	const [studentPassword, setStudentPassword] = useState('')

	//Stud_ID is randomly generated using Math.random()
	async function registerStudent(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3001/api/register/studentReg', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				Stud_ID,
				studentName,
				studentEmail,
				studentPassword,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			navigate('/login/studentLogin')
		}
	}

	return (
		<div>
		
			<h1>Register Student</h1>
			<form onSubmit={registerStudent}>
				<input
					value={studentName}
					onChange={(e) => setStudentName(e.target.value)}
					type="text"
					placeholder="Student Name"
				/>
				<br />
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
				<input type="submit" value="Register" />
			</form>
		</div>
	)
}

export default App
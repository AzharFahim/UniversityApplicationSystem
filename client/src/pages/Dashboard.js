import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
	const navigate = useNavigate()
	const [UName, setUName] = useState('')
	const [tempUName, setTempUName] = useState('')

	async function populateUName() {
		const req = await fetch('http://localhost:3001/api/UName', {
			headers: {
				'x-access-token': localStorage.getItem('token'),
			},
		})

		const data = await req.json()
		if (data.status === 'ok') {
			setUName(data.UName)
		} else {
			alert(data.error)
		}
	}

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			const user = jwt.decode(token)
			if (!user) {
				localStorage.removeItem('token')
				navigate.reset('/login')
			} else {
				populateUName()
			}
		}
	})

	async function updateUName(event) {
		event.preventDefault()

		const req = await fetch('http://localhost:3001/api/UName', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-access-token': localStorage.getItem('token'),
			},
			body: JSON.stringify({
				UName: tempUName,
			}),
		})

		const data = await req.json()
		if (data.status === 'ok') {
			setUName(tempUName)
			setTempUName('')
		} else {
			alert(data.error)
		}
	}

	return (
		<div>
			<h1>University Name: {UName || 'No university name'}</h1>
			<form onSubmit={updateUName}>
				<input
					type="text"
					placeholder="UName"
					value={tempUName}
					onChange={(e) => setTempUName(e.target.value)}
				/>
				<input type="submit" value="Update UName" />
			</form>
		</div>
	)
}

export default Dashboard
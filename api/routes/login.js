const express = require('express')
const router = express.Router()
const cors = require('cors')
const unvInstitute = require('../models/unvInstitute')
const studentInfo = require('../models/studentInfo')
const adminInfo = require('../models/adminInfo')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

router.use(cors())
router.use(express.json())

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://Beary:888@cluster0.skiy5.mongodb.net/University-Application-DB?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.post('/institutionLogin', async (req, res) => {
	console.log(req.body)
		const unverifiedInstitute = await unvInstitute.findOne({
		email: req.body.email,
	})

	if (!unverifiedInstitute) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		unverifiedInstitute.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: unverifiedInstitute.name,
				email: unverifiedInstitute.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', unverifiedInstitute: token })
	} else {
		return res.json({ status: 'error', unverifiedInstitute: false })
	}
})

router.post('/studentLogin', async (req, res) => {
	console.log(req.body)
		const student = await studentInfo.findOne({
		email: req.body.studentEmail,
	})

	if (!student) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.studentPassword,
		student.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: student.name,
				email: student.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', student: token })
	} else {
		return res.json({ status: 'error', student: false })
	}
})

router.post('/adminLogin', async (req, res) => {
	console.log(req.body)
		const admin = await adminInfo.findOne({
		email: req.body.adminEmail,
	})

	if (!admin) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.adminPassword,
		admin.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				email: admin.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', admin: token })
	} else {
		return res.json({ status: 'error', admin: false })
	}
})

module.exports = router;
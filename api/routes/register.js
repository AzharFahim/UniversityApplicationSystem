const express = require('express')
const router = express.Router()
const cors = require('cors')
const unvInstitute = require('../models/unvInstitute')
const student = require('../models/studentInfo')
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

router.post('/institutionReg', async (req, res) => {
	console.log(req.body)
		try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await unvInstitute.create({
			insName: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

router.post('/studentReg', async (req, res) => {
	console.log(req.body)
		try {
		const newPassword = await bcrypt.hash(req.body.studentPassword, 10)
        console.log("cat")
		await student.create({
			Stud_ID: req.body.Stud_ID,
			alias: req.body.studentName,
			email: req.body.studentEmail,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

module.exports = router;
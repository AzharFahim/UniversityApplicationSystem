const express = require('express')
const app = express()
const cors = require('cors')
const unvInstitute = require('./models/unvInstitute')
const uniInfo = require('./models/uniInfo')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const path = require('path')

//app.use(express.static(path.join(__dirname, 'build/static')))
app.use(cors())
app.use(express.json())


//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://Beary:888@cluster0.skiy5.mongodb.net/University-Application-DB?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.post('/api/register', async (req, res) => {
	console.log(req.body)
		try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await unvInstitute.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post('/api/login', async (req, res) => {
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

app.get('/api/UName', async (req, res) => {
	console.log(req.body)
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const unverifiedInstitute = await unvInstitute.findOne({ email: email })

		return res.json({ status: 'ok', UName: unverifiedInstitute.UName })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

app.post('/api/UName', async (req, res) => {
	console.log(req.body)
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		await unvInstitute.updateOne(
			{ email: email },
			{ $set: { UName: req.body.UName } }
		)

		return res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

//create uniinfo page
app.post('/api/:UName/create-uni', async (req, res) => {
	console.log(req.body)
	try {
		await uniInfo.create({
			Uname: req.params.UName,
			Prog_Offered: req.body.Prog_Offered,
			Dom_Frgn_Ratio: req.body.Dom_Frgn_Ratio,
			PriLang: req.body.PriLang,
			Location: req.body.Location,
			Rank: req.body.Rank,
			FTutition_Range: req.FTutition_Range,
			DTutition_Range: req.body.DTutition_Range,
			Website: req.body.Website,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate insititute' })
	}
})

//update uniInfo page
app.put('/api/:UName/edit', async (req, res) => {
	console.log(req.body)
	try {
		await uniInfo.updateOne(
			{ UName: req.params.UName },
			{ $set: { UName: req.body.UName,
					  Prog_Offered: req.body.Prog_Offered,
					  Dom_Frgn_Ratio: req.body.Dom_Frgn_Ratio,
					  PriLang: req.body.PriLang,
					  Location: req.body.Location,
					  Rank: req.body.Rank,
					  FTutition_Range: req.FTutition_Range,
					  DTutition_Range: req.body.DTutition_Range,
					  Website: req.body.Website,
			 } }
		)
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error'})
	}
})

//get X top rank
//will be a query parameter ie, GET /api/top?rank=10
app.get('/api/top', async (req, res) => {
	console.log(req.body)
	try {
		await uniInfo.find(
			{ rank: { $lte: req.query.rank } },
			{ sort: { rank: 1} }
		)
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error'})
	}
})


app.listen(3001, () => {
	console.log('Server started on 3001')
})
const mongoose = require('mongoose')

const unvInstitute = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		UName: { type: String },
	},
	{ collection: 'unvInstitute' }
)

const model = mongoose.model('unvInstituteData', unvInstitute)

module.exports = model
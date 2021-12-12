const mongoose = require('mongoose')

const studentInfo = new mongoose.Schema(
	{
		Stud_ID: { type: String, required: true, unique: true },
		alias: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	{ collection: 'Student_info_page' }
)

const model = mongoose.model('studentInfoPage', studentInfo)

module.exports = model
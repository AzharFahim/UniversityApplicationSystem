const mongoose = require('mongoose')

const comment = new mongoose.Schema(
	{
        Uname: { type: String, required: true, unique: true },
        Stud_ID: { type: Number, required: true, unique: true },
		Alias: { type: String, required: true, unique: true },
		Text: { type: String, required: true },
        CNumber: { type: Number, required: true },
	},
	{ collection: 'Comments' }
)

const model = mongoose.model('comments', comment)

module.exports = model
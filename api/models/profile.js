const mongoose = require('mongoose')

const profile = new mongoose.Schema(
	{
		Stud_ID: { type: Number, required: true, unique: true },
        PName: { type: String, required: true, unique: true },
		Program: { type: String},
		PriLang: { type: String, required: true },
        Location: { type: String, required: true },
        MaxRank: { type: Number, required: true },
		FTutition_Range: { type: Number},
        DTutition_Range: { type: Number},
        Profile_Order: { type: Number},
	},
	{ collection: 'Profiles' }
)

const model = mongoose.model('profile', profile)

module.exports = model
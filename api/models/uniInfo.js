const mongoose = require('mongoose')

const uniInfo = new mongoose.Schema(
	{
		Uname: { type: String, required: true, unique: true },
		Prog_Offered: [{ type: String, required: true}],
		Dom_Frgn_Ratio: { type: String},
		PriLang: { type: String, required: true },
        Location: { type: String, required: true },
        Rank: { type: Number, required: true },
		FTutition_Range: { type: String},
        DTutition_Range: { type: String},
        Website: { type: String},
	},
	{ collection: 'Uni_info_page' }
)

const model = mongoose.model('uniInfoPage', uniInfo)

module.exports = model
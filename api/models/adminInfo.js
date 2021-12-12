const mongoose = require('mongoose')

const adminInfo = new mongoose.Schema(
	{
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	{ collection: 'Admin_info_page' }
)

const model = mongoose.model('adminInfoPage', adminInfo)

module.exports = model
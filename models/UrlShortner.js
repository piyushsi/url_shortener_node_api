var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlSchema = new Schema(
	{
		url: {
			type: String,
			required: true,
        },
        urlHash: {
			type: String,
        },
        shortUrl: {
			type: String,
		},
    },
    
	{ timestamps: true }
);


module.exports = mongoose.model('Url', urlSchema);
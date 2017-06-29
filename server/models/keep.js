import { models } from '../config/constants'
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	title: { type: String, required: true },
	imageURL: { type: String, required: true },
	body: { type: String },
	keepCount: { type: Number },
	shareCount: { type: Number },
	viewCount: { type: Number },
	created: { type: Number, default: Date.now() },
	creatorId: { type: ObjectId, ref: models.user.name, required: true },
	// Relations
	vaults: [{ type: ObjectId, ref: models.vault.name}]  
});

module.exports = mongoose.model(models.keep.name, schema);
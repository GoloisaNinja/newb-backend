const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
	text: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	mediaLink: {
		type: String,
		required: true,
	},
	mediaTypeIframe: {
		type: Boolean,
		required: true,
	},
	likes: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		},
	],
	comments: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
			text: {
				type: String,
				required: true,
			},
			name: {
				type: String,
			},
			date: {
				type: Date,
				default: Date.now,
			},
		},
	],
	registration: [
		{
			user: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
			name: {
				type: String,
				required: true,
			},
			text: {
				type: String,
			},
			date: {
				type: Date,
				default: Date.now,
			},
		},
	],
	date: {
		type: Date,
		required: true,
	},
	time: {
		type: String,
		required: true,
	},
});
const Event = mongoose.model('Event', EventSchema);
module.exports = Event;

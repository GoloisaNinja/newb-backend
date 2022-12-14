const express = require('express');
require('dotenv').config();
const connectDB = require('./db/db');
const cors = require('cors');
const apiUserRoute = require('./routes/users');
const apiProfileRoute = require('./routes/profiles');
const apiPostRoute = require('./routes/posts');
const apiEventRoute = require('./routes/events');
const apiWorkoutRoute = require('./routes/workouts');
const apiTrophyRoute = require('./routes/trophies');
//const apiEmailsRoute = require('./routes/emails');
const apiObstaclesRoute = require('./routes/obstacles');
const apiAdviceRoute = require('./routes/advice');
const path = require('path');

const app = express();
// const corsOptions = {
// 	origin: ['http://localhost:5000', 'https;//newbsanity.netlify.app'],
// };

// connect database
connectDB();

// init middleware
app.use(express.json({ extended: false }));
app.use(cors());

//Define Routes

app.use(apiUserRoute);
app.use(apiProfileRoute);
app.use(apiPostRoute);
app.use(apiEventRoute);
app.use(apiWorkoutRoute);
app.use(apiTrophyRoute);
//app.use(apiEmailsRoute);
app.use(apiObstaclesRoute);
app.use(apiAdviceRoute);

// use dotenv during dev

// Serve static assets in production

if (process.env.NODE_ENV === 'production') {
	// set that static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is up on ${PORT}`));

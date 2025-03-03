require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./middleware/logger'); // Ensure this file exists
const getImageBuffer = require('./utils/ai/getImageBuffer');
const generateImageUrl = require('./utils/ai/generateImageUrl');

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Image Generation Route
app.post('/create-image', async (req, res) => {
	const { email, prompt, username, userImg, category } = req.body;

	// Validate required fields
	if (!email || !prompt || !username || !userImg || !category) {
	  return res.status(400).json({
		status: 400,
		message: '🚫 All fields are required',
	  });
	}

	try {
	  // Generate image buffer
	  const buffer = await getImageBuffer(prompt, category);
  
	  // Upload image and get URL
	  const data = await generateImageUrl(buffer, prompt);
  
	  res.status(200).json({
		status: 200,
		data,
		message: "✅ Image successfully generated.",
	  });
	} catch (error) {
	  console.error('Error processing image:', error);
	  res.status(500).json({
		status: 500,
		message: '🚫 An error occurred while processing the image.',
	  });
	}
});

// Root Route
app.get('/', (req, res) => {
	res.status(200).json({
		status: 200,
		message: `🚩 Server is running`,
	});
});

module.exports = app;

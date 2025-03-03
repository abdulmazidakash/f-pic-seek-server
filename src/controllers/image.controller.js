const generateImageUrl = require("../utils/ai/generateImageUrl");
const getImageBuffer = require("../utils/ai/getImageBuffer");
const { imageCollection } = require("../utils/connectDB");

const insertAiImage = async (req, res) => {
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
	  //1 + 2. create a final and generate image buffer
	  const buffer = await getImageBuffer(prompt, category);
  
	  //3. Upload image and get URL
	  const data = await generateImageUrl(buffer, prompt);
	  console.log(data);

	  //4. insert date in mongodb
	  const document = {
		email,
		username,
		userImg,
		prompt,
		category,
		thumb_img: data.data.thumb.url,
		medium_img: data.data.medium.url,
		original_img: data.data.url,
		createdAt: new Date().toISOString(),
	  };

	  const result = await imageCollection.insertOne(document);

	  //5. send response
	  res.send({...result, url: document.original_img});
	  console.log(document);


  
	//   res.status(200).send({
	// 	status: 200,
	// 	data,
	// 	message: "✅ Image successfully generated.",
	//   });
	} catch (error) {
	  console.error('Error processing image:', error);
	  res.status(500).json({
		status: 500,
		message: '🚫 An error occurred while processing the image.',
	  });
	}
}

module.exports = { insertAiImage };
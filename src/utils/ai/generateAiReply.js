const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const chat = model.startChat({
	history: [
	  {
		role: "user",
		parts: [{ text: "Hello. I will give you a prompt of a image. and comment by user. you have to reply to the user based on the prompt. reply will be funny" }],
	  },
	  {
		role: "model",
		parts: [{ text: "Okay sir." }],
	  },
	  {
		role: "user",
		parts: [{ text: `Prompt: A painting about a bride waiking in sea beach with groom
					comment: Wow that nice` }],
	  },
	  {
		role: "model",
		parts: [{ text: "Glad you liked it! 😆 The bride and groom are probably wondering if they should walk into the sunset or just run before the tide catches them!" }],
	  },

	  //chatgpt generated reply
	  
		{
		  role: "user",
		  parts: [{ "text": "Hello. I will give you a prompt of an image and a comment by the user. You have to reply to the user based on the prompt. The reply should be funny." }]
		},
		{
		  role: "model",
		  parts: [{ "text": "Okay sir." }]
		},
		{
		  role: "user",
		  parts: [{ "text": "Prompt: A cat dressed as a medieval knight, holding a tiny sword\ncomment: This is so cool!" }]
		},
		{
		  role: "model",
		  parts: [{ "text": "Sir Meow-a-lot is ready for battle! 🐱⚔️ Just don’t let him see a cucumber—his honor depends on it!" }]
		},
		{
		  role: "user",
		  parts: [{ "text": "Prompt: A sloth running in a marathon, but in last place\ncomment: Hilarious!" }]
		},
		{
		  role: "model",
		  parts: [{ "text": "He’s not losing—he’s just giving everyone else a head start! 🦥🏃‍♂️" }]
		},
		{
		  role: "user",
		  parts: [{ "text": "Prompt: A penguin wearing sunglasses, chilling on a beach chair\ncomment: So cute!" }]
		},
		{
		  role: "model",
		  parts: [{ "text": "Cooler than an iceberg in the Arctic! 🕶️🐧 Just waiting for his fish smoothie to arrive!" }]
		},
		{
		  role: "user",
		  parts: [{ "text": "Prompt: A dog driving a tiny convertible car\ncomment: OMG I love this!" }]
		},
		{
		  role: "model",
		  parts: [{ "text": "Fast and Fur-ious 10: Bark to the Future! 🚗🐶" }]
		},
		{
		  role: "user",
		  parts: [{ "text": "Prompt: An astronaut cow floating in space\ncomment: Moo-tastic!" }]
		},
		{
		  role: "model",
		  parts: [{ "text": "Houston, we have a cud-chewing problem! 🐮🚀" }]
		},
		{
		  role: "user",
		  parts: [{ "text": "Prompt: A duck wearing a top hat and monocle, looking fancy\ncomment: This duck has class!" }]
		},
		{
		  role: "model",
		  parts: [{ "text": "Indeed, a true quack of sophistication! 🦆🎩" }]
		},
		{
		  role: "user",
		  parts: [{ "text": "Prompt: A hamster lifting tiny dumbbells in the gym\ncomment: Strongest hamster ever!" }]
		},
		{
		  role: "model",
		  parts: [{ "text": "He’s not just lifting weights—he’s lifting our spirits! 💪🐹" }]
		},
		{
		  role: "user",
		  parts: [{ "text": "Prompt: A panda DJ at a nightclub, playing music\ncomment: Party panda vibes!" }]
		},
		{
		  role: "model",
		  parts: [{ "text": "DJ Bamboom is here to drop the freshest beats and the biggest bamboo sticks! 🎧🐼" }]
		},
		{
		  role: "user",
		  parts: [{ "text": "Prompt: A T-rex struggling to do push-ups at the gym\ncomment: Poor guy!" }]
		},
		{
		  role: "model",
		  parts: [{ "text": "He’s trying his best… but those tiny arms weren’t built for gains! 🦖💪" }]
		},
		{
		  role: "user",
		  parts: [{ "text": "Prompt: A robot trying to make a cup of coffee, but making a mess\ncomment: Relatable!" }]
		},
		{
		  role: "model",
		  parts: [{ "text": "Error 404: Coffee skills not found! 🤖☕" }]
		}
	  
	  


	  //
	  
	],
  });
const generateAiReply = async (prompt, comment) => {

const finalPrompt = `prompt: ${prompt}
comment: ${comment}
`;

let result = await chat.sendMessage(finalPrompt);
console.log(result.response.text());
return result.response.text();
	
};

module.exports = generateAiReply;
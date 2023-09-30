require('dotenv').config({ silent: true }) // load environmental variables from a hidden file named .env
const express = require('express') // CommonJS import style!
const morgan = require('morgan') // middleware for nice logging of incoming HTTP requests
const cors = require('cors') // middleware for enabling CORS (Cross-Origin Resource Sharing) requests.
const mongoose = require('mongoose')
const fs = require('fs');

const app = express() // instantiate an Express object
app.use(morgan('dev', { skip: (req, res) => process.env.NODE_ENV === 'test' })) // log all incoming requests, except when in unit test mode.  morgan has a few logging default styles - dev is a nice concise color-coded style
app.use(cors()) // allow cross-origin resource sharing

// use express's builtin body-parser middleware to parse any data included in a request
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

// connect to database
mongoose
  .connect(`${process.env.DB_CONNECTION_STRING}`)
  .then(data => console.log(`Connected to MongoDB`))
  .catch(err => console.error(`Failed to connect to MongoDB: ${err}`))

// load the dataabase models we want to deal with
const { Message } = require('./models/Message')
const { User } = require('./models/User')

// a route to handle fetching all messages
app.get('/messages', async (req, res) => {
  // load all messages from database
  try {
    const messages = await Message.find({})
    res.json({
      messages: messages,
      status: 'all good',
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      status: 'failed to retrieve messages from the database',
    })
  }
})

// a route to handle fetching a single message by its id
app.get('/messages/:messageId', async (req, res) => {
  // load all messages from database
  try {
    const messages = await Message.find({ _id: req.params.messageId })
    res.json({
      messages: messages,
      status: 'all good',
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      status: 'failed to retrieve messages from the database',
    })
  }
})
// a route to handle logging out users
app.post('/messages/save', async (req, res) => {
  // try to save the message to the database
  try {
    const message = await Message.create({
      name: req.body.name,
      message: req.body.message,
    })
    return res.json({
      message: message, // return the message we just saved
      status: 'all good',
    })
  } catch (err) {
    console.error(err)
    return res.status(400).json({
      error: err,
      status: 'failed to save the message to the database',
    })
  }
})

app.get('/info', (req, res) => {
  try {
    const aboutUsData = {
      paragraphs: [
        "Welcome to our MERN stack app! I am Basil Ahmed Qureshi, a passionate and driven individual with a diverse range of skills and experiences. Currently pursuing a Bachelor of Science degree in Computer Science, Interactive Media, and Applied Mathematics at New York University Abu Dhabi, I have had the privilege of being awarded a Full-Ride Scholarship, a testament to my dedication to academics.",
        "My journey in the field of computer science and technology has been enriched by various roles and internships. At eBrain Lab, I served as a Machine Learning Research Assistant, where I collaborated with PostDocs on embedded ML projects, including design, implementation, and testing. I also delved into the world of cybersecurity by developing and implementing adversarial attacks on the MNIST dataset. Benchmarking, MLOps, and prototyping autonomous system algorithms were part of my daily endeavors.",
        "In the realm of personal projects, I have showcased my coding prowess with projects like Kid Going Downstairs, Personal Portfolio, Come With, People Counter, and Flight Ticket Management System, each demonstrating my proficiency in various programming languages and web development technologies.",
        "My skill set includes programming languages such as Python, C++, JavaScript, and proficiency in tools like Unity, Blender, PyTorch, and the NVIDIA Nano Developer's Kit. I am well-versed in operating systems such as Windows, Linux, and Mac. Furthermore, my web development expertise encompasses HTML, CSS, JavaScript, Node.js, Sockets.io, and MongoDB. I also possess strong analytical, problem-solving, organizational, and communication skills, which have been invaluable throughout my academic and professional journey.",
        "As I look forward to my expected graduation in May 2025, I am eager to continue pushing the boundaries of technology and innovation, contributing to the ever-evolving world of computer science, interactive media, and mathematics."
      ],
      imageUrl: 'https://avatars.githubusercontent.com/u/90772853?s=400&u=2320a2057075406233f0a111947b0a411b73e906&v=4',
    };
    res.json(aboutUsData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// export the express app we created to make it available to other modules
module.exports = app // CommonJS export style!

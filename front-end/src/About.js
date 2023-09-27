import React from 'react';
import './About.css'; // You can import your CSS file here.
import aboutImage from './basil.png'; // Import your image.

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About Us</h1>

        {<br></br>}

        {<p>
        Welcome to our MERN stack app! I am Basil Ahmed Qureshi, 
        a passionate and driven individual with a diverse range of skills and experiences. 
        Currently pursuing a Bachelor of Science degree in Computer Science, Interactive Media, and Applied Mathematics at New York University Abu Dhabi, 
        I have had the privilege of being awarded a Full-Ride Scholarship, a testament to my dedication to academics.</p>}
        
        {<br></br>}

        {<p>
        My journey in the field of computer science and technology has been enriched by various roles and internships. 
        At eBrain Lab, I served as a Machine Learning Research Assistant, where I collaborated with PostDocs on embedded ML projects, 
        including design, implementation, and testing. 
        I also delved into the world of cybersecurity by developing and implementing adversarial attacks on the MNIST dataset. 
        Benchmarking, MLOps, and prototyping autonomous system algorithms were part of my daily endeavors.</p>}
        
        {<br></br>}

        {<p>
        In the realm of personal projects, I have showcased my coding prowess with projects like "Kid's Going Downstairs," "Personal Portfolio," "Come With," "People Counter," and "Flight Ticket Management System," 
        each demonstrating my proficiency in various programming languages and web development technologies.</p>}
        
        {<br></br>}

        {<p>
        My skill set includes programming languages such as Python, C++, JavaScript, and proficiency in tools like Unity, Blender, PyTorch, and the NVIDIA Nano Developer's Kit. 
        I am well-versed in operating systems such as Windows, Linux, and Mac. 
        Furthermore, my web development expertise encompasses HTML, CSS, JavaScript, Node.js, Sockets.io, and MongoDB. 
        I also possess strong analytical, problem-solving, organizational, and communication skills, which have been invaluable throughout my academic and professional journey.</p>}

        {<br></br>}

        {<p>
        As I look forward to my expected graduation in May 2025, I am eager to continue pushing the boundaries of technology and innovation, contributing to the ever-evolving world of computer science, interactive media, and mathematics.
        </p>}

        {<br></br>}

        {/* Display my image here */}
        {<img src={aboutImage} alt="Basil Ahmed Qureshi" width="400" height="400"></img>}
    
    </div>
  );
}

export default AboutUs;

import React from 'react'
import SeparatorBody from '../components/SeparatorBody'

export default function About() {
  return (
    <div className='w-50dvw justify-center'>
      <h1 className='text-gray font-bold text-7xl mt-12 mb-6'>DEVELOPER</h1>
      <h3 className='text-gray text-5xl my-6 font-medium'>CODER IN TRAINING</h3>
      <SeparatorBody className='flex justify-center mx-auto h-0.5 w-1/2 bg-gradient-to-r from-black to-green'/>
      <p className='text-gray text-lg text-left mx-20 my-4 p-2'>After a 12 year career in the video games industry as an audio professional, I am seeking a new challenge by pivoting to front-end development. I relish the challenge of learning new skills, and I am excited to apply and develop them further in a professional environment. Through my games industry experience, I have many valuable transferable skills such as communication, prioitisation, time management, and creative problem solving.</p>
      <p className='text-gray text-lg text-left mx-20 mt-6 p-2'>Languages I am currently learning are: HTML, CSS, Tailwind, React, JavaScript, & Python</p>
      <p className='text-gray text-lg text-left mx-20  p-2'> I have been using my new coding skills to create websites, text adventure games, to-do lists, perform data analysis, small video games using the Unity game engine in C#.</p>
      
      <div className='imgbox flex flex-row flex-wrap w-8/12 mx-auto my-12 justify-center overflow-hidden border-hidden border-2 '>
        <img className='w-1/4 h-72 object-cover border-2 rounded-tl-xl rounded-bl-xl' alt='Colourful game image'src='./src/images/Outharrier.jpg'></img>
        <img className='w-1/4 h-72 object-cover object-left border-2' alt='text based game' src='./src/images/TextAdventure.jpg'></img>
        <img className='w-1/4 h-72 object-cover border-2' src='./src/images/Todo.jpg' alt='simple web application'></img>
        <img className='w-1/4 h-72 object-cover object-right border-2 rounded-tr-xl rounded-br-xl' alt='C# coding script' src='./src/images/UnityCode.jpg'></img>
        {/*
        <img className='w-1/4 h-auto border-2' src='./src/images/ER_03.jpg'></img>
        <img className='w-1/4 h-auto border-2' src='./src/images/ER_06.jpg'></img>*/}

       </div>
      
    </div>
    

    
  )
}

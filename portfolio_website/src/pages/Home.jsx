import React from 'react'
import SeparatorBody from '../components/SeparatorBody'

export default function Home() {
  return (
    <div id="Home" className='w-50dvw justify-center '>
        <h1 className='text-gray font-bold text-7xl mt-12 mb-6'>MICHAEL <span className='text-black font-medium'>TAYLOR</span></h1>
        {/*<SeparatorBody className="flex justify-center mx-auto h-2 w-1/2 bg-gradient-to-r from-black to-green"/>*/}
        <h3 className='text-gray text-5xl my-6 font-medium'>AUDIO DESIGNER AND DEVELOPER</h3>
       {/* <h2 className='text-gray text-2xl my-6'>FOR VIDEO GAMES</h2>*/}


        <SeparatorBody className="flex justify-center mx-auto h-1 w-3/4 bg-gradient-to-r from-black to-green"/>
        <p className='text-gray text-lg justify-center mx-20 my-12 p-2'>Welcome to the portfolio of Michael Taylor, veteran Audio Designer for video games & interactive media, and aspiring junior developer.</p>
        
        <p className='text-gray text-lg justify-center mx-20 my-12 p-2'>If you wish to contact me regarding a quote for contract work, please do so via the <span className="underline">Enquiry Form</span>.</p>

        <div className='imgbox flex flex-row flex-wrap w-8/12 mx-auto my-12 justify-center  overflow-hidden border-hidden border-2 '>
            <img className='w-1/4 h-auto border-2 rounded-tl-xl rounded-bl-xl' src='./src/images/ER_01.jpg' alt='synthesiser image'></img>

            <img className='w-1/4 h-auto border-2' src='./src/images/ER_05.jpg' alt='synthesiser image'></img>
            <img className='w-1/4 h-auto border-2 object-cover object-right-top' alt='audio software image' src='./src/images/ReaperDAW.jpg'></img>

            <img className='w-1/4 h-auto border-2 object-cover object-left-top rounded-tr-xl rounded-br-xl'alt='mixing desk image' src='./src/images/GrandDesk.jpg'></img>
       </div>


    </div>
  )
}

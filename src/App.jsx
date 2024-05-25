import React from 'react'
import "./App.css"
import Image_person from '../public/assets/images/image-avatar.webp'

function App() {
  return (
    <>
    
    <div className='card-container'>
      <div>
      <div className='image-container'>
      <img src="./public/assets/images/illustration-article.svg" alt="" />
      </div>
      
      <div className='button'>
        <button style={{fontWeight:'800'}}>Learning</button>
      </div>
     <div>
      <p>Published 21 Dec 2023</p>
      <p className='course' style={{fontWeight: '900'}}>HTML & CSS foundations</p>
      <p> These languages are the backbone of every <br /> website, defining structure, content, and <br /> presentation.</p>
     </div>
     <div className='last-container'>
      <img src={Image_person} alt="" />
      <p>Greg Hooper</p>
     </div>
      </div>
    </div>

    </>
    )
}

export default App
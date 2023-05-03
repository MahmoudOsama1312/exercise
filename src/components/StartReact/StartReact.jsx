import React from 'react'
import AvatrarPicture from "../../imgs/avataaars.svg"
import './startReact.css'
export default function StartReact() {
  return (
      <>
          <div className='container-fluid text-center text-white start-react py-5 '>
              <img src={AvatrarPicture} alt='Avatar' className='start-avatar' />
              <h1 className='text-uppercase'>start react</h1>
              <div className='divider'>
                  <div className='divider-line'></div>
                  <li className='fa-solid fa-star fa-2x'></li>
                  <div className='divider-line'></div>
              </div>
              <div className='information'>
                  <p>Graphic Artist - Web Designer - Illustrator</p>
              </div>
              
        </div>
              
      </>
  )
}

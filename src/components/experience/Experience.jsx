import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">

          <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Javascript</h4>
            
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>React</h4>
            
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Github</h4>
            
            </div>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Bootstrap</h4>
     
            </div>
          </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        
      </div>
    </section>
  )
}

export default Experience
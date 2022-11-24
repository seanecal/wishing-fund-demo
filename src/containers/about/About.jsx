import './about.css'
import { Feature } from '../../components'

export function About() {
  return(
    <div className="section__margin wf__about" id="about">
      <div className="wf__about-feature">
        <Feature />
      </div>
      <div className="wf__about-heading">
        <h1 className="gradient__text">
          When stars shine, the void is lit
        </h1>
        <p>Check out the outlook</p>
      </div>
      <div className="wf__about-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

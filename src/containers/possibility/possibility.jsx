import './possibility.css'
import wish from '../../assets/wish.png'

export function Possibility() {
  return(
    <div className="section__padding wf__possibility" id="possibility">
      <div className="wf__possibility-content">
        <p>Do you still believe in changing the world? <br />Or should it sound too great for an ordinary individual. <br />However the collective power of the individuals could be much stronger that your dream of making the world a better place could actually come true.</p>
        <br />
        <h2 className='gradient__text'>The void is lit when stars shine</h2>
        <br />
        <h3>- Start making a wish and "toss a coin into the well"</h3>
        <h3>- Now you are a fund participant.</h3>
        <h3>- Raise a fund matter, start a petition/referendum, vote, elect, campaign...</h3>
        <p>It is a full-scale democracy, no centralized fund raiser collecting funds, just everyday people in a democratic online community.</p>
      </div>

      <div className="wf__possibility-pic">
        <img src={wish} alt="a girl making a wish" />
      </div>
    </div>
  )
}

import './header.css'
import hero from '../../assets/hero.png'

export function Header() {
  return(
    <>
    {/* <div className="wf__bg-container">
      <div className="wf__bg-bubbles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div> */}
    <div className="wf__header section__padding" id="home">
        <div className="wf__header-content">
        <h1 className="gradient__text">
          Decentralized <br />Democratic <br />Fund
        </h1>
        <br />
        <h3 className="gradient__text">
          Participate, Decide, Vote, Change the World
        </h3>
        <p>
          WishFund will be dedicating itself to build a democratic fund platform where the fund participants will get to vote on ALL matters in their funds.
          Whether the fund will be a profitable investment or solely for public benefits, it is your decision.
        </p>
        <div className="wf__header-content__input">
          <input type="email" placeholder='Put email address to stay updated'/>
          <button type="button">Be a WishFunder</button>
        </div>
        </div>
        <div className="wf__header-content__image">
        <img src={hero} alt="making wish" />
        </div>
    </div>
    <div className="wf__wave-section">
        <div className="wf__wave wave1"></div>
        <div className="wf__wave wave2"></div>
        <div className="wf__wave wave3"></div>
        <div className="wf__wave wave4"></div>
    </div>

    </>
  )
}

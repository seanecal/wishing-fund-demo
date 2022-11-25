import './about.css'
import { Feature } from '../../components'
import vote from '../../assets/vote.png'
import decentralized from '../../assets/decentralized.png'
import secure from '../../assets/secure.png'
import happy from '../../assets/happy.png'

export function About() {
  return(
    <div className="section__margin wf__about" id="about">
      <div className="wf__about-heading">
        <h1 className="gradient__text">
          An exploration and a future defination of Web 3.0
        </h1>
      </div>
      <div className="wf__about-container">
        <Feature title="What is WishFund?" text="It is a   platform where you either choose an existing fund to   participate or start a new fund project, a fund   participant will follow full democratic principles to  determine the use of a fund." pic={happy}/>
        <Feature title="Decentralization" text="At the dawn of Web3, WishFund is not afraid of exploring its possibilities. WishFund is giving full management to the fund participants as opposed to normal funding service where participants put full confidence in a central entity." pic={decentralized}/>
        <Feature title="Full Democracy" text="The platform is open to all, all shall be entitled with full democratic rights, each fund itself is a mini society where full democracy is practised." pic={vote}/>
        <Feature title="Secured Finance" text="WishFund will be powered by Ethernet, the Smart Contract principle will guide all transactions within the funds." pic={secure}/>
      </div>

    </div>
  )
}

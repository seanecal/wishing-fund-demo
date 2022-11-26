import './features.css'

export function Features() {
  return(
    <div className="wf__features section__margin" id="projects">
      <div className="wf__features-heading">
         <h1 className="gradient__text">
          How could WishFund change the world?
         </h1>
      </div>
      <div className="wf__features-container">
        <div className="wf__features-container__norway">
          <h5>The profitable path</h5>
          <p>The GameStop story is well-known, the collective power of the people can break the wall. If a fund is decided to be a profitable one, the fund should work as a mini company with excutive board elected. The fund will then be decided to function as an investment fund and participants should benefit from it just as how Norweigians benefit from their economic modal.</p>
        </div>
        <div className="wf__features-container__ngo">
          <h5>The non-profitable path</h5>
          <p>If you are tired of donating money to do some good then suspecting how the money is spent, start or join a non-profitable fund. The fund should function as NGO with the same democratic values applied to it. The elected fund manager should do good to the society just the way how the participants voted. This is a changer to the crowdfunding scene as the funds' decentralized nature can make it stay true to its original intention.</p>
        </div>
        <div className="wf__features-container__cta">
          <h5>This project is now on its way</h5>
          <p>As exploring more possibilities of blockchain technologies, more uncertainties are ahead. My name is Sen and I am bringing up this concept, completing this idea as my side-hustle on my free time, waiting for more interested people to join me.</p>
        </div>
      </div>
    </div>
  )
}

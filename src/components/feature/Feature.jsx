import './feature.css'

export function Feature({title, text, pic}) {
  return(
    <div className="wf__featues-container__feature">
      <div className="wf__features-container__feature-pic">
        <img src={pic} alt="illustration" />
        <div/>
      </div>
      <div className="wf__features-container__feature-title">
        <h1>{title}</h1>
        <div/>
      </div>
      <div className="wf__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

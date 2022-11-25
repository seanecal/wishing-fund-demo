import './footer.css'
import logo from '../../assets/logo.png'

export function Footer() {
  return(
    <div className="wf__footer">
      <div className="wf__footer-links section__padding ">
        <div className="wf__footer-links_logo">
          <img src={logo} alt="wishfund logo" />
          <p>All Rights Reserved</p>
        </div>
        <div className="wf__footer-links_div">
          <h4>Contact</h4>
          <p>Email</p>
          <p>FaceBook</p>
          <p>Other Social Media</p>
        </div>
        <div className="wf__footer-links_div">
          <h4>Regulations</h4>
          <p>Terms & Conditions</p>
          <p>Pravacy Policy</p>
        </div>
        <div className="wf__footer-links_div">
          <h4>It starts here</h4>
          <p>Tel Aviv, Israel</p>
          <p>Project initialized by Sen Cao</p>
          <p>caosen.cn@gmail.com</p>
        </div>
      </div>
      <div className="wf__footer-copyright">
        <p>@2023 WishFund. All rights reserved.</p>
      </div>
    </div>
  )
}

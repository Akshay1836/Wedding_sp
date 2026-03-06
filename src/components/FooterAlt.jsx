import React from 'react'
import './footer-alt.css'

export default function FooterAlt(){
  return (
    <footer className="site-footer alt-footer">
      <div className="container footer-grid alt-grid">
        <div className="footer-col">
          <div className="footer-box">
            <h5 className="footer-logo">Wedding</h5>
            <p className="muted">Fine art wedding photography & film</p>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-box">
            <h6>Address</h6>
            <address>
              Unit 10<br/>
              Abbey Trading Point<br/>
              Canning Road<br/>
              E15 3NW
            </address>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-box">
            <h6>Contact</h6>
            <p><a href="mailto:info@picturthat.com">info@picturthat.com</a></p>
            <p className="muted">+44 (0) 20 3633 2627</p>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-box">
            <h6>Explore</h6>
            <ul>
              <li><a href="#">Photo</a></li>
              <li><a href="#">Cinema</a></li>
              <li><a href="#">Chauffeuring</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-box">
            <h6>Useful Links</h6>
            <ul>
              <li><a href="#">What we do</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-inner">
          <div className="copyright">© {new Date().getFullYear()} Wedding. All rights reserved.</div>
          <div className="credit">Site by <a href="#">iirth</a></div>
        </div>
      </div>
    </footer>
  )
}

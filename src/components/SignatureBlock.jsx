import React from 'react'
import './signature-block.css'

export default function SignatureBlock(){
  return (
 <section className="signature-block">
  <div className="container signature-inner">
    <div className="signature-copy">
      <h2>
        Driven by passion, we create 
        <span className="accent"> timeless memories that last forever</span>
      </h2>

      <p className="signature-desc">
        Every celebration holds moments that deserve to be remembered. Our passion lies in capturing those genuine emotions and turning them into lasting memories. It’s an honor to be part of our clients’ most meaningful days and preserve their stories for generations to come.
      </p>
    </div>

    <div className="signature-visual">
      <img className="signature-sign" src="/wed20.jpg" alt="signature" />
      <div className="signature-meta">
        <div className="meta-name">The Creative Team</div>
        <div className="meta-role">Wedding Storytellers</div>
      </div>
    </div>
  </div>
</section>
  )
}

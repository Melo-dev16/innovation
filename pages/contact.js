import React from 'react'
import Head from 'next/head'

export default function Contact() {

  React.useEffect(()=>{
        
  })

  return (
    <>

<Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="utf-8"/>
        <title>In-novation - Contact</title>

        <link href="https://fonts.googleapis.com/css?family=Open+Sans:100,200,300,400,500,600,700,800,900" rel="stylesheet"/>
      </Head>

        <section className="page-heading">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="header-text">
                    <h4>Contactez-Nous</h4>
                    <h1>Let's Chat !</h1>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="contact-us">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div id="map">
          	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7151.84524236698!2d-122.19494600413192!3d47.56605883252286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490695e625f8965%3A0xf99b055e76477def!2sNewcastle%20Beach%20Park%20Playground%2C%20Bellevue%2C%20WA%2098006%2C%20USA!5e0!3m2!1sen!2sth!4v1644335269264!5m2!1sen!2sth" width="100%" height="420px" frameborder="0" style={{border:0, borderRadius: 15+'px', position: 'relative', zIndex: 2}} allowfullscreen=""></iframe>
            <div className="row">
              <div className="col-lg-4 offset-lg-1">
                <div className="contact-info">
                  <div className="icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <h4>Phone</h4>
                  <span>010-020-0340</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-info">
                  <div className="icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <h4>Mobile</h4>
                  <span>090-080-0760</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <form id="contact" action="" method="post">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h6>Say Hello !</h6>
                  <h4>Let's <em>discuss</em></h4>
                  <p>Envie de discuter ou d'échanger avec nous ?</p>
                </div>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <input type="name" name="name" id="name" placeholder="Nom & Prénoms" autocomplete="on" required/>
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Votre Email" required=""/>
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <textarea name="message" id="message" placeholder="Votre Message"></textarea>
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" className="main-gradient-button">Envoyer</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-12">
          <ul className="social-icons">
            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
        <div className="col-lg-12">
          <p className="copyright">Copyright © 2022 In-novation Co., Tout droits réservés. </p>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

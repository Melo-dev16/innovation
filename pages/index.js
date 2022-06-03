import React from 'react'
import Head from 'next/head'

export default function Home() {

  React.useEffect(()=>{

        $('.owl-service-item').owlCarousel({
          items:4,
          loop:true,
          dots: true,
          nav: false,
          autoplay: true,
          margin:15,
            responsive:{
              0:{
                items:1
              },
              600:{
                items:2
              },
              1000:{
                items:4
              }
            }
          })

          $('.owl-testimonials').owlCarousel({
            items:3,
            loop:true,
            dots: true,
            nav: false,
            autoplay: true,
            margin:15,
              responsive:{
                0:{
                  items:1
                },
                600:{
                  items:2
                },
                1000:{
                  items:3
                }
              }
            })

          function goToDevisService(){
            document.getElementById('devis-services').scrollIntoView({behavior: 'smooth'})
          }
        
  })

  return (
    <>

<Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="utf-8"/>
        <title>In-novation - Accueil</title>

        <link href="https://fonts.googleapis.com/css?family=Open+Sans:100,200,300,400,500,600,700,800,900" rel="stylesheet"/>
      </Head>

      <section className="main-banner" id="top">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-self-center">
          <div className="header-text">
            <h6>Welcome to the new world</h6>
            <h2>REJOIGNEZ LE TRAIN DU FUTUR ET DE <em>L'INNOVATION</em></h2>
            <div className="main-button-gradient">
              <div className="scroll-to-section"><a href="#devis">Let's Start !</a></div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="right-image">
            <img src="hero4.webp" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>

    <section className="services" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h6>Notre expertise</h6>
              <h4>Nos domaines <em>d'activités</em></h4>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="owl-service-item owl-carousel">
              <div className="item">
                <div className="service-item">
                  <div className="icon">
                    <img src="digital-marketing.png" alt=""/>
                  </div>
                  <h4><a href="/services/marketing_digital">Marketing Digital & Référencement Web</a></h4>
                </div>
              </div>
              <div className="item">
                <div className="service-item">
                  <div className="icon">
                    <img src="application.png" alt=""/>
                  </div>
                  <h4><a href="/services/developpement">Développement de sites et applications sur mesure</a></h4>
                </div>
              </div>
              <div className="item">
                <div className="service-item">
                  <div className="icon">
                    <img src="cyber-security.png" alt=""/>
                  </div>
                  <h4><a href="/services/reseaux">Sécurité & Réseau</a></h4>
                </div>
              </div>
              <div className="item">
                <div className="service-item">
                  <div className="icon">
                    <img src="solution.png" alt=""/>
                  </div>
                  <h4><a href="/services/solutions_metier">Intégration de solutions</a></h4>
                </div>
              </div>
              <div className="item">
                <div className="service-item">
                  <div className="icon">
                    <img src="computer.png" alt=""/>
                  </div>
                  <h4><a href="/services/hebergement_web">Hébergements Web & Services Cloud</a></h4>
                </div>
              </div>
              <div className="item">
                <div className="service-item">
                  <div className="icon">
                    <img src="customer-support.png" alt=""/>
                  </div>
                  <h4><a href="/services/formation">Formation - Support & Maintenance</a></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="simple-cta">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 offset-lg-1">
          <div className="left-image">
            <img src="dg.webp" alt=""/>
          </div>
        </div>
        <div className="col-lg-5 align-self-center">
          <h6>LE MOT DU PDG</h6>
          <p>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section className='about-section'>
    <div className="container">
      <div className="row">
      <div className="col-lg-5 align-self-center">
          <h6>Qui Sommes-Nous ?</h6>
          <h4>ARTISANS DE L'INNOVATION D'AUJOURD'HUI ET DE DEMAIN !</h4>
          <div className="white-button">
            <a href="/about">Savoir Plus</a>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1">
            <img src="about-section.webp" alt=""/>
        </div>
      </div>
    </div>
  </section>

  <section id='devis' className="devis">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h6>Démarrez avec nous</h6>
              <h4>Demander un <em>devis</em></h4>
            </div>
          </div>
          <div className="col-lg-12">
            <form id="contact" method="POST" action='#'>
              <div className="row">
                <div className="col-lg-6">
                  <fieldset>
                    <input type="text" name="name" placeholder="Votre Nom Complet" required />
                  </fieldset>
                </div>
                <div className="col-lg-6">
                  <fieldset>
                    <input type="email" name="email" placeholder="Votre Adresse Email" required />
                  </fieldset>
                </div>
                <div className="col-lg-6">
                  <fieldset>
                    <input type="text" name="number" placeholder="Votre Contact" required="" />
                  </fieldset>
                </div>
                <div className='col-lg-12 text-center mb-5'>
                  <h5 style={{textTransform: 'uppercase'}}>RENSEIGNEZ LES ONGLETS DES SERVICES souhaités</h5>
                </div>
                <div className='col-lg-12 our-courses'>

                  <div className="row">
                    <div className="col-lg-12">
                      <div className="naccs">
                        <div className="tabs">
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="menu">
                                <div onclick="goToDevisService()" className="active gradient-border"><span>Site Web</span></div>
                                <div onclick="goToDevisService()" className="gradient-border"><span>Réseaux Sociaux</span></div>
                              </div>
                            </div>
                            <div className="col-lg-9" id='devis-services'>
                              <ul className="nacc">
                                <li className="active">
                                  <div>
                                    <div className="right-content">
                                      <div className='row'>
                                        <div className="col-lg-6 mb-2">
                                          <fieldset>
                                            <select name='website_type'>
                                              <option value='Vitrine-OnePage'>Site Vitrine (One Page)</option>
                                              <option value='Vitrine-MultiPage'>Site Vitrine (Multi Page)</option>
                                              <option value='E-commerce'>Site E-commerce</option>
                                            </select>
                                          </fieldset>
                                        </div>
                                        <div className="col-lg-6 mb-2">
                                          <fieldset>
                                            <textarea name="website_details" placeholder="Plus de détails sur vos besoins"></textarea>
                                          </fieldset>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <div className="right-content">
                                      <div className='row'>
                                        <div className="col-lg-12 mb-2">
                                          <h5 className='text-center'>EN COURS</h5>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section className="testimonials" id="testimonials">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading">
            <h6>Nos Partenaires</h6>
            <h4>Ils ont sauté le <em>pas</em></h4>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="owl-testimonials owl-carousel" style={{position: 'relative',zIndex:5}}>
            <div className="item">
              <p>“This is a dummy text. If you see this, you're must be lazy or need an salary increase”</p>
                <h4>John Doe</h4>
                <span>CEO at Dummy Company</span>
                <img src="adidas.png" alt=""/>
            </div>
            <div className="item">
            <p>“This is a dummy text. If you see this, you're must be lazy or need an salary increase”</p>
                <h4>John Doe</h4>
                <span>CEO at Dummy Company</span>
                <img src="nike.png" alt=""/>
            </div>
            <div className="item">
            <p>“This is a dummy text. If you see this, you're must be lazy or need an salary increase”</p>
                <h4>John Doe</h4>
                <span>CEO at Dummy Company</span>
                <img src="xiaomi.jpg" alt=""/>
            </div>
            <div className="item">
            <p>“This is a dummy text. If you see this, you're must be lazy or need an salary increase”</p>
                <h4>John Doe</h4>
                <span>CEO at Dummy Company</span>
                <img src="huawei.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="contact-us" id="contact-section">
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

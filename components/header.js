export default function Header() {
  return (
    <>
    
    <header className="header-area header-sticky">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <nav className="main-nav">
                      <a href="/" className="logo">
                          <img height={80} width={200} src="/logo.png" alt="logo" />
                      </a>
                      <ul className="nav">
                          <li className="scroll-to-section"><a href="/">Accueil</a></li>
                          <li className="has-sub">
                              <a href="#">Nos Services</a>
                              <ul className="sub-menu">
                                  <li><a href="/services/marketing_digital">MARKETING DIGITAL & REFERENCEMENT WEB</a></li>
                                  <li><a href="/services/developpement">DEVELOPPEMENT DE SITES ET APPLICATIONS SUR MESURE</a></li>
                                  <li><a href="/services/reseaux">RESEAUX & SECURITE</a></li>
								  <li><a href="/services/solutions_metier">INTEGRATEUR DE SOLUTIONS METIERS D’ENTREPRISE</a></li>
								  <li><a href="/services/hebergement_web">HEBERGEMENT WEB & SERVICES CLOUD</a></li>
								  <li><a href="/services/formation">FORMATION - SUPPORT & MAINTENANCE</a></li>
                              </ul>
                          </li>
                          <li className="scroll-to-section"><a href="/about">A Propos</a></li> 
                          <li className="scroll-to-section"><a href="/contact">Contact</a></li> 
                      </ul>        
                      <a className='menu-trigger'>
                            <span>Menu</span>
                      </a>
                  </nav>
              </div>
          </div>
      </div>
  </header>

    </>
  )
}

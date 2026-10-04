import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'

import { forfaits, initForfaits } from './sections/forfaits.js'

document.querySelector('#app').innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
  <div class="container">

    <a class="navbar-brand d-flex align-items-center" href="#">
      <img src="/logo.png" height="70" alt="Logo Giro Trouve Tout">

      <div class="ms-3">
        <h4 class="m-0 text-white">GIRO-TROUVE-TOUT</h4>
        <small class="text-warning">DÉPANNAGE</small>
      </div>
    </a>

    <div class="ms-auto">
      <a
        class="btn btn-warning btn-lg"
        href="tel:0745100547"
      >
        <i class="bi bi-telephone-fill"></i>
        07 45 10 05 47
      </a>
    </div>

  </div>
</nav>


<section class="hero">

  <div class="container">

    <div class="row align-items-center">

      <div class="col-lg-6 text-center">

        <img
          src="/logo.png"
          class="img-fluid logo-principal"
          alt="Giro Trouve Tout Dépannage"
        >

      </div>


      <div class="col-lg-6">

        <p class="text-warning fs-4 fw-bold">
          DÉPANNAGE À LUZINAY OU À DOMICILE
        </p>

        <h1>
          Une solution<br>
          <span>à chaque panne</span>
        </h1>

        <p class="description">
          Électroménager • TV • Hi-Fi •
          Électronique • Serrurerie • Volets roulants
        </p>


        <div class="hero-buttons">

          <a
            href="tel:0745100547"
            class="btn btn-warning btn-lg me-3 mb-2"
          >
            <i class="bi bi-telephone-fill"></i>
            Appeler maintenant
          </a>


          <a
            href="#forfaits"
            class="btn btn-warning btn-lg mb-2"
          >
            <i class="bi bi-file-earmark-text"></i>
            Voir les tarifs
          </a>

        </div>


        <div class="atelier-info mt-4">

          <div class="atelier-icon">
            <i class="bi bi-geo-alt-fill"></i>
          </div>

          <div>
            <p class="mb-1 fw-bold">
              Atelier sur la commune de Luzinay (38200), sur rendez-vous.
            </p>

            <p class="mb-0">
              Veuillez prendre contact pour plus d'informations.
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>


${forfaits()}


<section id="mentions-legales" class="mentions-legales" hidden>

  <div class="container">

    <div class="mentions-card">

      <div class="mentions-header">

        <div>
          <span class="section-kicker">INFORMATIONS LÉGALES</span>
          <h2>Mentions légales</h2>
        </div>

        <button
          type="button"
          class="mentions-close"
          id="mentions-close"
          aria-label="Fermer les mentions légales"
        >
          <i class="bi bi-x-lg"></i>
        </button>

      </div>


      <div class="mentions-content">

        <h3>Éditeur du site</h3>

        <p>
          Le présent site est édité par :
        </p>

        <p>
          <strong>GIRO TROUVE TOUT DÉPANNAGE</strong><br>
          Entrepreneur individuel : Loïc BREYTON<br>
          33 route du Petit Mongey<br>
          38200 Luzinay – France
        </p>

        <p>
          <strong>SIREN :</strong> 108 849 233<br>
          <strong>SIRET :</strong> 108 849 233 00011<br>
          <strong>Immatriculation :</strong> Registre national des entreprises (RNE)<br>
          <strong>Activité principale :</strong> Serrurerie<br>
          <strong>Code APE :</strong> 4332B – Travaux de menuiserie métallique et serrurerie
        </p>


        <h3>Contact</h3>

        <p>
          <strong>Téléphone :</strong>
          <a href="tel:0745100547">07 45 10 05 47</a><br>

          <strong>E-mail :</strong>
          <a href="mailto:girotrouvetout@gmail.com">
            girotrouvetout@gmail.com
          </a>
        </p>


        <h3>Hébergement</h3>

        <p>
          Le site est hébergé par Netlify, Inc.<br>
          44 Montgomery Street, Suite 300<br>
          San Francisco, California 94104<br>
          États-Unis.
        </p>


        <h3>Propriété intellectuelle</h3>

        <p>
          Les textes, éléments graphiques, logos et contenus présents sur ce
          site sont protégés par les règles applicables en matière de propriété
          intellectuelle. Toute reproduction ou utilisation non autorisée de
          ces éléments est interdite, sauf autorisation préalable de leur
          titulaire.
        </p>


        <h3>Données personnelles</h3>

        <p>
          Ce site ne comporte actuellement aucun formulaire de contact et ne
          collecte directement aucune donnée personnelle par son intermédiaire.
        </p>

        <p>
          Lorsqu'un utilisateur contacte Giro Trouve Tout Dépannage par
          téléphone ou par e-mail, les informations qu'il transmet sont
          utilisées uniquement afin de répondre à sa demande et d'assurer,
          le cas échéant, le suivi de l'intervention.
        </p>


        <h3>Cookies</h3>

        <p>
          Giro Trouve Tout Dépannage n'utilise actuellement aucun cookie
          publicitaire ou outil de suivi à des fins publicitaires sur ce site.
        </p>


        <div class="mentions-back">
          <button
            type="button"
            class="btn btn-warning"
            id="mentions-back"
          >
            <i class="bi bi-arrow-up"></i>
            Retour au site
          </button>
        </div>

      </div>

    </div>

  </div>

</section>


<footer class="site-footer">

  <div class="container">

    <div class="footer-content">

      <div class="footer-company">
        <strong>GIRO TROUVE TOUT DÉPANNAGE</strong>
        <span>Luzinay (38200)</span>
      </div>

      <div class="footer-contact">
        <a href="tel:0745100547">
          <i class="bi bi-telephone-fill"></i>
          07 45 10 05 47
        </a>

        <a href="mailto:girotrouvetout@gmail.com">
          <i class="bi bi-envelope-fill"></i>
          girotrouvetout@gmail.com
        </a>
      </div>

    </div>


    <div class="footer-bottom">

      <span>
        © ${new Date().getFullYear()} Giro Trouve Tout Dépannage
      </span>

      <button
        type="button"
        class="footer-legal-link"
        id="mentions-open"
      >
        Mentions légales
      </button>

    </div>

  </div>

</footer>
`

initForfaits()


const mentionsSection = document.querySelector('#mentions-legales')
const mentionsOpen = document.querySelector('#mentions-open')
const mentionsClose = document.querySelector('#mentions-close')
const mentionsBack = document.querySelector('#mentions-back')


function openMentions() {
  mentionsSection.hidden = false

  requestAnimationFrame(() => {
    mentionsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


function closeMentions() {
  mentionsSection.hidden = true

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}


mentionsOpen.addEventListener('click', openMentions)
mentionsClose.addEventListener('click', closeMentions)
mentionsBack.addEventListener('click', closeMentions)
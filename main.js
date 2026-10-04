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
`

initForfaits()
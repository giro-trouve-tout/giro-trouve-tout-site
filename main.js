import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'

document.querySelector('#app').innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
  <div class="container">

    <a class="navbar-brand d-flex align-items-center" href="#">
      <img src="/logo.png" height="70">
      <div class="ms-3">
        <h4 class="m-0 text-white">GIRO-TROUVE-TOUT</h4>
        <small class="text-warning">DÉPANNAGE</small>
      </div>
    </a>

    <div class="ms-auto">
      <a class="btn btn-outline-warning btn-lg"
         href="tel:0745100547">
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

<img src="/logo.png"
class="img-fluid logo-principal">

</div>

<div class="col-lg-6">

<p class="text-warning fs-4">
DÉPANNAGE À DOMICILE
</p>

<h1>
Une solution<br>
<span>à chaque panne</span>
</h1>

<p class="description">

Électroménager • TV • Hi-Fi •
Électronique • Serrurerie

</p>

<a href="tel:0745100547"
class="btn btn-warning btn-lg me-3">

<i class="bi bi-telephone-fill"></i>

Appeler maintenant

</a>

<a href="#"

class="btn btn-outline-light btn-lg">

<i class="bi bi-file-earmark-text"></i>

Demander un devis

</a>

</div>

</div>

</div>

</section>
`
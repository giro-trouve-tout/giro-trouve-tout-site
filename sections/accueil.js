export function accueil() {
  return `
    <header class="site-header">
      <div class="container header-container">

        <div class="brand">
          <div class="brand-icon">🚨</div>

          <div class="brand-text">
            <strong>Giro Trouve Tout</strong>
            <span>Dépannage</span>
          </div>
        </div>

        <nav class="main-nav">
          <a href="#accueil">Accueil</a>
          <a href="#services">Services</a>
          <a href="#forfaits">Tarifs</a>
          <a href="#contact">Contact</a>
        </nav>

      </div>
    </header>

    <main>

      <section id="accueil" class="hero">
        <div class="container hero-container">

          <div class="hero-content">

            <span class="hero-badge">
              Dépannage de proximité
            </span>

            <h1>
              Un problème ?
              <span>Giro Trouve Tout.</span>
            </h1>

            <p class="hero-description">
              Dépannage, réparation et serrurerie avec des tarifs
              annoncés clairement avant intervention.
            </p>

            <div class="hero-buttons">

              <a href="#contact" class="btn btn-primary">
                📞 Besoin d'un dépannage
              </a>

              <a href="#forfaits" class="btn btn-secondary">
                Voir les tarifs
              </a>

            </div>

            <div class="hero-points">

              <div class="hero-point">
                <span>✓</span>
                <p>Tarifs annoncés avant intervention</p>
              </div>

              <div class="hero-point">
                <span>✓</span>
                <p>Déplacement local gratuit jusqu'à 2 km</p>
              </div>

              <div class="hero-point">
                <span>✓</span>
                <p>Réparer avant de remplacer</p>
              </div>

            </div>

          </div>

        </div>
      </section>


      <section id="services" class="services-section">
        <div class="container">

          <div class="section-title">
            <span class="section-kicker">Mes services</span>

            <h2>
              Un seul interlocuteur pour vos dépannages
            </h2>

            <p>
              De la serrure bloquée à l'appareil en panne,
              je recherche une solution adaptée avant de remplacer.
            </p>
          </div>


          <div class="services-grid">

            <article class="service-card">

              <div class="service-icon">
                🔑
              </div>

              <h3>Serrurerie</h3>

              <p>
                Porte claquée, serrure bloquée, cylindre,
                serrure multipoints, réglage et sécurisation.
              </p>

              <a href="#forfaits">
                Voir les forfaits →
              </a>

            </article>


            <article class="service-card">

              <div class="service-icon">
                🪟
              </div>

              <h3>Volets roulants</h3>

              <p>
                Volet bloqué, sangle, treuil, tablier,
                moteur et recherche de panne.
              </p>

              <a href="#forfaits">
                Voir les forfaits →
              </a>

            </article>


            <article class="service-card">

              <div class="service-icon">
                🔧
              </div>

              <h3>Électroménager</h3>

              <p>
                Diagnostic et réparation de vos appareils
                lorsque la réparation reste intéressante.
              </p>

              <a href="#contact">
                Demander un diagnostic →
              </a>

            </article>


            <article class="service-card">

              <div class="service-icon">
                📺
              </div>

              <h3>TV & électronique</h3>

              <p>
                Recherche de panne, alimentation,
                rétroéclairage et réparation électronique.
              </p>

              <a href="#contact">
                Me contacter →
              </a>

            </article>

          </div>

        </div>
      </section>

  `;
}
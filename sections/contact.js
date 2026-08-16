export function contact() {
  return `
    <section id="contact" class="contact-section">
      <div class="container">

        <div class="section-title">
          <span class="section-kicker">Contact</span>

          <h2>Besoin d'un dépannage ?</h2>

          <p>
            Expliquez-moi votre problème. Je vous indique la solution
            envisageable et le tarif avant intervention.
          </p>
        </div>

        <div class="contact-grid">

          <div class="contact-card">

            <div class="contact-icon">📞</div>

            <h3>Téléphone</h3>

            <p>
              Pour une demande de dépannage ou une urgence en serrurerie.
            </p>

            <a class="btn btn-primary" href="tel:">
              Appeler Giro Trouve Tout
            </a>

          </div>


          <div class="contact-card">

            <div class="contact-icon">💬</div>

            <h3>SMS</h3>

            <p>
              Vous pouvez envoyer des photos de la panne,
              de la serrure ou du volet roulant.
            </p>

            <a class="btn btn-secondary" href="sms:">
              Envoyer un SMS
            </a>

          </div>

        </div>


        <div class="contact-advice">

          <h3>Pour gagner du temps</h3>

          <p>
            Dans votre message, indiquez votre commune,
            le type de panne et, si possible, joignez quelques photos.
          </p>

        </div>

      </div>
    </section>


    <footer class="site-footer">

      <div class="container footer-container">

        <div>
          <strong>Giro Trouve Tout Dépannage</strong>

          <p>
            Serrurerie • Volets roulants • Électroménager • Électronique
          </p>
        </div>

        <div class="footer-values">
          <span>Tarifs clairs</span>
          <span>•</span>
          <span>Réparation avant remplacement</span>
        </div>

      </div>

    </footer>

    </main>
  `;
}
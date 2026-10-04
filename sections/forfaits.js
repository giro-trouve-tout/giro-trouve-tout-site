export function forfaits() {
  return `
    <section id="forfaits" class="container py-5">

      <div class="text-center mb-5">
        <h2 class="fw-bold">Nos tarifs</h2>
        <p class="text-muted">
          Des tarifs simples et transparents.
        </p>
      </div>


      <!-- DÉPLACEMENT -->
      <div class="card shadow-sm mb-3">

        <button
          type="button"
          class="btn text-start p-4 forfait-toggle"
          data-target="contenu-deplacement"
        >
          <span class="fs-5 fw-bold">
            🚗 Déplacement
          </span>

          <span class="float-end fs-4 forfait-arrow">
            +
          </span>
        </button>

        <div
          id="contenu-deplacement"
          class="forfait-content"
          style="display: none;"
        >
          <div class="card-body border-top">

            <div class="p-3 border rounded bg-light text-center">

              <h3 class="h5 fw-bold mb-2">
                Déplacement : 1 € / km
              </h3>

              <p class="mb-0">
                Distance calculée au départ de
                <strong>Luzinay (38200)</strong>.
              </p>

            </div>

            <p class="mt-3 mb-0">
              <strong>
                Les frais de déplacement sont à ajouter au tarif de l'intervention.
              </strong>
            </p>

          </div>
        </div>

      </div>


      <!-- DÉPANNAGE -->
      <div class="card shadow-sm mb-3">

        <button
          type="button"
          class="btn text-start p-4 forfait-toggle"
          data-target="contenu-depannage"
        >
          <span class="fs-5 fw-bold">
            🔧 Dépannage électroménager • TV • Hi-Fi • Électronique
          </span>

          <span class="float-end fs-4 forfait-arrow">
            +
          </span>
        </button>

        <div
          id="contenu-depannage"
          class="forfait-content"
          style="display: none;"
        >
          <div class="card-body border-top">

            <div class="p-3 mb-4 border rounded bg-light">

              <h3 class="h5 fw-bold mb-2">
                Diagnostic afin d'établir un devis
              </h3>

              <p class="mb-0">
                Le tarif du diagnostic sera déduit de la facture
                si la réparation est réalisée par Giro Trouve Tout.
              </p>

            </div>


            <div class="table-responsive">

              <table class="table table-striped table-bordered align-middle text-center">

                <thead class="table-dark">
                  <tr>
                    <th>Catégorie</th>
                    <th>Diagnostic</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>
                      Petit électroménager
                    </td>

                    <td class="fw-bold">
                      15 €
                    </td>
                  </tr>


                  <tr>
                    <td>
                      TV • Hi-Fi • Électronique
                    </td>

                    <td class="fw-bold">
                      30 €
                    </td>
                  </tr>


                  <tr>
                    <td>
                      Gros électroménager
                    </td>

                    <td class="fw-bold">
                      20 €
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>


            <p class="mt-3 mb-0">
              <strong>
                Les frais de déplacement sont à ajouter.
              </strong>
            </p>

          </div>
        </div>

      </div>


      <!-- SERRURERIE / VOLETS ROULANTS -->
      <div class="card shadow-sm mb-3">

        <button
          type="button"
          class="btn text-start p-4 forfait-toggle"
          data-target="contenu-serrurerie"
        >
          <span class="fs-5 fw-bold">
            🔑 Serrurerie • Volets roulants
          </span>

          <span class="float-end fs-4 forfait-arrow">
            +
          </span>
        </button>

        <div
          id="contenu-serrurerie"
          class="forfait-content"
          style="display: none;"
        >
          <div class="card-body border-top">

            <div class="p-4 border rounded bg-light text-center">

              <h3 class="h4 fw-bold mb-3">
                À partir de 70 €
              </h3>

              <p class="mb-0">
                Prenez contact avec Giro Trouve Tout
                pour plus d'informations.
              </p>

            </div>


            <p class="mt-3 mb-0">
              <strong>
                Les frais de déplacement sont à ajouter.
              </strong>
            </p>

          </div>
        </div>

      </div>

    </section>
  `
}


export function initForfaits() {

  const boutons = document.querySelectorAll('.forfait-toggle')


  boutons.forEach((bouton) => {

    bouton.addEventListener('click', () => {

      const targetId = bouton.dataset.target

      const contenu = document.getElementById(targetId)

      const fleche = bouton.querySelector('.forfait-arrow')


      if (!contenu) {
        return
      }


      const estOuvert = contenu.style.display === 'block'


      document
        .querySelectorAll('.forfait-content')
        .forEach((element) => {

          element.style.display = 'none'

        })


      document
        .querySelectorAll('.forfait-arrow')
        .forEach((element) => {

          element.textContent = '+'

        })


      if (!estOuvert) {

        contenu.style.display = 'block'

        if (fleche) {
          fleche.textContent = '−'
        }

      }

    })

  })

}
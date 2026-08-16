// src/sections/forfaits.js

export function forfaits() {
  return `
    <section id="forfaits" class="section forfaits-section">
      <div class="container">
        <div class="section-title">
          <span class="section-kicker">Tarifs clairs</span>
          <h2>Forfaits dépannage</h2>
          <p>
            Des tarifs annoncés avant intervention.
            Les pièces éventuelles sont facturées en supplément.
          </p>
        </div>

        <div class="forfaits-categories">

          <!-- ========================= -->
          <!-- SERRURERIE -->
          <!-- ========================= -->

          <div class="forfait-category">
            <button
              class="forfait-category-button"
              type="button"
              data-forfait-toggle="serrurerie"
              aria-expanded="false"
            >
              <span>
                <strong>🔑 Serrurerie</strong>
                <small>Ouverture, remplacement, réparation et sécurisation</small>
              </span>

              <span class="forfait-arrow">+</span>
            </button>

            <div
              class="forfait-category-content"
              data-forfait-content="serrurerie"
              hidden
            >

              <div class="forfait-subcategory">
                <h3>Ouverture de porte</h3>

                <div class="forfait-list">

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Porte claquée — ouverture simple</h4>
                      <p>
                        Ouverture non destructive lorsque la configuration
                        de la porte le permet.
                      </p>
                    </div>
                    <div class="forfait-price">80 €</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Porte claquée avec protection</h4>
                      <p>
                        Porte équipée d'un dispositif rendant l'ouverture
                        classique plus difficile.
                      </p>
                    </div>
                    <div class="forfait-price">100 €</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Porte fermée à clé</h4>
                      <p>
                        Diagnostic et tentative d'ouverture en privilégiant
                        les méthodes les moins destructives.
                      </p>
                    </div>
                    <div class="forfait-price">120 €</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Clé cassée dans la serrure</h4>
                      <p>
                        Extraction de la clé cassée lorsque le cylindre
                        reste exploitable.
                      </p>
                    </div>
                    <div class="forfait-price">80 €</div>
                  </article>

                </div>
              </div>

              <div class="forfait-subcategory">
                <h3>Cylindres et serrures</h3>

                <div class="forfait-list">

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Remplacement d'un cylindre européen</h4>
                      <p>
                        Dépose de l'ancien cylindre et pose du nouveau.
                        Cylindre non compris.
                      </p>
                    </div>
                    <div class="forfait-price">80 €</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Remplacement d'une serrure simple</h4>
                      <p>
                        Dépose et remplacement d'une serrure compatible.
                        Fourniture non comprise.
                      </p>
                    </div>
                    <div class="forfait-price">80 €</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Remplacement serrure multipoints</h4>
                      <p>
                        Dépose, remplacement et réglage d'une serrure
                        multipoints. Fourniture non comprise.
                      </p>
                    </div>
                    <div class="forfait-price">Sur devis</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Remplacement serrure en applique</h4>
                      <p>
                        Dépose de la serrure existante et installation
                        d'un modèle compatible. Fourniture non comprise.
                      </p>
                    </div>
                    <div class="forfait-price">Sur devis</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Réparation / réglage de serrure</h4>
                      <p>
                        Recherche de panne, réglage et remise en fonctionnement
                        sans remplacement de pièce majeure.
                      </p>
                    </div>
                    <div class="forfait-price">80 €</div>
                  </article>

                </div>
              </div>

              <div class="forfait-subcategory">
                <h3>Porte et mécanisme</h3>

                <div class="forfait-list">

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Réglage d'une porte</h4>
                      <p>
                        Correction d'un frottement ou d'un mauvais alignement
                        lorsque le réglage est possible.
                      </p>
                    </div>
                    <div class="forfait-price">80 €</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Réglage gâche / pêne</h4>
                      <p>
                        Ajustement permettant de retrouver une fermeture
                        correcte de la porte.
                      </p>
                    </div>
                    <div class="forfait-price">80 €</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Poignée ou béquille de porte</h4>
                      <p>
                        Remplacement ou remise en état.
                        Pièces non comprises.
                      </p>
                    </div>
                    <div class="forfait-price">80 €</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Ferme-porte</h4>
                      <p>
                        Réglage ou remplacement d'un ferme-porte.
                        Fourniture non comprise.
                      </p>
                    </div>
                    <div class="forfait-price">80 €</div>
                  </article>

                </div>
              </div>

              <div class="forfait-subcategory">
                <h3>Sécurisation</h3>

                <div class="forfait-list">

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Sécurisation après effraction</h4>
                      <p>
                        Mise en sécurité provisoire de la porte après
                        tentative d'effraction ou dégradation.
                      </p>
                    </div>
                    <div class="forfait-price">À partir de 100 €</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Pose d'un verrou</h4>
                      <p>
                        Installation d'un verrou supplémentaire.
                        Fourniture non comprise.
                      </p>
                    </div>
                    <div class="forfait-price">Sur devis</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Pose d'une serrure supplémentaire</h4>
                      <p>
                        Renforcement d'une porte par ajout d'un système
                        de fermeture. Fourniture non comprise.
                      </p>
                    </div>
                    <div class="forfait-price">Sur devis</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Diagnostic sécurité de porte</h4>
                      <p>
                        Contrôle du cylindre, de la serrure, des points
                        de fermeture et de l'état général de la porte.
                      </p>
                    </div>
                    <div class="forfait-price">80 €</div>
                  </article>

                </div>
              </div>

            </div>
          </div>


          <!-- ========================= -->
          <!-- VOLETS ROULANTS -->
          <!-- ========================= -->

          <div class="forfait-category">
            <button
              class="forfait-category-button"
              type="button"
              data-forfait-toggle="volets"
              aria-expanded="false"
            >
              <span>
                <strong>🪟 Volets roulants</strong>
                <small>Diagnostic, réparation, réglage et motorisation</small>
              </span>

              <span class="forfait-arrow">+</span>
            </button>

            <div
              class="forfait-category-content"
              data-forfait-content="volets"
              hidden
            >

              <div class="forfait-subcategory">
                <h3>Diagnostic et petites réparations</h3>

                <div class="forfait-list">

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Diagnostic volet roulant</h4>
                      <p>
                        Recherche de panne mécanique ou électrique.
                      </p>
                    </div>
                    <div class="forfait-price">50 €</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Réparation sans remplacement de pièce</h4>
                      <p>
                        Déblocage, réglage ou remise en fonctionnement
                        lorsque la réparation ne nécessite pas de pièce.
                      </p>
                    </div>
                    <div class="forfait-price">80 €</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Volet roulant bloqué</h4>
                      <p>
                        Ouverture du coffre, recherche du blocage
                        et remise en fonctionnement lorsque possible.
                      </p>
                    </div>
                    <div class="forfait-price">80 €</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Réglage des fins de course</h4>
                      <p>
                        Réglage des positions haute et basse d'un volet
                        roulant motorisé compatible.
                      </p>
                    </div>
                    <div class="forfait-price">80 €</div>
                  </article>

                </div>
              </div>

              <div class="forfait-subcategory">
                <h3>Tablier et mécanisme</h3>

                <div class="forfait-list">

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Remplacement d'attaches de tablier</h4>
                      <p>
                        Dépose des attaches défectueuses et remplacement.
                        Pièces non comprises.
                      </p>
                    </div>
                    <div class="forfait-price">80 €</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Remplacement de lame</h4>
                      <p>
                        Remplacement d'une ou plusieurs lames endommagées.
                        Fournitures non comprises.
                      </p>
                    </div>
                    <div class="forfait-price">Sur devis</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Tablier sorti des coulisses</h4>
                      <p>
                        Remise en place du tablier et contrôle
                        du fonctionnement.
                      </p>
                    </div>
                    <div class="forfait-price">80 €</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Remplacement de tulipes / guides</h4>
                      <p>
                        Remplacement des éléments de guidage défectueux.
                        Pièces non comprises.
                      </p>
                    </div>
                    <div class="forfait-price">80 €</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Remplacement d'axe</h4>
                      <p>
                        Dépose du tablier et remplacement de l'axe.
                        Fourniture non comprise.
                      </p>
                    </div>
                    <div class="forfait-price">Sur devis</div>
                  </article>

                </div>
              </div>

              <div class="forfait-subcategory">
                <h3>Volet roulant manuel</h3>

                <div class="forfait-list">

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Remplacement de sangle</h4>
                      <p>
                        Remplacement de la sangle d'un volet roulant manuel.
                        Fourniture non comprise.
                      </p>
                    </div>
                    <div class="forfait-price">80 €</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Remplacement d'enrouleur de sangle</h4>
                      <p>
                        Dépose et remplacement de l'enrouleur.
                        Fourniture non comprise.
                      </p>
                    </div>
                    <div class="forfait-price">80 €</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Remplacement de manivelle</h4>
                      <p>
                        Remplacement de la manivelle ou de ses éléments
                        de liaison. Fourniture non comprise.
                      </p>
                    </div>
                    <div class="forfait-price">80 €</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Remplacement de treuil</h4>
                      <p>
                        Dépose du mécanisme défectueux et remplacement
                        du treuil. Fourniture non comprise.
                      </p>
                    </div>
                    <div class="forfait-price">Sur devis</div>
                  </article>

                </div>
              </div>

              <div class="forfait-subcategory">
                <h3>Volet roulant électrique</h3>

                <div class="forfait-list">

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Diagnostic électrique</h4>
                      <p>
                        Contrôle de l'alimentation, de la commande
                        et du moteur du volet.
                      </p>
                    </div>
                    <div class="forfait-price">50 €</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Remplacement interrupteur de volet</h4>
                      <p>
                        Dépose et remplacement d'une commande murale
                        compatible. Fourniture non comprise.
                      </p>
                    </div>
                    <div class="forfait-price">80 €</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Remplacement moteur tubulaire</h4>
                      <p>
                        Dépose du moteur existant, installation et réglage
                        du nouveau moteur. Fourniture non comprise.
                      </p>
                    </div>
                    <div class="forfait-price">Sur devis</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Remplacement condensateur moteur</h4>
                      <p>
                        Remplacement du condensateur lorsque le moteur
                        est compatible et réparable.
                      </p>
                    </div>
                    <div class="forfait-price">80 € + pièce</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Programmation / réglage commande</h4>
                      <p>
                        Appairage ou réglage d'une commande compatible.
                      </p>
                    </div>
                    <div class="forfait-price">80 €</div>
                  </article>

                </div>
              </div>

              <div class="forfait-subcategory">
                <h3>Motorisation</h3>

                <div class="forfait-list">

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Motorisation d'un volet roulant manuel</h4>
                      <p>
                        Transformation d'un volet manuel en volet motorisé,
                        sous réserve de compatibilité de l'installation.
                      </p>
                    </div>
                    <div class="forfait-price">Sur devis</div>
                  </article>

                  <article class="forfait-card">
                    <div class="forfait-info">
                      <h4>Remplacement complet du mécanisme</h4>
                      <p>
                        Axe, moteur et éléments mécaniques selon
                        la configuration du volet.
                      </p>
                    </div>
                    <div class="forfait-price">Sur devis</div>
                  </article>

                </div>
              </div>

            </div>
          </div>

        </div>

        <div class="forfaits-note">
          <p>
            <strong>Pièces :</strong>
            lorsqu'une pièce doit être remplacée, son prix est annoncé
            avant réparation.
          </p>

          <p>
            <strong>Diagnostic :</strong>
            lorsqu'il débouche sur une réparation réalisée par
            Giro Trouve Tout, son montant est déduit du prix de
            l'intervention.
          </p>

          <p>
            <strong>Déplacement :</strong>
            gratuit dans un rayon de 2 km.
            Au-delà, le tarif dépend de la zone d'intervention.
          </p>
        </div>
      </div>
    </section>
  `;
}

export function initForfaits() {
  const buttons = document.querySelectorAll("[data-forfait-toggle]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.forfaitToggle;

      const content = document.querySelector(
        `[data-forfait-content="${target}"]`
      );

      if (!content) return;

      const isOpen = !content.hidden;

      content.hidden = isOpen;
      button.setAttribute("aria-expanded", String(!isOpen));

      const arrow = button.querySelector(".forfait-arrow");

      if (arrow) {
        arrow.textContent = isOpen ? "+" : "−";
      }
    });
  });
}
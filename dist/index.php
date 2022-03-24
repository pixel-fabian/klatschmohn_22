<?php get_header(); ?>
<div class="content">
  <main>
    <div class="page">
      <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <h2 class="page__title"><?php the_title(); ?></h2>
        <div class="page__content">
            <?php the_content(); ?>
        </div>
      <?php endwhile; ?>
      <?php else: ?>
        <p>Tut uns leid, es wurde kein passender Beitrag gefunden.</p>
      <?php endif; ?>
    </div>

    <section class="teaser-section">
      <article class="teaser">
        <div class="teaser__content">
          <a href="" class="teaser__link">
            <h3 class="teaser__title link--effect">
              KLATSCHMOHN 2021 – ein Rückblick
            </h3>
            <div class="teaser__text">
              <p>
                Das besondere Theaterfestival KLATSCHMOHN wurde live aus
                dem Pavillon gestreamt.
              </p>
              <p>
                Unsere Idee ist aufgegangen: Wir wollten den Kontakt zu
                den Gruppen halten, sie ermutigen, trotz und gerade wegen
                der schwierigen Umstände, aktiv zu werden, neue
                Darstellungsformen zu finden, sichtbar zu bleiben.
              </p>
              <p>
                Die einzelnen Gruppe haben uns Filme eingeschickt, die wir
                Euch zeigten, außerdem [...]
              </p>
            </div>
          </a>
          <div class="teaser__meta">
            <span
              >Kategorie:
              <a href="" class="link--effect">Rückblick</a></span
            >
          </div>
        </div>
      </article>

      <article class="teaser">
        <div class="teaser__content">
          <a href="" class="teaser__link">
            <div class="teaser__img">
              <img
                src="assets/img/Klatschmohn-2021-27-360x240.jpg"
                alt="Klatschmohn 2021"
              />
            </div>
            <h3 class="teaser__title link--effect">Klatschmohn 2021</h3>
            <div class="teaser__text">
              <p>
                Fotos vom Theaterfestival KLATSCHMOHN 2021. In diesem Jahr
                hat es als Live-Stream aus dem Kulturzentrum Pavillon
                stattgefunden!
              </p>
            </div>
          </a>
          <div class="teaser__meta">
            <span
              >Kategorie: <a href="" class="link--effect">Fotos</a></span
            >
          </div>
        </div>
      </article>

      <article class="teaser">
        <div class="teaser__content">
          <a href="" class="teaser__link">
            <div class="teaser__img">
              <img src="assets/img/programm.png" alt="Klatschmohn 2021" />
            </div>
            <h3 class="teaser__title link--effect">Programm 2021</h3>
            <div class="teaser__text">
              <p>
                Das Programm des Festivals 2021 unterschied sich von den
                vorigen Jahren:
              </p>
              <p>
                KLATSCHMOHN zu Hause, in der Schule oder bei der Arbeit
                vor dem Bildschirm oder der Leinwand, wie geht das?
              </p>
            </div>
          </a>
          <div class="teaser__meta">
            <span
              >Kategorie:
              <a class="link--effect" href="fotos.html">Programm</a></span
            >
          </div>
        </div>
      </article>

      <article class="teaser">
        <div class="teaser__content">
          <a href="" class="teaser__link">
            <h3 class="teaser__title link--effect">
              KLATSCHMOHN 2021 – ein Rückblick
            </h3>
            <div class="teaser__text">
              <p>
                Das besondere Theaterfestival KLATSCHMOHN wurde live aus
                dem Pavillon gestreamt.
              </p>
              <p>
                Unsere Idee ist aufgegangen: Wir wollten den Kontakt zu
                den Gruppen halten, sie ermutigen, trotz und gerade wegen
                der schwierigen Umstände, aktiv zu werden, neue
                Darstellungsformen zu finden, sichtbar zu bleiben.
              </p>
              <p>
                Die einzelnen Gruppe haben uns Filme eingeschickt, die wir
                Euch zeigten, außerdem [...]
              </p>
            </div>
          </a>
          <div class="teaser__meta">
            <span
              >Kategorie:
              <a href="" class="link--effect">Rückblick</a></span
            >
          </div>
        </div>
      </article>

      <article class="teaser">
        <div class="teaser__content">
          <a href="" class="teaser__link">
            <div class="teaser__img">
              <img
                src="assets/img/Klatschmohn-2021-27-360x240.jpg"
                alt="Klatschmohn 2021"
              />
            </div>
            <h3 class="teaser__title link--effect">Klatschmohn 2021</h3>
            <div class="teaser__text">
              <p>
                Fotos vom Theaterfestival KLATSCHMOHN 2021. In diesem Jahr
                hat es als Live-Stream aus dem Kulturzentrum Pavillon
                stattgefunden!
              </p>
            </div>
          </a>
          <div class="teaser__meta">
            <span
              >Kategorie: <a href="" class="link--effect">Fotos</a></span
            >
          </div>
        </div>
      </article>

      <article class="teaser">
        <div class="teaser__content">
          <a href="" class="teaser__link">
            <div class="teaser__img">
              <img src="assets/img/programm.png" alt="Klatschmohn 2021" />
            </div>
            <h3 class="teaser__title link--effect">Programm 2021</h3>
            <div class="teaser__text">
              <p>
                Das Programm des Festivals 2021 unterschied sich von den
                vorigen Jahren:
              </p>
              <p>
                KLATSCHMOHN zu Hause, in der Schule oder bei der Arbeit
                vor dem Bildschirm oder der Leinwand, wie geht das?
              </p>
            </div>
          </a>
          <div class="teaser__meta">
            <span
              >Kategorie:
              <a class="link--effect" href="fotos.html">Programm</a></span
            >
          </div>
        </div>
      </article>
    </section>
  </main>
</div>
<?php get_footer(); ?>
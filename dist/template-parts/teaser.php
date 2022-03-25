<article class="teaser">
  <div class="teaser__content">
    <a href="<?php the_permalink() ?>" class="teaser__link">
      <?php if ( has_post_thumbnail() ) { ?>
        <div class="teaser__img">
          <?php the_post_thumbnail(); ?>
        </div>
      <?php } ?>
      <h3 class="teaser__title link--effect"><?php the_title(); ?></h3>
      <div class="teaser__text">
        <?php the_excerpt(); ?>
      </div>
    </a>
    <div class="teaser__meta">
      <span
        >Kategorie: <a href="" class="link--effect"><?php get_the_category(); ?></a></span
      >
    </div>
  </div>
</article>
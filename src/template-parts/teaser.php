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
    <?php if (get_the_category($id)[0]->name != 'Uncategorized' && get_the_category($id)[0]->name != 'Aktuelles') { ?>
      <div class="teaser__meta">
        <span
          >Kategorie: <a href="<?php echo esc_url(get_category_link(get_the_category($id)[0]->term_id)) ?>" class="link--effect"><?php echo get_the_category($id)[0]->name ?></a></span
        >
      </div>
    <?php } ?>
  </div>
</article>
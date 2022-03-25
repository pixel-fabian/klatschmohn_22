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
      <?php
        $args = array(
          'numberposts' => 6,
        );
        $posts = get_posts( $args );
        foreach( $posts as $post ) :  setup_postdata($post);
          get_template_part('template-parts/teaser');
        endforeach; wp_reset_postdata();
      ?>
    </section>
  </main>
</div>
<?php get_footer(); ?>
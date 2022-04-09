<?php
/*
  Template Name: Startseite
 */
?>

<?php get_header(); ?>
  <main>
    <div class="content content--no-padding">
      <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <?php if ( has_post_thumbnail() ) { ?>
          <div class="page__img">
            <?php the_post_thumbnail('full-width'); ?>
          </div>
        <?php } ?>

        <div class="content__inner">
          <h2 class="content__title"><?php the_title(); ?></h2>
          <div class="content__text">
              <?php the_content(); ?>
          </div>
        <?php endwhile; ?>
        <?php else: ?>
          <p>Tut uns leid, es wurde kein passender Beitrag gefunden.</p>
        <?php endif; ?>
        </div>
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
<?php get_footer(); ?>
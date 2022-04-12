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
        if ( get_query_var( 'paged' ) ) {
          $paged = get_query_var( 'paged' );
        } elseif ( get_query_var( 'page' ) ) {
          $paged = get_query_var( 'page' );
        } else {
          $paged = 1;
        }
      
        $posts = new WP_Query(array(
          'posts_per_page' => 6,
          'paged' => $paged,
        ));

        while ($posts->have_posts()) : $posts->the_post();
          get_template_part('template-parts/teaser');
        endwhile;
        
      ?>
    </section>


    <div class="pagination">
      <?php
        $total_pages = $posts->max_num_pages;
        if ($total_pages > 1){

          $current_page = max(1, $paged);
  
          echo paginate_links(array(
              'base' => get_pagenum_link(1) . '%_%',
              'format' => '/page/%#%',
              'current' => $current_page,
              'total' => $total_pages,
              'prev_text'    => __('« Vorherige Seite'),
              'next_text'    => __('Nächste Seite »'),
          ));

        }
      ?>
      <?php wp_reset_postdata(); ?>
    </div>

  </main>
<?php get_footer(); ?>
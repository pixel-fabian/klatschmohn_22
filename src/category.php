<?php get_header(); ?>
  <main>
    <div class="content">
      <?php if (have_posts()) :  ?>
        <h2 class="content__title"><?php single_cat_title(); ?></h2>
        <div class="content__text">
          <?php echo category_description(); ?>
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
        $category = get_category(get_query_var('cat'))->name;
 
        $posts = new WP_Query(array(
          'category_name' => $category,
          'posts_per_page' => 9,
          'paged' => $paged,
        ));

        while ($posts->have_posts()) : $posts->the_post();
          get_template_part('template-parts/teaser');
        endwhile;
        
      ?>
    </section>

      <?php $total_pages = $posts->max_num_pages;
      if ($total_pages > 1) { ?>

      <div class="pagination">

        <?php $current_page = max(1, $paged);

        echo paginate_links(array(
            'base' => get_pagenum_link(1) . '%_%',
            'format' => '/page/%#%',
            'current' => $current_page,
            'total' => $total_pages,
            'prev_text'    => __('« Vorherige Seite'),
            'next_text'    => __('Nächste Seite »'),
        ));

      }
    ?> </div>
    <?php wp_reset_postdata(); ?>
    <?php endif; ?> 

  </main>

<?php get_footer(); ?>
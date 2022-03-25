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
        while (have_posts()) : the_post();
          get_template_part('template-parts/teaser');
        endwhile; 
      ?>   
    </section>
    <?php endif; ?>
  </main>
<?php get_footer(); ?>
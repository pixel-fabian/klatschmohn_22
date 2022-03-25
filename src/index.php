<?php get_header(); ?>
  <main>
    <div class="content">
      <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <h2 class="content__title"><?php the_title(); ?></h2>
        <div class="content__content">
            <?php the_content(); ?>
        </div>
      <?php endwhile; ?>
      <?php else: ?>
        <p>Tut uns leid, es wurde kein passender Beitrag gefunden.</p>
      <?php endif; ?>
    </div>
  </main>
<?php get_footer(); ?>
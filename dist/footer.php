      <footer>
        <div>
        <?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('footer_left') ) : ?><!-- Widgets inaktiv --><?php endif; ?>
        </div>

        <nav>
          <?php wp_nav_menu(array('theme_location' => 'nav-footer', 'container_class' => 'nav-footer')); ?>
        </nav>

        <div>
          <?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('footer_right') ) : ?><!-- Widgets inaktiv --><?php endif; ?>
        </div>
      </footer>
    </div>

    <script src="<?php bloginfo( 'template_directory' ); ?>/js/script.js" type="module"></script>
    <?php wp_footer(); ?>
  </body>
</html>

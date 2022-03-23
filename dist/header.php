<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title><?php bloginfo('name'); ?><?php wp_title(); ?></title>

    <link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_url'); ?>" />

    <!-- Favicons -->
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="<?php bloginfo( 'template_directory' ); ?>/assets/favicon/apple-icon-57x57.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="60x60"
      href="<?php bloginfo( 'template_directory' ); ?>/assets/favicon/apple-icon-60x60.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="<?php bloginfo( 'template_directory' ); ?>/assets/favicon/apple-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="<?php bloginfo( 'template_directory' ); ?>/assets/favicon/apple-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="<?php bloginfo( 'template_directory' ); ?>/assets/favicon/apple-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="<?php bloginfo( 'template_directory' ); ?>/assets/favicon/apple-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="<?php bloginfo( 'template_directory' ); ?>/assets/favicon/apple-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="<?php bloginfo( 'template_directory' ); ?>/assets/favicon/apple-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="<?php bloginfo( 'template_directory' ); ?>/assets/favicon/apple-icon-180x180.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="<?php bloginfo( 'template_directory' ); ?>/assets/favicon/android-icon-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="<?php bloginfo( 'template_directory' ); ?>/assets/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="<?php bloginfo( 'template_directory' ); ?>/assets/favicon/favicon-96x96.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="<?php bloginfo( 'template_directory' ); ?>/assets/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta
      name="msapplication-TileImage"
      content="<?php bloginfo( 'template_directory' ); ?>/assets/favicon/ms-icon-144x144.png"
    />
    <meta name="theme-color" content="#ffffff" />

    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
  <?php wp_body_open(); ?>
  
    <div class="wrapper">
      <header>
        <div class="header__top">
          <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="header__logo" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
            <img src="<?php bloginfo( 'template_directory' ); ?>/assets/img/klatschmohn_logo-ohne-unterzeile_4c_RZ.png" alt="Logo <?php bloginfo('name'); ?>" />
          </a>
          <div class="header__right">
            <h1 class="header__title"><?php bloginfo('name'); ?></h1>
            <span class="header__subtitle"
              ><?php bloginfo('description'); ?></span
            >
          </div>
        </div>
        <nav>
          <?php wp_nav_menu(array('theme_location' => 'nav-desktop', 'container_class' => 'nav-desktop')); ?>
        </nav>
      </header>
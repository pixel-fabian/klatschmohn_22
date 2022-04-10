<?php

/* Turn XMLRPC off */
add_filter( 'xmlrpc_enabled', '__return_false' );
add_filter( 'wp_headers', 'AH_remove_x_pingback' );
 function AH_remove_x_pingback( $headers )
 {
 unset( $headers['X-Pingback'] );
 return $headers;
 }

/* Register menues */
function register_my_menus() {
    register_nav_menus(
            array('nav-desktop' => __('Hauptmenü'),
                'nav-footer' => __('Footermenü'))
    );
}

add_action('init', 'register_my_menus');

/* Thumbnail-Support */
add_theme_support( 'post-thumbnails' );
set_post_thumbnail_size( 520, 350 );
add_image_size( 'full-width', 1200, 400 );

/* Excerpt Length */
function custom_excerpt_length( $length ) {
    return 30;
}
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );

/** register widgets **/
if (function_exists('register_sidebar')) {
    register_sidebar(array(
        'name' => 'Footer links',
        'id' => 'footer_left',
        'description' => 'Widget für den Footer',
        'before_widget' => '',
        'after_widget' => '',
        'before_title' => '<strong>',
        'after_title' => '</strong>'
    ));

    register_sidebar(array(
        'name' => 'Footer rechts',
        'id' => 'footer_right',
        'description' => 'Widget für den Footer',
        'before_widget' => '',
        'after_widget' => '',
        'before_title' => '<strong>',
        'after_title' => '</strong>'
    ));
}
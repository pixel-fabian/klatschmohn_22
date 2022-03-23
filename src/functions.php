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
            array('nav-desktop' => __('Desktopmenü'),
                'nav-mobile' => __('Mobilemenü'),
                'nav-footer' => __('Footermenü'))
    );
}

add_action('init', 'register_my_menus');

/* Thumbnail-Support */
add_theme_support( 'post-thumbnails' );

/* Thumbnail-Support */
function custom_excerpt_length( $length ) {
    return 30;
}
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );
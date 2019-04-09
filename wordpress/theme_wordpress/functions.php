<?php
/**
 * Constants
 */
define( 'TEMPLATEURL', get_template_directory_uri() );


function enqueue_scripts() {
  wp_enqueue_style('bootstrap', get_stylesheet_directory_uri().'/css/bootstrap.min.css');
  wp_enqueue_style('main', get_stylesheet_directory_uri().'/css/main.css?2019', array('bootstrap'));
  
  // if ( is_page( 'truc' ) ) {
  //   wp_enqueue_script( 'truc', TEMPLATEURL . '/js/truc.js', [ 'jquery' ], '1.0', false );
  // }
  wp_enqueue_script( 'project-app', TEMPLATEURL . '/js/App.js', [ 'jquery' ], '1.0', true );
  wp_enqueue_script( 'project-script', TEMPLATEURL . '/js/script.js', [ 'App' ], '1.0', true );
  
}
add_action('wp_enqueue_scripts', 'enqueue_scripts');



function google_analytics() {
  ob_start(); ?>
  
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-NUMBERRRR-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    
    function gtag() {
      dataLayer.push(arguments);
    }
    
    gtag('js', new Date());
    gtag('config', 'UA-NUMBERRRR-1');
  </script>
  
  <!-- Google Tag Manager -->
  <script>
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
      var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-NNFJKGL');
  </script>
  <!-- End Google Tag Manager -->
  <?php $html = ob_get_clean();
  echo $html;
}

// add_action('wp_head', 'google_analytics');





/**
 * Disable WordPress Admin Bar for non-Admins
 */
if ( ! current_user_can( 'manage_options' ) ) {
  add_filter( 'show_admin_bar', '__return_false' );
}


/**
 * remove WordPress menu from sidebar for non-Admins
 */

function remove_menus() {
  if( !current_user_can( 'administrator' ) ) {

        remove_menu_page( 'index.php' );                  //Dashboard
        remove_menu_page( 'edit-comments.php' );          //Comments
        remove_menu_page( 'themes.php' );                 //Appearance
        remove_menu_page( 'plugins.php' );                //Plugins
        remove_menu_page( 'tools.php' );                  //Tools
        remove_menu_page( 'options-general.php' );        //Settings
        remove_menu_page( 'users.php' );             
        remove_menu_page( 'link-manager.php' );                
        remove_menu_page( 'responsive-menu' );       
        remove_menu_page( 'smush' );       
        remove_menu_page( 'edit.php?post_type=acf-field-group' );        
  }
}

// add_action( 'admin_menu', 'remove_menus' );


  // ------------------
  // register menu
  // ------------------

// Menus
function register_my_menu() {
  register_nav_menu( 'main', __( 'Main' ) );
  register_nav_menu( 'footer', __( 'Footer' ) );  
}
add_action( 'init', 'register_my_menu' );


  // ------------------
  // custom excerpt length
  // ------------------

function custom_excerpt_length( $length ) {
  return 50;
}
add_filter( 'excerpt_length', 'custom_excerpt_length', 50 ); 

add_action('init', 'my_custom_init');

function my_custom_init() {
  add_post_type_support( 'page', 'excerpt' );}

if ( function_exists( 'add_theme_support' ) ) { 
    add_theme_support( 'post-thumbnails' );}  


  // ------------------
  // custom post type function
  // ------------------

// Our custom post type function
function create_posttype() {
 
    register_post_type( 'product',
    // CPT Options
        array(
            'labels' => array(
                'name' => __( 'Products' ),
                'singular_name' => __( 'Product' )
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'products'),
            'capability_type'      => 'post',
      'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
        )
    );
}
// Hooking up our function to theme setup
add_action( 'init', 'create_posttype' );


  // ------------------
  // gravity form
  // ------------------
add_filter( 'gform_confirmation_anchor', '__return_true' );
 
?>



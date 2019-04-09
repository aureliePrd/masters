<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
 
  <title><?php bloginfo('name'); ?> <?php wp_title(); ?></title>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

 <?php wp_head(); ?>
    
</head>

<body <?php body_class(); ?>>
    
  <!-- HEADER -->
  <header class="container-fluid">
          
      <div class="row">
        <div class="col">
          <div class="d-inline-block">
            <?php wp_nav_menu( array( 'theme_location' => 'main' ) ); ?>          
          </div>
          <div class="displaySearch d-inline-block">
            <div class='iconSearch'></div>
            <div class="form_search"><?php get_search_form(); ?></div>
          </div>
         </div>
       
      </div>

</header>   

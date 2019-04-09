<?php 
/**
* Template Name: Template contact
*
*/
get_header();
?>

<?php if (have_posts()) : ?>
<?php while (have_posts()) : the_post(); ?>

<div class="mainContent">  
    <div class="container-fluid bkgBanner" style="background-image:url(<?php the_post_thumbnail_url();?>)">
        
        <div class="container">
            <div class="row contentBanner">
                <div class="col">          
                    <h1 class="lora white"><?php the_title(); ?></h1>          
          
                </div>
            </div>
        </div>
    </div>

    <div class="container">            
        <div class="row pt-lg-5 mt-5 mb-5 pb-lg-5">
            <div class="col-lg-3 contentContactDetails">
              <?php the_field('content'); ?>             
            </div>

            <div class="col text-left pl-lg-5 pr-lg-5 ml-lg-5 mr-lg-5 form">                                        
              <p><?php the_content(); ?></p>
            </div>
        </div>

        <?php include 'modules/locations.php';?>        

    </div>
</div>
  

<?php endwhile; ?>
<?php endif; ?>

<?php get_footer(); ?>
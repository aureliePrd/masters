<?php get_header(); ?>


<div class="mainContent">  
    <div class="container-fluid bkgBanner" style="background-image:url(<?php echo TEMPLATEURL ?>/img/blog-banner.jpg)">
        <div class="container">
            <div class="row contentBanner">
                <div class="col">          
                    <h1 class="lora white"><?php single_cat_title(''); ?></h1>                              
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row mt-5 pt-md-5 pb-md-5 mb-5">
            <?php if (have_posts()) : ?>
            <?php while (have_posts()) : the_post(); ?>
            <div class="col-md-6 mb-4">
                <div class="p-5 light-grey-back fullHeight">
                    <h4>
                        <strong><?php the_title(); ?></strong>
                    </h4>
                    <p class="date">
                        <?php echo get_the_date( 'd M Y' ); ?>
                    </p>                    
                    <br />
                    <br />
                    <p>
                      <?php the_excerpt(); ?>
                    </p> 

                    <a href="<?php the_permalink();?>" class="orange mt-5">READ MORE</a>                
                </div>
            </div>
            <?php endwhile; ?>
            <?php endif; ?>
        </div>
    </div>

</div>
  

  
<?php get_footer(); ?>
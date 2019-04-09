<?php get_header(); ?>

<div class="mainContent">  
    <div class="container-fluid bkgBanner" style="background-image:url(<?php the_post_thumbnail_url();?>)">
        <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
        <div class="container">
            <div class="row contentBanner">
                <div class="col">          
                    <h1 class="lora white"><?php the_title(); ?></h1>          
               
                </div>
            </div>
        </div>
    </div>

    <!-- introduction for page About -->
    <?php if( get_field('introduction') ): ?>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center mt-5 mb-5 pt-5 pb-5 pl-md-5 pr-md-5">            
                <h2><?php the_field('introduction'); ?></h2>
            </div>
        </div>
    </div>     
    <hr>   
    <?php endif; ?>

    
    <div class="container">
        <div class="row">
            <div class="col-12 pt-5 pb-md-5">
                <?php the_content() ?>
            </div>
        </div>

        <?php endwhile; ?>
        <?php endif; ?>
    </div>    
    
</div>

<?php get_footer(); ?>
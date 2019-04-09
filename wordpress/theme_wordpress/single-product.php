<?php 

get_header(); ?>

<div class="mainContent">  
    <?php if (have_posts()) : ?>
    <?php while (have_posts()) : the_post(); ?>
        
    <div class="container product pt-lg-5 pb-5">
        <div class="row">
            <div class="col-12 col-lg-6">
                <div class="image_hover">
                    <img src="<?php the_field('featured_image')?>" alt="<?php the_title(); ?>" />				
                    <img src="<?php the_field('on_hover_image')?>" alt="<?php the_title(); ?>" class="imgHover" />
                </div>
            </div>           
            <div class="col-12 col-lg-6 pb-lg-5 pt-5 pt-lg-0">
                <h1>	        	<?php the_title(); ?></h1>
                <div class="mt-5 mb-5 description">
                    <p><strong><?php the_content();?></strong></p>
                </div>
               
					
                 <?php  if( have_rows('features') ):?>
				 	<p><strong>Features</strong></p>
               		 <hr>
              			  <ul class="mt-4 mb-4 pb-lg-3 features">
						<?php while ( have_rows('features') ) : the_row();?>
							  
							<li><?php the_sub_field('feature'); ?></li>
								  
					<?php endwhile; ?>
					       </ul>
						<?php endif; ?>
					
                <div>
                    <a class=" button" role="button" href="/contact/" title="ENQUIRE">ENQUIRE</a>
                </div>
            </div>
        </div>
    </div>

    <?php endwhile; ?>
    <?php endif; ?>    
    
</div>

<?php get_footer(); ?>
<?php get_header(); ?>

<div class="mainContent">  
    <div class="container-fluid">        
        <div class="container">
            <div class="row">
                <div class="col mt-5">          
                    <h1 class="lora">Products</h1>          
            
                </div>
            </div>
        </div>
    </div>

    <div class="container products">
        <div class="row">
			
<?php
    $loop = new WP_Query( array( 'post_type' => 'product' ) );
    if ( $loop->have_posts() ) :
        while ( $loop->have_posts() ) : $loop->the_post(); ?>
 			<div class="col-12 col-md-6 col-lg-3">     
				<a href="<?php the_permalink();?>">
					<img src="<?php the_field('featured_image');?>" class="img-fluid" />
					<div class="text-center mb-0 mb-lg-5 pb-0 pb-lg-3"><p><strong><?php the_title();?></strong></p></div>
				</a>	
            </div>
        <?php endwhile;
    endif; ?>
		
        </div>

    </div>
    
</div>

<?php get_footer(); ?>
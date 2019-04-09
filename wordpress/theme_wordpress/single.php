<?php get_header(); ?>
<?php if (have_posts()) : ?>
<?php while (have_posts()) : the_post(); ?>      

<div class="mainContent">  
    <div class="container-fluid bkgBanner" style="background-image:url(<?php the_post_thumbnail_url(); ?>)">
        <div class="container">
            <div class="row contentBanner">
                <div class="col">                    
                    <h1 class="lora white"><?php the_title(); ?></h1>                                   
                </div>                        				
            </div>
        </div>
    </div>


    <div class="container">
        <div class="row">
	        <div class="col-12 p-5">				
				<a href="#" onClick="history.back();return false;" class="goBack">
					<i class="fas fa-lg fa-long-arrow-alt-left">&nbsp;&nbsp;</i>GO BACK</a>
				<div class="sharelinks">
					<p>
						<span>SHARE THIS</span>
						<a href="#" title="Facebook">
							<img src="<?php bloginfo('stylesheet_directory'); ?>/img/facebook.png" />
						</a>
					 	<a href="#" title="Twitter">
					 		<img src="<?php bloginfo('stylesheet_directory'); ?>/img/twitter.png" />
					 	</a>
	                	<a href="#" title="Google">
	                		<img src="<?php bloginfo('stylesheet_directory'); ?>/img/google.png" />
	                	</a>
	                	<a href="#" title="Instagram">
	                		<img src="<?php bloginfo('stylesheet_directory'); ?>/img/instagram.png" />
	                	</a>
					</p>
				</div>
	        </div>   
    	</div>    	    	
    </div>

	
    <div class="container-fluid">        
	    <div class="row d-none d-lg-block">
	        <div class="col col-hr mb-5 pb-5">
	            <hr>    
	        </div>
	    </div>
	</div>

    <div class="container">
        <div class="row">
	 		<div class="col-12 pb-5">
	        	<?php the_content(); ?>
	        </div>  	
	    </div>

	    <div class="row">			
			<div class="col-6 prevArticle">				
				
				<?php previous_post_link('<i class="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp; %link'); ?>
			</div>    
			<div class="col-6 nextArticle text-right">				
				<?php next_post_link('%link &nbsp;&nbsp;<i class="fas fa-long-arrow-alt-right"></i>'); ?>
				
			</div>
		</div>
	</div>

</div>


<?php endwhile; ?>			
<?php endif; ?>


  <div class="about single" >  

    <div class="container pt-5 pb-5 pl-md-5 pr-md-5">

      
        
    

    </div>
</div>

  

  
	  
<?php get_footer(); ?>

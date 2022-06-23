<template>
    <section class="experience">
        <div class="container">
            <div class="row">
					<div class="col-md-12 text-center">
						<div class="experience-top-head">
							<h2 class="head-two">Experience</h2>
							<div class="top-head-before">
								<i class="fa fa-dot-circle-o" aria-hidden="true"></i>
							</div>
						</div>
					</div>
				</div>
            <div class="options">
                <div class="option exp-1 active" style="--optionBackground:url('../../assets/elyos.png');">
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                            <i class="fas fa-walking"></i>
                        </div>
                        <div class="info">
                            <div class="main">Elyos digital</div>
                            <div class="sub">Front end developer</div>
                        </div>
                    </div>
                </div>
                <div class="option exp-2" style="--optionBackground:url(https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg);">
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                            <i class="fas fa-snowflake"></i>
                        </div>
                        <div class="info">
                            <div class="main">Oretemauw</div>
                            <div class="sub">Omuke trughte a otufta</div>
                        </div>
                    </div>
                </div>
                <div class="option exp-3" style="--optionBackground:url(https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg);">
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                            <i class="fas fa-tree"></i>
                        </div>
                        <div class="info">
                            <div class="main">Iteresuselle</div>
                            <div class="sub">Omuke trughte a otufta</div>
                        </div>
                    </div>
                </div>
                <div class="option exp-4" style="--optionBackground:url(https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg);">
                    <div class="shadow"></div>
                    <div class="label">
                        <div class="icon">
                            <i class="fas fa-tint"></i>
                        </div>
                        <div class="info">
                            <div class="main">Idiefe</div>
                            <div class="sub">Omuke trughte a otufta</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss">
@import '@/scss/experience.scss';
@import '@/scss/global.scss';
</style>

<script>
import $ from 'jquery'

export default {
  name: "Experience-home",
    mounted () {
   $(".option").click(function(){
   $(".option").removeClass("active");
   $(this).addClass("active");
   
});

}
};
</script>

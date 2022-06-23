<template>
  <section class="service-bottom" id="aboutme">
    <!-- 
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 left">
              <div class="service-bottom-content wow fadeInUp">
                  <img src="../../assets/sofien-chm2.png" alt="">
              </div>
            </div>
          <div class="col-12 col-md-6 right" >
            <div class="process-top-head" >
                <h6 class="webmaster2-heading1">{{list.title.rendered}}</h6>
                <h3 class="webmaster2-heading1-h3"><span>{{list.acf.title}}</span></h3>
            </div>
            <p> {{list.acf.description}}</p>
            <div class="aboutme_section">
              <div><i class="fa fa-search" aria-hidden="true"></i>Lightning Fast Speed</div>
              <div><i class="fa fa-search" aria-hidden="true"></i>Easy To Navigate</div>
              <div><i class="fa fa-search" aria-hidden="true"></i>SEO Friendly</div>
            </div>
          </div>
        </div>
      </div>
    -->
    <section id="about-area" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="about-area-left about-thum-area">
                        <div class="about-img" data-aos="flip-up">
                            <img src="../../assets/profile-pic.png" alt="Resume Template">
                        </div>
                        <div class="resume-btn" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="300">
                          <button class="custom-btn btn-15">Download Resume</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="about-area-right about-content-area">
                        <div class="section-title">
                            <h2>About Me</h2>
                        </div>

                        <p>Hello! I’m Sofien cheikh mohamed. Web Developer with over 8 years of experience. Experienced with all stages of the development cycle for dynamic web projects. Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, jQuery, Angular JS. Strong background in management and leadership.</p>
                        <p>I also have full-stack developer experience with popular open-source CMS like (WordPress, Drupal, Magento, Keystone.js and others) .</p>
                        <ul class="profile-menu">
                            <li><span>Name: </span> Sofien cheikh mohamed</li>
                            <li><span>Date of birth: </span> 14 February 1986</li>
                            <li><span>Nationality: </span> Citizen Of Envato</li>
                            <li><span>Address: </span> 23 High Hope Blvd., Some City, Some Country</li>
                            <li><span>Phone: </span> (123) - 456-7890, (123) - 456-7890</li>
                            <li><span>E-Mail: </span> oliver.queen@yahoo.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </section>
</template>

<style lang="scss">
@import '@/scss/about-me.scss';
@import '@/scss/global.scss';
  
  
</style>

<script>
import axios from 'axios';

export default {
  name: "about-me",

  data(){
    return {list:undefined};
  },
  created(){
    axios.get('http://wp-admin.test/wp-json/wp/v2/pages/35').then(resp=>{
      this.list=resp.data;
      console.log(this.list)
    })
  }
};
</script>

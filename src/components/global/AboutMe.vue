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
    <section id="about-area" class="section-padding"  v-motion:initial="{opacity: 0, y: 100,}" :enter="{opacity: 1, y: 0, }">
        <div class="container">
            <div class="row">
              
                <div class="col-md-6">
                    <div class="about-area-left about-thum-area">
                        <div class="about-img" data-aos="flip-up">
                            <img src="../../assets/profile-pic.png" alt="Resume Template">
                        </div>
                        <div class="resume-btn" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="300">
                          <button class="custom-btn btn-15" onclick="window.open('Sofien-Français-CV.pdf')">Download Resume</button>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="about-area-right about-content-area">
                        <div class="section-title">
                            <h2>About Me</h2>
                        </div>
                        <p>Hello! I’m Sofien cheikh mohamed. I am a programmer with good knowledge of front-end techniques with experience of 5 years. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team</p>
                        <p>Also i have full-stack developer experience with the most popular open-source CMS (WordPress) .</p>
                        <ul class="profile-menu">
                            <li><span>Name: </span> Sofien cheikh mohamed</li>
                            <li><span>Date of birth: </span> 14 may 1991</li>
                            <li><span>Nationality: </span> Tunisia</li>
                            <li><span>Phone: </span> +21652102022</li>
                            <li><span>E-Mail: </span> cheikhmouhamedsofien@gmail.com</li>
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

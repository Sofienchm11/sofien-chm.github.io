<template>
  <section class="portfolio" id="portfolio">
			<div class="container">
				<div class="protfolio__upper">
          <div class="section-title">
              <h2>Portfolio</h2>
              <p>Examples of my latest projects build with HTML, CSS and JavaScript. My portfolio includes static websites, web applications and illustrations made with pure CSS offering an insight into my recent accomplishments.</p>
          </div>
        </div>
        <div class="portfolio__bottom">
          <div class="portfolio__bottom__filter">
            <div class="filter__heading">
              <ul>
                <li class="btn btn1 list active" data-filter="all">All</li>
                <li class="btn btn1 list" data-filter="wordpress">Wordpress</li>
                <li class="btn btn1 list" data-filter="front">Front end</li>
                <li class="btn btn1 list" data-filter="design">Design</li>
              </ul>
            </div>
          </div>
          <div class="portfolio__bottom__content">
            <ul class="content__items row" v-if="list.length">
              <li class="itemBox content__items__list col-4" data-item="wordpress" v-for="item in list" :key="item.id">
                <div class="list__img" v-if="item.acf.image.url!=null">
                  <img :src="item.acf.image.url" alt="">
                </div>
                <div class="list__overlay">
                  <div class="overlay__content">
                    <h1>{{item.title.rendered}}</h1>
                    <ul class="project-tech-list">
                      <li>Algolia</li>
                      <li>WordPress</li>
                      <li>PHP</li>
                    </ul>
                    <a :href="item.acf.link" class="anim-09">See project</a>
                  </div>
                </div>
              </li>
              <li class="itemBox content__items__list col-4" data-item="design">
                <div class="list__img"><img src="../../assets/capi.jpg" alt=""></div>
                <div class="list__overlay">
                  <div class="overlay__content">
                    <h1>title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id bibendum velit</p>
                  </div>
                </div>
              </li>
              <li class="itemBox content__items__list col-4" data-item="design">
                <div class="list__img"><img src="../../assets/capi.jpg" alt=""></div>
                <div class="list__links"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
		</section>
</template>

<style lang="scss">
@import '@/scss/portfolio.scss';
@import '@/scss/global.scss';
</style>

<script>
import axios from 'axios';


export default {
  name: "portfolio-home",

  data(){
    return {list:[]};
    
  },
  created(){
    axios.get('http://wp-admin.test/wp-json/wp/v2/portfolio').then(resp=>{
      console.log(resp);

      this.list=resp.data;
      console.log(this.list)
    })
  },
  mounted(){
    let list = document.querySelectorAll('.list');
    let itemBox = document.querySelectorAll('.itemBox');

    for(let i = 0; i<list.length; i++){
        list[i].addEventListener('click', function(){
            for(let j = 0; j<list.length; j++){
                list[j].classList.remove('active');
            }
            this.classList.add('active');

            let dataFilter = this.getAttribute('data-filter');

            for(let k = 0; k<itemBox.length; k++){
                itemBox[k].classList.remove('active');
                itemBox[k].classList.add('hide');
            
            if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
        })
    }
  }

};

</script>

<template>
  <section class="portfolio" id="portfolio">
			<div class="container">
				<div class="row" v-if="list.length">
          <ul class="portfolio" v-for="item in list" :key="item.id">
          
            <li class="project option-1">
              <div class="project-image" v-if="item.acf.image.url!=null"><img :src="item.acf.image.url"  alt="Sports Image"></div>
              <div class="project-info">
              <h2 class="project-info-title">{{item.title.rendered}}</h2>
              <a class="project-info-button" href="#" target="_blank">View Project</a>
              </div>
            </li>
          </ul>
        
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
  }

};

</script>

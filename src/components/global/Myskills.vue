<template>
    <div class="myskills" id="myskills">
        <div class="container">
            <div class="row">
                <div class="section-title">
                    <h2>My skills</h2>
                    <p>Here are a few technologies I’ve been working with recently:</p>
                </div>
                <div class="myskills__contents">
                    <div class="myskills__contents__dev wrapper ">
                        <input type="checkbox" id="folder">
                        <label class="folder" for="folder"><span class="folder-title">Apps</span></label>
                        <label class="fake-close-label" for="folder"></label>
                        <div class="folder-content">
                            <div class="app twitter">
                                <img src="../../assets/html.png" alt="">
                                <span>Html/Css</span>
                            </div>
                            <div class="app dribbble">
                                <img src="../../assets/wordpress.png" alt="">
                                <span>Wordpress</span>
                            </div>
                            <div class="app dropbox"><img src="../../assets/webpack.png" alt=""><span>Webpack</span></div>
                            <div class="app github"><img src="../../assets/javascript-48.png" alt=""><span>Javascript</span></div>
                            <div class="app codepen"><img src="../../assets/vue-js-48.png" alt=""><span>Vue js</span></div>
                            <div class="app codepen"><img src="../../assets/jquery.png" alt=""><span>jQuery</span></div>
                            <div class="app codepen"><img src="../../assets/php.png" alt=""><span>PHP</span></div>
                            <div class="app codepen"><img src="../../assets/prestashop.png" alt=""><span>Prestashop</span></div>
                            <div class="app codepen"><img src="../../assets/angular.png" alt=""><span>Angular</span></div>
                        </div>
                    </div>
                    <div class="myskills__contents__langue wrapper ">
                        <input type="checkbox" id="folder">
                        <label class="folder" for="folder"><span class="folder-title">Language</span></label>
                        <label class="fake-close-label" for="folder"></label>
                        <div class="folder-content">
                            <!--<div class="app twitter">
                                <img src="../../assets/english.png" alt="">
                                <span>English</span>
                            </div>
                            <div class="app twitter">
                                <img src="../../assets/france.png" alt="">
                                <span>Frensh</span>
                            </div>
                            <div class="app twitter">
                                <img src="../../assets/tunisia.png" alt="">
                                <span>Arabic</span>
                            </div>
                            -->
                        </div>
                    </div>
                    <div class="myskills__contents__sofware wrapper ">
                        <input type="checkbox" id="folder">
                        <label class="folder" for="folder"><span class="folder-title">Software</span></label>
                        <label class="fake-close-label" for="folder"></label>
                        <div class="folder-content">
                            <div class="app twitter"><span><font-awesome-icon icon="fab fa-skype" /></span></div>
                            <div class="app dribbble"><span><font-awesome-icon icon="fab fa-skype" /></span></div>
                            <div class="app dropbox"><i class="fa fa-dropbox"></i><span>Dropbox</span></div>
                            <div class="app github"><i class="fa fa-github"></i><span>Github</span></div>
                            <div class="app codepen"><i class="fa fa-codepen"></i><span>Codepen</span></div>
                        </div>
                    </div>
                </div>
                <!--

                <div class="myskills__content">
                    

                    <div class="myskills__content__folder">
                        <div class="folder__title">
                            HTML/CSS
                        </div>
                        <div class="folder__description">
                            I USE THESE TECHNOLOGIES TO BRING MY DESIGN TO BROWSERS
                        </div>
                        <div class="folder__footer">
                            
                        </div>
                    </div>

                    <div class="myskills__content__folder">
                        <div class="folder__title">
                            JAVASCRIPT
                        </div>
                        <div class="folder__description">
                            WITH THIS TECHNOLOGY I CREATE VISUAL EFFECTS AND INTERACTION
                        </div>
                        <div class="folder__footer">
                            
                        </div>
                    </div>

                    <div class="myskills__content__folder">
                        <div class="folder__title">
                            VUE.JS
                        </div>
                        <div class="folder__description">
                           I USE IT TO CREATE APPLICATIONS THAT HAVE A LOT OF REACTIVITY
                        </div>
                        <div class="folder__footer">
                            
                        </div>
                    </div>

                    <div class="myskills__content__folder">
                        <div class="folder__title">
                            GULP
                        </div>
                        <div class="folder__description">
                           I USE IT FOR FLEXIBLE SETUP OF THE WORKING ENVIRONMENT
                        </div>
                        <div class="folder__footer">
                            
                        </div>
                    </div>

                    <div class="myskills__content__folder">
                        <div class="folder__title">
                            WEBPACK
                        </div>
                        <div class="folder__description">
                           I USE IT FOR THE SAME AS GULP :)
                        </div>
                        <div class="folder__footer">
                            
                        </div>
                    </div>

                    <div class="myskills__content__folder">
                        <div class="folder__title">
                            WORDPRESS
                        </div>
                        <div class="folder__description">
                           CONTENT MANAGEMENT SYSTEM. I USE IT TO MANAGE CONTENT
                        </div>
                        <div class="folder__footer">
                            
                        </div>
                    </div>

                    <div class="myskills__content__folder">
                        <div class="folder__title">
                            VUE.JS
                        </div>
                        <div class="folder__description">
                           I USE IT TO CREATE APPLICATIONS THAT HAVE A LOT OF REACTIVITY
                        </div>
                        <div class="folder__footer">
                            
                        </div>
                    </div>

                    <div class="myskills__content__folder">
                        <div class="folder__title">
                            VUE.JS
                        </div>
                        <div class="folder__description">
                           I USE IT TO CREATE APPLICATIONS THAT HAVE A LOT OF REACTIVITY
                        </div>
                        <div class="folder__footer">
                            
                        </div>
                    </div>
                    
                </div>
                -->
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/scss/skills.scss';
@import '@/scss/global.scss';
  
  
</style>

<script>

export default {
  name: "my-skills",
};
</script>

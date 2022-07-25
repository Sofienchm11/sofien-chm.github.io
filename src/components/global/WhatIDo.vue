<template>
    <section class="whatido" id="whatido">
        <div class="process-bottom" >
			<div class="container">
                <h2 class="head-two">What i do</h2>
                <p>I can help you with all the sides of your project:</p>
                <ul class="projects-grid">
                    <li class="projects__StyledProject" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <div class="project-inner">
                            <header>
                                <div class="project-top">
                                    <div class="folder">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                    </div>
                                </div>
                                <h3 class="project-title">
                                    <a href="#" target="_blank" rel="noopener noreferrer">Front-end develoeper</a>
                                </h3>
                                <div class="project-description">
                                    <p>Full integration of front-end development using framework like Vue js and Angular or tools like Webpack with features like automatic code reload, code minifications, multiple environments support</p>
                                </div>
                            </header>
                            <footer>
                                <ul class="project-tech-list">
                                    <li>Html/css</li>
                                    <li>Javascript</li>
                                    <li>Vue js</li>
                                    <li>Angular js</li>
                                </ul>
                            </footer>
                        </div>
                    </li>
                    <li class="projects__StyledProject" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                        <div class="project-inner">
                            <header>
                                <div class="project-top">
                                    <div class="folder">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                    </div>
                                </div>
                                <h3 class="project-title">
                                    <a href="#" target="_blank" rel="noopener noreferrer">Full stack</a>
                                </h3>
                                <div class="project-description">
                                    <p>With strong experience with wordpress i can implement approved designs into WordPress templates with custom functions</p>
                                </div>
                            </header>
                            <footer>
                                <ul class="project-tech-list">
                                    <li>WordPress</li>
                                    <li>PHP</li>
                                    <li>javascript</li>
                                    <li>html/css</li>
                                </ul>
                            </footer>
                        </div>
                    </li>
                    <li class="projects__StyledProject" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="4000">
                        <div class="project-inner">
                            <header>
                                <div class="project-top">
                                    <div class="folder">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                    </div>
                                </div>
                                <h3 class="project-title">
                                    <a href="#" target="_blank" rel="noopener noreferrer">Designer</a>
                                </h3>
                                <div class="project-description">
                                    <p>With good sense of design and UX i can design or edit your website to be as easy to use as possible while guiding users towards the end goal.</p>
                                </div>
                            </header>
                            <footer>
                                <ul class="project-tech-list">
                                    <li>Figma</li>
                                    <li>Adobe XD</li>
                                    <li>Illustrator</li>
                                </ul>
                            </footer>
                        </div>
                    </li>
                </ul>
            </div>
		</div>
    </section>
</template>

<style lang="scss">
@import '@/scss/whatido.scss';
@import '@/scss/global.scss';
</style>

<script>


export default {
  name: "what-ido",
};

</script>
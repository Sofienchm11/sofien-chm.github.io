!<template>
  <div id="menu" class="menu">
    <header class="nav__StyledHeader">
        <nav class="nav__StyledNav">
            <div class="logo fade-enter-done" tabindex="-1">
                <a href="#"><img src="../../assets/sofien-chm_logo.png" alt=""></a>
            </div>
            <div class="nav__StyledLinks">
                <ol>
                    <li data-aos="fade-down" data-aos-easing="linear" data-aos-duration="300">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400">
                        <router-link to="/about">About Me</router-link>
                    </li>
                    <li data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
                        <router-link to="/portfolio">Portfolio</router-link>
                    </li>
                    <li data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">
                        <router-link to="/whatido">What i do</router-link>
                    </li>
                    <li data-aos="fade-down" data-aos-easing="linear" data-aos-duration="700">
                        <router-link to="/experience">Experience</router-link>
                    </li>
                    <li data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800">
                        <router-link to="/contact">Contact</router-link>
                    </li>
                </ol>
            <div class="fadedown-enter-done resume" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="900">
                <a class="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
            </div>
            <div class="menu__StyledMenu fade-enter-done"><div>
                <button aria-label="Menu" class="menu__StyledHamburgerButton">
                    <div class="ham-box">
                        <div class="ham-box-inner"></div>
                    </div>
                </button>
                <aside aria-hidden="true" tabindex="-1" class="menu__StyledSidebar">
                    <nav>
                        <ol>
                            <li>
                                <a href="/#about">About</a></li><li><a href="/#jobs">Experience</a>
                            </li>
                            <li>
                                <a href="/#projects">Work</a>
                            </li>
                            <li>
                                <a href="/#contact">Contact</a>
                            </li>
                        </ol>
                            <a href="/resume.pdf" class="resume-link">Resume</a>
                    </nav>
                </aside>
            </div>
        </div>
        </nav>
    </header>
  </div>
</template>

<script>
export default {
    name: "menu-home",
}
</script>

<style lang="scss">

    @import '@/scss/menu.scss';
    @import '@/scss/global.scss';
</style>
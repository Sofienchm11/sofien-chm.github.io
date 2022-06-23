!<template>
  <div id="menu" class="menu">
    <header class="nav__StyledHeader">
        <nav class="nav__StyledNav">
            <div class="logo fade-enter-done" tabindex="-1">
                <a href="/" aria-label="home"><svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96"><title>Logo</title><g transform="translate(-8.000000, -2.000000)"><g transform="translate(11.000000, 5.000000)"><path d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z" fill="currentColor"></path><polygon id="Shape" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="39 0 0 22 0 67 39 90 78 68 78 23"></polygon></g></g></svg></a>
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
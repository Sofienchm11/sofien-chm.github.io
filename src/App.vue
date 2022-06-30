<template>
  <div id="app">
    <header class="nav__StyledHeader">
      <nav class="nav__StyledNav">
        <div class="logo fade-enter-done" tabindex="-1">
          <img src="assets/schm.png" alt="Resume Template">
        </div>
        <div class="nav__StyledLinks">
          <ol>
            <li class="fadedown-enter-done" style="transition-delay: 0ms;">
              <router-link to="/">Home</router-link>
            </li>
            <li class="fadedown-enter-done" style="transition-delay: 100ms;">
              <router-link to="/about">About Me</router-link> 
            </li>
            <li class="fadedown-enter-done" style="transition-delay: 200ms;">
              <router-link to="/portfolio">Portfolio</router-link> 
            </li>
            <li class="fadedown-enter-done" style="transition-delay: 200ms;">
              <router-link to="/whatido">What i do</router-link>
            </li>
            <li class="fadedown-enter-done" style="transition-delay: 200ms;">
              <router-link to="/experience">Experience</router-link>
            </li>
            <li class="fadedown-enter-done" style="transition-delay: 200ms;">
              <router-link to="/contact">Contact</router-link>
            </li>
            <li class="fadedown-enter-done" style="transition-delay: 300ms;">
            <a href="/#contact">Contact</a></li></ol><div class="fadedown-enter-done" style="transition-delay: 400ms;">
            <a class="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
            </div>
            <div class="menu__StyledMenu fade-enter-done">
              <div>
                <button aria-label="Menu" class="menu__StyledHamburgerButton-sdn9y6-1 eCxtrN">
                  <div class="ham-box"><div class="ham-box-inner"></div>
                  </div>
                  </button>
                  <aside aria-hidden="true" tabindex="-1" class="menu__StyledSidebar-sdn9y6-2 dKogfI">
                    <nav>
                      <ol>
                        <li>
                          <router-link to="/">Home</router-link>
                        </li>
                        <li>
                          <router-link to="/about">About Me</router-link> 
                        </li>
                        <li>
                          <router-link to="/portfolio">Portfolio</router-link> 
                        </li>
                        <li>
                          <router-link to="/whatido">What i do</router-link>
                        </li>
                          <li>
                            <router-link to="/experience">Experience</router-link>
                        </li>
                          <li>
                            <router-link to="/contact">Contact</router-link>
                        </li>
                        </ol>
                          <a href="/resume.pdf" class="resume-link">Resume</a>
                      </nav>
                    </aside>
                  </div>
                </div>
      </nav>
    </header>

    <router-view />
  </div>
</template>


<style lang="scss">

</style>

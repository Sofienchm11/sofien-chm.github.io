

<template>
    <div class="banner" id="banner">
        <div class="container">
            <div class="row">
                <pre class="code-block">
                    <code class="code"><span class="code-line">{</span>
                        <span class="code-line"><span class="code-space">  </span><span class="code-hidden">"</span><span class="code-key">name</span><span class="code-hidden">"</span>: "<span class="code-value" itemprop="name">Sofien cheikh mohamed</span>",</span>
                        <span class="code-line"><span class="code-space">  </span><span class="code-hidden">"</span><span class="code-key">job</span><span class="code-hidden">"</span>:&nbsp;<span class="code-indent"> </span>"<span class="code-value" itemprop="jobTitle">Développeur front-end & Wordpress developer</span>",</span>
                        <span class="code-line"> </span>
                        <span class="code-line"><span class="code-space">  </span><span class="code-hidden">"</span><span class="code-key">email</span><span class="code-hidden">"</span>: <span class="code-indent">&nbsp;&nbsp; </span>"<a href="mailto:cheikhmouhamedsofien@gmail.com" class="code-link" itemprop="email">cheikhmouhamedsofien@gmail.com</a>",</span>
                        <span class="code-line"><span class="code-space">  </span><span class="code-hidden">"</span><span class="code-key">location</span><span class="code-hidden">"</span>: "<span class="code-value" itemprop="workLocation" itemscope="" itemtype="http://schema.org/Place"><span itemprop="name">Happy Hours</span>, <span itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress"><span itemprop="streetAddress">2 rue Victor Hugo</span>, <span itemprop="postalCode">35000</span> <span itemprop="addressLocality">Rennes</span></span><meta itemprop="description" content="Happy Hours est une association d’entrepreneurs qui propose un espace de coworking en plein centre-ville de Rennes"></span>",</span>
                        <span class="code-line"> </span>
                        <span class="code-line"><span class="code-space">  </span><span class="code-hidden">"</span><span class="code-key">experience</span><span class="code-hidden">"</span>: {</span>
                        <span class="code-line"><span class="code-space">    </span>"<span class="code-key-alt">2017</span>-<span class="code-key-alt">20??</span>": "<span class="code-value">Développeur front-end & Wordpress developer </span>",</span>
                        <span class="code-line"><span class="code-space">    </span>"<span class="code-key-alt">2016</span>-<span class="code-key-alt">2017</span>": "<span class="code-value">Responsable front-end</span> @ <span class="code-value">Lunaweb</span>",</span>
                        <span class="code-line"><span class="code-space">    </span>"<span class="code-key-alt">2012</span>-<span class="code-key-alt">2016</span>": "<span class="code-value">Développeur front-end</span> @ <span class="code-value">Lunaweb</span>",</span>
                        <span class="code-line"><span class="code-space">    </span>"<span class="code-key-alt">2007</span>-<span class="code-key-alt">2012</span>": "<span class="code-value">Développeur full-stack</span> @ <span class="code-value">Yellowcake</span>"</span>
                        <span class="code-line"><span class="code-space">  </span>},</span>
                        <span class="code-line"> </span>
                        <span class="code-line"><span class="code-space">  </span><span class="code-hidden">"</span><span class="code-key">skills</span><span class="code-hidden">"</span>: ["<span class="code-value">HTML</span>", "<span class="code-value">CSS</span>", "<span class="code-value">JavaScript</span>"<span id="more-toggle">, "…"</span><span id="more-content" hidden="">, "<span class="code-value">React</span>", "<span class="code-value">Vue</span>", "<span class="code-value">Next.js</span>", "<span class="code-value">Nuxt.js</span>"</span>],</span>

                        <span class="code-line"><span class="code-space">  </span><span class="code-hidden">"</span><span class="code-key">links</span><span class="code-hidden">"</span>: {</span>
                        <span class="code-line"><span class="code-space">    </span>"<span class="code-key-alt">website</span>": "<a href="https://site.com/" target="_blank" rel="noopener" class="code-link" itemprop="url">site.com</a>",</span>
                        <span class="code-line"><span class="code-space">    </span>"<span class="code-key-alt">github</span>": <span class="code-indent"> </span>"<a href="https://github.com/" target="_blank" rel="noopener" class="code-link" itemprop="sameAs">github.com/</a>",</span>
                        <span class="code-line"><span class="code-space">    </span>"<span class="code-key-alt">codepen</span>": "<a href="https://codepen.io/" target="_blank" rel="noopener" class="code-link" itemprop="sameAs">codepen.io/</a>",</span>
                        <span class="code-line"><span class="code-space">    </span>"<span class="code-key-alt">linkedin</span>": "<a href="https://linkedin.com/" target="_blank" rel="noopener" class="code-link" itemprop="sameAs">linkedin.com/</a>"</span>
                        <span class="code-line"><span class="code-space">  </span>}</span>
                        <span class="code-line">}</span>
                    </code>
                </pre>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/scss/banner.scss';
@import '@/scss/global.scss';
  
  
</style>

<script>

export default{
    name: "banner-home",
}
</script>
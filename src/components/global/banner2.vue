

<template>
    <div class="banner_2" id="banner_2">
        <div class="container">
            <div class="row">
                <div class="banner_terminal">
                    <div class="terminal-window">
                        <header>
                            <div class="button green"></div>
                            <div class="button yellow"></div>
                            <div class="button red"></div>
                        </header>
                        <div class="terminal">
                            <span class="dollar"></span> hi there, i'm Sofien
                            <br/>
                            <span class="dollar"></span> a web developer
                            <br/>
                            <span class="dollar"></span> based in uk
                            <br/>
                            <span class="dollar"></span> i drink a lot of tea
                            <br/>
                            <span class="dollar"></span> and build beautiful websites
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/scss/banner2.scss';
@import '@/scss/global.scss';
  
  
</style>

<script>
import $ from 'jquery'
export default{
    name: "banner-2",
    mounted () {
        // Typewriter.js
        // https://github.com/ronv/Typewriter.js

        $.fn.typewriter = function() {
        this.each(function() {
            var c = $(this),
            b = c.html(),
            a = 0,
            d = 0;
            c.html("");
            var e = function() {
            if ("<" == b.substring(a, a + 1)) {
                var f = new RegExp(/<span class="instant"/),
                g = new RegExp(/<span class="clear"/);
                if (b.substring(a, b.length).match(f)) a += b.substring(a, b.length).indexOf("</span>") + 7;
                else if (b.substring(a, b.length).match(g)) d = a, a += b.substring(a, b.length).indexOf("</span>") + 7;
                else
                for (;
                    ">" != b.substring(a, a + 1);) a++
            }
            c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
            a >= b.length || setTimeout(e, 70 + 100 *
                Math.random())
            };
            e()
        });
        return this
        };
        $(".terminal").typewriter();

        $(".button.red").click(function(){
            $(".banner_terminal").addClass("close");
        });
    }
    
}
</script>
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { innerHTML: '(function(c,f){var r=c.document;var b=r.documentElement;var m=r.querySelector("meta[name="viewport"]");var n=r.querySelector("meta[name="flexible"]");var a=0;var q=0;var l;var d=f.flexible||(f.flexible={});if(m){var e=m.getAttribute("content").match(/initial\-scale=([\d\.]+)/);if(e){q=parseFloat(e[1]);a=parseInt(1/q)}}else{if(n){var j=n.getAttribute("content");if(j){var p=j.match(/initial\-dpr=([\d\.]+)/);var h=j.match(/maximum\-dpr=([\d\.]+)/);if(p){a=parseFloat(p[1]);q=parseFloat((1/a).toFixed(2))}if(h){a=parseFloat(h[1]);q=parseFloat((1/a).toFixed(2))}}}}if(!a&&!q){var o=c.navigator.appVersion.match(/iphone/gi);var k=c.devicePixelRatio;if(o){if(k>=3&&(!a||a>=3)){a=3}else{if(k>=2&&(!a||a>=2)){a=2}else{a=1}}}else{a=k}q=1/a}b.setAttribute("data-dpr",a);if(!m){m=r.createElement("meta");m.setAttribute("name","viewport");m.setAttribute("content","initial-scale="+q+", maximum-scale="+q+", minimum-scale="+q+", user-scalable=no , shrink-to-fit=no");if(b.firstElementChild){b.firstElementChild.appendChild(m)}else{var g=r.createElement("div");g.appendChild(m);r.write(g.innerHTML)}}function i(){var s=b.getBoundingClientRect().width;if(s/a>540){s=540*a}var t=s/10;b.style.fontSize=t+"px";d.rem=c.rem=t}c.addEventListener("resize",function(){clearTimeout(l);l=setTimeout(i,300)},false);c.addEventListener("pageshow",function(s){if(s.persisted){clearTimeout(l);l=setTimeout(i,300)}},false);if(r.readyState==="complete"){r.body.style.fontSize=14*a+"px"}else{r.addEventListener("DOMContentLoaded",function(s){r.body.style.fontSize=14*a+"px"},false)}i();d.dpr=c.dpr=a;d.refreshRem=i;d.rem2px=function(t){var s=parseFloat(t)*this.rem;if(typeof t==="string"&&t.match(/rem$/)){s+="px"}return s};d.px2rem=function(t){var s=parseFloat(t)/this.rem;if(typeof t==="string"&&t.match(/px$/)){s+="rem"}return s}})(window,window.lib||(window.lib={}))', type: 'javascript' }
    ]
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  css: [
    // 项目中的 less 文件
    { src: '~assets/stylesheets/common/reset.less', lang: 'less' }, // 指定 less 而非 sass
    { src: '~assets/stylesheets/common/basis.less', lang: 'less' },
    { src: '~assets/stylesheets/common/flex.less', lang: 'less' }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  cache: {
    max: 1000,     // 缓存组件的最大数目，当第 1001 个组件被添加至缓存中时， 第一个被缓存的组件会从缓存中移除
    maxAge: 30000  // 缓存时间，单位毫秒，缓存30秒
  },
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

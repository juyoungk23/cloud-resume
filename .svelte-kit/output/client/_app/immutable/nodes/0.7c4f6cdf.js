import{s as d,c as h,u as m,g,d as w}from"../chunks/scheduler.63274e7e.js";import{S as $,i as y,g as _,s as b,h as v,x as C,c as E,j as H,f as r,k as p,a as u,d as L,t as T}from"../chunks/index.71095f26.js";function j(o){let s,c='<a href="/" class="svelte-12aw1ol">Home</a> <a href="/experience" class="svelte-12aw1ol">Experience</a> <a href="/certifications" class="svelte-12aw1ol">Certifications</a> <a href="/education" class="svelte-12aw1ol">Education</a> <a href="/blog" class="svelte-12aw1ol">Blog</a> <a href="/about" class="svelte-12aw1ol">About This Project</a>',i,a,l;const f=o[1].default,t=h(f,o,o[0],null);return{c(){s=_("nav"),s.innerHTML=c,i=b(),a=_("div"),t&&t.c(),this.h()},l(e){s=v(e,"NAV",{class:!0,"data-svelte-h":!0}),C(s)!=="svelte-ut8drx"&&(s.innerHTML=c),i=E(e),a=v(e,"DIV",{class:!0});var n=H(a);t&&t.l(n),n.forEach(r),this.h()},h(){p(s,"class","p-5 bg-slate-500 sticky-nav svelte-12aw1ol"),p(a,"class","content-container svelte-12aw1ol")},m(e,n){u(e,s,n),u(e,i,n),u(e,a,n),t&&t.m(a,null),l=!0},p(e,[n]){t&&t.p&&(!l||n&1)&&m(t,f,e,e[0],l?w(f,e[0],n,null):g(e[0]),null)},i(e){l||(L(t,e),l=!0)},o(e){T(t,e),l=!1},d(e){e&&(r(s),r(i),r(a)),t&&t.d(e)}}}function k(o,s,c){let{$$slots:i={},$$scope:a}=s;return o.$$set=l=>{"$$scope"in l&&c(0,a=l.$$scope)},[a,i]}class M extends ${constructor(s){super(),y(this,s,k,j,d,{})}}export{M as component};
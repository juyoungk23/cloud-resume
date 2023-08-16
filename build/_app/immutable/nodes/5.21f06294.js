import{s as Q,n as j,f as S}from"../chunks/scheduler.63274e7e.js";import{S as W,i as X,g as u,s as w,h as f,x as $,c as C,j as v,f as m,k as h,a as A,z as B,m as k,n as y,y as n}from"../chunks/index.71095f26.js";import{e as V}from"../chunks/each.e59479a4.js";function q(r,a,o){const b=r.slice();return b[1]=a[o],b}function M(r){let a,o,b,c,s,l,e=r[1].name+"",i,t,d,E,L=r[1].date+"",D,H,p,I,P;return{c(){a=u("div"),o=u("img"),c=w(),s=u("div"),l=u("h5"),i=k(e),t=w(),d=u("h6"),E=k("Date Obtained: "),D=k(L),H=w(),p=u("a"),I=k("Certification Link"),P=w(),this.h()},l(x){a=f(x,"DIV",{class:!0});var g=v(a);o=f(g,"IMG",{src:!0,alt:!0,class:!0}),c=C(g),s=f(g,"DIV",{});var _=v(s);l=f(_,"H5",{class:!0});var O=v(l);i=y(O,e),O.forEach(m),t=C(_),d=f(_,"H6",{class:!0});var G=v(d);E=y(G,"Date Obtained: "),D=y(G,L),G.forEach(m),H=C(_),p=f(_,"A",{href:!0,class:!0});var z=v(p);I=y(z,"Certification Link"),z.forEach(m),_.forEach(m),P=C(g),g.forEach(m),this.h()},h(){S(o.src,b=r[1].image)||h(o,"src",b),h(o,"alt",r[1].name),h(o,"class","w-24 h-24 object-cover mr-4"),h(l,"class","text-2xl font-semibold"),h(d,"class","text-xl text-gray-600 mb-2"),h(p,"href",r[1].link),h(p,"class","text-blue-500 underline hover:text-blue-700"),h(a,"class","flex bg-white shadow-2xl rounded p-6 mb-4")},m(x,g){A(x,a,g),n(a,o),n(a,c),n(a,s),n(s,l),n(l,i),n(s,t),n(s,d),n(d,E),n(d,D),n(s,H),n(s,p),n(p,I),n(a,P)},p:j,d(x){x&&m(a)}}}function T(r){let a,o="Certifications",b,c,s=V(r[0]),l=[];for(let e=0;e<s.length;e+=1)l[e]=M(q(r,s,e));return{c(){a=u("h1"),a.textContent=o,b=w(),c=u("div");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){a=f(e,"H1",{class:!0,"data-svelte-h":!0}),$(a)!=="svelte-r1ajj8"&&(a.textContent=o),b=C(e),c=f(e,"DIV",{class:!0});var i=v(c);for(let t=0;t<l.length;t+=1)l[t].l(i);i.forEach(m),this.h()},h(){h(a,"class","text-3xl text-center my-10"),h(c,"class","container mx-auto")},m(e,i){A(e,a,i),A(e,b,i),A(e,c,i);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(c,null)},p(e,[i]){if(i&1){s=V(e[0]);let t;for(t=0;t<s.length;t+=1){const d=q(e,s,t);l[t]?l[t].p(d,i):(l[t]=M(d),l[t].c(),l[t].m(c,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=s.length}},i:j,o:j,d(e){e&&(m(a),m(b),m(c)),B(l,e)}}}function Z(r){return[[{name:"Google Cloud Platform Associate Cloud Engineer",date:"2021-01-01",link:"https://www.credential.net/0b1b1d1e-5b7a-4b7e-9b1a-5b8b1b1b1b1b",image:"https://k21academy.com/wp-content/uploads/2020/12/GCP-ACE.png"},{name:"Google Cloud Platform Cloud Architect",date:"2021-01-01",link:"https://www.credential.net/0b1b1d1e-5b7a-4b7e-9b1a-5b8b1b1b1b1b",image:"https://passyourcert.net/wp-content/uploads/2021/12/badge-gcp-professional-cloud-architect.png"},{name:"Google Cloud Platform Digital Leader",date:"2021-01-01",link:"https://www.credential.net/0b1b1d1e-5b7a-4b7e-9b1a-5b8b1b1b1b1b",image:"https://blogs.sap.com/wp-content/uploads/2021/09/clouddigitalleader.png"},{name:"Microsoft AZ-900",date:"2021-01-01",link:"https://www.credential.net/0b1b1d1e-5b7a-4b7e-9b1a-5b8b1b1b1b1b",image:"https://miro.medium.com/v2/resize:fit:600/0*1CAzxuyWO_3vQ8sI.png"},{name:"Linux Certification",date:"2021-01-01",link:"https://www.credential.net/0b1b1d1e-5b7a-4b7e-9b1a-5b8b1b1b1b1b",image:"https://th.bing.com/th/id/OIP.HxHTACo3hWQ6XXB-7pix-AHaHa?pid=ImgDet&rs=1"}]]}class N extends W{constructor(a){super(),X(this,a,Z,T,Q,{})}}export{N as component};

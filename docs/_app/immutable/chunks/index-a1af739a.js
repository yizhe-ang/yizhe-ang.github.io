<<<<<<< HEAD:docs/_app/immutable/chunks/index-dcf377fe.js
<<<<<<< HEAD:docs/_app/chunks/index-fd648757.js
import{E as b,s as y,F as m,G as q,H as w}from"./index-fb7d380c.js";const o=[];function z(n,i){return{subscribe:A(n,i).subscribe}}function A(n,i=b){let u;const t=new Set;function f(e){if(y(n,e)&&(n=e,u)){const r=!o.length;for(const s of t)s[1](),o.push(s,n);if(r){for(let s=0;s<o.length;s+=2)o[s][0](o[s+1]);o.length=0}}}function l(e){f(e(n))}function a(e,r=b){const s=[e,r];return t.add(s),t.size===1&&(u=i(f)||b),e(n),()=>{t.delete(s),t.size===0&&(u(),u=null)}}return{set:f,update:l,subscribe:a}}function E(n,i,u){const t=!Array.isArray(n),f=t?[n]:n,l=i.length<2;return z(u,a=>{let e=!1;const r=[];let s=0,d=b;const g=()=>{if(s)return;d();const c=i(t?r[0]:r,a);l?a(c):d=w(c)?c:b},_=f.map((c,p)=>m(c,h=>{r[p]=h,s&=~(1<<p),e&&g()},()=>{s|=1<<p}));return e=!0,g(),function(){q(_),d()}})}export{E as d,A as w};
=======
import{s as y,E as b,F as m,G as q,H as w}from"./index-bf4467d3.js";const o=[];function z(n,i){return{subscribe:A(n,i).subscribe}}function A(n,i=b){let u;const t=new Set;function f(e){if(y(n,e)&&(n=e,u)){const r=!o.length;for(const s of t)s[1](),o.push(s,n);if(r){for(let s=0;s<o.length;s+=2)o[s][0](o[s+1]);o.length=0}}}function l(e){f(e(n))}function a(e,r=b){const s=[e,r];return t.add(s),t.size===1&&(u=i(f)||b),e(n),()=>{t.delete(s),t.size===0&&(u(),u=null)}}return{set:f,update:l,subscribe:a}}function E(n,i,u){const t=!Array.isArray(n),f=t?[n]:n,l=i.length<2;return z(u,a=>{let e=!1;const r=[];let s=0,d=b;const g=()=>{if(s)return;d();const c=i(t?r[0]:r,a);l?a(c):d=w(c)?c:b},_=f.map((c,p)=>m(c,h=>{r[p]=h,s&=~(1<<p),e&&g()},()=>{s|=1<<p}));return e=!0,g(),function(){q(_),d()}})}export{E as d,A as w};
>>>>>>> f7fc6691b00f4fa39ab18f11338137cb9161dd60:docs/_app/immutable/chunks/index-dcf377fe.js
=======
import{E as b,s as y,F as m,G as q,H as w}from"./index-28d08bf6.js";const o=[];function z(n,i){return{subscribe:A(n,i).subscribe}}function A(n,i=b){let u;const t=new Set;function f(e){if(y(n,e)&&(n=e,u)){const r=!o.length;for(const s of t)s[1](),o.push(s,n);if(r){for(let s=0;s<o.length;s+=2)o[s][0](o[s+1]);o.length=0}}}function l(e){f(e(n))}function a(e,r=b){const s=[e,r];return t.add(s),t.size===1&&(u=i(f)||b),e(n),()=>{t.delete(s),t.size===0&&(u(),u=null)}}return{set:f,update:l,subscribe:a}}function E(n,i,u){const t=!Array.isArray(n),f=t?[n]:n,l=i.length<2;return z(u,a=>{let e=!1;const r=[];let s=0,d=b;const g=()=>{if(s)return;d();const c=i(t?r[0]:r,a);l?a(c):d=w(c)?c:b},_=f.map((c,p)=>m(c,h=>{r[p]=h,s&=~(1<<p),e&&g()},()=>{s|=1<<p}));return e=!0,g(),function(){q(_),d()}})}export{E as d,A as w};
>>>>>>> 9f64734bc3d8a8f769df0b468188d7ba5762b883:docs/_app/immutable/chunks/index-a1af739a.js

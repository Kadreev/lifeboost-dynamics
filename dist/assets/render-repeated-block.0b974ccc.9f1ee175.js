import{d as r,f as n,_ as c,r as a,o as p,c as l}from"./index.239e74bc.js";const s=()=>c(()=>import("./render-block.3110fec0.49e3bbe7.js"),["assets/render-block.3110fec0.49e3bbe7.js","assets/index.239e74bc.js","assets/index.c16bd851.css","assets/get-processed-block.77923ee6.3b3e7d3f.js"]).then(e=>e.default).catch(e=>{throw console.error("Error while attempting to dynamically import component RenderBlock at ./render-block.vue",e),e}),d={name:"render-repeated-block",components:{"render-block":r(s)},props:["block","repeatContext"],provide(){const e=this;return{BuilderContext:{get content(){return e.repeatContext.content},get state(){return e.repeatContext.state},get context(){return e.repeatContext.context},get apiKey(){return e.repeatContext.apiKey},get registeredComponents(){return e.repeatContext.registeredComponents}}}}};function i(e,m,t,u,x,C){const o=a("render-block");return p(),l(o,{block:t.block,context:t.repeatContext},null,8,["block","context"])}const b=n(d,[["render",i]]);export{b as default};
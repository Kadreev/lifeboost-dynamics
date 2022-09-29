import{d as a,U as c,f as d,_ as m,o as u,c as p,a as $,r as f}from"./index.js";import{g as h}from"./get-processed-block.77923ee6.js";const k={small:{min:320,default:321,max:640},medium:{min:641,default:642,max:991},large:{min:990,default:991,max:1200}},l=e=>`@media (max-width: ${k[e].max}px)`,x=e=>e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),n=e=>Object.entries(e).map(([o,t])=>{if(typeof t=="string")return`${x(o)}: ${t};`}).join(`
`),y=()=>m(()=>import("./render-inlined-styles.0b1e087d.js"),["render-inlined-styles.0b1e087d.js","index.js"]).then(e=>e.default).catch(e=>{throw console.error("Error while attempting to dynamically import component RenderInlinedStyles at ../render-inlined-styles.vue",e),e}),v={name:"block-styles",components:{"render-inlined-styles":a(y)},props:["block","context"],data:()=>({TARGET:c}),computed:{useBlock(){return h({block:this.block,state:this.context.state,context:this.context.context,shouldEvaluateBindings:!0})},css(){const e=this.useBlock.responsiveStyles,o=e==null?void 0:e.large,t=e==null?void 0:e.medium,s=e==null?void 0:e.small;return`
      ${o?`.${this.useBlock.id} {${n(o)}}`:""}
      ${t?`${l("medium")} {
            .${this.useBlock.id} {${n(t)}}
          }`:""}
      ${s?`${l("small")} {
            .${this.useBlock.id} {${n(s)}}
          }`:""}
    }`}}};function T(e,o,t,s,A,i){const r=f("render-inlined-styles");return e.TARGET==="vue2"||e.TARGET==="vue3"||e.TARGET==="svelte"||e.TARGET==="qwik"?(u(),p(r,{key:0,styles:i.css},null,8,["styles"])):$("",!0)}const _=d(v,[["render",T]]);export{_ as default};

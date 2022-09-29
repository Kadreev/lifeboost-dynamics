import{U as a,f as m,_ as c}from"./index.js";import{defineAsyncComponent as d,resolveComponent as u,openBlock as p,createBlock as $,createCommentVNode as f}from"vue";import{g as h}from"./get-processed-block.77923ee6.js";const k={small:{min:320,default:321,max:640},medium:{min:641,default:642,max:991},large:{min:990,default:991,max:1200}},l=e=>`@media (max-width: ${k[e].max}px)`,x=e=>e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),s=e=>Object.entries(e).map(([o,t])=>{if(typeof t=="string")return`${x(o)}: ${t};`}).join(`
`),y=()=>c(()=>import("./render-inlined-styles.0b1e087d.js"),["render-inlined-styles.0b1e087d.js","index.js"]).then(e=>e.default).catch(e=>{throw console.error("Error while attempting to dynamically import component RenderInlinedStyles at ../render-inlined-styles.vue",e),e}),v={name:"block-styles",components:{"render-inlined-styles":d(y)},props:["block","context"],data:()=>({TARGET:a}),computed:{useBlock(){return h({block:this.block,state:this.context.state,context:this.context.context,shouldEvaluateBindings:!0})},css(){const e=this.useBlock.responsiveStyles,o=e==null?void 0:e.large,t=e==null?void 0:e.medium,n=e==null?void 0:e.small;return`
      ${o?`.${this.useBlock.id} {${s(o)}}`:""}
      ${t?`${l("medium")} {
            .${this.useBlock.id} {${s(t)}}
          }`:""}
      ${n?`${l("small")} {
            .${this.useBlock.id} {${s(n)}}
          }`:""}
    }`}}};function T(e,o,t,n,A,i){const r=u("render-inlined-styles");return e.TARGET==="vue2"||e.TARGET==="vue3"||e.TARGET==="svelte"||e.TARGET==="qwik"?(p(),$(r,{key:0,styles:i.css},null,8,["styles"])):f("",!0)}const g=m(v,[["render",T]]);export{g as default};

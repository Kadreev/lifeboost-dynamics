import{d as b,U as I,N as C,f as P,_ as y,o as r,b as i,c as a,n as x,m as f,e as g,a as d,F as u,g as h,w,r as k,h as R,i as D}from"./index.239e74bc.js";import{g as E}from"./get-processed-block.77923ee6.3b3e7d3f.js";const N=t=>`v-on:${t.toLowerCase()}`;function A(t,e){return n=>C({code:t,context:e.context,state:e.state,event:n})}function T(t){var e;const n={},s=(e=t.block.actions)!=null?e:{};for(const l in s){if(!s.hasOwnProperty(l))continue;const o=s[l];n[N(l)]=A(o,t)}return n}function O(t){var e;return{...(e=t.component)==null?void 0:e.options,...t.options,builderBlock:t}}function W(t){const e={};if(typeof t!="string")return e;const n=t.trim().split(/\\s+/);for(const s of n)e[s]=!0;return e}function L(t){var e;return{...t.properties,"builder-id":t.id,class:W([t.id,"builder-block",t.class,(e=t.properties)==null?void 0:e.class].filter(Boolean).join(" "))}}function $(){return{}}function H(t){return t.tagName||"div"}const V=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],G=t=>typeof t=="string"&&V.includes(t.toLowerCase()),F=()=>y(()=>import("./block-styles.867fd8f0.b548e680.js"),["assets/block-styles.867fd8f0.b548e680.js","assets/index.239e74bc.js","assets/index.c16bd851.css","assets/get-processed-block.77923ee6.3b3e7d3f.js"]).then(t=>t.default).catch(t=>{throw console.error("Error while attempting to dynamically import component BlockStyles at ./block-styles.vue",t),t}),U=()=>y(()=>import("./render-component.7ca6729a.053dc61d.js"),["assets/render-component.7ca6729a.053dc61d.js","assets/index.239e74bc.js","assets/index.c16bd851.css"]).then(t=>t.default).catch(t=>{throw console.error("Error while attempting to dynamically import component RenderComponent at ./render-component.vue",t),t}),j=()=>y(()=>import("./render-repeated-block.0b974ccc.9f1ee175.js"),["assets/render-repeated-block.0b974ccc.9f1ee175.js","assets/index.239e74bc.js","assets/index.c16bd851.css"]).then(t=>t.default).catch(t=>{throw console.error("Error while attempting to dynamically import component RenderRepeatedBlock at ./render-repeated-block.vue",t),t}),z={name:"render-block",components:{"render-component":b(U),"render-repeated-block":b(j),"block-styles":b(F)},props:["block","context"],data:()=>({isEmptyHtmlElement:G,TARGET:I}),computed:{component(){var t;const e=(t=E({block:this.block,state:this.context.state,context:this.context.context,shouldEvaluateBindings:!1}).component)==null?void 0:t.name;if(!e)return null;const n=this.context.registeredComponents[e];if(n)return n;console.warn(`
        Could not find a registered component named "${e}". 
        If you registered it, is the file that registered it imported by the file that needs to render it?`)},componentInfo(){if(this.component){const{component:t,...e}=this.component;return e}else return},componentRef(){var t;return(t=this.component)==null?void 0:t.component},tagName(){return H(this.useBlock)},useBlock(){return this.repeatItemData?this.block:E({block:this.block,state:this.context.state,context:this.context.context,shouldEvaluateBindings:!0})},attributes(){return{...L(this.useBlock),...T({block:this.useBlock,state:this.context.state,context:this.context.context}),style:$(this.useBlock)}},shouldWrap(){var t;return!((t=this.componentInfo)!=null&&t.noWrap)},componentOptions(){return{...O(this.useBlock),...this.shouldWrap?{}:{attributes:this.attributes}}},renderComponentProps(){return{blockChildren:this.children,componentRef:this.componentRef,componentOptions:this.componentOptions,context:this.context}},children(){var t;return(t=this.useBlock.children)!=null?t:[]},childrenWithoutParentComponent(){return!this.componentRef&&!this.repeatItemData?this.children:[]},repeatItemData(){const{repeat:t,...e}=this.block;if(!(t!=null&&t.collection))return;const n=C({code:t.collection,state:this.context.state,context:this.context.context});if(!Array.isArray(n))return;const s=t.collection.split(".").pop(),l=t.itemName||(s?s+"Item":"item");return n.map((o,m)=>({context:{...this.context,state:{...this.context.state,$index:m,$item:o,[l]:o,[`$${l}Index`]:m}},block:e}))}}},S={key:1,class:"vue2-root-element-workaround"};function K(t,e,n,s,l,o){const m=k("render-repeated-block"),v=k("render-component"),_=k("render-block",!0),B=k("block-styles");return o.shouldWrap?(r(),i(u,{key:0},[t.isEmptyHtmlElement(o.tagName)?(r(),a(g(o.tagName),x(f({key:0},o.attributes)),null,16)):d("",!0),!t.isEmptyHtmlElement(o.tagName)&&t.TARGET==="vue2"&&o.repeatItemData?(r(),i("div",S,[(r(!0),i(u,null,h(o.repeatItemData,(c,p)=>(r(),a(m,{key:p,repeatContext:c.context,block:c.block},null,8,["repeatContext","block"]))),128))])):d("",!0),!t.isEmptyHtmlElement(o.tagName)&&t.TARGET!=="vue2"&&o.repeatItemData?(r(!0),i(u,{key:2},h(o.repeatItemData,(c,p)=>(r(),a(m,{key:p,repeatContext:c.context,block:c.block},null,8,["repeatContext","block"]))),128)):d("",!0),!t.isEmptyHtmlElement(o.tagName)&&!o.repeatItemData?(r(),a(g(o.tagName),x(f({key:3},o.attributes)),{default:w(()=>[R(v,x(D(o.renderComponentProps)),null,16),(r(!0),i(u,null,h(o.childrenWithoutParentComponent,(c,p)=>(r(),a(_,{key:"render-block-"+c.id,block:c,context:n.context},null,8,["block","context"]))),128)),(r(!0),i(u,null,h(o.childrenWithoutParentComponent,(c,p)=>(r(),a(B,{key:"block-style-"+c.id,block:c,context:n.context},null,8,["block","context"]))),128))]),_:1},16)):d("",!0)],64)):(r(),a(v,f({key:1},o.renderComponentProps,{context:n.context}),null,16,["context"]))}const J=P(z,[["render",K]]);export{J as default};
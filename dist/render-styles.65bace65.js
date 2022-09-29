import{f,_ as d}from"./index.js";import{defineAsyncComponent as a,resolveComponent as m,openBlock as u,createBlock as p}from"vue";const y=()=>d(()=>import("./render-inlined-styles.0b1e087d.js"),["render-inlined-styles.0b1e087d.js","index.js"]).then(t=>t.default).catch(t=>{throw console.error("Error while attempting to dynamically import component RenderInlinedStyles at ../../render-inlined-styles.vue",t),t}),h={name:"render-content-styles",components:{"render-inlined-styles":a(y)},props:["cssCode","customFonts"],computed:{injectedStyles(){return`
${this.cssCode||""}
${this.getFontCss({customFonts:this.customFonts})}`}},methods:{getCssFromFont(t){var n,o;const e=t.family+(t.kind&&!t.kind.includes("#")?", "+t.kind:""),i=e.split(",")[0],s=(o=t.fileUrl)!=null?o:(n=t==null?void 0:t.files)==null?void 0:n.regular;let l="";if(s&&e&&i&&(l+=`
@font-face {
  font-family: "${e}";
  src: local("${i}"), url('${s}') format('woff2');
  font-display: fallback;
  font-weight: 400;
}
        `.trim()),t.files)for(const r in t.files){if(String(Number(r))!==r)continue;const c=t.files[r];c&&c!==s&&(l+=`
@font-face {
  font-family: "${e}";
  src: url('${c}') format('woff2');
  font-display: fallback;
  font-weight: ${r};
}
          `.trim())}return l},getFontCss({customFonts:t}){var n;return((n=t==null?void 0:t.map(o=>this.getCssFromFont(o)))==null?void 0:n.join(" "))||""}}};function v(t,n,o,e,i,s){const l=m("render-inlined-styles");return u(),p(l,{styles:s.injectedStyles},null,8,["styles"])}const C=f(h,[["render",v]]);export{C as default};

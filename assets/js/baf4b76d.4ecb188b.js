"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[1770],{8008:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>s,default:()=>u,frontMatter:()=>m,metadata:()=>c,toc:()=>p});var n=o(7462),a=o(7294),l=o(3905),r=o(814);const i=()=>{const[e,t]=(0,a.useState)(),[o,n]=(0,a.useState)("mp4");return a.createElement("div",{className:"container"},a.createElement("div",null,"File name ",a.createElement("input",{value:e,onChange:e=>{t(e.target.value)}})),a.createElement("div",null,"File extension ",a.createElement("input",{value:o,onChange:e=>{n(e.target.value)}})),a.createElement(r.Z,{language:"bash"},`ffmpeg -i ${e}.${o} -vcodec libx264 -crf 22 ${e}-op.${o}`))},m={title:"my hello page title",description:"my hello page description",hide_table_of_contents:!1},s="Video Compress Command Generator",c={type:"mdx",permalink:"/tool/",source:"@site/src/pages/tool/index.mdx",title:"my hello page title",description:"my hello page description",frontMatter:{title:"my hello page title",description:"my hello page description",hide_table_of_contents:!1}},p=[],d={toc:p};function u(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"video-compress-command-generator"},"Video Compress Command Generator"),(0,l.kt)(i,{mdxType:"VideoCompressCommandGenerator"}))}u.isMDXComponent=!0}}]);
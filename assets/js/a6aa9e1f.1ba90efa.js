"use strict";(self.webpackChunkvac_dev=self.webpackChunkvac_dev||[]).push([[3089],{68854:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=a(70655),l=n.__importDefault(a(5099)),r=n.__importDefault(a(67294)),i=a(18955);t.default=function(e){return r.default.createElement(i.BlogPageContext.Provider,{value:{type:"list",props:e}},r.default.createElement(l.default,{...e}))}},5099:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(67294),l=a(86010),r=a(6832),i=a(44873),o=a(18015),s=a(95141),c=a(11614),m=a(79255);function u(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,c.translate)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(m.Z,{permalink:a,title:n.createElement(c.default,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&n.createElement(m.Z,{permalink:l,title:n.createElement(c.default,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var p=a(26145),g=a(17762),d=a(91024);function E(e){let{items:t,component:a=d.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(g.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}function f(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.default)(),{blogDescription:l,blogTitle:o,permalink:s}=t,c="/"===s?a:o;return n.createElement(n.Fragment,null,n.createElement(i.d,{title:c,description:l}),n.createElement(p.Z,{tag:"blog_posts_list"}))}function b(e){const{metadata:t,items:a,sidebar:l}=e;return n.createElement(s.Z,{sidebar:l},n.createElement(E,{items:a}),n.createElement(u,{metadata:t}))}function v(e){return n.createElement(i.FG,{className:(0,l.default)(o.k.wrapper.blogPages,o.k.page.blogListPage)},n.createElement(f,e),n.createElement(b,e))}}}]);
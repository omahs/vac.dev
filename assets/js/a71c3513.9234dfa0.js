"use strict";(self.webpackChunkvac_dev=self.webpackChunkvac_dev||[]).push([[7791],{18966:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>m,metadata:()=>p,toc:()=>l});var n=t(87462),s=(t(67294),t(3905));const m={title:"Verifying RLN Proofs in Light Clients with Subtrees",date:new Date("2024-05-03T12:00:00.000Z"),authors:"p1ge0nh8er",published:!0,slug:"rln-light-verifiers",categories:"research",toc_min_heading_level:2,toc_max_heading_level:4},r=void 0,p={permalink:"/rlog/rln-light-verifiers",source:"@site/rlog/2024-05-03-rln-light-verifiers.mdx",title:"Verifying RLN Proofs in Light Clients with Subtrees",description:"How resource-restricted devices can verify RLN proofs fast and efficiently.",date:"2024-05-03T12:00:00.000Z",formattedDate:"May 3, 2024",tags:[],readingTime:4.81,hasTruncateMarker:!0,authors:[{name:"Aaryamann",twitter:"p1ge0nh8er",github:"rymnc",key:"p1ge0nh8er"}],frontMatter:{title:"Verifying RLN Proofs in Light Clients with Subtrees",date:"2024-05-03T12:00:00.000Z",authors:"p1ge0nh8er",published:!0,slug:"rln-light-verifiers",categories:"research",toc_min_heading_level:2,toc_max_heading_level:4},prevItem:{title:"RLN-v3: Towards a Flexible and Cost-Efficient Implementation",permalink:"/rlog/rln-v3"},nextItem:{title:"Strengthening Anonymous DoS Prevention with Rate Limiting Nullifiers in Waku",permalink:"/rlog/rln-anonymous-dos-prevention"}},i={authorsImageUrls:[void 0]},l=[{value:"Introduction",id:"introduction",level:2},{value:"Constraints and requirements",id:"constraints-and-requirements",level:2},{value:"Metrics on sync time for a tree with 2,653 leaves",id:"metrics-on-sync-time-for-a-tree-with-2653-leaves",level:2},{value:"Test bench",id:"test-bench",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Proposed solution",id:"proposed-solution",level:2},{value:"Insertion",id:"insertion",level:3},{value:"Syncing",id:"syncing",level:3},{value:"Gas costs",id:"gas-costs",level:3},{value:"Events",id:"events",level:3},{value:"Proof of concept",id:"proof-of-concept",level:3},{value:"Future work",id:"future-work",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}],o={toc:l};function c(e){let{components:a,...m}=e;return(0,s.kt)("wrapper",(0,n.Z)({},o,m,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"How resource-restricted devices can verify RLN proofs fast and efficiently."),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"Recommended previous reading: ",(0,s.kt)("a",{parentName:"p",href:"https://vac.dev/rlog/rln-anonymous-dos-prevention"},"Strengthening Anonymous DoS Prevention with Rate Limiting Nullifiers in Waku"),"."),(0,s.kt)("p",null,"This post expands upon ideas described in the previous post,\nfocusing on how resource-restricted devices can verify RLN proofs fast and efficiently."),(0,s.kt)("p",null,"Previously, it was required to fetch all the memberships from the smart contract,\nconstruct the merkle tree locally,\nand derive the merkle root,\nwhich is subsequently used to verify RLN proofs."),(0,s.kt)("p",null,"This process is not feasible for resource-restricted devices since it involves a lot of RPC calls, computation and fault tolerance.\nOne cannot expect a mobile phone to fetch all the memberships from the smart contract and construct the merkle tree locally."),(0,s.kt)("h2",{id:"constraints-and-requirements"},"Constraints and requirements"),(0,s.kt)("p",null,"An alternative solution to the one proposed in this post is to construct the merkle tree on-chain,\nand have the root accessible with a single RPC call.\nHowever, this approach increases gas costs for inserting new memberships and ",(0,s.kt)("em",{parentName:"p"},"may")," not be feasible until it is optimized further with batching mechanisms, etc."),(0,s.kt)("p",null,"The other methods have been explored in more depth ",(0,s.kt)("a",{parentName:"p",href:"https://hackmd.io/@rymnc/rln-tree-storages"},"here"),"."),(0,s.kt)("p",null,"Following are the requirements and constraints for the solution proposed in this post:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Cheap membership insertions."),(0,s.kt)("li",{parentName:"ol"},"As few RPC calls as possible to reduce startup time."),(0,s.kt)("li",{parentName:"ol"},"Merkle root of the tree is available on-chain."),(0,s.kt)("li",{parentName:"ol"},"No centralized services to sequence membership insertions."),(0,s.kt)("li",{parentName:"ol"},"Map inserted commitments to the block in which they were inserted.")),(0,s.kt)("h2",{id:"metrics-on-sync-time-for-a-tree-with-2653-leaves"},"Metrics on sync time for a tree with 2,653 leaves"),(0,s.kt)("p",null,"The following metrics are based on the current implementation of RLN in the Waku gen0 network."),(0,s.kt)("h3",{id:"test-bench"},"Test bench"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Hardware: Macbook Air M2, 16GB RAM"),(0,s.kt)("li",{parentName:"ul"},"Network: 120 Megabits/sec"),(0,s.kt)("li",{parentName:"ul"},"Nwaku commit: ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/waku-org/nwaku/tree/e61e4ff90a235657a7dc4248f5be41b6e031e98c"},"e61e4ff")),(0,s.kt)("li",{parentName:"ul"},"RLN membership set contract: ",(0,s.kt)("a",{parentName:"li",href:"https://sepolia.etherscan.io/address/0xF471d71E9b1455bBF4b85d475afb9BB0954A29c4#code"},"0xF471d71E9b1455bBF4b85d475afb9BB0954A29c4")),(0,s.kt)("li",{parentName:"ul"},"Deployed block number: 4,230,716"),(0,s.kt)("li",{parentName:"ul"},"RLN Membership set depth: 20"),(0,s.kt)("li",{parentName:"ul"},"Hash function: PoseidonT3 (which is a gas guzzler)"),(0,s.kt)("li",{parentName:"ul"},"Max size of the membership set: 2^20 = 1,048,576 leaves")),(0,s.kt)("h3",{id:"metrics"},"Metrics"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Time to sync the whole tree: 4 minutes"),(0,s.kt)("li",{parentName:"ul"},"RPC calls: 702"),(0,s.kt)("li",{parentName:"ul"},"Number of leaves: 2,653")),(0,s.kt)("p",null,"One can argue that the time to sync the tree at the current state is not ",(0,s.kt)("em",{parentName:"p"},"that")," bad.\nHowever, the number of RPC calls is a concern,\nwhich scales linearly with the number of blocks since the contract was deployed\nThis is because the implementation fetches all events from the contract,\nchunking 2,000 blocks at a time.\nThis is done to avoid hitting the block limit of 10,000 events per call,\nwhich is a limitation of popular RPC providers."),(0,s.kt)("h2",{id:"proposed-solution"},"Proposed solution"),(0,s.kt)("p",null,"From a theoretical perspective,\none could construct the merkle tree on-chain,\nin a view call, in-memory.\nHowever, this is not feasible due to the gas costs associated with it."),(0,s.kt)("p",null,"To compute the root of a Merkle tree with ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"20"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{20}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"20")))))))))))))," leaves it costs approximately 2 billion gas.\nWith Infura and Alchemy capping the gas limit to 350M and 550M gas respectively,\nit is not possible to compute the root of the tree in a single call."),(0,s.kt)("p",null,"Acknowledging that ",(0,s.kt)("a",{parentName:"p",href:"https://polygon.technology/blog/polygon-miden-state-model"},"Polygon Miden")," and ",(0,s.kt)("a",{parentName:"p",href:"https://penumbra.zone/blog/tiered-commitment-tree/"},"Penumbra")," both make use of a tiered commitment tree,\nwe propose a similar approach for RLN."),(0,s.kt)("p",null,"A tiered commitment tree is a tree which is sharded into multiple smaller subtrees,\neach of which is a tree in itself.\nThis allows scaling in terms of the number of leaves,\nas well as reducing state bloat by just storing the root of a subtree when it is full instead of all its leaves."),(0,s.kt)("p",null,"Here, the question arises:\nWhat is the maximum number of leaves in a subtree with which the root can be computed in a single call?"),(0,s.kt)("p",null,"It costs approximately 217M gas to compute the root of a Merkle tree with ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"10"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{10}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"10")))))))))))))," leaves."),(0,s.kt)("p",null,"This is a feasible number for a single call,\nand hence we propose a tiered commitment tree with a maximum of ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"10"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{10}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"10")))))))))))))," leaves in a subtree and the number of subtrees is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"10"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{10}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"10"))))))))))))),".\nTherefore, the maximum number of leaves in the tree is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mn",{parentName:"msup"},"20"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{20}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"20")))))))))))))," (the same as the current implementation)."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:t(65617).Z,width:"631",height:"381"})),(0,s.kt)("h3",{id:"insertion"},"Insertion"),(0,s.kt)("p",null,"When a commitment is inserted into the tree it is first inserted into the first subtree.\nWhen the first subtree is full the next insertions go into the second subtree and so on."),(0,s.kt)("h3",{id:"syncing"},"Syncing"),(0,s.kt)("p",null,"When syncing the tree,\none only needs to fetch the roots of the subtrees.\nThe root of the full tree can be computed in-memory or on-chain."),(0,s.kt)("p",null,"This allows us to derive the following relation:"),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mi",{parentName:"mrow"},"i"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mi",{parentName:"mrow"},"u"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"e"),(0,s.kt)("mi",{parentName:"mrow"},"s"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"number\\_of\\_rpc\\_calls = number\\_of\\_filled\\_subtrees + 1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0044em",verticalAlign:"-0.31em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"mb"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er"),(0,s.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,s.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"ll"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0044em",verticalAlign:"-0.31em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"mb"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er"),(0,s.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"ll"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"_"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"rees"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))),(0,s.kt)("p",null,"This is a significant improvement over the current implementation,\nwhich requires fetching all the memberships from the smart contract."),(0,s.kt)("h3",{id:"gas-costs"},"Gas costs"),(0,s.kt)("p",null,"The gas costs for inserting a commitment into the tree are the same as the current implementation except it consists of an extra SSTORE operation to store the ",(0,s.kt)("inlineCode",{parentName:"p"},"shardIndex")," of the commitment."),(0,s.kt)("h3",{id:"events"},"Events"),(0,s.kt)("p",null,"The events emitted by the contract are the same as the current implementation,\nappending the ",(0,s.kt)("inlineCode",{parentName:"p"},"shardIndex")," of the commitment."),(0,s.kt)("h3",{id:"proof-of-concept"},"Proof of concept"),(0,s.kt)("p",null,"A proof of concept implementation of the tiered commitment tree is available ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/vacp2p/rln-contract/pull/37"},"here"),",\nand is deployed on Sepolia at ",(0,s.kt)("a",{parentName:"p",href:"https://sepolia.etherscan.io/address/0xE7987c70B54Ff32f0D5CBbAA8c8Fc1cAf632b9A5"},"0xE7987c70B54Ff32f0D5CBbAA8c8Fc1cAf632b9A5"),"."),(0,s.kt)("p",null,"It is compatible with the current implementation of the RLN verifier."),(0,s.kt)("h2",{id:"future-work"},"Future work"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Optimize the gas costs of the tiered commitment tree."),(0,s.kt)("li",{parentName:"ol"},"Explore using different number of leaves under a given node in the tree (currently set to 2).")),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"The tiered commitment tree is a promising approach to reduce the number of RPC calls required to sync the tree and reduce the gas costs associated with computing the root of the tree.\nConsequently, it allows for a more scalable and efficient RLN verifier."),(0,s.kt)("h2",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/rate-limiting-nullifier/circom-rln"},"RLN Circuits")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/vacp2p/zerokit"},"Zerokit")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/spec/32/"},"RLN-V1 RFC")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/spec/58/"},"RLN-V2 RFC")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://hackmd.io/7cBCMU5hS5OYv8PTaW2wAQ?view"},"RLN Implementers guide")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://vac.dev/rlog/rln-anonymous-dos-prevention"},"Strengthening Anonymous DoS Prevention with Rate Limiting Nullifiers in Waku"))))}c.isMDXComponent=!0},3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>N});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),l=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},o=function(e){var a=l(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,m=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),h=l(t),N=s,k=h["".concat(i,".").concat(N)]||h[N]||c[N]||m;return t?n.createElement(k,r(r({ref:a},o),{},{components:t})):n.createElement(k,r({ref:a},o))}));function N(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var m=t.length,r=new Array(m);r[0]=h;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:s,r[1]=p;for(var l=2;l<m;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},65617:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/light-rln-verifiers-f801999160884be6a1223ee7d76cebcf.png"}}]);
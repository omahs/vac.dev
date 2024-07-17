"use strict";(self.webpackChunkvac_dev=self.webpackChunkvac_dev||[]).push([[1618],{46643:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(87462),o=(a(67294),a(3905));const r={layout:"post",name:"Waku v1 vs Waku v2: Bandwidth Comparison",title:"Waku v1 vs Waku v2: Bandwidth Comparison",date:new Date("2021-11-03T10:00:00.000Z"),authors:"hanno",published:!0,slug:"waku-v1-v2-bandwidth-comparison",categories:"research",image:"/img/waku1-vs-waku2/waku1-vs-waku2-overall-network-size.png",discuss:"https://forum.vac.dev/t/discussion-waku-v1-vs-waku-v2-bandwidth-comparison/110"},s=void 0,i={permalink:"/rlog/waku-v1-v2-bandwidth-comparison",source:"@site/rlog/2021-10-25-waku-v1-vs-waku-v2.mdx",title:"Waku v1 vs Waku v2: Bandwidth Comparison",description:"A local comparison of bandwidth profiles showing significantly improved scalability in Waku v2 over Waku v1.",date:"2021-11-03T10:00:00.000Z",formattedDate:"November 3, 2021",tags:[],readingTime:9.345,hasTruncateMarker:!0,authors:[{name:"Hanno Cornelius",twitter:"4aelius",github:"jm-clius",key:"hanno"}],frontMatter:{layout:"post",name:"Waku v1 vs Waku v2: Bandwidth Comparison",title:"Waku v1 vs Waku v2: Bandwidth Comparison",date:"2021-11-03T10:00:00.000Z",authors:"hanno",published:!0,slug:"waku-v1-v2-bandwidth-comparison",categories:"research",image:"/img/waku1-vs-waku2/waku1-vs-waku2-overall-network-size.png",discuss:"https://forum.vac.dev/t/discussion-waku-v1-vs-waku-v2-bandwidth-comparison/110"},prevItem:{title:"Opinion: Pseudo-ethics in the Surveillance Tech Industry",permalink:"/rlog/ethics-surveillance-tech"},nextItem:{title:"[Talk at COSCUP] Vac, Waku v2 and Ethereum Messaging",permalink:"/rlog/waku-v2-ethereum-coscup"}},l={authorsImageUrls:[void 0]},u=[{value:"Background",id:"background",level:2},{value:"Theoretical improvements in Waku v2",id:"theoretical-improvements-in-waku-v2",level:2},{value:"Methodology",id:"methodology",level:2},{value:"Network size comparison",id:"network-size-comparison",level:2},{value:"Iteration 1: 10 nodes",id:"iteration-1-10-nodes",level:3},{value:"Iteration 2: 30 nodes",id:"iteration-2-30-nodes",level:3},{value:"Iteration 3: 50 nodes",id:"iteration-3-50-nodes",level:3},{value:"Iteration 4: 85 nodes",id:"iteration-4-85-nodes",level:3},{value:"Iteration 5: 150 nodes",id:"iteration-5-150-nodes",level:3},{value:"Discussion",id:"discussion",level:3},{value:"Network traffic comparison",id:"network-traffic-comparison",level:2},{value:"Conclusions",id:"conclusions",level:2},{value:"Future work",id:"future-work",level:2},{value:"References",id:"references",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A local comparison of bandwidth profiles showing significantly improved scalability in Waku v2 over Waku v1."),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://vac.dev/waku-v2-plan"},"original plan")," for Waku v2 suggested theoretical improvements in resource usage over Waku v1,\nmainly as a result of the improved amplification factors provided by GossipSub.\nIn its turn, ",(0,o.kt)("a",{parentName:"p",href:"https://vac.dev/fixing-whisper-with-waku"},"Waku v1 proposed improvements")," over its predecessor, Whisper."),(0,o.kt)("p",null,"Given that Waku v2 is aimed at resource restricted environments,\nwe are specifically interested in its scalability and resource usage characteristics.\nHowever, the theoretical performance improvements of Waku v2 over Waku v1,\nhas never been properly benchmarked and tested."),(0,o.kt)("p",null,'Although we\'re working towards a full performance evaluation of Waku v2,\nthis would require significant planning and resources,\nif it were to simulate "real world" conditions faithfully and measure bandwidth and resource usage across different network connections,\nrobustness against attacks/losses, message latencies, etc.\n(There already exists a fairly comprehensive ',(0,o.kt)("a",{parentName:"p",href:"https://research.protocol.ai/publications/gossipsub-v1.1-evaluation-report/vyzovitis2020.pdf"},"evaluation of GossipSub v1.1"),",\non which ",(0,o.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/spec/11/"},(0,o.kt)("inlineCode",{parentName:"a"},"11/WAKU2-RELAY"))," is based.)"),(0,o.kt)("p",null,"As a starting point,\nthis post contains a limited and local comparison of the ",(0,o.kt)("em",{parentName:"p"},"bandwidth")," profile (only) between Waku v1 and Waku v2.\nIt reuses and adapts existing network simulations for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/status-im/nim-waku/blob/master/waku/v1/node/quicksim.nim"},"Waku v1")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/status-im/nim-waku/blob/master/waku/v2/node/quicksim2.nim"},"Waku v2"),"\nand compares bandwidth usage for similar message propagation scenarios."),(0,o.kt)("h2",{id:"theoretical-improvements-in-waku-v2"},"Theoretical improvements in Waku v2"),(0,o.kt)("p",null,"Messages are propagated in Waku v1 using ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Flooding_(computer_networking)"},"flood routing"),".\nThis means that every peer will forward every new incoming message to all its connected peers (except the one it received the message from).\nThis necessarily leads to unnecessary duplication (termed ",(0,o.kt)("em",{parentName:"p"},"amplification factor"),"),\nwasting bandwidth and resources.\nWhat's more, we expect this effect to worsen the larger the network becomes,\nas each ",(0,o.kt)("em",{parentName:"p"},"connection")," will receive a copy of each message,\nrather than a single copy per peer."),(0,o.kt)("p",null,"Message routing in Waku v2 follows the ",(0,o.kt)("inlineCode",{parentName:"p"},"libp2p")," ",(0,o.kt)("em",{parentName:"p"},"GossipSub"),' protocol,\nwhich lowers amplification factors by only sending full message contents to a subset of connected peers.\nAs a Waku v2 network grows, each peer will limit its number of full-message ("mesh") peerings -\n',(0,o.kt)("inlineCode",{parentName:"p"},"libp2p")," suggests a maximum of ",(0,o.kt)("inlineCode",{parentName:"p"},"12"),' such connections per peer.\nThis allows much better scalability than a flood-routed network.\nFrom time to time, a Waku v2 peer will send metadata about the messages it has seen to other peers ("gossip" peers).'),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://hackmd.io/@vac/main/%2FYYlZYBCURFyO_ZG1EiteWg#11WAKU2-RELAY-gossipsub"},"this explainer")," for a more detailed discussion."),(0,o.kt)("h2",{id:"methodology"},"Methodology"),(0,o.kt)("p",null,"The results below contain only some scenarios that provide an interesting contrast between Waku v1 and Waku v2.\nFor example, ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Star_network"},"star network topologies")," do not show a substantial difference between Waku v1 and Waku v2.\nThis is because each peer relies on a single connection to the central node for every message,\nwhich barely requires any routing:\neach connection receives a copy of every message for both Waku v1 and Waku v2.\nHybrid topologies similarly show only a difference between Waku v1 and Waku v2 for network segments with ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mesh_networking"},"mesh-like connections"),",\nwhere routing decisions need to be made."),(0,o.kt)("p",null,"For this reason, the following approach applies to all iterations:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Simulations are run ",(0,o.kt)("strong",{parentName:"li"},"locally"),".\nThis limits the size of possible scenarios due to local resource constraints,\nbut is a way to quickly get an approximate comparison."),(0,o.kt)("li",{parentName:"ol"},"Nodes are treated as a ",(0,o.kt)("strong",{parentName:"li"},"blackbox")," for which we only measure bandwidth,\nusing an external bandwidth monitoring tool.\nIn other words, we do not consider differences in the size of the envelope (for v1) or the message (for v2)."),(0,o.kt)("li",{parentName:"ol"},"Messages are published at a rate of ",(0,o.kt)("strong",{parentName:"li"},"50 new messages per second")," to each network,\nexcept where explicitly stated otherwise."),(0,o.kt)("li",{parentName:"ol"},"Each message propagated in the network carries ",(0,o.kt)("strong",{parentName:"li"},"8 bytes")," of random payload, which is ",(0,o.kt)("strong",{parentName:"li"},"encrypted"),".\nThe same symmetric key cryptographic algorithm (with the same keys) are used in both Waku v1 and v2."),(0,o.kt)("li",{parentName:"ol"},"Traffic in each network is ",(0,o.kt)("strong",{parentName:"li"},"generated from 10 nodes")," (randomly-selected) and published in a round-robin fashion to ",(0,o.kt)("strong",{parentName:"li"},"10 topics")," (content topics for Waku v2).\nIn practice, we found no significant difference in ",(0,o.kt)("em",{parentName:"li"},"average")," bandwidth usage when tweaking these two parameters (the number of traffic generating nodes and the number of topics)."),(0,o.kt)("li",{parentName:"ol"},"Peers are connected in a decentralized ",(0,o.kt)("strong",{parentName:"li"},"full mesh topology"),",\ni.e. each peer is connected to every other peer in the network.\nWaku v1 is expected to flood all messages across all existing connections.\nWaku v2 gossipsub will GRAFT some of these connections for full-message peerings,\nwith the rest being gossip-only peerings."),(0,o.kt)("li",{parentName:"ol"},"After running each iteration, we ",(0,o.kt)("strong",{parentName:"li"},"verify that messages propagated to all peers")," (comparing the number of published messages to the metrics logged by each peer).")),(0,o.kt)("p",null,'For Waku v1, nodes are configured as "full" nodes (i.e. with full bloom filter),\nwhile Waku v2 nodes are ',(0,o.kt)("inlineCode",{parentName:"p"},"relay")," nodes, all subscribing and publishing to the same PubSub topic."),(0,o.kt)("h2",{id:"network-size-comparison"},"Network size comparison"),(0,o.kt)("h3",{id:"iteration-1-10-nodes"},"Iteration 1: 10 nodes"),(0,o.kt)("p",null,"Let's start with a small network of 10 nodes only and see how Waku v1 bandwidth usage compares to that of Waku v2.\nAt this small scale we don't expect to see improved bandwidth usage in Waku v2 over Waku v1,\nsince all connections, for both Waku v1 and Waku v2, will be full-message connections.\nThe number of connections is low enough that Waku v2 nodes will likely GRAFT all connections to full-message peerings,\nessentially flooding every message on every connection in a similar fashion to Waku v1.\nIf our expectations are confirmed, it helps validate our methodology,\nshowing that it gives more or less equivalent results between Waku v1 and Waku v2 networks."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(91137).Z,width:"1243",height:"734"})),(0,o.kt)("p",null,"Sure enough, the figure shows that in this small-scale setup,\nWaku v1 actually has a lower per-peer bandwidth usage than Waku v2.\nOne reason for this may be the larger overall proportion of control messages in a gossipsub-routed network such as Waku v2.\nThese play a larger role when the total network traffic is comparatively low, as in this iteration.\nAlso note that the average bandwidth remains more or less constant as long as the rate of published messages remains stable."),(0,o.kt)("h3",{id:"iteration-2-30-nodes"},"Iteration 2: 30 nodes"),(0,o.kt)("p",null,"Now, let's run the same scenario for a larger network of highly-connected nodes, this time consisting of 30 nodes.\nAt this point, the Waku v2 nodes will start pruning some connections to limit the number of full-message peerings (to a maximum of ",(0,o.kt)("inlineCode",{parentName:"p"},"12"),"),\nwhile the Waku v1 nodes will continue flooding messages to all connected peers.\nWe therefore expect to see a somewhat improved bandwidth usage in Waku v2 over Waku v1."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(5466).Z,width:"1240",height:"733"})),(0,o.kt)("p",null,"Bandwidth usage in Waku v2 has increased only slightly from the smaller network of 10 nodes (hovering between 2000 and 3000 kbps).\nThis is because there are only a few more full-message peerings than before.\nCompare this to the much higher increase in bandwidth usage for Waku v1, which now requires more than 4000 kbps on average."),(0,o.kt)("h3",{id:"iteration-3-50-nodes"},"Iteration 3: 50 nodes"),(0,o.kt)("p",null,"For an even larger network of 50 highly connected nodes,\nthe divergence between Waku v1 and Waku v2 is even larger.\nThe following figure shows comparative average bandwidth usage for a throughput of 50 messages per second."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(4265).Z,width:"1241",height:"735"})),(0,o.kt)("p",null,"Average bandwidth usage (for the same message rate) has remained roughly the same for Waku v2 as it was for 30 nodes,\nindicating that the number of full-message peerings per node has not increased."),(0,o.kt)("h3",{id:"iteration-4-85-nodes"},"Iteration 4: 85 nodes"),(0,o.kt)("p",null,"We already see a clear trend in the bandwidth comparisons above,\nso let's confirm by running the test once more for a network of 85 nodes.\nDue to local resource constraints, the effective throughput for Waku v1 falls to below 50 messages per second,\nso the v1 results below have been normalized and are therefore approximate.\nThe local Waku v2 simulation maintains the message throughput rate without any problems."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(35098).Z,width:"1237",height:"732"})),(0,o.kt)("h3",{id:"iteration-5-150-nodes"},"Iteration 5: 150 nodes"),(0,o.kt)("p",null,"Finally, we simulate message propagation in a network of 150 nodes.\nDue to local resource constraints, we run this simulation at a lower rate -\n35 messages per second -\nand for a shorter amount of time."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(50378).Z,width:"1361",height:"803"})),(0,o.kt)("p",null,"Notice how the Waku v1 bandwidth usage is now more than 10 times worse than that of Waku v2.\nThis is to be expected, as each Waku v1 node will try to flood each new message to 149 other peers,\nwhile the Waku v2 nodes limit their full-message peerings to no more than 12."),(0,o.kt)("h3",{id:"discussion"},"Discussion"),(0,o.kt)("p",null,"Let's summarize average bandwidth growth against network growth for a constant message propagation rate.\nSince we are particularly interested in how Waku v1 compares to Waku v2 in terms of bandwidth usage,\nthe results are normalised to the Waku v2 average bandwidth usage for each network size."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3430).Z,width:"1238",height:"731"})),(0,o.kt)("p",null,"Extrapolation is a dangerous game,\nbut it's safe to deduce that the divergence will only grow for even larger network topologies.\nAlthough control signalling contributes more towards overall bandwidth for Waku v2 networks,\nthis effect becomes less noticeable for larger networks.\nFor network segments with more than ~18 densely connected nodes,\nthe advantage of using Waku v2 above Waku v1 becomes clear."),(0,o.kt)("h2",{id:"network-traffic-comparison"},"Network traffic comparison"),(0,o.kt)("p",null,"The analysis above controls the average message rate while network size grows.\nIn reality, however, active users (and therefore message rates) are likely to grow in conjunction with the network.\nThis will have an effect on bandwidth for both Waku v1 and Waku v2, though not in equal measure.\nConsider the impact of an increasing rate of messages in a network of constant size:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1706).Z,width:"1129",height:"672"})),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"rate")," of increase in bandwidth for Waku v2 is slower than that for Waku v1 for a corresponding increase in message propagation rate.\nIn fact, for a network of 30 densely-connected nodes,\nif the message propagation rate increases by 1 per second,\nWaku v1 requires an increased average bandwidth of almost 70kbps at each node.\nA similar traffic increase in Waku v2 requires on average 40kbps more bandwidth per peer, just over half that of Waku v1."),(0,o.kt)("h2",{id:"conclusions"},"Conclusions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Waku v2 scales significantly better than Waku v1 in terms of average bandwidth usage"),",\nespecially for densely connected networks."),(0,o.kt)("li",{parentName:"ul"},"E.g. for a network consisting of ",(0,o.kt)("strong",{parentName:"li"},"150")," or more densely connected nodes,\nWaku v2 provides more than ",(0,o.kt)("strong",{parentName:"li"},"10x")," better average bandwidth usage rates than Waku v1."),(0,o.kt)("li",{parentName:"ul"},"As the network continues to scale, both in absolute terms (number of nodes) and in network traffic (message rates) the disparity between Waku v2 and Waku v1 becomes even larger.")),(0,o.kt)("h2",{id:"future-work"},"Future work"),(0,o.kt)("p",null,"Now that we've confirmed that Waku v2's bandwidth improvements over its predecessor matches theory,\nwe can proceed to a more in-depth characterisation of Waku v2's resource usage.\nSome questions that we want to answer include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What proportion of Waku v2's bandwidth usage is used to propagate ",(0,o.kt)("em",{parentName:"li"},"payload")," versus bandwidth spent on ",(0,o.kt)("em",{parentName:"li"},"control")," messaging to maintain the mesh?"),(0,o.kt)("li",{parentName:"ul"},"To what extent is message latency (time until a message is delivered to its destination) affected by network size and message rate?"),(0,o.kt)("li",{parentName:"ul"},"How ",(0,o.kt)("em",{parentName:"li"},"reliable")," is message delivery in Waku v2 for different network sizes and message rates?"),(0,o.kt)("li",{parentName:"ul"},"What are the resource usage profiles of other Waku v2 protocols (e.g.",(0,o.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/spec/12/"},(0,o.kt)("inlineCode",{parentName:"a"},"12/WAKU2-FILTER"))," and ",(0,o.kt)("a",{parentName:"li",href:"https://rfc.vac.dev/spec/19/"},(0,o.kt)("inlineCode",{parentName:"a"},"19/WAKU2-LIGHTPUSH")),")?")),(0,o.kt)("p",null,'Our aim is to get ever closer to a "real world" understanding of Waku v2\'s performance characteristics,\nidentify and fix vulnerabilities\nand continually improve the efficiency of our suite of protocols.'),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://research.protocol.ai/publications/gossipsub-v1.1-evaluation-report/vyzovitis2020.pdf"},"Evaluation of GossipSub v1.1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://vac.dev/fixing-whisper-with-waku"},"Fixing Whisper with Waku")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hackmd.io/@vac/main/%2FYYlZYBCURFyO_ZG1EiteWg#11WAKU2-RELAY-gossipsub"},"GossipSub vs flood routing")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.techopedia.com/definition/13335/star-topology#:~:text=Star%20topology%20is%20a%20network,known%20as%20a%20star%20network."},"Network topologies: star")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Mesh_networking"},"Network topologies: mesh")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://vac.dev/waku-v2-plan"},"Waku v2 original plan"))))}p.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},91137:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waku1-vs-waku2-10-nodes-fcc807080c17463099e65069a7580532.png"},50378:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waku1-vs-waku2-150-nodes-aee6ff3d7b339b78fd56cc52eb86268e.png"},5466:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waku1-vs-waku2-30-nodes-dc614f343b395e41c450f67e7e753881.png"},4265:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waku1-vs-waku2-50-nodes-7facf8c03b87e2ebb2dd3967fac6e6a0.png"},35098:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waku1-vs-waku2-85-nodes-a4c56b478f03d471ae25bc36d6087bbf.png"},1706:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waku1-vs-waku2-overall-message-rate-aa6f7884f804b62ba14a6b4e369eaee3.png"},3430:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/waku1-vs-waku2-overall-network-size-42e3912f3895367f3458c92e3e46ea47.png"}}]);
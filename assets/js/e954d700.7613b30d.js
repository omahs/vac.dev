"use strict";(self.webpackChunkvac_dev=self.webpackChunkvac_dev||[]).push([[7120],{85498:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=a(87462),n=(a(67294),a(3905));const o={title:"P2P Data Sync for Mobile",date:new Date("2019-07-19T12:00:00.000Z"),authors:"oskarth",published:!0,slug:"p2p-data-sync-for-mobile",categories:"research",image:"/img/mvds_interactive.png",toc_min_heading_level:2,toc_max_heading_level:5},r=void 0,s={permalink:"/rlog/p2p-data-sync-for-mobile",source:"@site/rlog/2019-07-19-p2p-data-sync-for-mobile.mdx",title:"P2P Data Sync for Mobile",description:"A research log. Reliable and decentralized, pick two.",date:"2019-07-19T12:00:00.000Z",formattedDate:"July 19, 2019",tags:[],readingTime:11.01,hasTruncateMarker:!0,authors:[{name:"Oskar",twitter:"oskarth",github:"oskarth",key:"oskarth"}],frontMatter:{title:"P2P Data Sync for Mobile",date:"2019-07-19T12:00:00.000Z",authors:"oskarth",published:!0,slug:"p2p-data-sync-for-mobile",categories:"research",image:"/img/mvds_interactive.png",toc_min_heading_level:2,toc_max_heading_level:5},prevItem:{title:"Vac - A Rough Overview",permalink:"/rlog/vac-overview"}},l={authorsImageUrls:[void 0]},c=[{value:"Problem motivation",id:"problem-motivation",level:2},{value:"Why p2p?",id:"why-p2p",level:3},{value:"Why reliably sync data?",id:"why-reliably-sync-data",level:3},{value:"Why mobilephones?",id:"why-mobilephones",level:3},{value:"Minimal Requirements",id:"minimal-requirements",level:2},{value:"MVDS - a minimium viable version",id:"mvds---a-minimium-viable-version",level:2},{value:"Basic simulation",id:"basic-simulation",level:3},{value:"Mostly-offline devices",id:"mostly-offline-devices",level:3},{value:"Basic calculations for bandwidth multiplier",id:"basic-calculations-for-bandwidth-multiplier",level:3},{value:"First case, no helper services",id:"first-case-no-helper-services",level:4},{value:"Second case, high-availability caching layer",id:"second-case-high-availability-caching-layer",level:4},{value:"Caveat",id:"caveat",level:4},{value:"Future work",id:"future-work",level:2}],h={toc:c};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A research log. Reliable and decentralized, pick two."),(0,n.kt)("p",null,"Together with decanus, I've been working on the problem of data sync lately."),(0,n.kt)("p",null,"In building p2p messaging systems, one problem you quickly come across is the problem of reliably transmitting data. If there's no central server with high availability guarantees, you can't meaningfully guarantee that data has been transmitted. One way of solving this problem is through a synchronization protocol."),(0,n.kt)("p",null,"There are many synchronization protocols out there and I won't go into detail of how they differ with our approach here. Some common examples are Git and Bittorrent, but there are also projects like IPFS, Swarm, Dispersy, Matrix, Briar, SSB, etc."),(0,n.kt)("h2",{id:"problem-motivation"},"Problem motivation"),(0,n.kt)("p",null,"Why do we want to do p2p sync for mobilephones in the first place? There are three components to that question. One is on the value of decentralization and peer-to-peer, the second is on why we'd want to reliably sync data at all, and finally why mobilephones and other resource restricted devices."),(0,n.kt)("h3",{id:"why-p2p"},"Why p2p?"),(0,n.kt)("p",null,"For decentralization and p2p, there are both technical and social/philosophical reasons. Technically, having a user-run network means it can scale with the number of users. Data locality is also improved if you query data that's close to you, similar to distributed CDNs. The throughput is also improved if there are more places to get data from."),(0,n.kt)("p",null,"Socially and philosophically, there are several ways to think about it. Open and decentralized networks also relate to the idea of open standards, i.e. compare the longevity of AOL with IRC or Bittorrent. One is run by a company and is shut down as soon as it stops being profitable, the others live on. Additionally increasingly control of data and infrastructure is becoming a liability. By having a network with no one in control, everyone is. It's ultimately a form of democratization, more similar to organic social structures pre Big Internet companies. This leads to properties such as censorship resistance and coercion resistance, where we limit the impact a 3rd party might have a voluntary interaction between individuals or a group of people. Examples of this are plentiful in the world of Facebook, Youtube, Twitter and WeChat."),(0,n.kt)("h3",{id:"why-reliably-sync-data"},"Why reliably sync data?"),(0,n.kt)("p",null,"At risk of stating the obvious, reliably syncing data is a requirement for many problem domains. You don't get this by default in a p2p world, as it is unreliable with nodes permissionslessly join and leave the network. In some cases you can get away with only ephemeral data, but usually you want some kind of guarantees. This is a must for reliable group chat experience, for example, where messages are expected to arrive in a timely fashion and in some reasonable order. The same is true for messages there represent financial transactions, and so on."),(0,n.kt)("h3",{id:"why-mobilephones"},"Why mobilephones?"),(0,n.kt)("p",null,"Most devices people use daily are mobile phones. It's important to provide the same or at least similar guarantees to more traditional p2p nodes that might run on a desktop computer or computer. The alternative is to rely on gateways, which shares many of the drawbacks of centralized control and prone to censorship, control and surveillence."),(0,n.kt)("p",null,"More generally, resource restricted devices can differ in their capabilities. One example is smartphones, but others are: desktop, routers, Raspberry PIs, POS systems, and so on. The number and diversity of devices are exploding, and it's useful to be able to leverage this for various types of infrastructure. The alternative is to centralize on big cloud providers, which also lends itself to lack of democratization and censorship, etc."),(0,n.kt)("h2",{id:"minimal-requirements"},"Minimal Requirements"),(0,n.kt)("p",null,"For requirements or design goals for a solution, here's what we came up with."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"MUST sync data reliably between devices. By reliably we mean having the ability to deal with messages being out of order, dropped, duplicated, or delayed.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"MUST NOT rely on any centralized services for reliability. By centralized services we mean any single point of failure that isn\u2019t one of the endpoint devices.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"MUST allow for mobile-friendly usage. By mobile-friendly we mean devices that are resource restricted, mostly-offline and often changing network.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"MAY use helper services in order to be more mobile-friendly. Examples of helper services are decentralized file storage solutions such as IPFS and Swarm. These help with availability and latency of data for mostly-offline devices.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"MUST have the ability to provide casual consistency. By casual consistency we mean the commonly accepted definition in distributed systems literature. This means messages that are casually related can achieve a partial ordering.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"MUST support ephemeral messages that don\u2019t need replication. That is, allow for messages that don\u2019t need to be reliabily transmitted but still needs to be transmitted between devices.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"MUST allow for privacy-preserving messages and extreme data loss. By privacy-preserving we mean things such as exploding messages (self-destructing messages). By extreme data loss we mean the ability for two trusted devices to recover from a, deliberate or accidental, removal of data.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"MUST be agnostic to whatever transport it is running on. It should not rely on specific semantics of the transport it is running on, nor be tightly coupled with it. This means a transport can be swapped out without loss of reliability between devices."))),(0,n.kt)("h2",{id:"mvds---a-minimium-viable-version"},"MVDS - a minimium viable version"),(0,n.kt)("p",null,"The first minimum viable version is in an alpha stage, and it has a ",(0,n.kt)("a",{parentName:"p",href:"https://rfc.vac.dev/spec/2"},"specification"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/vacp2p/mvds"},"implementation")," and we have deployed it in a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/status-im/status-console-client"},"console client")," for end to end functionality. It's heavily inspired by ",(0,n.kt)("a",{parentName:"p",href:"https://code.briarproject.org/briar/briar-spec/blob/master/protocols/BSP.md"},"Bramble Sync Protocol"),"."),(0,n.kt)("p",null,"The spec is fairly minimal. You have nodes that exchange records over some secure transport. These records are of different types, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"OFFER"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"MESSAGE"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"REQUEST"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"ACK"),". A peer keep tracks of the state of message for each node it is interacting with. There's also logic for message retransmission with exponential delay. The positive ACK and retransmission model is quite similar to how TCP is designed."),(0,n.kt)("p",null,"There are two different modes of syncing, interactive and batch mode. See sequence diagrams below."),(0,n.kt)("p",null,"Interactive mode:\n",(0,n.kt)("img",{alt:"Interactive mode",src:a(31784).Z,width:"656",height:"436"})),(0,n.kt)("p",null,"Batch mode:\n",(0,n.kt)("img",{alt:"Batch mode",src:a(93916).Z,width:"656",height:"278"})),(0,n.kt)("p",null,"Which mode should you choose? It's a tradeoff of latency and bandwidth. If you want to minimize latency, batch mode is better. If you care about preserving bandwidth interactive mode is better. The choice is up to each node."),(0,n.kt)("h3",{id:"basic-simulation"},"Basic simulation"),(0,n.kt)("p",null,"Initial ad hoc bandwidth and latency testing shows some issues with a naive approach. Running with the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/vacp2p/mvds/"},"default simulation settings"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"communicating nodes: 2"),(0,n.kt)("li",{parentName:"ul"},"nodes using interactive mode: 2"),(0,n.kt)("li",{parentName:"ul"},"interval between messages: 5s"),(0,n.kt)("li",{parentName:"ul"},"time node is offine: 90%"),(0,n.kt)("li",{parentName:"ul"},"nodes each node is sharing with: 2")),(0,n.kt)("p",null,"we notice a ",(0,n.kt)("a",{parentName:"p",href:"https://notes.status.im/7QYa4b6bTH2wMk3HfAaU0w#"},"huge overhead"),". More specifically, we see a ~5 minute latency overhead and a bandwidth multiplier of x100-1000, i.e. 2-3 orders of magnitude just for receiving a message with interactive mode, without acks."),(0,n.kt)("p",null,"Now, that seems terrible. A moment of reflection will reveal why that is. If each node is offline uniformly 90% of the time, that means that each record will be lost 90% of the time. Since interactive mode requires offer, request, payload (and then ack), that's three links just for Bob to receive the actual message."),(0,n.kt)("p",null,"Each failed attempt implies another retransmission. That means we have ",(0,n.kt)("inlineCode",{parentName:"p"},"(1/0.1)^3 = 1000")," expected overhead to receive a message in interactive mode. The latency follows naturally from that, with the retransmission logic."),(0,n.kt)("h3",{id:"mostly-offline-devices"},"Mostly-offline devices"),(0,n.kt)("p",null,"The problem above hints at the requirements 3 and 4 above. While we did get reliable syncing (requirement 1), it came at a big cost."),(0,n.kt)("p",null,"There are a few ways of getting around this issue. One is having a ",(0,n.kt)("em",{parentName:"p"},"store and forward")," model, where some intermediary node picks up (encrypted) messages and forwards them to the recipient. This is what we have in production right now at Status."),(0,n.kt)("p",null,"Another, arguably more pure and robust, way is having a ",(0,n.kt)("em",{parentName:"p"},"remote log"),", where the actual data is spread over some decentralized storage layer, and you have a mutable reference to find the latest messages, similar to DNS."),(0,n.kt)("p",null,"What they both have in common is that they act as a sort of highly-available cache to smooth over the non-overlapping connection windows between two endpoints. Neither of them are ",(0,n.kt)("em",{parentName:"p"},"required")," to get reliable data transmission."),(0,n.kt)("h3",{id:"basic-calculations-for-bandwidth-multiplier"},"Basic calculations for bandwidth multiplier"),(0,n.kt)("p",null,"While we do want better simulations, and this is a work in progress, we can also look at the above scenarios using some basic calculations. This allows us to build a better intuition and reason about the problem without having to write code. Let's start with some assumptions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"two nodes exchanging a single message in batch mode"),(0,n.kt)("li",{parentName:"ul"},"10% uniformly random uptime for each node"),(0,n.kt)("li",{parentName:"ul"},"in HA cache case, 100% uptime of a piece of infrastructure C"),(0,n.kt)("li",{parentName:"ul"},"retransmission every epoch (with constant or exponential backoff)"),(0,n.kt)("li",{parentName:"ul"},"only looking at average (p50) case")),(0,n.kt)("h4",{id:"first-case-no-helper-services"},"First case, no helper services"),(0,n.kt)("p",null,"A sends a message to B, and B acks it."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"A message -> B (10% chance of arrival)\nA   <- ack   B (10% chance of arrival)\n")),(0,n.kt)("p",null,"With a constant backoff, A will send messages at epoch ",(0,n.kt)("inlineCode",{parentName:"p"},"1, 2, 3, ..."),". With exponential backoff and a multiplier of 2, this would be ",(0,n.kt)("inlineCode",{parentName:"p"},"1, 2, 4, 8, ..."),". Let's assume constant backoff for now, as this is what will influence the success rate and thus the bandwidth multiplier."),(0,n.kt)("p",null,"There's a difference between ",(0,n.kt)("em",{parentName:"p"},"time to receive")," and ",(0,n.kt)("em",{parentName:"p"},"time to stop sending"),". Assuming each send attempt is independent, it takes on average 10 epochs for A's message to arrive with B. Furthermore:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A will send messages until it receives an ACK."),(0,n.kt)("li",{parentName:"ol"},"B will send ACK if it receives a message.")),(0,n.kt)("p",null,"To get an average of one ack through, A needs to send 100 messages, and B send on average 10 acks. That's a multiplier of roughly a 100. That's roughly what we saw with the simulation above for receiving a message in interactive mode."),(0,n.kt)("h4",{id:"second-case-high-availability-caching-layer"},"Second case, high-availability caching layer"),(0,n.kt)("p",null,"Let's introduce a helper node or piece of infrastructure, C. Whenever A or B sends a message, it also sends it to C. Whenever A or B comes online, it queries for messages with C."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"A message    -> B (10% chance of arrival)\nA message    -> C (100% chance of arrival)\nB <- req/res -> C (100% chance of arrival)\nA   <- ack      B (10% chance of arrival)\nC   <- ack      B (100% chance of arrival)\nA <- req/res -> C (100% chance of arrival)\n")),(0,n.kt)("p",null,"What's the probability that A's messages will arrive at B? Directly, it's still 10%. But we can assume it's 100% that C picks up the message. (Giving C a 90% chance success rate doesn't materially change the numbers)."),(0,n.kt)("p",null,"B will pick up A's message from C after an average of 10 epochs. Then B will send ack to A, which will also be picked up by C 100% of the time. Once A comes online again, it'll query C and receive B's ack."),(0,n.kt)("p",null,"Assuming we use exponential backoff with a multiplier of 2, A will send a message directly to B at epoch ",(0,n.kt)("inlineCode",{parentName:"p"},"1, 2, 4, 8")," (assuming it is online). At this point, epoch ",(0,n.kt)("inlineCode",{parentName:"p"},"10"),", B will be online in the average case. These direct sends will likely fail, but B will pick the message up from C and send one ack, both directly to A and to be picked up by C. Once A comes online, it'll query C and receive the ack from B, which means it won't do any more retransmits."),(0,n.kt)("p",null,"How many messages have been sent? Not counting interactions with C, A sends 4 (at most) and B 1. Depending on if the interaction with C is direct or indirect (i.e. multicast), the factor for interaction with C will be ~2. This means the total bandwidth multiplier is likely to be ",(0,n.kt)("inlineCode",{parentName:"p"},"<10"),", which is a lot more acceptable."),(0,n.kt)("p",null,"Since the syncing semantics are end-to-end, this is without relying on the reliablity of C."),(0,n.kt)("h4",{id:"caveat"},"Caveat"),(0,n.kt)("p",null,"Note that both of these are probabilistic argument. They are also based on heuristics. More formal analysis would be desirable, as well as better simulations to experimentally verify them. In fact, the calculations could very well be wrong!"),(0,n.kt)("h2",{id:"future-work"},"Future work"),(0,n.kt)("p",null,"There are many enhancements that can be made and are desirable. Let's outline a few."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Data sync clients. Examples of actual usage of data sync, with more interesting domain semantics. This also includes usage of sequence numbers and DAGs to know what content is missing and ought to be synced.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Remote log. As alluded to above, this is necessary. It needs a more clear specification and solid proof of concepts.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"More efficient ways of syncing with large number of nodes. When the number of nodes goes up, the algorithmic complexity doesn't look great. This also touches on things such as ambient content discovery.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"More robust simulations and real-world deployments. Exisiting simulation is ad hoc, and there are many improvements that can be made to gain more confidence and identify issues. Additionally, better formal analysis.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Example usage over multiple transports. Including things like sneakernet and meshnets. The described protocol is designed to work over unstructured, structured and private p2p networks. In some cases it can leverage differences in topology, such as multicast, or direct connections."))))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),m=c(a),p=n,u=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return a?i.createElement(u,r(r({ref:t},h),{},{components:a})):i.createElement(u,r({ref:t},h))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93916:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/mvds_batch-8bb753ee771b1f96610ba432fa7fcec3.png"},31784:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/mvds_interactive-b04b5377d67c337013e72abbbd40ec69.png"}}]);
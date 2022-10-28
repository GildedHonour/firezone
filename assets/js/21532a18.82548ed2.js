"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[7092],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=i,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={title:"nftables Firewall Template",sidebar_position:1},o=void 0,l={unversionedId:"reference/firewall-templates/nftables",id:"reference/firewall-templates/nftables",title:"nftables Firewall Template",description:"The following nftables firewall template can be used to secure the server",source:"@site/docs/reference/firewall-templates/nftables.mdx",sourceDirName:"reference/firewall-templates",slug:"/reference/firewall-templates/nftables",permalink:"/reference/firewall-templates/nftables",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/reference/firewall-templates/nftables.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"nftables Firewall Template",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Firewall Templates",permalink:"/reference/firewall-templates/"},next:{title:"Security Controls",permalink:"/reference/security-controls"}},c={},s=[{value:"Firezone Managed Rules",id:"firezone-managed-rules",level:4},{value:"Base Firewall Template",id:"base-firewall-template",level:4},{value:"Usage",id:"usage",level:4}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following nftables firewall template can be used to secure the server\nrunning Firezone. The template does make some assumptions; you may need to\nadjust the rules to suite your use case:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The WireGuard interface is named ",(0,i.kt)("inlineCode",{parentName:"li"},"wg-firezone"),". If this is not correct,\nchange the ",(0,i.kt)("inlineCode",{parentName:"li"},"DEV_WIREGUARD")," variable to match the\n",(0,i.kt)("inlineCode",{parentName:"li"},"default['firezone']['wireguard']['interface_name']")," configuration option."),(0,i.kt)("li",{parentName:"ul"},"The port WireGuard is listening on is ",(0,i.kt)("inlineCode",{parentName:"li"},"51820"),". If you are not using the\ndefault port change the ",(0,i.kt)("inlineCode",{parentName:"li"},"WIREGUARD_PORT")," variable."),(0,i.kt)("li",{parentName:"ul"},"Only the following inbound traffic will be allowed to the server:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"SSH (TCP dport 22)"),(0,i.kt)("li",{parentName:"ul"},"HTTP (TCP dport 80)"),(0,i.kt)("li",{parentName:"ul"},"HTTPS (TCP dport 443)"),(0,i.kt)("li",{parentName:"ul"},"WireGuard (UDP dport ",(0,i.kt)("inlineCode",{parentName:"li"},"WIREGUARD_PORT"),")"),(0,i.kt)("li",{parentName:"ul"},"UDP traceroute (UDP dport 33434-33524, rate limited to 500/second)"),(0,i.kt)("li",{parentName:"ul"},"ICMP and ICMPv6 (ping/ping responses rate limited to 2000/second)"))),(0,i.kt)("li",{parentName:"ul"},"Only the following outbound traffic will be allowed from the server:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"DNS (UDP and TCP dport 53)"),(0,i.kt)("li",{parentName:"ul"},"HTTP (TCP dport 80)"),(0,i.kt)("li",{parentName:"ul"},"NTP (UDP port 123)"),(0,i.kt)("li",{parentName:"ul"},"HTTPS (TCP dport 443)"),(0,i.kt)("li",{parentName:"ul"},"SMTP submission (TCP dport 587)"),(0,i.kt)("li",{parentName:"ul"},"UDP traceroute (UDP dport 33434-33524, rate limited to 500/second)"))),(0,i.kt)("li",{parentName:"ul"},"Unmatched traffic will be logged. The rules used for logging are separated\nfrom the rules to drop traffic and are rate limited. Removing the relevant\nlogging rules will not affect trafic.")),(0,i.kt)("h4",{id:"firezone-managed-rules"},"Firezone Managed Rules"),(0,i.kt)("p",null,"Firezone configures its own nftables rules to permit/reject traffic to destinations\nconfigured in the web interface and to handle outbound NAT for client traffic."),(0,i.kt)("p",null,"Applying the below firewall template on an already running server (not at boot time)\nwill result in the Firezone rules being cleared. This may have security implications."),(0,i.kt)("p",null,"To work around this restart the ",(0,i.kt)("inlineCode",{parentName:"p"},"phoenix")," service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"firezone-ctl restart phoenix\n")),(0,i.kt)("h4",{id:"base-firewall-template"},"Base Firewall Template"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'#!/usr/sbin/nft -f\n\n## Clear/flush all existing rules\nflush ruleset\n\n################################ VARIABLES ################################\n## Internet/WAN interface name\ndefine DEV_WAN = eth0\n\n## WireGuard interface name\ndefine DEV_WIREGUARD = wg-firezone\n\n## WireGuard listen port\ndefine WIREGUARD_PORT = 51820\n############################## VARIABLES END ##############################\n\n# Main inet family filtering table\ntable inet filter {\n\n  # Rules for forwarded traffic\n  # This chain is processed before the Firezone forward chain\n  chain forward {\n    type filter hook forward priority filter - 5; policy accept\n  }\n\n  # Rules for input traffic\n  chain input {\n    type filter hook input priority filter; policy drop\n\n    ## Permit inbound traffic to loopback interface\n    iif lo \\\n      accept \\\n      comment "Permit all traffic in from loopback interface"\n\n    ## Permit established and related connections\n    ct state established,related \\\n      accept \\\n      comment "Permit established/related connections"\n\n    ## Permit inbound WireGuard traffic\n    iif $DEV_WAN udp dport $WIREGUARD_PORT \\\n      counter \\\n      accept \\\n      comment "Permit inbound WireGuard traffic"\n\n    ## Log and drop new TCP non-SYN packets\n    tcp flags != syn ct state new \\\n      limit rate 100/minute burst 150 packets \\\n      log prefix "IN - New !SYN: " \\\n      comment "Rate limit logging for new connections that do not have the SYN TCP flag set"\n    tcp flags != syn ct state new \\\n      counter \\\n      drop \\\n      comment "Drop new connections that do not have the SYN TCP flag set"\n\n    ## Log and drop TCP packets with invalid fin/syn flag set\n    tcp flags & (fin|syn) == (fin|syn) \\\n      limit rate 100/minute burst 150 packets \\\n      log prefix "IN - TCP FIN|SIN: " \\\n      comment "Rate limit logging for TCP packets with invalid fin/syn flag set"\n    tcp flags & (fin|syn) == (fin|syn) \\\n      counter \\\n      drop \\\n      comment "Drop TCP packets with invalid fin/syn flag set"\n\n    ## Log and drop TCP packets with invalid syn/rst flag set\n    tcp flags & (syn|rst) == (syn|rst) \\\n      limit rate 100/minute burst 150 packets \\\n      log prefix "IN - TCP SYN|RST: " \\\n      comment "Rate limit logging for TCP packets with invalid syn/rst flag set"\n    tcp flags & (syn|rst) == (syn|rst) \\\n      counter \\\n      drop \\\n      comment "Drop TCP packets with invalid syn/rst flag set"\n\n    ## Log and drop invalid TCP flags\n    tcp flags & (fin|syn|rst|psh|ack|urg) < (fin) \\\n      limit rate 100/minute burst 150 packets \\\n      log prefix "IN - FIN:" \\\n      comment "Rate limit logging for invalid TCP flags (fin|syn|rst|psh|ack|urg) < (fin)"\n    tcp flags & (fin|syn|rst|psh|ack|urg) < (fin) \\\n      counter \\\n      drop \\\n      comment "Drop TCP packets with flags (fin|syn|rst|psh|ack|urg) < (fin)"\n\n    ## Log and drop invalid TCP flags\n    tcp flags & (fin|syn|rst|psh|ack|urg) == (fin|psh|urg) \\\n      limit rate 100/minute burst 150 packets \\\n      log prefix "IN - FIN|PSH|URG:" \\\n      comment "Rate limit logging for invalid TCP flags (fin|syn|rst|psh|ack|urg) == (fin|psh|urg)"\n    tcp flags & (fin|syn|rst|psh|ack|urg) == (fin|psh|urg) \\\n      counter \\\n      drop \\\n      comment "Drop TCP packets with flags (fin|syn|rst|psh|ack|urg) == (fin|psh|urg)"\n\n    ## Drop traffic with invalid connection state\n    ct state invalid \\\n      limit rate 100/minute burst 150 packets \\\n      log flags all prefix "IN - Invalid: " \\\n      comment "Rate limit logging for traffic with invalid connection state"\n    ct state invalid \\\n      counter \\\n      drop \\\n      comment "Drop traffic with invalid connection state"\n\n    ## Permit IPv4 ping/ping responses but rate limit to 2000 PPS\n    ip protocol icmp icmp type { echo-reply, echo-request } \\\n      limit rate 2000/second \\\n      counter \\\n      accept \\\n      comment "Permit inbound IPv4 echo (ping) limited to 2000 PPS"\n\n    ## Permit all other inbound IPv4 ICMP\n    ip protocol icmp \\\n      counter \\\n      accept \\\n      comment "Permit all other IPv4 ICMP"\n\n    ## Permit IPv6 ping/ping responses but rate limit to 2000 PPS\n    icmpv6 type { echo-reply, echo-request } \\\n      limit rate 2000/second \\\n      counter \\\n      accept \\\n      comment "Permit inbound IPv6 echo (ping) limited to 2000 PPS"\n\n    ## Permit all other inbound IPv6 ICMP\n    meta l4proto { icmpv6 } \\\n      counter \\\n      accept \\\n      comment "Permit all other IPv6 ICMP"\n\n    ## Permit inbound traceroute UDP ports but limit to 500 PPS\n    udp dport 33434-33524 \\\n      limit rate 500/second \\\n      counter \\\n      accept \\\n      comment "Permit inbound UDP traceroute limited to 500 PPS"\n\n    ## Permit inbound SSH\n    tcp dport ssh ct state new \\\n      counter \\\n      accept \\\n      comment "Permit inbound SSH connections"\n\n    ## Permit inbound HTTP and HTTPS\n    tcp dport { http, https } ct state new \\\n      counter \\\n      accept \\\n      comment "Permit inbound HTTP and HTTPS connections"\n\n    ## Log any unmatched traffic but rate limit logging to a maximum of 60 messages/minute\n    ## The default policy will be applied to unmatched traffic\n    limit rate 60/minute burst 100 packets \\\n      log prefix "IN - Drop: " \\\n      comment "Log any unmatched traffic"\n\n    ## Count the unmatched traffic\n    counter \\\n      comment "Count any unmatched traffic"\n  }\n\n  # Rules for output traffic\n  chain output {\n    type filter hook output priority filter; policy drop\n\n    ## Permit outbound traffic to loopback interface\n    oif lo \\\n      accept \\\n      comment "Permit all traffic out to loopback interface"\n\n    ## Permit established and related connections\n    ct state established,related \\\n      counter \\\n      accept \\\n      comment "Permit established/related connections"\n\n    ## Permit outbound WireGuard traffic before dropping connections with bad state\n    oif $DEV_WAN udp sport $WIREGUARD_PORT \\\n      counter \\\n      accept \\\n      comment "Permit WireGuard outbound traffic"\n\n    ## Drop traffic with invalid connection state\n    ct state invalid \\\n      limit rate 100/minute burst 150 packets \\\n      log flags all prefix "OUT - Invalid: " \\\n      comment "Rate limit logging for traffic with invalid connection state"\n    ct state invalid \\\n      counter \\\n      drop \\\n      comment "Drop traffic with invalid connection state"\n\n    ## Permit all other outbound IPv4 ICMP\n    ip protocol icmp \\\n      counter \\\n      accept \\\n      comment "Permit all IPv4 ICMP types"\n\n    ## Permit all other outbound IPv6 ICMP\n    meta l4proto { icmpv6 } \\\n      counter \\\n      accept \\\n      comment "Permit all IPv6 ICMP types"\n\n    ## Permit outbound traceroute UDP ports but limit to 500 PPS\n    udp dport 33434-33524 \\\n      limit rate 500/second \\\n      counter \\\n      accept \\\n      comment "Permit outbound UDP traceroute limited to 500 PPS"\n\n    ## Permit outbound HTTP and HTTPS connections\n    tcp dport { http, https } ct state new \\\n      counter \\\n      accept \\\n      comment "Permit outbound HTTP and HTTPS connections"\n\n    ## Permit outbound SMTP submission\n    tcp dport submission ct state new \\\n      counter \\\n      accept \\\n      comment "Permit outbound SMTP submission"\n\n    ## Permit outbound DNS requests\n    udp dport 53 \\\n      counter \\\n      accept \\\n      comment "Permit outbound UDP DNS requests"\n    tcp dport 53 \\\n      counter \\\n      accept \\\n      comment "Permit outbound TCP DNS requests"\n\n    ## Permit outbound NTP requests\n    udp dport 123 \\\n      counter \\\n      accept \\\n      comment "Permit outbound NTP requests"\n\n    ## Log any unmatched traffic but rate limit logging to a maximum of 60 messages/minute\n    ## The default policy will be applied to unmatched traffic\n    limit rate 60/minute burst 100 packets \\\n      log prefix "OUT - Drop: " \\\n      comment "Log any unmatched traffic"\n\n    ## Count the unmatched traffic\n    counter \\\n      comment "Count any unmatched traffic"\n  }\n\n}\n\n# Main NAT filtering table\ntable inet nat {\n\n  # Rules for NAT traffic pre-routing\n  chain prerouting {\n    type nat hook prerouting priority dstnat; policy accept\n  }\n\n  # Rules for NAT traffic post-routing\n  # This table is processed before the Firezone post-routing chain\n  chain postrouting {\n    type nat hook postrouting priority srcnat - 5; policy accept\n  }\n\n}\n')),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,"The firewall should be stored in the relevant location for the Linux distribution\nthat is running. For Debian/Ubuntu this is ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/nftables.conf")," and for RHEL this\nis ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/sysconfig/nftables.conf"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"nftables.service")," will need to be configured to start on boot (if not already) set:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable nftables.service\n")),(0,i.kt)("p",null,"If making any changes to the firewall template the syntax can be validated by running\nthe check command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"nft -f /path/to/nftables.conf -c\n")),(0,i.kt)("p",null,"Be sure to validate the firewall works as expected as certain nftables features may\nnot be available depending on the release running on the server."))}u.isMDXComponent=!0}}]);
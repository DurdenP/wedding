(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,a){e.exports=a.p+"static/media/davide_sofia.1f4b0ec8.jpeg"},168:function(e,t,a){e.exports=a(394)},175:function(e,t,a){},176:function(e,t,a){},185:function(e,t,a){},388:function(e,t,a){e.exports=a.p+"static/media/in1.9c259bc7.jpeg"},389:function(e,t,a){e.exports=a.p+"static/media/in2.ff3e963e.jpeg"},390:function(e,t,a){e.exports=a.p+"static/media/bridal1.ce7f640a.jpeg"},391:function(e,t,a){},394:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(22),c=a.n(r),i=(a(173),a(174),a(175),a(31)),o=a(165),m=a(4),s=(a(176),a(3)),u=a(69),d=a.n(u),f=a(161),p=a.n(f);a(184);var E=a(49),g=(a(185),60),v=3600,h=86400,b={isPlaying:!0,size:window.screen.width>=1280?170:100,strokeWidth:7},y=function(e,t){return l.a.createElement("div",{className:"time-wrapper"},l.a.createElement("div",{className:"time"},t),l.a.createElement("div",null,e))},j=function(e){return g-e|0},w=function(e){return e%v/g|0},N=function(e){return e%h/v|0},O=function(e){return e/h|0};function k(){var e=Date.now()/1e3,t=Date.UTC(2022,7,29,0,0,0)/1e3-e,a=Math.ceil(t/h)*h;return t>0?l.a.createElement("div",{className:"Countdown"},l.a.createElement(E.a,Object.assign({},b,{colors:"#7E2E84",duration:a,initialRemainingTime:t}),function(e){var t=e.elapsedTime,n=e.color;return l.a.createElement("span",{style:{color:n}},y("days",O(a-t)))}),l.a.createElement(E.a,Object.assign({},b,{colors:"#D14081",duration:h,initialRemainingTime:t%h,onComplete:function(e){return{shouldRepeat:t-e>v}}}),function(e){var t=e.elapsedTime,a=e.color;return l.a.createElement("span",{style:{color:a}},y("hours",N(h-t)))}),l.a.createElement(E.a,Object.assign({},b,{colors:"#EF798A",duration:v,initialRemainingTime:t%v,onComplete:function(e){return{shouldRepeat:t-e>g}}}),function(e){var t=e.elapsedTime,a=e.color;return l.a.createElement("span",{style:{color:a}},y("minutes",w(v-t)))}),l.a.createElement(E.a,Object.assign({},b,{colors:"#218380",duration:g,initialRemainingTime:t%g,onComplete:function(e){return{shouldRepeat:t-e>0}}}),function(e){var t=e.elapsedTime,a=e.color;return l.a.createElement("span",{style:{color:a}},y("seconds",j(t)))})):null}var C=a(162),M=a.n(C);var I=a(19),R=[a(388),a(389)],x={global:{googleMapAPIKey:"AIzaSyDxafCn3Eicwhi3omoQzKw_qkmpQq2guVQ",comment:{livere:{enable:!1,service:"city",uid:"MTAyMC8yNTYzNi8yMjMy"},facebook:{enable:!1,appId:"1535680996513864"}}},title:"Matrimonio Davide e Sofia",wedding:{church:{name:"Chiesa del Carmine",address:"Via Circonvallazione, 44A, 92010 Siculiana AG, Italy",latitude:37.33882187166443,longitude:13.41998828157326},place:{name:"Parco Chiaramontano",address:"Via Giovanni Amendola, 1, 92027 Licata AG, Italy",latitude:37.104400122563746,longitude:13.936244398132272},at:"2022-08-29 16:00"},bridal:{name:"Sofia",image:a(390),phone:"+821011111111",facebook:!1,father:"",mother:"",position:""},groom:{name:"Davide",image:a(158),phone:"+821022222222",facebook:"https://www.facebook.com/luckyyowu",father:"",mother:"",position:""},image:{header:a(158),gallery:R.map(function(e){return{original:e,thumbnail:e}})}},T=Object(I.withScriptjs)(Object(I.withGoogleMap)(function(e){var t=e.settings,a=t.latitude,n=t.longitude,r=t.address;return l.a.createElement("div",null,a&&l.a.createElement(I.GoogleMap,{defaultZoom:17,defaultCenter:{lat:a,lng:n}},l.a.createElement(I.Marker,{position:{lat:a,lng:n}},l.a.createElement(I.InfoWindow,null,l.a.createElement("div",null,l.a.createElement("p",{className:"lead text-left"},l.a.createElement(s.a,null,"Indirizzo:")," ",r))))))}));function P(){return l.a.createElement("div",null,l.a.createElement(T,{settings:x.wedding.place,googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=".concat(x.global.googleMapAPIKey),loadingElement:l.a.createElement("div",{style:{height:"100%"}}),containerElement:l.a.createElement("div",{style:{height:"450px"}}),mapElement:l.a.createElement("div",{style:{height:"100%"}})}))}var A=a(70),S=a(71),D=a(73),B=a(72),z=a(42);function G(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(z.a)(e);if(t){var l=Object(z.a)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return Object(B.a)(this,a)}}var L=function(e){Object(D.a)(a,e);var t=G(a);function a(){return Object(A.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"componentDidMount",value:function(){!function(e,t){var a=e.getElementsByTagName(t)[0];if("function"!==typeof LivereTower){var n=e.createElement(t);n.src="https://cdn-city.livere.com/js/embed.dist.js",n.async=!0,a.parentNode.insertBefore(n,a)}}(document,"script")}},{key:"render",value:function(){var e=this.props.config,t=e.service,a=e.uid;return l.a.createElement("div",{id:"lv-container","data-id":t,"data-uid":a})}}]),a}(l.a.Component);function K(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(z.a)(e);if(t){var l=Object(z.a)(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return Object(B.a)(this,a)}}var Y=function(e){Object(D.a)(a,e);var t=K(a);function a(){return Object(A.a)(this,a),t.apply(this,arguments)}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.config.appId;!function(e,t,a,n){var l=e.getElementsByTagName(t)[0];if(!e.getElementById(a)){var r=e.createElement(t);r.id=a,r.src="https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.11&appId=".concat(n),l.parentNode.insertBefore(r,l)}}(document,"script","facebook-jssdk",e)}},{key:"render",value:function(){return l.a.createElement("div",{className:"fb-comments","data-href":"https://developers.facebook.com/docs/plugins/comments#configurator","data-width":"100%","data-numposts":"8"})}}]),a}(l.a.Component);var H=Object(I.withScriptjs)(Object(I.withGoogleMap)(function(e){var t=e.settings,a=t.latitude,n=t.longitude,r=t.address;return l.a.createElement("div",null,l.a.createElement(I.GoogleMap,{defaultZoom:17,defaultCenter:{lat:a,lng:n}},l.a.createElement(I.Marker,{position:{lat:a,lng:n}},l.a.createElement(I.InfoWindow,null,l.a.createElement("div",null,l.a.createElement("p",{className:"lead text-left"},l.a.createElement(s.a,null,"Indirizzo:")," ",r))))))}));function q(){return l.a.createElement("div",null,l.a.createElement(H,{settings:x.wedding.church,googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=".concat(x.global.googleMapAPIKey),loadingElement:l.a.createElement("div",{style:{height:"100%"}}),containerElement:l.a.createElement("div",{style:{height:"450px"}}),mapElement:l.a.createElement("div",{style:{height:"100%"}})}))}a(391);function J(e){var t=e.setIsAuth,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],o=r[1],m=Object(n.useState)(""),s=Object(i.a)(m,2),u=s[0],d=s[1];var f=l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"form"},l.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),o(""),u){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:u})};fetch("https://wedding-auth.herokuapp.com/auth",a).then(function(e){201===e.status?t(!0):o("Invalid password")})}}},l.a.createElement("div",{className:"input-container"},l.a.createElement("label",null,"Password "),l.a.createElement("input",{type:"password",name:"pass",required:!0,onChange:function(e){return d(e.target.value)}}),c&&l.a.createElement("div",{className:"error"},c)),l.a.createElement("div",{className:"button-container"},l.a.createElement("input",{type:"submit"})))));return l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"login-form"},f))}var Q={Header:function(e){var t=e.config,a=t.image,n=t.wedding;return d.a.locale("ita"),l.a.createElement(s.d,null,l.a.createElement(s.b,null,l.a.createElement(s.d,null,l.a.createElement(s.b,{className:"app-fluid"},l.a.createElement("div",{className:"app-header d-flex justify-content-center align-items-center"},l.a.createElement("h2",{className:"mb-0"},"Matrimonio Davide ",l.a.createElement(p.a,{name:"heart"})," "," Sofia")),l.a.createElement("img",{className:"img-fluid",src:a.header,alt:"header"}))),l.a.createElement(s.d,null,l.a.createElement(s.b,{className:"pt-5"},l.a.createElement("p",{className:"lead pt-3"},d()(n.at,"YYYY-MM-DD HH:mm").format("LLLL")),l.a.createElement("p",{className:"lead"},"".concat(n.church.name," - ").concat(n.place.name))))))},Profile:function(e){return l.a.createElement(s.d,{className:"mt-3 mb-5",style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement(k,null))},Gallery:function(e){var t=e.config.image;return l.a.createElement("div",null,l.a.createElement(s.d,{className:"mb-5"},l.a.createElement(s.b,null,l.a.createElement("h4",null,"Foto"))),l.a.createElement(s.d,{className:"mb-5"},l.a.createElement(s.b,null,l.a.createElement(M.a,{items:t.gallery,showIndex:!0}))))},Church:function(e){var t=e.config.wedding.place.name;return l.a.createElement("div",null,l.a.createElement(s.d,null,l.a.createElement(s.b,null,l.a.createElement(s.d,{className:"pt-3"},l.a.createElement(s.b,null,l.a.createElement("h3",null,t))),l.a.createElement(s.d,{className:"pt-3"},l.a.createElement(s.b,null,l.a.createElement(q,null))))))},Place:function(e){var t=e.config.wedding.church.name;return l.a.createElement("div",null,l.a.createElement(s.d,null,l.a.createElement(s.b,null,l.a.createElement(s.d,{className:"pt-3"},l.a.createElement(s.b,null,l.a.createElement("h3",null,t))),l.a.createElement(s.d,{className:"pt-3"},l.a.createElement(s.b,null,l.a.createElement(P,null))))))},Comment:function(e){var t=e.config.global.comment,a=t.livere,n=t.facebook,r=l.a.createElement(s.d,null,l.a.createElement(s.b,null,l.a.createElement(L,{config:a}))),c=l.a.createElement(s.d,null,l.a.createElement(s.b,null,l.a.createElement(Y,{config:n})));return l.a.createElement(s.d,null,l.a.createElement(s.b,null,a.enable?r:"",n.enable?c:""))},Password:J};function U(){return l.a.createElement("div",null,l.a.createElement(s.c,{className:"app"},l.a.createElement(Q.Header,{config:x}),l.a.createElement(Q.Profile,{config:x}),l.a.createElement(Q.Gallery,{config:x}),l.a.createElement(Q.Place,{config:x}),l.a.createElement(Q.Church,{config:x}),l.a.createElement(Q.Comment,{config:x})))}function V(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1];return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(m.d,null,l.a.createElement(m.b,{path:"/wedding",render:function(e){return a?l.a.createElement(U,Object.assign({},e,{setIsAuth:r})):l.a.createElement(m.a,{to:"/password"})}}),l.a.createElement(m.b,{path:"/password",render:function(e){return a?l.a.createElement(m.a,{to:"/wedding"}):l.a.createElement(J,Object.assign({},e,{setIsAuth:r}))}}))))}c.a.render(l.a.createElement(V,null),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.ab51e3cd.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{34:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(13),s=n.n(a),i=(n(34),n(16)),r=n(24),o=n(17),u=Object(o.b)({name:"dashboard",initialState:{launches:[]},reducers:{fetchLaunchData:function(e,t){console.log(t.payload),e.launches=Object(r.a)(t.payload)}}}),h=u.actions.fetchLaunchData,l=u.reducer,d=n(22),j=n(23),b=n(26),p=n(25),f=n(65),O=n(63),m=n(64),x=n(19),L=n(62),v={FLIGHT_NUMBER:"Flight number",LAUNCH_DATE:"Launch date",LAUNCH_STATUS:"Launch status",DEFAULT_IMG_URL:"https://live.staticflickr.com/65535/50291453997_aa715950e7_o.jpg",SUCCESS:"Successs",FAILURE:"Failuress"},g=n(59),_=Object(g.a)((function(e){return{root:{width:500,marginBottom:30},cardContainer:{display:"flex",justifyContent:"center"},media:{height:0,paddingTop:"56.25%"}}})),S=n(3);var U=function(e){var t=e.launchData,n=t.flight_number,c=t.details,a=t.launch_date_unix,s=t.launch_success,i=t.mission_name,r=t.links.flickr_images,o=v.FLIGHT_NUMBER,u=v.LAUNCH_DATE,h=v.LAUNCH_STATUS,l=v.DEFAULT_IMG_URL,d=v.SUCCESS,j=v.FAILURE,b=_(),p=Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{children:[o,": ",n]}),Object(S.jsxs)("div",{children:[u,": ",a]}),Object(S.jsxs)("div",{children:[h,": ",s?d:j]})]});return Object(S.jsx)("div",{className:b.cardContainer,children:Object(S.jsxs)(f.a,{className:b.root,children:[Object(S.jsx)(L.a,{title:i,subheader:p}),Object(S.jsx)(O.a,{className:b.media,image:r[0]||l,title:i}),Object(S.jsx)(m.a,{children:Object(S.jsx)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:c})})]})})},C=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(d.a)(this,n),t.call(this,e)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.getLaunchData()}},{key:"render",value:function(){var e=this.props.launches;return console.log("launches",e),Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)("h1",{children:"SpaceX Launches"}),e.map((function(e){return Object(S.jsx)(U,{launchData:e})}))]})}}]),n}(c.Component),A=Object(i.b)((function(e){var t=e.dashoard;return{count:t.count,launches:t.launches}}),(function(e){return{getLaunchData:function(){return e((function(e){fetch("https://api.spacexdata.com/v3/launches").then((function(e){return e.json()})).then((function(t){return e(h(t))})).catch((function(e){console.error(e)}))}))}}}))(C);n(41);var T=function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(A,{})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))},F=Object(o.a)({reducer:{dashoard:l}});s.a.render(Object(S.jsx)(c.StrictMode,{children:Object(S.jsx)(i.a,{store:F,children:Object(S.jsx)(T,{})})}),document.getElementById("root")),D()}},[[42,1,2]]]);
//# sourceMappingURL=main.8fd88f97.chunk.js.map
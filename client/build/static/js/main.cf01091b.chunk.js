(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{128:function(e,t,a){e.exports=a(157)},133:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),l=(a(133),a(9)),i=a(216),u=a(33),m=a(15),s=a(239),d=a(207),p=a(210),f=a(211),v=a(212),h=a(213),g=a(214),b=a(215),y=a(96),E=a.n(y),O=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{image:E.a}),r.a.createElement(v.a,null,r.a.createElement(h.a,{variant:"body1",gutterBottom:!0},"Welcome to World Places. A Open Source and human edited resource of all countries, region/states, cities/towns across the world. You can update the information any time by cloning the repo - making updates into the local data, re-exporting the json, and creating a pull request.")),r.a.createElement(g.a,null,r.a.createElement(b.a,{variant:"contained",color:"primary",target:"_blank",href:"https://github.com/jimmyjamieson/world-places"},"GitHub"),r.a.createElement(b.a,{variant:"contained",color:"secondary",target:"_blank",href:"http://localhost:4000/api"},"API"),r.a.createElement(b.a,{variant:"contained",color:"secondary",target:"_blank",href:"http://localhost:4000/docs"},"DOCS")))))},w=a(235),x=a(12),j=a.n(x),C=a(17),k=a(228),S=a(227),D=a(229),N=a(226),T=a(243),I=a(75),A=a(217),P=a(244),B=Object(i.a)({toolbar:{display:"flex",alignItems:"center",justifyContent:"space-between"}}),z=Object(n.memo)((function(e){var t=e.name,a=void 0===t?"Listing":t,n=e.setSearchQuery,o=B();return r.a.createElement(A.a,{variant:"regular",className:o.toolbar},r.a.createElement(h.a,{variant:"h6",id:"tableTitle",component:"div"},a.toUpperCase()),r.a.createElement(P.a,{label:"Search",onChange:function(e){var t=null===e||void 0===e?void 0:e.target,a={$or:[{name:{$contL:null===t||void 0===t?void 0:t.value}},{nativeName:{$contL:null===t||void 0===t?void 0:t.value}},{code:{$contL:null===t||void 0===t?void 0:t.value}}]};n(a)}}))})),L=a(223),R=a(221),_=a(222),q=a(99),M=a.n(q),V=a(100),W=a.n(V),$=Object(i.a)({iconWrapper:{display:"flex",justifyContent:"center"},icon:{}}),H=Object(n.memo)((function(e){var t=e.direction,a=$();return r.a.createElement("div",{className:a.iconWrapper},"ASC"===t?r.a.createElement(M.a,{className:a.icon,fontSize:"small"}):r.a.createElement(W.a,{className:a.icon,fontSize:"small"}))})),F=a(3),U=Object(i.a)((function(e){return{innerTableCellSelected:{color:e.palette.primary.main}}})),G=Object(n.memo)((function(e){var t=e.align,a=e.children,n=e.order,o=e.setOrder,c=e.columnKey,l=U(),i=null===n||void 0===n?void 0:n.split(",")[0],u=null===n||void 0===n?void 0:n.split(",")[1],m=i===c;return r.a.createElement(R.a,{align:t,onClick:function(){var e="ASC"===u?"DESC":"ASC",t="".concat(c,",").concat(e);o(t)}},r.a.createElement(b.a,{className:Object(F.a)(m&&l.innerTableCellSelected)},a," ",m&&r.a.createElement(H,{direction:u})))})),Y=Object(n.memo)((function(e){var t=e.config,a=void 0===t?{}:t,n=e.order,o=e.setOrder,c=a.columns;return r.a.createElement(_.a,null,r.a.createElement(L.a,null,c&&c.map((function(e){return r.a.createElement(G,{key:e.key,columnKey:e.key,align:e.align||"left",order:n,setOrder:o},e.name.toUpperCase())})),r.a.createElement(R.a,{align:"right"},"EDIT"),r.a.createElement(R.a,{align:"right"},"DELETE")))})),Z=a(224),J=a(102),K=a.n(J),Q=a(101),X=a.n(Q),ee=Object(n.memo)((function(e){var t=e.row,a=e.handleDelete,n=e.handleOpenForm,o=e.columns;return r.a.createElement(L.a,{key:t.id},o.map((function(e){return r.a.createElement(R.a,{align:e.align||"left",key:e.id},t[e.value])})),r.a.createElement(R.a,{align:"right"},r.a.createElement(Z.a,{onClick:function(){return n(t.id)}},r.a.createElement(X.a,{fontSize:"small"}))),r.a.createElement(R.a,{align:"right"},r.a.createElement(Z.a,{onClick:function(){return a(t.id)}},r.a.createElement(K.a,{fontSize:"small"}))))})),te=a(245),ae=function(e){var t=e.children,a=e.tableColumnCount,n=e.severity,o=void 0===n?"error":n;e.style;return r.a.createElement(L.a,null,r.a.createElement(R.a,{colSpan:a},r.a.createElement(te.a,{severity:o},t)))},ne=a(225),re=a(103),oe=a.n(re),ce=Object(i.a)((function(e){return{fab:{position:"absolute",bottom:"2rem",right:"2rem"}}})),le=function(e){var t=e.onClick,a=ce();return r.a.createElement(ne.a,{className:a.fab,color:"secondary","aria-label":"add",onClick:t},r.a.createElement(oe.a,null))},ie=Object(n.memo)((function(e){var t=e.fetchData,a=e.deleteData,o=e.config,c=e.formComponent;if(!o)return r.a.createElement(N.a,null,r.a.createElement(S.a,null,r.a.createElement(ae,null,"No table config provided")));var i=Object(n.useState)(!1),u=Object(l.a)(i,2),m=u[0],s=u[1],d=Object(n.useState)([]),p=Object(l.a)(d,2),f=p[0],v=p[1],h=Object(n.useState)(0),g=Object(l.a)(h,2),b=g[0],y=g[1],E=Object(n.useState)(1),O=Object(l.a)(E,2),w=O[0],x=O[1],A=Object(n.useState)(o.order||"name, ASC"),P=Object(l.a)(A,2),B=P[0],L=P[1],R=Object(n.useState)({}),_=Object(l.a)(R,2),q=_[0],M=_[1],V=Object(n.useState)(o.rows||10),W=Object(l.a)(V,2),$=W[0],H=W[1],F=Object(n.useState)(null),U=Object(l.a)(F,2),G=U[0],Z=U[1],J=Object(n.useState)({open:!1,id:null}),K=Object(l.a)(J,2),Q=K[0],X=K[1],te=c,ne=function(){if(!t)return Z("No fetch data function exists, please add a fetchData function"),null;var e={limit:$,page:w,sort:B,s:q,query:{alwaysPaginate:!0},cache:o.cache};s(!0),t(e).then((function(e){y(e.data.total),v(e.data),s(!1)}))};Object(n.useEffect)((function(){ne()}),[w,q,B]);var re=function(){var e=Object(C.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(C.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M(t),x(1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=Object(C.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete?")){e.next=11;break}return e.prev=2,e.next=5,a(t);case 5:return e.next=7,ne();case 7:e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(C.a)(j.a.mark((function e(t,a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(a);case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),ue=function(){var e=Object(C.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(+t.target.value);case 2:return e.next=4,x(0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),me=function(e){X({open:!0,id:e})},se=function(){X({open:!1,id:null})},de=f.data,pe=de&&de.length>0,fe=o.columns,ve=void 0===fe?[]:fe,he=o.name,ge=void 0===he?"":he,be=(o.altName,ve.length+2);return r.a.createElement(I.a,null,r.a.createElement(le,{onClick:function(){return me()}}),Q.open&&r.a.createElement(te,Object.assign({},Q,{onSuccess:function(){ne(),se()},close:se})),r.a.createElement(z,{name:ge,setSearchQuery:oe}),m&&r.a.createElement(k.a,{style:{width:"100%"}}),r.a.createElement(N.a,null,r.a.createElement(S.a,null,r.a.createElement(Y,{tableColumnCount:be,order:B,setOrder:re,config:o}),r.a.createElement(D.a,null,G&&r.a.createElement(ae,{tableColumnCount:be},G),pe?de.map((function(e){return r.a.createElement(ee,{key:e.id+e.code,row:e,columns:ve,tableColumnCount:be,handleDelete:ce,handleOpenForm:me,openForm:function(){}})})):!m&&t&&r.a.createElement(ae,{tableColumnCount:be,severity:"warning"},"Nothing found yet in ",ge)))),r.a.createElement(T.a,{component:"div",rowsPerPageOptions:[8,15,25,100,500,1e3],count:b,rowsPerPage:$,page:w,onChangePage:ie,onChangeRowsPerPage:ue}))})),ue=a(41),me=a(104),se=a.n(me).a.create({baseURL:"http://localhost:4000/api",timeout:1e6}),de=function(e){return se("countries",{params:e})},pe=function(e){return se("countries/".concat(e))},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return se.post("countries",e)},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return se.patch("countries/".concat(e.id),e)},he=function(e){return se.delete("countries/".concat(e))},ge=function(e){return se("regions",{params:e})},be=function(e){return se("regions/".concat(e))},ye=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(ue.a)(Object(ue.a)({},t),{},{countryCode:null===t||void 0===t||null===(e=t.country)||void 0===e?void 0:e.code});return se.post("regions",a)},Ee=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(ue.a)(Object(ue.a)({},t),{},{countryCode:null===t||void 0===t||null===(e=t.country)||void 0===e?void 0:e.code});return se.patch("regions/".concat(t.id),a)},Oe=function(e){return se.delete("regions/".concat(e))},we=function(e){return se("cities",{params:e})},xe=function(e){return se("cities/".concat(e))},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return se.post("cities",e)},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return se.patch("cities/".concat(e.id),e)},ke=function(e){return se.delete("cities/".concat(e))},Se=function(e){return se("languages",{params:e})},De=function(e){return se("languages/".concat(e))},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return se.post("languages",e)},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return se.patch("languages/".concat(e.id),e)},Ie=function(e){return se.delete("languages/".concat(e))},Ae=function(e){return se("currencies",{params:e})},Pe=function(e){return se("currencies/".concat(e))},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return se.post("currencies",e)},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return se.patch("currencies/".concat(e.id),e)},Le=function(e){return se.delete("currencies/".concat(e))},Re=a(231),_e=a(232),qe=a(106),Me=a.n(qe),Ve=a(74),We=a(233),$e=a(240),He=a(2),Fe=a(242),Ue=a(230),Ge=function(e){var t=e.fetchData,a=e.onChange,o=e.layoutProps,c=e.defaultValueProp,i=e.defaultValue,u=Object(He.a)(e,["fetchData","onChange","layoutProps","defaultValueProp","defaultValue"]),m=Object(n.useState)([]),s=Object(l.a)(m,2),d=s[0],p=s[1],f=0===d.length;return Object(n.useEffect)((function(){var e=!0;if(f)return Object(C.a)(j.a.mark((function a(){var n,r;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t();case 3:return n=a.sent,a.next=6,null===n||void 0===n?void 0:n.data;case 6:r=a.sent,e&&p(r),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.error(a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))(),function(){e=!1}}),[t,f]),r.a.createElement(Fe.a,{options:d,loading:f,defaultValue:c,getOptionLabel:function(e){return null===e||void 0===e?void 0:e.name},onChange:function(e,t){a(t)},renderInput:function(e){return r.a.createElement(P.a,Object.assign({defaultValue:i},e,o,u,{InputProps:Object(ue.a)(Object(ue.a)({},e.InputProps),{},{endAdornment:r.a.createElement(r.a.Fragment,null,f?r.a.createElement(Ue.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment)})}))}})},Ye=function(e){var t=Object.assign({},e);return r.a.createElement(Ge,Object.assign({fetchData:de},t))},Ze=function(e){var t=Object.assign({},e);return r.a.createElement(Ge,Object.assign({fetchData:ge},t))},Je=function(e){var t=Object.assign({},e);return r.a.createElement(Ge,Object.assign({fetchData:Se},t))},Ke=function(e){var t=Object.assign({},e);return r.a.createElement(Ge,Object.assign({fetchData:Ae},t))},Qe={variant:"outlined",fullWidth:!0},Xe=function(e){var t=e.type,a=(e.key,Object(He.a)(e,["type","key"]));return function(){switch(t){case"countrySelect":return r.a.createElement(Ye,Object.assign({layoutProps:Qe},a));case"regionSelect":return r.a.createElement(Ze,Object.assign({layoutProps:Qe},a));case"languageSelect":return r.a.createElement(Je,Object.assign({layoutProps:Qe},a));case"currencySelect":return r.a.createElement(Ke,Object.assign({layoutProps:Qe},a));default:return r.a.createElement(P.a,Object.assign({},Qe,a))}}()},et={email:"/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i",coords:"^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$"},tt=a(234),at=Object(i.a)((function(e){return{toolbar:{display:"flex",justifyContent:"space-between"}}})),nt=function(e){var t=e.id,a=e.open,o=e.close,c=e.fetchDataItem,i=e.updateDataItem,u=e.createDataItem,m=e.onSuccess,s=e.config,d=at(),p=Object(Ve.b)(),f=p.handleSubmit,v=p.control,g=p.errors,y=p.register,E=p.required,O=s.name,w=Object(n.useState)(),x=Object(l.a)(w,2),k=x[0],S=x[1],D=!!t,N=D?"Editing ".concat(O," ").concat(null===k||void 0===k?void 0:k.name):"Add a ".concat(O);Object(n.useEffect)((function(){var e=!0;return Object(C.a)(j.a.mark((function a(){var n;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c(t);case 3:n=a.sent,e&&S(null===n||void 0===n?void 0:n.data),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.error(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))(),function(){e=!1}}),[]);var T=function(){var e=Object(C.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!D){e.next=5;break}return e.next=3,i(t);case 3:e.next=7;break;case 5:return e.next=7,u(t);case 7:return e.abrupt("return",m());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(Re.a,{open:a,fullWidth:!0},r.a.createElement(_e.a,{position:"relative"},r.a.createElement(A.a,{className:d.toolbar},r.a.createElement(h.a,{variant:"h6"},N),r.a.createElement(Z.a,{edge:"start",color:"inherit",onClick:o,"aria-label":"close"},r.a.createElement(Me.a,null)))),r.a.createElement("form",{onSubmit:f(T)},r.a.createElement(We.a,null,D&&r.a.createElement("input",{name:"id",type:"hidden",ref:y({required:E}),defaultValue:null===k||void 0===k?void 0:k.id}),function(){var e=s.fields,t=void 0===e?[]:e;return t.length>0&&t.map((function(e){return r.a.createElement($e.a,{p:1},r.a.createElement(Ve.a,{as:Xe,type:e.type,name:e.name,label:e.label,control:v,error:!!g[e.name],defaultValue:k&&k[e.name],defaultValueProp:k&&k[e.name],key:k&&k[e.name],helperText:g.name?g.name.message:e.helperText,rules:{required:"Required",pattern:{value:new RegExp(et[null===e||void 0===e?void 0:e.validation]),message:"Not a valid ".concat(e.name)}}}))}))}()),r.a.createElement(tt.a,null,r.a.createElement(b.a,{type:"submit",color:"primary"},D?"Save":"Create"))))},rt={name:"Country",fields:[{name:"name",label:"Name",type:"text",helperText:"The plain text name of the region",validation:null},{name:"nativeName",label:"Native name",type:"text",helperText:"The native name including special characters",validation:null},{name:"code",label:"Code",type:"text",helperText:"Region code in format AB",validation:null},{name:"language",label:"Language",type:"languageSelect",helperText:"Select the language of this country",validation:null},{name:"currency",label:"Currency",type:"currencySelect",helperText:"Select the currency of this country",validation:null},{name:"coords",label:"Coords",type:"text",helperText:"Must be in the format 0.000,0.000",validation:"coords"}]},ot=Object(n.memo)((function(e){var t=e.open,a=e.close,n=e.id,o=e.onSuccess;return r.a.createElement(nt,{id:n,fetchDataItem:pe,createDataItem:fe,updateDataItem:ve,onSuccess:o,open:t,close:a,config:rt})})),ct={name:"Countries",altName:"Country",rows:8,order:"name,ASC",cache:1,columns:[{key:"code",name:"CODE",value:"code"},{key:"name",name:"NAME",value:"name"},{key:"nativeName",name:"Native",value:"nativeName"},{key:"coords",name:"COORDS",value:"coords",align:"right"}]},lt=function(){return r.a.createElement(w.a,null,r.a.createElement(ie,{config:ct,formComponent:ot,fetchData:de,deleteData:he}))},it={name:"Region",fields:[{name:"name",label:"Name",type:"text",helperText:"The plain text name of the region",validation:null},{name:"nativeName",label:"Native name",type:"text",helperText:"The native name including special characters",validation:null},{name:"code",label:"Code",type:"text",helperText:"Region code in format AB",validation:null},{name:"country",label:"Country",type:"countrySelect",helperText:"Select a country this region belongs to",validation:null},{name:"coords",label:"Coords",type:"text",helperText:"Must be in the format 0.000,0.000",validation:"coords"}]},ut=Object(n.memo)((function(e){var t=e.open,a=e.close,n=e.id,o=e.onSuccess;return r.a.createElement(nt,{id:n,fetchDataItem:be,createDataItem:ye,updateDataItem:Ee,onSuccess:o,open:t,close:a,config:it})})),mt={name:"Regions",altName:"Region",rows:8,order:"name,ASC",cache:1,columns:[{key:"code",name:"CODE",value:"code"},{key:"name",name:"NAME",value:"name"},{key:"countryCode",name:"COUNTRY CODE",value:"countryCode"},{key:"coords",name:"COORDS",value:"coords",align:"right"}]},st=function(){return r.a.createElement(w.a,null,r.a.createElement(ie,{config:mt,formComponent:ut,fetchData:ge,deleteData:Oe}))},dt={name:"City",fields:[{name:"name",label:"Name",type:"text",helperText:"The plain text name of the town/city",validation:null},{name:"nativeName",label:"Native name",type:"text",helperText:"The native name including special characters",validation:null},{name:"code",label:"Code",type:"text",helperText:"City code",validation:null},{name:"region",label:"Region",type:"regionSelect",helperText:"Select the region of this town/city",validation:null},{name:"coords",label:"Coords",type:"text",helperText:"Must be in the format 0.000,0.000",validation:"coords"}]},pt=Object(n.memo)((function(e){var t=e.open,a=e.close,n=e.id,o=e.onSuccess;return r.a.createElement(nt,{id:n,fetchDataItem:xe,createDataItem:je,updateDataItem:Ce,onSuccess:o,open:t,close:a,config:dt})})),ft={name:"Countries",altName:"Country",rows:8,order:"name,ASC",cache:1,columns:[{key:"code",name:"CODE",value:"code"},{key:"name",name:"NAME",value:"name"},{key:"nativeName",name:"Native",value:"nativeName"},{key:"coords",name:"COORDS",value:"coords",align:"right"}]},vt=function(){return r.a.createElement(w.a,null,r.a.createElement(ie,{config:ft,formComponent:pt,fetchData:we,deleteData:ke}))},ht={name:"Language",fields:[{name:"name",label:"Name",type:"text",helperText:"The plain text name of the language",validation:null},{name:"nativeName",label:"Native name",type:"text",helperText:"The native name including special characters",validation:null},{name:"code",label:"Code",type:"text",helperText:"ISO 639-1 code",validation:null},{name:"code_iso_3",label:"ISO3 Code",type:"text",helperText:"ISO 639-2 code",validation:null}]},gt=Object(n.memo)((function(e){var t=e.open,a=e.close,n=e.id,o=e.onSuccess;return r.a.createElement(nt,{id:n,fetchDataItem:De,createDataItem:Ne,updateDataItem:Te,onSuccess:o,open:t,close:a,config:ht})})),bt={name:"Languages",altName:"Language",rows:8,order:"name,ASC",cache:1,columns:[{key:"code",name:"CODE",value:"code"},{key:"code_iso_3",name:"ISO3 Code",value:"code_iso_3"},{key:"name",name:"NAME",value:"name"},{key:"nativeName",name:"Native",value:"nativeName"}]},yt=function(){return r.a.createElement(w.a,null,r.a.createElement(ie,{config:bt,formComponent:gt,fetchData:Se,deleteData:Ie}))},Et={name:"Currency",fields:[{name:"name",label:"Name",type:"text",helperText:"The plain text name of the language",validation:null},{name:"nativeName",label:"Native name",type:"text",helperText:"The native name including special characters",validation:null},{name:"symbol",label:"Symbol",type:"text",helperText:"The currency symbol i.e &euro;",validation:null},{name:"code",label:"Code",type:"text",helperText:"Currency code",validation:null},{name:"number",label:"Number",type:"number",helperText:"The currency number",validation:null},{name:"decimals",label:"Decimals",type:"decimals",helperText:"The currency decimal point",validation:null}]},Ot=Object(n.memo)((function(e){var t=e.open,a=e.close,n=e.id,o=e.onSuccess;return r.a.createElement(nt,{id:n,fetchDataItem:Pe,createDataItem:Be,updateDataItem:ze,onSuccess:o,open:t,close:a,config:Et})})),wt={name:"Currencies",altName:"Currency",rows:8,order:"name,ASC",cache:1,columns:[{key:"symbol",name:"SYMBOL",value:"symbol"},{key:"code",name:"CODE",value:"code"},{key:"name",name:"NAME",value:"name"},{key:"nativeName",name:"NATIVE",value:"nativeName"},{key:"number",name:"Number",value:"number"},{key:"decimals",name:"Decimals",value:"decimals"}]},xt=function(){return r.a.createElement(w.a,null,r.a.createElement(ie,{config:wt,formComponent:Ot,fetchData:Ae,deleteData:Le}))},jt=a(7),Ct=a(107),kt=a.n(Ct),St=a(108),Dt=a.n(St),Nt=Object(i.a)((function(e){return{appBarOpen:Object(jt.a)({},e.breakpoints.up("md"),{paddingLeft:0}),appBarHidden:Object(jt.a)({},e.breakpoints.up("md"),{paddingLeft:240}),menuButtonOpen:{},menuButtonHidden:{},title:{flexGrow:1}}})),Tt=function(e){var t=e.open,a=e.toggleDrawer,n=Nt();return r.a.createElement(_e.a,{position:"absolute",className:Object(F.a)(n.appBarOpen,t&&n.appBarHidden)},r.a.createElement(A.a,null,r.a.createElement(Z.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:a,className:Object(F.a)(n.menuButtonOpen,t&&n.menuButtonHidden)},r.a.createElement(kt.a,null)),r.a.createElement(h.a,{variant:"h6",className:n.title},"World Places"),r.a.createElement("a",{target:"_blank",href:"https://github.com/jimmyjamieson/world-places",rel:"noopener noreferrer"},r.a.createElement(Dt.a,null))))},It=a(246),At=a(236),Pt=a(109),Bt=a.n(Pt),zt=Object(i.a)((function(e){var t;return{drawerPaper:(t={position:"absolute"},Object(jt.a)(t,e.breakpoints.up("md"),{position:"relative"}),Object(jt.a)(t,"whiteSpace","nowrap"),Object(jt.a)(t,"width",240),Object(jt.a)(t,"transition",e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})),t),drawerPaperClose:{overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(0)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"}}})),Lt=function(e){var t=e.open,a=e.handleDrawerClose,n=zt();return r.a.createElement(It.a,{variant:"permanent",classes:{paper:Object(F.a)(n.drawerPaper,!t&&n.drawerPaperClose)},open:t},r.a.createElement(A.a,null,r.a.createElement(Z.a,{onClick:a},r.a.createElement(Bt.a,null))),r.a.createElement(At.a,null),r.a.createElement(b.a,{component:u.b,to:"/"},"Home"),r.a.createElement(b.a,{component:u.b,to:"/countries",color:"inherit"},"Countries"),r.a.createElement(b.a,{component:u.b,to:"/regions",color:"inherit"},"Regions"),r.a.createElement(b.a,{component:u.b,to:"/cities",color:"inherit"},"Cities"),r.a.createElement(b.a,{component:u.b,to:"/languages",color:"inherit"},"Languages"),r.a.createElement(b.a,{component:u.b,to:"/currencies",color:"inherit"},"Currencies"),r.a.createElement(At.a,null),r.a.createElement(b.a,{component:u.b,to:"/currencies",color:"inherit"},"Download"))},Rt=Object(i.a)((function(e){return{appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}})),_t=function(e){var t=e.children,a=Rt();return r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.appBarSpacer}),t)},qt=(a(237),a(238),a(110),a(111),a(112),Object(i.a)({root:{position:"absolute",bottom:0,width:"100vw",zIndex:10}}),Object(i.a)((function(e){return{root:{display:"flex"}}})));var Mt=function(){var e=qt(),t=r.a.useState(!function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ \-\/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ \/])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e.substr(0,4)))&&(t=!0),t}()),a=Object(l.a)(t,2),n=a[0],o=a[1];return r.a.createElement(u.a,null,r.a.createElement("div",{className:e.root},r.a.createElement(s.a,null),r.a.createElement(Tt,{open:n,toggleDrawer:function(){o(!n)}}),r.a.createElement(Lt,{open:n,handleDrawerClose:function(){o(!1)}}),r.a.createElement(_t,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(O,null)),r.a.createElement(m.a,{path:"/countries"},r.a.createElement(lt,null)),r.a.createElement(m.a,{path:"/regions"},r.a.createElement(st,null)),r.a.createElement(m.a,{path:"/cities"},r.a.createElement(vt,null)),r.a.createElement(m.a,{path:"/languages"},r.a.createElement(yt,null)),r.a.createElement(m.a,{path:"/currencies"},r.a.createElement(xt,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Mt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},96:function(e,t,a){e.exports=a.p+"static/media/logo.2283da78.svg"}},[[128,1,2]]]);
//# sourceMappingURL=main.cf01091b.chunk.js.map
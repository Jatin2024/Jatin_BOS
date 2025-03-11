"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[387],{5362:(e,s,t)=>{t.d(s,{A:()=>c});var o=t(5043),a=t(8931),l=t(7111),n=t(3277),i=t(2725),r=t(579);const c=(0,o.forwardRef)(((e,s)=>{let{data:t,columns:c,addedItem:d,CAName:u,state:p}=e;const{showWarningToast:g}=(0,i.A)(),[m,h]=(0,o.useState)({});(0,o.useEffect)((()=>{h({})}),[t]);const f=()=>{const e=v.getSelectedRowModel().rows.map((e=>e.original["Available Plant"]));0!==e.length?(d(e),h({})):g(n.e1)};(0,o.useImperativeHandle)(s,(()=>({addPlant:f})));const w=(0,o.useMemo)((()=>[{id:"select",cell:e=>{let{row:s}=e;return(0,r.jsx)("input",{type:"checkbox",className:"form-check-input",checked:s.getIsSelected(),onChange:s.getToggleSelectedHandler()})}},...c]),[c]),v=(0,a.N4)({data:t,columns:w,state:{rowSelection:m},enableRowSelection:!0,onRowSelectionChange:h,getCoreRowModel:(0,l.HT)()});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{type:"button",className:"btn btn-outline-primary me-3",onClick:()=>{v.getRowModel().rows.forEach((e=>e.toggleSelected(!0)))},children:"Select All"}),(0,r.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:()=>{v.getRowModel().rows.forEach((e=>e.toggleSelected(!1)))},children:"Deselect All"})]}),v.getRowModel().rows.length>0?(0,r.jsx)("div",{className:"overflow-auto",style:{maxHeight:"60vh"},children:v.getRowModel().rows.map((e=>(0,r.jsxs)("div",{className:"p-3 border-bottom d-flex align-items-center",style:{backgroundColor:e.getIsSelected()?"#d5e8f2":"inherit"},children:[(0,r.jsx)("div",{className:"me-3",children:(0,a.Kv)(e.getVisibleCells()[0].column.columnDef.cell,e.getVisibleCells()[0].getContext())}),(0,r.jsx)("div",{children:e.original[c[0].accessorKey]})]},e.id)))}):(0,r.jsx)("p",{className:"text-muted p-3",children:"No data available"})]})}))},1584:(e,s,t)=>{t.d(s,{A:()=>u});var o=t(3003),a=t(9379),l=t(6047);const n=async(e,s)=>{let t={CAAtt:[]};console.log("We are into Search CA Details");try{var o;const n=await(0,l.fV)(),i=async e=>new Promise(((t,o)=>{n.authenticatedRequest(e,{method:"GET",headers:s,type:"json",onComplete:e=>{console.log("Received response:",e),t(e)},onFailure:e=>{console.error("Request failed:",e),o(e)}})}));let r="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dslc/changeaction/search?$searchStr=name:".concat(e);const c=null===(o=(await i(r)).changeAction[0])||void 0===o?void 0:o.identifier;if(console.log("Response From 1st Call",c),c){const e="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dslc/changeaction/".concat(c,"?$fields=proposedChanges,flowDown"),s=await i(e);if(console.log("Response From 2nd Call",s),s){for(const e of s.isFlowDownOf||[])if("Change Action"===e.type){const s="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dslc/changeaction/".concat(e.identifier,"?$fields=proposedChanges,flowDown");try{const e=await i(s);console.log("Response From 3rd Call",e),e&&t.CAAtt.push({CATitle:e.title,CAState:e.state})}catch(a){console.error("Error fetching parent CA data:",a)}}t.MCOState=s.state,t.MCOTitle=s.title}}return console.log("Final CA Details",t),t}catch(a){throw console.error("Error in SearchCA:",a),a}};var i=t(5645),r=(t(5043),t(3277)),c=t(2725),d=t(2268);const u=()=>{const{showErrorToast:e}=(0,c.A)(),s=(0,o.wA)();let t=window.widget.getValue("email");console.log("Email in usePlantAssignment:",t);return{handlePlantAssignment:async(o,c,u,p)=>{try{s((0,i.Ve)(!0));const g=await(0,d.I)();if(g){console.log("[UsePlantAssignment] Headers are",g);const e=await(async(e,s,t)=>{try{console.log("[UserGroup Status] ProductId: ",s);const o=await(0,l.fV)();let n="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dslc/sharing/getSharing";const i=await new Promise(((t,l)=>{o.authenticatedRequest(n,{method:"POST",headers:(0,a.A)((0,a.A)({},e),{},{"Content-Type":"application/json"}),data:JSON.stringify({data:[{objectID:s}]}),type:"json",onComplete:t,onFailure:l})}));console.log("[Assigned Plant Service] Data received:",i);let r=[],c={groups:[]};if(i&&(i.results.forEach((e=>{e.sharings.userGroups.forEach((e=>{"Can Edit"===e.access&&c.groups.push({uri:e.userGroupID.replace(/[<>]/g,"")})}))})),c.groups.length>0)){let e="https://oi000186152-us1-usersgroup.3dexperience.3ds.com/3drdfpersist/resources/v1/usersgroup/groups?select=uri,members,title";const s=await new Promise(((s,t)=>{o.authenticatedRequest(e,{method:"POST",headers:{"Content-Type":"application/json"},data:JSON.stringify(c),type:"json",onComplete:s,onFailure:t})}));console.log("Group Response is:",s),s&&(r=s.groups.filter((e=>e.members.includes(t))).map((e=>e.title)))}return console.log("[UserGroup Status] User Groups:",r),r}catch(o){throw console.error("[UserGroup Status] Error occurred:",o),o}})(g,u,t);console.log("[Plant Assignment] User Groups:",e);let r=[...e,o];if(console.log("[Use Plant Assignment] All CollabSpaces:",r),r){const e=await(async(e,s)=>{try{let t=[];console.log("[All Plant Service] CollabSpaces: ",e),console.log("[All Plant Service] headers: ",s);const o=await(0,l.fV)(),a=async e=>new Promise(((t,a)=>{o.authenticatedRequest(e,{method:"GET",headers:s,type:"json",onComplete:e=>{console.log("Received response:",e),t(e)},onFailure:e=>{console.error("Request failed:",e),a(e)}})})),n=e.map((async e=>{try{var s,o;const r="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dslib/dslib:Library/search?$searchStr=".concat(e),c=null===(s=(await a(r)).member)||void 0===s||null===(o=s.find((s=>s.title===e)))||void 0===o?void 0:o.id;if(console.log("[All Plant Service] Library id is:",c),c){const e="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dslib/dslib:Library/".concat(c,"?$mask=dslib:ExpandClassifiableClassesMask"),s=await a(e),{member:o}=s;if(o&&o.length>0){var l,n;console.log("[Library Data Service] Member found:",o);const e=null===(l=o[0])||void 0===l?void 0:l.ChildClasses;if((null===e||void 0===e||null===(n=e.member)||void 0===n?void 0:n.length)>0){var i;const s=null===(i=e.member[0].ChildClasses)||void 0===i?void 0:i.member;if(s&&s.length>0){const e=s.filter((e=>!t.some((s=>s.id===e.id))));t=[...t,...e]}}}}}catch(r){throw console.error("Error processing group:",e,r),r}}));return await Promise.all(n),t}catch(t){throw console.error("[All Plant Service] Error occurred:",t),t}})(r,g);if(console.log("[Use Plant Assignment] All Plants are:",e),e){const t=await(async(e,s,t)=>{try{console.log("[Assigned Plant Service] Plant Members:",e);const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dslib/dslib:ClassifiedItem/".concat(t,"?$mask=dslib:ClassificationAttributesMask"),a=await(0,l.fV)(),i=await new Promise(((e,t)=>{a.authenticatedRequest(o,{method:"GET",headers:s,type:"json",onComplete:e,onFailure:t})}));console.log("[Assigned Plant Service] Data received:",i);let r=[],c=[],d=i.member[0].ClassificationAttributes.member;return await Promise.all(d.map((async t=>{console.log("Class Item is ",t);for(let o of e)if(t.ClassID===o.id){let e=o.title;e=e.replace("Plant","").replace(/\s+/g,"");let a={id:t.ClassID,title:o.title};const l=t.Attributes.map((t=>t.name.includes("FlowDownCA")&&t.value?n(t.value,s).then((e=>{if(e){console.log(e),a.MFGChange=null===e||void 0===e?void 0:e.MCOTitle,a.MFGStatus=null===e||void 0===e?void 0:e.MCOState;let s="",t="";e.CAAtt.forEach((e=>{s+=","+e.CATitle,t+=","+e.CAState})),a.Change=s.slice(1),a.ChangeStatus=t.slice(1)}})):(a[t.name.replace(e,"").trim()]=t.value,Promise.resolve())));await Promise.all(l),r=[...r,a],console.log("Initial Assigned Classes",r),console.log("Processed Object:",a)}}))),console.log("[Assigned Plant Service] Initial Assigned Classes:",r),c=e.filter((e=>!r.some((s=>s.id===e.id)))),console.log("uniqueInAllclasses--:",c),{success:!0,data:{plantData:{allPlants:e,initialAssignedPlants:r,uniquePlants:c}}}}catch(o){return console.error("[Object Details] Failed to fetch data:",o),{success:!1,error:o}}})(e,g,u);console.log("[Use Plant Assignment]: ",t),t.success?(s((0,i.Lq)(t.data.plantData)),s((0,i.lL)(g))):console.error("Failed to fetch plant data")}else console.warn("[Use All Plants] There are no Plants")}else console.warn("[Use All Plants] There are no CollabSpace");let d={};console.log("Type Before:",p),d="Raw_Material"===p?{success:!0,data:[]}:await(async(e,s)=>{let t="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dseng/dseng:EngItem/";t+=s,t+="/expand";let o={expandDepth:1,type_filter_bo:["VPMReference"],type_filter_rel:["VPMInstance"]};try{console.log("[SearchCAService] ProductId is:",s);const n=await(0,l.fV)(),i=(s,t,o)=>new Promise(((l,i)=>{n.authenticatedRequest(s,{method:t,headers:(0,a.A)((0,a.A)({},e),{},{"Content-Type":"application/json"}),data:JSON.stringify(o),type:"json",onComplete:e=>{console.log("Received response:",e),l(e)},onFailure:e=>{console.error("Request failed:",e),i(e)}})})),r=await i(t,"POST",o);console.log("[Get CA Details Service] Data received:",r);const{member:c}=r;if(c){let e=r.member.filter((e=>("VPMReference"===e.type||"Raw_Material"===e.type)&&e.id!==s)).map((e=>({id:e.id,type:e.type,name:e.title,state:e.state})));return e.length>0&&await Promise.all(e.map((async e=>{if("released"===e.state.toLowerCase()){let s="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dslib/dslib:ClassifiedItem/".concat(e.id,"?$mask=dslib:ClassificationAttributesMask");const t=await i(s,"GET","");console.log("classResponse->",t);const o=t.member.flatMap((e=>{var s;return null!==(s=e.ClassificationAttributes)&&void 0!==s&&s.member?e.ClassificationAttributes.member.map((e=>e.ClassID)):[]}));e.classes=o}}))),{success:!0,data:e}}}catch(n){return console.error("Error while Fetching",n),{success:!1,data:[],error:n}}})(g,u),console.log("Type After:",p),console.log("[Use All Plants] Product Childrens",d),d.success&&s((0,i.VG)(d.data));const m=await(async(e,s,t)=>{let o=!1,n=[];const i="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/enorelnav/v2/navigate/setPreferences";let r={widgetId:"ENORIPE_Relations_Preview_2751_2038-15:33:22",relations:["caproposedwhere_from"],allRelationsMode:!1,publicationsMode:!1,computeWithInstances:!1,attributesForView:["ds6w:status","ds6w:type","ds6w:identifier"],label:"ENXENG_AP-e1331143-1734517777960",lang:"en",ghostMode:!1},c={widgetId:"ENORIPE_Relations_Preview_2751_2038-15:33:22",responseMode:"objectsByPatterns",label:"ENXENG_AP-e1331143-1734517780491",ids:[s]};try{console.log("[Get CA Details] Product ID:",s);const d=await(0,l.fV)(),u=await new Promise(((s,t)=>{d.authenticatedRequest(i,{method:"POST",headers:(0,a.A)((0,a.A)({},e),{},{"Content-Type":"application/json"}),data:JSON.stringify(r),type:"json",onComplete:s,onFailure:t})}));if(console.log("[Get CA Details Service] Data received:",u),"OK"===u.status){const l=await new Promise(((s,t)=>{d.authenticatedRequest("https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/enorelnav/v2/navigate/getEcosystem",{method:"POST",headers:(0,a.A)((0,a.A)({},e),{},{"Content-Type":"application/json"}),data:JSON.stringify(c),type:"json",onComplete:s,onFailure:t})}));console.log("[Get CA Details Service] Data received:",l),l.objectsByPatterns.caproposedwhere_from&&await Promise.all(l.objectsByPatterns.caproposedwhere_from.map((async a=>{if("Complete"!==a["ds6w:status"].slice(14)){let l="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dslc/changeaction/".concat(a.id,"?$fields=proposedChanges,flowDown");const i=await new Promise(((s,t)=>{d.authenticatedRequest(l,{method:"GET",headers:e,type:"json",onComplete:s,onFailure:t})}));Array.isArray(i.proposedChanges)&&i.proposedChanges.forEach((e=>{n.push({identifier:e.where.identifier,action:e.whats[0].what})})),o="released"!==t.toLowerCase()||n.some((e=>e.identifier===s&&"Modify"===e.action))}})))}else console.error("Unable to Fetch the ");return console.log("Status is coming inside 7"),console.log("Response Object is:",o),{success:!0,data:o,proposedChanges:n}}catch(d){throw console.error("Failed Request:",{url:i,headers:e,body:r,error:d}),d}})(g,u,c);return console.log("[Use All Plants] Get CA Details",m),m.success&&(s((0,i.ug)(m.data)),s((0,i.aB)(m.proposedChanges))),void console.log("[Plant Assignment] All Services Executed Successfully")}e(r.rK)}catch(g){throw console.error("[Plant Assignment] Error:",g),s((0,i.Ve)(!1)),g}finally{s((0,i.Ve)(!1))}}}}},2268:(e,s,t)=>{t.d(s,{I:()=>a});var o=t(6047);const a=async()=>{try{let e=window.widget.getValue("Credentials");const s=await(0,o.fV)();console.log("Security Context is:",e);const t="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/application/CSRF?tenant=OI000186152",a=await new Promise(((e,o)=>{s.authenticatedRequest(t,{method:"GET",type:"json",onComplete:e,onFailure:o})})),l=a.csrf.name,n=a.csrf.value,i="SecurityContext",r=e;return{[l]:n,[i]:r}}catch(e){return void console.error("[CSRF] Failed to fetch token:",e)}}},3127:(e,s,t)=>{t.d(s,{i:()=>n});var o=t(9379),a=t(9722),l=t(6047);const n=async(e,s,t,n,i,r,c,d,u,p,g)=>{try{console.log("[Save Data] Starting data saving process..."),console.log("Type in Save Table Data:",d),console.log("Final aRRAY IS inside Save:",p),console.log("Proposed Changes in Save",g);const e=await(0,l.fV)(),s=async(s,t,a)=>(console.log("Fetching URL:",s),console.log("Request Body:",JSON.stringify(t,null,2)),new Promise(((l,i)=>{e.authenticatedRequest(s,{method:a,headers:(0,o.A)((0,o.A)({},n),{},{"Content-Type":"application/json"}),data:JSON.stringify(t),type:"json",onComplete:e=>{console.log("Response received:",e),l(e)},onFailure:e=>{console.error("Request failed:",e),i(e)}})}))),t=async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";console.log("Fetching URL:",e),console.log("Method is:"),console.log("Request Body:",JSON.stringify(s,null,2));try{const l=await(0,a.A)({url:e,method:t,headers:(0,o.A)((0,o.A)({},n),{},{"Content-Type":"application/json"}),data:s});return console.log("Response received:",l.data),l.data}catch(l){throw console.error("Request failed:",l),l}};let r=c.filter((e=>{if("released"===e.state.toLowerCase()){return!g.find((s=>s.identifier===e.id&&"modify"===s.action.toLowerCase()))}return!1}));console.log("NotPropagableChilds ARE :",r);let h=[];p.forEach((e=>{if(e.MBOMValue){let s=[];r.forEach((t=>{t.classes.includes(e.id)||s.push({childId:t.id,childName:t.name})})),s.length>0&&h.push({id:e.id,title:e.title,childs:s,type:e.Type})}}));let f="";console.log("ErrorObj IS",h),h.forEach((e=>{let s="";if(Array.isArray(e.childs)&&e.childs.every((e=>e.childName))){const t=e.childs.map((e=>e.childName)).join(", ");console.log("Chilld Titles are",t),s="new"!==e.type.toLowerCase()?"".concat(e.title," MBOM can't be Make due to unclassified child items: ").concat(t):"Unable to classify product ".concat(e.title," due to unclassified child items: ").concat(t),console.log("Message is:",s)}else s="Invalid child data for ".concat(e.title,".");f+="".concat(s,"\n")})),console.log(h),console.log("Concatenated Messages:\n",f);let w=p.filter((e=>"new"===e.Type.toLowerCase()&&!h.some((s=>s.id===e.id)))).map((e=>e.id));console.log("New Classes are:",w);let v={};p.forEach((e=>{!h.some((s=>s.id===e.id))&&("update"===e.Type.toLowerCase()||"new"===e.Type.toLowerCase()&&e.MBOMValue)&&(v[e.MBOMName]=e.MBOMValue)})),console.log("Update body is:",v);let y=p.filter((e=>e.MBOMValue&&!h.some((s=>s.id===e.id)))).map((e=>e.id));if(console.log("Propogateable classes are",y),w.length>0){let e="https://emr-product-datahub-server-qa.azurewebsites.net/plantAssignment/classifyProductToClass",s={id:i,type:d,classes:w,mode:"classifyParent"};const o=await t(e,s,"POST");console.log("classifyResponse:",JSON.stringify(o))}if(Object.keys(v).length>0){var m;const e="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dslib/dslib:ClassifiedItem/".concat(i),o=await s(e,"","GET");console.log("CStamp Response:",o);let a=(null===(m=o.member[0])||void 0===m?void 0:m.cestamp)||"";v.cestamp=a;const l="https://emr-product-datahub-server-qa.azurewebsites.net/plantAssignment/updateClassificationAttribute?id=".concat(i);await t(l,v,"PATCH"),console.log("Updated database successfully.")}if(y.length>0&&c.length>0&&"VPMReference"===d){let e="https://emr-product-datahub-server-qa.azurewebsites.net/plantAssignment/classifyProductToClass",s={id:i,type:d,classes:y,childs:c,mode:"classifychilds"};const o=await t(e,s,"POST");console.log("child classifyResponse:",JSON.stringify(o))}if(u.length>0){let e="https://emr-product-datahub-server-qa.azurewebsites.net/plantAssignment/declassifyProductToClass",s={id:i,type:d,classes:u};const o=await t(e,s,"POST");console.log("declassifyResponse:",JSON.stringify(o))}return console.log("All classification API calls completed successfully."),{success:!0,message:"Data saved successfully",ErrorObj:h,Finalmessage:f}}catch(h){return console.error("Error occurred:",h),{success:!1,message:"Failed to save data",error:h}}}}}]);
//# sourceMappingURL=387.95a7a078.chunk.js.map
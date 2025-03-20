"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[387],{5362:(e,s,t)=>{t.d(s,{A:()=>c});var o=t(5043),a=t(8931),l=t(7111),n=t(3277),i=t(2725),r=t(579);const c=(0,o.forwardRef)(((e,s)=>{let{data:t,columns:c,addedItem:d,CAName:u,state:p}=e;const{showWarningToast:g}=(0,i.A)(),[h,m]=(0,o.useState)({});(0,o.useEffect)((()=>{m({})}),[t]);const f=()=>{const e=y.getSelectedRowModel().rows.map((e=>e.original["Available Plant"]));0!==e.length?(d(e),m({})):g(n.e1)};(0,o.useImperativeHandle)(s,(()=>({addPlant:f})));const w=(0,o.useMemo)((()=>[{id:"select",cell:e=>{let{row:s}=e;return(0,r.jsx)("input",{type:"checkbox",className:"form-check-input",checked:s.getIsSelected(),onChange:s.getToggleSelectedHandler()})}},...c]),[c]),y=(0,a.N4)({data:t,columns:w,state:{rowSelection:h},enableRowSelection:!0,onRowSelectionChange:m,getCoreRowModel:(0,l.HT)()});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{type:"button",className:"btn btn-outline-primary me-3",onClick:()=>{y.getRowModel().rows.forEach((e=>e.toggleSelected(!0)))},children:"Select All"}),(0,r.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:()=>{y.getRowModel().rows.forEach((e=>e.toggleSelected(!1)))},children:"Deselect All"})]}),y.getRowModel().rows.length>0?(0,r.jsx)("div",{className:"overflow-auto",style:{maxHeight:"60vh"},children:y.getRowModel().rows.map((e=>(0,r.jsxs)("div",{className:"p-3 border-bottom d-flex align-items-center",style:{backgroundColor:e.getIsSelected()?"#d5e8f2":"inherit"},children:[(0,r.jsx)("div",{className:"me-3",children:(0,a.Kv)(e.getVisibleCells()[0].column.columnDef.cell,e.getVisibleCells()[0].getContext())}),(0,r.jsx)("div",{children:e.original[c[0].accessorKey]})]},e.id)))}):(0,r.jsx)("p",{className:"text-muted p-3",children:"No data available"})]})}))},1584:(e,s,t)=>{t.d(s,{A:()=>u});var o=t(3003),a=t(9379),l=t(6047);const n=async(e,s)=>{let t={CAAtt:[]};console.log("We are into Search CA Details");const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";try{var a;const i=await(0,l.fV)(),r=async e=>new Promise(((t,o)=>{i.authenticatedRequest(e,{method:"GET",headers:s,type:"json",onComplete:e=>{console.log("Received response:",e),t(e)},onFailure:e=>{console.error("Request failed:",e),o(e)}})}));let c="".concat(o,"/resources/v1/modeler/dslc/changeaction/search?$searchStr=name:").concat(e);const d=null===(a=(await r(c)).changeAction[0])||void 0===a?void 0:a.identifier;if(console.log("Response From 1st Call",d),d){const e="".concat(o,"/resources/v1/modeler/dslc/changeaction/").concat(d,"?$fields=proposedChanges,flowDown"),s=await r(e);if(console.log("Response From 2nd Call",s),s){for(const e of s.isFlowDownOf||[])if("Change Action"===e.type){const s="".concat(o,"/resources/v1/modeler/dslc/changeaction/").concat(e.identifier,"?$fields=proposedChanges,flowDown");try{const e=await r(s);console.log("Response From 3rd Call",e),e&&t.CAAtt.push({CATitle:e.title,CAState:e.state})}catch(n){console.error("Error fetching parent CA data:",n)}}t.MCOState=s.state,t.MCOTitle=s.title}}return console.log("Final CA Details",t),t}catch(n){throw console.error("Error in SearchCA:",n),n}};var i=t(5645),r=(t(5043),t(3277)),c=t(2725),d=t(2268);const u=()=>{const{showErrorToast:e}=(0,c.A)(),s=(0,o.wA)();let t=window.widget.getValue("email");console.log("Email in usePlantAssignment:",t);return{handlePlantAssignment:async(o,c,u,p)=>{try{s((0,i.Ve)(!0));const g=await(0,d.I)();if(!g)return void e(r.rK);if(console.log("[UsePlantAssignment] Headers are",g),"Change Action"===p){let e;console.log("The object Type is CollabSpace");const s="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dslc/changeaction/".concat(u,"?%24fields=proposedChanges"),t=await(0,l.ui)("GET",s,"",g);return console.log("Response from the Url is:",t),void(t.proposedChanges&&(e=t.proposedChanges.map((e=>e.where.identifier)),console.log("The identifiers are: ",e)))}const h=await(async(e,s,t)=>{try{const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";console.log("[UserGroup Status] ProductId: ",s);const n=await(0,l.fV)();let i="".concat(o,"/resources/v1/modeler/dslc/sharing/getSharing");const r=await new Promise(((t,o)=>{n.authenticatedRequest(i,{method:"POST",headers:(0,a.A)((0,a.A)({},e),{},{"Content-Type":"application/json"}),data:JSON.stringify({data:[{objectID:s}]}),type:"json",onComplete:t,onFailure:o})}));console.log("[Assigned Plant Service] Data received:",r);let c=[],d={groups:[]};if(r&&(r.results.forEach((e=>{e.sharings.userGroups.forEach((e=>{"Can Edit"===e.access&&d.groups.push({uri:e.userGroupID.replace(/[<>]/g,"")})}))})),d.groups.length>0)){let e="https://oi000186152-us1-usersgroup.3dexperience.3ds.com/3drdfpersist/resources/v1/usersgroup/groups?select=uri,members,title";const s=await new Promise(((s,t)=>{n.authenticatedRequest(e,{method:"POST",headers:{"Content-Type":"application/json"},data:JSON.stringify(d),type:"json",onComplete:s,onFailure:t})}));console.log("Group Response is:",s),s&&(c=s.groups.filter((e=>e.members.includes(t))).map((e=>e.title)))}return console.log("[UserGroup Status] User Groups:",c),c}catch(o){throw console.error("[UserGroup Status] Error occurred:",o),o}})(g,u,t);console.log("[Plant Assignment] User Groups:",h);let m=[...h,o];if(console.log("[Use Plant Assignment] All CollabSpaces:",m),m){const e=await(async(e,s)=>{try{const t="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";let o=[];console.log("[All Plant Service] CollabSpaces: ",e),console.log("[All Plant Service] headers: ",s);const a=await(0,l.fV)(),n=async e=>new Promise(((t,o)=>{a.authenticatedRequest(e,{method:"GET",headers:s,type:"json",onComplete:e=>{console.log("Received response:",e),t(e)},onFailure:e=>{console.error("Request failed:",e),o(e)}})})),i=e.map((async e=>{try{var s,a;const c="".concat(t,"/resources/v1/modeler/dslib/dslib:Library/search?$searchStr=").concat(e),d=null===(s=(await n(c)).member)||void 0===s||null===(a=s.find((s=>s.title===e)))||void 0===a?void 0:a.id;if(console.log("[All Plant Service] Library id is:",d),d){const e="".concat(t,"/resources/v1/modeler/dslib/dslib:Library/").concat(d,"?$mask=dslib:ExpandClassifiableClassesMask"),s=await n(e),{member:a}=s;if(a&&a.length>0){var l,i;console.log("[Library Data Service] Member found:",a);const e=null===(l=a[0])||void 0===l?void 0:l.ChildClasses;if((null===e||void 0===e||null===(i=e.member)||void 0===i?void 0:i.length)>0){var r;const s=null===(r=e.member[0].ChildClasses)||void 0===r?void 0:r.member;if(s&&s.length>0){const e=s.filter((e=>!o.some((s=>s.id===e.id))));o=[...o,...e]}}}}}catch(c){throw console.error("Error processing group:",e,c),c}}));return await Promise.all(i),o}catch(t){throw console.error("[All Plant Service] Error occurred:",t),t}})(m,g);if(console.log("[Use Plant Assignment] All Plants are:",e),e){const t=await(async(e,s,t)=>{try{const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";console.log("[Assigned Plant Service] Plant Members:",e);const a="".concat(o,"/resources/v1/modeler/dslib/dslib:ClassifiedItem/").concat(t,"?$mask=dslib:ClassificationAttributesMask"),i=await(0,l.fV)(),r=await new Promise(((e,t)=>{i.authenticatedRequest(a,{method:"GET",headers:s,type:"json",onComplete:e,onFailure:t})}));console.log("[Assigned Plant Service] Data received:",r);let c=[],d=[],u=r.member[0].ClassificationAttributes.member;return await Promise.all(u.map((async t=>{console.log("Class Item is ",t);for(let o of e)if(t.ClassID===o.id){let e=o.title;e=e.replace("Plant","").replace(/\s+/g,"");let a={id:t.ClassID,title:o.title};const l=t.Attributes.map((t=>t.name.includes("FlowDownCA")&&t.value?n(t.value,s).then((e=>{if(e){console.log(e),a.MFGChange=null===e||void 0===e?void 0:e.MCOTitle,a.MFGStatus=null===e||void 0===e?void 0:e.MCOState;let s="",t="";e.CAAtt.forEach((e=>{s+=","+e.CATitle,t+=","+e.CAState})),a.Change=s.slice(1),a.ChangeStatus=t.slice(1)}})):(a[t.name.replace(e,"").trim()]=t.value,Promise.resolve())));await Promise.all(l),c=[...c,a],console.log("Initial Assigned Classes",c),console.log("Processed Object:",a)}}))),console.log("[Assigned Plant Service] Initial Assigned Classes:",c),d=e.filter((e=>!c.some((s=>s.id===e.id)))),console.log("uniqueInAllclasses--:",d),{success:!0,data:{plantData:{allPlants:e,initialAssignedPlants:c,uniquePlants:d}}}}catch(o){return console.error("[Object Details] Failed to fetch data:",o),{success:!1,error:o}}})(e,g,u);console.log("[Use Plant Assignment]: ",t),t.success?(s((0,i.Lq)(t.data.plantData)),s((0,i.lL)(g))):console.error("Failed to fetch plant data")}else console.warn("[Use All Plants] There are no Plants")}else console.warn("[Use All Plants] There are no CollabSpace");let f={};console.log("Type Before:",p),f="Raw_Material"===p?{success:!0,data:[]}:await(async(e,s)=>{const t="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";let o="".concat(t,"/resources/v1/modeler/dseng/dseng:EngItem/");o+=s,o+="/expand";let n={expandDepth:1,type_filter_bo:["VPMReference"],type_filter_rel:["VPMInstance"]};try{console.log("[SearchCAService] ProductId is:",s);const i=await(0,l.fV)(),r=(s,t,o)=>new Promise(((l,n)=>{i.authenticatedRequest(s,{method:t,headers:(0,a.A)((0,a.A)({},e),{},{"Content-Type":"application/json"}),data:JSON.stringify(o),type:"json",onComplete:e=>{console.log("Received response:",e),l(e)},onFailure:e=>{console.error("Request failed:",e),n(e)}})})),c=await r(o,"POST",n);console.log("[Get CA Details Service] Data received:",c);const{member:d}=c;if(d){let e=c.member.filter((e=>("VPMReference"===e.type||"Raw_Material"===e.type)&&e.id!==s)).map((e=>({id:e.id,type:e.type,name:e.title,state:e.state})));return e.length>0&&await Promise.all(e.map((async e=>{if("released"===e.state.toLowerCase()){let s="".concat(t,"/resources/v1/modeler/dslib/dslib:ClassifiedItem/").concat(e.id,"?$mask=dslib:ClassificationAttributesMask");const o=await r(s,"GET","");console.log("classResponse->",o);const a=o.member.flatMap((e=>{var s;return null!==(s=e.ClassificationAttributes)&&void 0!==s&&s.member?e.ClassificationAttributes.member.map((e=>e.ClassID)):[]}));e.classes=a}}))),{success:!0,data:e}}}catch(i){return console.error("Error while Fetching",i),{success:!1,data:[],error:i}}})(g,u),console.log("Type After:",p),console.log("[Use All Plants] Product Childrens",f),f.success&&s((0,i.VG)(f.data));const w=await(async(e,s,t)=>{const o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";let n=!1,i=[];const r="".concat(o,"/resources/enorelnav/v2/navigate/setPreferences");let c={widgetId:"ENORIPE_Relations_Preview_2751_2038-15:33:22",relations:["caproposedwhere_from"],allRelationsMode:!1,publicationsMode:!1,computeWithInstances:!1,attributesForView:["ds6w:status","ds6w:type","ds6w:identifier"],label:"ENXENG_AP-e1331143-1734517777960",lang:"en",ghostMode:!1},d="".concat(o,"/resources/enorelnav/v2/navigate/getEcosystem"),u={widgetId:"ENORIPE_Relations_Preview_2751_2038-15:33:22",responseMode:"objectsByPatterns",label:"ENXENG_AP-e1331143-1734517780491",ids:[s]};try{console.log("[Get CA Details] Product ID:",s);const p=await(0,l.fV)(),g=await new Promise(((s,t)=>{p.authenticatedRequest(r,{method:"POST",headers:(0,a.A)((0,a.A)({},e),{},{"Content-Type":"application/json"}),data:JSON.stringify(c),type:"json",onComplete:s,onFailure:t})}));if(console.log("[Get CA Details Service] Data received:",g),"OK"===g.status){const l=await new Promise(((s,t)=>{p.authenticatedRequest(d,{method:"POST",headers:(0,a.A)((0,a.A)({},e),{},{"Content-Type":"application/json"}),data:JSON.stringify(u),type:"json",onComplete:s,onFailure:t})}));console.log("[Get CA Details Service] Data received:",l),l.objectsByPatterns.caproposedwhere_from&&await Promise.all(l.objectsByPatterns.caproposedwhere_from.map((async a=>{if("Complete"!==a["ds6w:status"].slice(14)){let l="".concat(o,"/resources/v1/modeler/dslc/changeaction/").concat(a.id,"?$fields=proposedChanges,flowDown");const r=await new Promise(((s,t)=>{p.authenticatedRequest(l,{method:"GET",headers:e,type:"json",onComplete:s,onFailure:t})}));Array.isArray(r.proposedChanges)&&r.proposedChanges.forEach((e=>{i.push({identifier:e.where.identifier,action:e.whats[0].what})})),n="released"!==t.toLowerCase()||i.some((e=>e.identifier===s&&"Modify"===e.action))}})))}else console.error("Unable to Fetch the ");return console.log("Status is coming inside 7"),console.log("Response Object is:",n),{success:!0,data:n,proposedChanges:i}}catch(p){throw console.error("Failed Request:",{url:r,headers:e,body:c,error:p}),p}})(g,u,c);return console.log("[Use All Plants] Get CA Details",w),w.success&&(s((0,i.ug)(w.data)),s((0,i.aB)(w.proposedChanges))),void console.log("[Plant Assignment] All Services Executed Successfully")}catch(g){throw console.error("[Plant Assignment] Error:",g),s((0,i.Ve)(!1)),g}finally{s((0,i.Ve)(!1))}}}}},2268:(e,s,t)=>{t.d(s,{I:()=>a});var o=t(6047);const a=async()=>{try{let e=window.widget.getValue("Credentials");const s=await(0,o.fV)();console.log("Security Context is:",e);const t="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/application/CSRF?tenant=OI000186152",a=await new Promise(((e,o)=>{s.authenticatedRequest(t,{method:"GET",type:"json",onComplete:e,onFailure:o})})),l=a.csrf.name,n=a.csrf.value,i="SecurityContext",r=e;return{[l]:n,[i]:r}}catch(e){return void console.error("[CSRF] Failed to fetch token:",e)}}},3127:(e,s,t)=>{t.d(s,{i:()=>n});var o=t(9379),a=t(9722),l=t(6047);const n=async(e,s,t,n,i,r,c,d,u,p,g)=>{try{const e="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";console.log("[Save Data] Starting data saving process..."),console.log("Type in Save Table Data:",d),console.log("Final aRRAY IS inside Save:",p),console.log("Proposed Changes in Save",g);const s=await(0,l.fV)(),t=async(e,t,a)=>(console.log("Fetching URL:",e),console.log("Request Body:",JSON.stringify(t,null,2)),new Promise(((l,i)=>{s.authenticatedRequest(e,{method:a,headers:(0,o.A)((0,o.A)({},n),{},{"Content-Type":"application/json"}),data:JSON.stringify(t),type:"json",onComplete:e=>{console.log("Response received:",e),l(e)},onFailure:e=>{console.error("Request failed:",e),i(e)}})}))),r=async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";console.log("Fetching URL:",e),console.log("Method is:"),console.log("Request Body:",JSON.stringify(s,null,2));try{const l=await(0,a.A)({url:e,method:t,headers:(0,o.A)((0,o.A)({},n),{},{"Content-Type":"application/json"}),data:s});return console.log("Response received:",l.data),l.data}catch(l){throw console.error("Request failed:",l),l}};let m=c.filter((e=>{if("released"===e.state.toLowerCase()){return!g.find((s=>s.identifier===e.id&&"modify"===s.action.toLowerCase()))}return!1}));console.log("NotPropagableChilds ARE :",m);let f=[];p.forEach((e=>{if(e.MBOMValue){let s=[];m.forEach((t=>{t.classes.includes(e.id)||s.push({childId:t.id,childName:t.name})})),s.length>0&&f.push({id:e.id,title:e.title,childs:s,type:e.Type})}}));let w="";console.log("ErrorObj IS",f),f.forEach((e=>{let s="";if(Array.isArray(e.childs)&&e.childs.every((e=>e.childName))){const t=e.childs.map((e=>e.childName)).join(", ");console.log("Chilld Titles are",t),s="new"!==e.type.toLowerCase()?"".concat(e.title," MBOM can't be Make due to unclassified child items: ").concat(t):"Unable to classify product ".concat(e.title," due to unclassified child items: ").concat(t),console.log("Message is:",s)}else s="Invalid child data for ".concat(e.title,".");w+="".concat(s,"\n")})),console.log(f),console.log("Concatenated Messages:\n",w);let y=p.filter((e=>"new"===e.Type.toLowerCase()&&!f.some((s=>s.id===e.id)))).map((e=>e.id));console.log("New Classes are:",y);let C={};p.forEach((e=>{!f.some((s=>s.id===e.id))&&("update"===e.Type.toLowerCase()||"new"===e.Type.toLowerCase()&&e.MBOMValue)&&(C[e.MBOMName]=e.MBOMValue)})),console.log("Update body is:",C);let v=p.filter((e=>e.MBOMValue&&!f.some((s=>s.id===e.id)))).map((e=>e.id));if(console.log("Propogateable classes are",v),y.length>0){let e="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/classifyProductToClass",s={id:i,type:d,classes:y,mode:"classifyParent"};const t=await r(e,s,"POST");console.log("classifyResponse:",JSON.stringify(t))}if(Object.keys(C).length>0){var h;const s="".concat(e,"/resources/v1/modeler/dslib/dslib:ClassifiedItem/").concat(i),o=await t(s,"","GET");console.log("CStamp Response:",o);let a=(null===(h=o.member[0])||void 0===h?void 0:h.cestamp)||"";C.cestamp=a;const l="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/updateClassificationAttribute?id=".concat(i);await r(l,C,"PATCH"),console.log("Updated database successfully.")}if(v.length>0&&c.length>0&&"VPMReference"===d){let e="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/classifyProductToClass",s={id:i,type:d,classes:v,childs:c,mode:"classifychilds"};const t=await r(e,s,"POST");console.log("child classifyResponse:",JSON.stringify(t))}if(u.length>0){let e="https://emr-product-datahub-server-sap-stage.azurewebsites.net/plantAssignment/declassifyProductToClass",s={id:i,type:d,classes:u};const t=await r(e,s,"POST");console.log("declassifyResponse:",JSON.stringify(t))}return console.log("All classification API calls completed successfully."),{success:!0,message:"Data saved successfully",ErrorObj:f,Finalmessage:w}}catch(m){return console.error("Error occurred:",m),{success:!1,message:"Failed to save data",error:m}}}}}]);
//# sourceMappingURL=387.bb239c16.chunk.js.map
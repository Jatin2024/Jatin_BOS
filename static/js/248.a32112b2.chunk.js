"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[248],{1358:(e,t,o)=>{o.d(t,{A:()=>l});o(5043);var a=o(8012),n=(o(4119),o(3637)),r=o(1397),s=o(4675),i=o(579);const l=()=>{const{handleDrop:e}=(0,a.A)(),{performSearch:t}=(0,s.A)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"droppable-container mt-4",children:[(0,i.jsx)(n.A,{style:{width:"90px",height:"90px"},src:"https://thewhitechamaleon.github.io/testrapp/images/drag.png",alt:"Data Collect",className:"search-icon"}),(0,i.jsx)("span",{className:"drag-and-drop-text",children:"Drag and Drop"}),(0,i.jsxs)("div",{className:"divider-container",children:[(0,i.jsx)("hr",{className:"divider"}),(0,i.jsx)("span",{className:"divider-text",children:"or"}),(0,i.jsx)("hr",{className:"divider"})]}),(0,i.jsx)(r.A,{onSearch:o=>{t(o,{title:"Search",role:"",mode:"furtive",default_with_precond:!0,precond:'flattenedtaxonomies:"types/VPMReference" OR flattenedtaxonomies:"types/Raw_Material" OR flattenedtaxonomies:"types/Document"',show_precond:!1,multiSel:!1,idcard_activated:!1,select_result_max_idcard:!1,itemViewClickHandler:"",search_delegation:"3dsearch"},(t=>{console.log("Selected objects:",t),console.log("objectId: selectedObjects[0].id",t[0].id),t&&t.length>0&&t[0].id?e([{objectId:t[0].id,objectType:t[0]["ds6w:type_value"]}]):console.warn("No objectId found in selected objects")}))}})]})})}},4604:(e,t,o)=>{o.r(t),o.d(t,{default:()=>E});var a=o(5043),n=o(4391),r=(o(2342),o(9555),o(3003)),s=o(2670),i=o(2115),l=(o(8421),o(4050),o(9959),o(9379)),d=o(1358),c=o(3637),u=o(6713),p=o(768),m=o(759),h=o(5645),g=o(579);var v=o(2725),R=o(3277),O=(o(1584),o(314)),D=o(2268),S=o(4854),f=o(2073);const w=()=>{const{showErrorToast:e}=(0,v.A)(),t=(0,r.wA)();let o="",a="";(0,S.D)((e=>{a=e.getValue("Credentials"),o=e.getValue("email")})),console.log("Email in useBOSWidget:",o),console.log("Security Context in useBOSWidget:",a);return{handleBOSWidget:async(o,n,r,s,i,d)=>{try{console.log("Object id is:",r),console.log("Object type is:",s),t((0,h.Ve)(!0));const o=await(0,D.I)(a);if(!o)return void e(R.rK);console.log("[useBOSWidget] CSRF Headers:",o);let n="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/documents/parentId/".concat(r,"?parentRelName=SpecificationDocument"),g="Document"===s?"to":"from",v="".concat(n,"&parentDirection=").concat(g),O=await(0,f.ui)("GET",v,"",o);if(console.log("SpecDetails Response:",O),O&&O.status&&O.output.data.length>0){var c,u,p,m;let e,a,n=O.output.data.map((e=>({id:e.id,title:e.dataelements.title&&""!==e.dataelements.title.trim()?e.dataelements.title:e.dataelements.secondaryTitle,revision:e.dataelements.revision,state:e.dataelements.stateNLS,name:e.dataelements.name})));if(console.log("[useBOSWidget] Extracted Spec Documents:",n),"Document"===s){const e={data:[]};n.forEach((t=>{const o={id:t.id,identifier:t.id,type:"VPMReference",source:"https://oi000186152-us1-space.3dexperience.3ds.com/enovia",relativePath:"/resources/v1/modeler/dseng/dseng:EngItem/".concat(t.id)};e.data.push(o)}));const t="https://oi000186152-us1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dslc/version/getGraph",a=await(0,f.ui)("POST",t,e,o);console.log("response is:",a),a.status&&a.output.results&&(console.log("Response result is:",a.results),a.output.results.forEach((e=>{const t=e.versions.reduce(((e,t)=>t.revision>e.revision?t:e));n=n.map((e=>(0,l.A)((0,l.A)({},e),{},{isLatestRevision:e.id===t.id?"TRUE":"FALSE"})))}))),console.log("ChildObjectDocument is:",n)}"Document"===s?(a="https://emr-product-datahub-server-sap-stage.azurewebsites.net/bosAttribute/getLatestSpecItemDetails",e={SpecName:i,SpecRevision:d,Items:n.map((e=>({ItemName:e.name,ItemRevision:e.revision})))}):(a="https://emr-product-datahub-server-sap-stage.azurewebsites.net/bosAttribute/getLatestItemSpecDetails",e={ItemName:i,ItemRevision:d,Specifications:n.map((e=>({SpecName:e.name,SpecRevision:e.revision})))}),console.log("Requested Body is:",e);const r=await(0,f.Fd)("POST",a,e);console.log("the response from node API is:",r);let g=[];null!==r&&void 0!==r&&null!==(c=r.data)&&void 0!==c&&null!==(u=c.data)&&void 0!==u&&u.Specifications?r.data.data.Specifications.forEach((e=>{let t=n.find((t=>t.name===e.SpecName&&t.revision===e.SpecRevision));g.push({childState:(null===t||void 0===t?void 0:t.state)||"",childTitle:(null===t||void 0===t?void 0:t.title)||"",childLatest:(null===t||void 0===t?void 0:t.isLatestRevision)||"FALSE",childName:e.SpecName,childRevision:e.SpecRevision,PrintOnPurchaseOrderRequired:e.PrintOnPurchaseOrderRequired,PrintOnWorkOrderRequired:e.PrintOnWorkOrderRequired,WorkOrderDocumentRequired:e.WorkOrderDocumentRequired,PrintOnReportOrderRequired:e.PrintOnReportOrderRequired,"SAP/JDE":e["SAP/JDE"]})})):null!==r&&void 0!==r&&null!==(p=r.data)&&void 0!==p&&null!==(m=p.data)&&void 0!==m&&m.Items?r.data.data.Items.forEach((e=>{let t=n.find((t=>t.name===e.ItemName&&t.revision===e.ItemRevision));g.push({childState:(null===t||void 0===t?void 0:t.state)||"",childTitle:(null===t||void 0===t?void 0:t.title)||"",childName:e.ItemName,childRevision:e.ItemRevision,childLatest:(null===t||void 0===t?void 0:t.isLatestRevision)||"FALSE",PrintOnPurchaseOrderRequired:e.PrintOnPurchaseOrderRequired,PrintOnWorkOrderRequired:e.PrintOnWorkOrderRequired,WorkOrderDocumentRequired:e.WorkOrderDocumentRequired,PrintOnReportOrderRequired:e.PrintOnReportOrderRequired,"SAP/JDE":e["SAP/JDE"]})})):console.warn("[useBOSWidget] Unexpected API response format."),console.log("[useBOSWidget] Final Merged Data for Dispatch:",g),t((0,h.Xv)(g))}else console.warn("[useBOSWidget] No connected childs."),t((0,h.Xv)([]))}catch(g){throw console.error("[useBOSWidget] Error:",g),g}finally{t((0,h.Ve)(!1))}}}},b=()=>{const{showErrorToast:e}=(0,v.A)(),{handleBOSWidget:t}=w(),[o,n]=(0,a.useState)(!1),s=(0,r.wA)(),i=(0,a.useCallback)((async o=>{try{const n=await(0,O.Sj)({dataItems:o});if(n.success){s((0,h.um)({cardData:n.data.cardData}));const e=n.data.cardData;var a,r;if(console.log("[Dragged Items are]",e),s((0,h.Rr)(!0)),n)await t(e["Collaborative Space"],e["Maturity State"],null===(a=o[0])||void 0===a?void 0:a.objectId,null===(r=o[0])||void 0===r?void 0:r.objectType,e.Name,e["Dropped Revision"])}else e(R.wX)}catch(i){console.error("[FetchObjectDetails] Error fetching details:",i),e(R.wX)}finally{n(!1)}}),[s,t]),l=(0,a.useCallback)((async t=>{n(!0),console.log("[handleDrop] handleDrop called with dataItems:",t);try{t&&t.length>0?await i(t):console.warn("[handleDrop] No data items to process.")}catch(o){n(!1),console.error("[Drop] Error in handleDrop:",o),console.log("[handleDrop] Error in handleDrop, setting loading to false"),e(R.nz)}}),[i,e]);return{initializeDroppableArea:(0,a.useCallback)((()=>{s((0,h.Rr)(!1));const t=setInterval((()=>{const o=document.querySelector(".droppable-container");o&&(clearInterval(t),(0,O.pn)(o,l,s,e))}),100);return()=>clearInterval(t)}),[l,s]),loading:o,handleDrop:l}};o(5362);const A=e=>{let{editableColumns:t,selectedRows:o,onApplyUpdate:n,valueOptions:r}=e;const[s,i]=(0,a.useState)(""),[l,d]=(0,a.useState)(""),c=e=>{s&&l?n(s,l,e?"all":"selected"):alert("Please select a column and a value.")};return(0,g.jsxs)("div",{className:"dropdown",children:[(0,g.jsx)("button",{className:"btn btn-outline-primary btn-lg m-2 dropdown-toggle",type:"button","data-bs-toggle":"dropdown",children:"Mass Update"}),(0,g.jsxs)("div",{className:"dropdown-menu p-3 ",style:{width:"250px"},children:[(0,g.jsx)("label",{children:"Select Column:"}),(0,g.jsxs)("select",{className:"form-select mb-2",onChange:e=>i(e.target.value),value:s,children:[(0,g.jsx)("option",{value:"",children:"-- Select Column --"}),t.map((e=>(0,g.jsx)("option",{value:e,children:e},e)))]}),(0,g.jsx)("label",{children:"Select Value:"}),(0,g.jsxs)("select",{className:"form-select mb-2",value:l,onChange:e=>d(e.target.value),disabled:!s,children:[(0,g.jsx)("option",{value:"",children:"-- Select Value --"}),r.map((e=>(0,g.jsx)("option",{value:e,children:e},e)))]}),(0,g.jsx)("button",{className:"btn btn-outline-success me-2 mb-2",onClick:()=>c(!1),disabled:!o.length,style:{cursor:o.length?"pointer":"not-allowed"},children:"Apply to Selected"}),(0,g.jsx)("button",{className:"btn btn-outline-primary",onClick:()=>c(!0),children:"Apply to All"})]})]})},j=e=>{let{onSave:t,state:o,selectedRows:a}=e;const{showWarningToast:n}=(0,v.A)();return(0,g.jsxs)("div",{className:"d-flex cta-absolute",children:[(0,g.jsx)("button",{className:"btn btn-outline-success btn-lg m-2",onClick:()=>{t?t():n("RELEASED"===o?R.EZ:R.nX)},children:"Save"}),(0,g.jsx)(A,{editableColumns:["Print On Purchase Order Required","Print On Work Order Required","Work Order Document Required","Print On report Order Required","SAP/JDE"],selectedRows:a,onApplyUpdate:(e,t,o)=>{"selected"===o?(console.log("the selected rows are: ",a),console.log("to update selected rows columns:",e),console.log("to update selected rows value:",t)):(console.log("to update all rows columns:",e),console.log("to update all rows value:",t))},valueOptions:["Yes","No"]})]})},x=()=>{const{initializeDroppableArea:e,loading:t}=b(),[o,n]=(0,a.useState)(0),[s,i]=(0,a.useState)([]),[O,D]=(0,a.useState)(!1),[S,w]=(0,a.useState)(!1),[A,x]=(0,a.useState)(!1),[N,P]=(0,a.useState)([]),y=(0,r.wA)(),{showSuccessToast:E,showErrorToast:I}=(0,v.A)();(0,a.useEffect)((()=>{N.length&&i(N.map((e=>(0,l.A)((0,l.A)({},e),{},{changedCells:{}}))))}),[N]);console.log("Table Data after Adding:",s);const C=(0,r.d4)((e=>e.droppedObject.selectedTableRows)),k=(0,r.d4)((e=>e.droppedObject.droppedObjectData));console.log("droppedObjectData",k);const q=(0,r.d4)((e=>e.droppedObject.loadingParentDetails));console.log("Parents Loading State:",q);const T=(0,r.d4)((e=>e.droppedObject.plantObjectData.proposedChanges));console.log("Proposed Changes are:",T);const W=(0,r.d4)((e=>e.droppedObject.isDropped)),L=(0,r.d4)((e=>e.droppedObject.BOSObjectData));console.log("Bos data in BOS Widget is:",L);const F=(0,r.d4)((e=>e.droppedObject.BOSObjectData.specDocument));console.log("BOSObjectData",F);if(console.log("Table Data is:",s),(0,a.useEffect)((()=>{s.length>=0&&n((e=>e+1))}),[s]),k.cardData&&k.initialDraggedData)var B,M,_=k.cardData["Maturity State"],V=null===(B=k.initialDraggedData)||void 0===B||null===(M=B.data)||void 0===M?void 0:M.items[0].objectType;(0,a.useEffect)((()=>{W||e()}),[W,e]),(0,a.useEffect)((()=>{D(q)}),[q]);const J=(0,a.useMemo)((()=>((e,t)=>e?e.map((e=>{let o={Title:(null===e||void 0===e?void 0:e.childTitle)||"N/A",Revision:(null===e||void 0===e?void 0:e.childRevision)||"1",State:(null===e||void 0===e?void 0:e.childState)||"N/A","Print On Purchase Order Required":e.PrintOnPurchaseOrderRequired||"No","Print On Work Order Required":e.PrintOnWorkOrderRequired||"No","Work Order Document Required":e.WorkOrderDocumentRequired||"No","Print On report Order Required":e.PrintOnReportOrderRequired||"No","SAP/JDE":e["SAP/JDE"]||"No"};return"Document"===t&&(o.IsLatest=(null===e||void 0===e?void 0:e.childLatest)||"FALSE"),o})):[])(F,V)),[F,V]);(0,a.useEffect)((()=>{P(J)}),[J]),(0,a.useEffect)((()=>{J.length>=0&&(console.log("New Table Data:",J),i(J),n((e=>e+1)))}),[J]);const U=(0,a.useMemo)((()=>(e=>{if(!e||!e.cardData)return null;const t=e.cardData;let o={title:t.Title||"N/A",type:t.Type||"N/A","Maturity State":t["Maturity State"]||"N/A",owner:t.Owner||"N/A","Collaborative Space Title":t["Collaborative Space Title"]||"N/A",Description:t.Description||"N/A","Dropped Revision":t["Dropped Revision"]||"N/A","Latest Released Revision":t["Latest Released Revision"]||"N/A","CAD Format":t["CAD Format"]||"N/A",imageURL:t.imageURL||"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/snresources/images/icons/large/I_VPMNavProduct108x144.png"};return"Document"!==t.Type&&(o.EIN=t.EIN||"N/A",o["CAD Format"]=t["CAD Format"]||"N/A"),o})(k)),[k]);console.log(U),(0,a.useEffect)((()=>{x(!!U)}),[U]);const K=(0,a.useMemo)((()=>((e,t,o)=>{const a=[{accessorKey:"Title",header:"Title"},{accessorKey:"Revision",header:"Revision"},{accessorKey:"State",header:"State"}];"Document"===e&&a.push({accessorKey:"IsLatest",header:"Is Latest"});const n=["Print On Purchase Order Required","Print On Work Order Required","Work Order Document Required","Print On report Order Required","SAP/JDE"].map((a=>({accessorKey:a,header:a,cell:n=>{let{row:r,getValue:s,table:i}=n;return("Document"===e?"FALSE"===r.original.IsLatest:t&&t!==o)?(0,g.jsx)("span",{children:s()}):(0,g.jsxs)("select",{value:s(),onChange:e=>{var t;const o=e.target.value,n=i.getRowModel().rows.map((e=>e.id===r.id?(0,l.A)((0,l.A)({},e.original),{},{[a]:o}):e.original));null===(t=i.options.meta)||void 0===t||t.updateTableData(n)},className:"appearance-none bg-transparent border-none cursor-pointer focus:outline-none",style:{width:"70%",padding:"5px",fontSize:"14px",background:"none",border:"none",textAlign:"left"},onMouseOver:e=>e.target.style.border="1px solid #ccc",onMouseOut:e=>e.target.style.border="none",children:[(0,g.jsx)("option",{value:"Yes",children:"Yes"}),(0,g.jsx)("option",{value:"No",children:"No"})]})}})));return[...a,...n]})(V,null===k||void 0===k?void 0:k.cardData["Latest Released Revision"],null===k||void 0===k?void 0:k.cardData["Dropped Revision"])),[V,null===k||void 0===k?void 0:k.cardData]);return(0,g.jsxs)(g.Fragment,{children:[S&&(0,g.jsxs)("div",{className:"loading-overlay",children:[(0,g.jsx)(u.A,{}),(0,g.jsx)("p",{children:"Saving..."})]}),!W&&!t&&!O&&(0,g.jsx)(d.A,{}),t&&(0,g.jsx)(u.A,{}),W&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:"content-wrapper py-3 border-bottom",children:(0,g.jsxs)("div",{className:"d-flex ",children:[(0,g.jsx)("div",{className:" p-0 pt-4",children:(0,g.jsx)(c.A,{src:"https://thewhitechamaleon.github.io/testrapp/images/home.png",alt:"home-icon",className:"home-icon",onClick:()=>{e(),y((0,h.Rr)(!1)),y((0,h.um)({cardData:{},parentDetails:[],versions:[],initialDraggedData:[]})),y((0,h.Lq)({allPlants:[],initialAssignedPlants:[],uniquePlants:[],productChildren:[],CAName:!1,headers:{}})),i([]),x(!1)}})}),U&&(0,g.jsx)(m.A,{data:U})]})}),O?(0,g.jsx)("div",{className:"loading-indicator mt-5",children:(0,g.jsx)(u.A,{})}):(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:"wrapper-cta",children:[(0,g.jsx)(j,{onSave:async()=>{console.log("Table Data is:",s),w(!0),console.log("Type of Parent:",V);let e,t,o=[];"Document"===V?(o={SpecName:k.cardData.Name,SpecRevision:k.cardData["Dropped Revision"]},e="ItemName",t="ItemRevision"):(console.log("It's a physical Product"),o={ItemName:k.cardData.Name,ItemRevision:k.cardData["Dropped Revision"]},e="SpecName",t="SpecRevision");const a=s.map((a=>{let n=F.find((e=>e.childTitle===a.Title&&e.childRevision===a.Revision));return(0,l.A)((0,l.A)({[e]:n?n.childName:null,[t]:a.Revision},o),{},{PrintOnPurchaseOrderRequired:a["Print On Purchase Order Required"],PrintOnWorkOrderRequired:a["Print On Work Order Required"],WorkOrderDocumentRequired:a["Work Order Document Required"],PrintOnReportOrderRequired:a["Print On report Order Required"],"SAP/JDE":a["SAP/JDE"]})}));a.sort(((e,t)=>e.SpecName!==t.SpecName?e.SpecName.localeCompare(t.SpecName):Number(e.SpecRevision)-Number(t.SpecRevision))),console.log("Formatted Data:",a);const n=await(0,f.Fd)("POST","https://emr-product-datahub-server-sap-stage.azurewebsites.net/bosAttribute/createORupdateDetails",a);console.log("the response from node API is:",n),200===n.status?(E(R.KF),P(s),w(!1)):(I(R.fm),w(!1))},selectedRows:C,state:_}),(0,g.jsx)(p.A,{data:s,columns:K,meta:{updateTableData:e=>{const t=e.map((e=>{const t=N.find((t=>t.Title===e.Title&&t.Revision===e.Revision));if(!t)return(0,l.A)((0,l.A)({},e),{},{changedCells:{}});const o={};return Object.keys(e).forEach((a=>{e[a]!==t[a]&&(o[a]=!0)})),(0,l.A)((0,l.A)({},e),{},{changedCells:o})}));i(t)}}},o)]})})]})]})};var N=o(174);const P=()=>{const{handleDrop:e}=b(),{showSuccessToast:t,showErrorToast:o}=(0,v.A)(),[n,r]=(0,a.useState)(!1);console.log("---[WidgetLifecycle]--- starts");return(0,a.useEffect)((()=>{if(!window.widget)return;console.trace("[WidgetLifecycle] \ud83d\udd04 `onRefresh` was called from:"),window.widget.addEvent("onRefresh",(async()=>{var a,n;const i=(new Error).stack.split("\n"),l=sessionStorage.getItem("userClickedRefresh");if((e=>e.some((e=>e.includes("UWA_Frame_Alone.js")||e.includes("bundle-min.js"))))(i)&&!l)return void console.warn("[WidgetLifecycle] \u26d4 Auto-refresh detected. Ignoring unwanted `onRefresh`.");sessionStorage.removeItem("userClickedRefresh"),r(!0);const d=s.A.getState().droppedObject.droppedObjectData.initialDraggedData;if(null===d||void 0===d||null===(a=d.data)||void 0===a||null===(n=a.items)||void 0===n||!n.length)return console.error("[WidgetLifecycle] \u26a0\ufe0f `initialDraggedData` is missing or invalid:",d),void r(!1);try{await(0,N.M)(d.data.items,e)}catch(c){console.error("[WidgetLifecycle] \u274c Error during refresh:",c),o(R.H6)}finally{r(!1),t(R._l)}}))}),[]),n?(0,g.jsx)(u.A,{}):null};o(8885);let y=null;function E(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let o=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");o||(o=document.createElement("div"),o.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(o):document.body.appendChild(o)),y||(y=n.createRoot(o)),y.render((0,g.jsxs)(r.Kq,{store:s.A,children:[(0,g.jsx)(P,{}),(0,g.jsx)(x,{}),(0,g.jsx)(i.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}!function(){if(window.parent&&window.parent.document){let e=window.parent.document.createElement("script");e.textContent='\n    function listenForRefreshClicks() {\n      // console.log("\ud83c\udf0d [Parent] Listening for manual refresh clicks...");\n\n      document.body.addEventListener("click", function (event) {\n        let refreshButton = event.target.closest("#refresh"); // Check if refresh was clicked\n\n        if (refreshButton) {\n          // console.log("\u2705 [Parent] User clicked Refresh!");\n          sessionStorage.setItem("userClickedRefresh", "true"); // Store flag\n          // console.log("Stored Flag:", sessionStorage.getItem("userClickedRefresh"));\n        }\n      }, true);\n    }\n\n    // \u2705 Ensure event listener is added even if DOM is already loaded\n    if (document.readyState === "loading") {\n      document.addEventListener("DOMContentLoaded", listenForRefreshClicks);\n    } else {\n      listenForRefreshClicks();\n    }\n  ',window.parent.document.body.appendChild(e)}else console.warn("\u26a0\ufe0f [index.js] Unable to inject script\u2014parent window not accessible.")}()}}]);
//# sourceMappingURL=248.a32112b2.chunk.js.map
"use strict";(self.webpackChunkreact_widget_template=self.webpackChunkreact_widget_template||[]).push([[248],{1358:(e,t,o)=>{o.d(t,{A:()=>d});o(5043);var a=o(8012),n=(o(4119),o(3637)),r=o(1397),s=o(4675),i=o(579);const d=()=>{const{handleDrop:e}=(0,a.A)(),{performSearch:t}=(0,s.A)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"droppable-container mt-4",children:[(0,i.jsx)(n.A,{style:{width:"90px",height:"90px"},src:"https://thewhitechamaleon.github.io/testrapp/images/drag.png",alt:"Data Collect",className:"search-icon"}),(0,i.jsx)("span",{className:"drag-and-drop-text",children:"Drag and Drop"}),(0,i.jsxs)("div",{className:"divider-container",children:[(0,i.jsx)("hr",{className:"divider"}),(0,i.jsx)("span",{className:"divider-text",children:"or"}),(0,i.jsx)("hr",{className:"divider"})]}),(0,i.jsx)(r.A,{onSearch:o=>{t(o,{title:"Search",role:"",mode:"furtive",default_with_precond:!0,precond:'flattenedtaxonomies:"types/VPMReference" OR flattenedtaxonomies:"types/Raw_Material" OR flattenedtaxonomies:"types/Document"',show_precond:!1,multiSel:!1,idcard_activated:!1,select_result_max_idcard:!1,itemViewClickHandler:"",search_delegation:"3dsearch"},(t=>{t&&t.length>0&&t[0].id?e([{objectId:t[0].id,objectType:t[0]["ds6w:type_value"]}]):console.warn("No objectId found in selected objects")}))}})]})})}},4604:(e,t,o)=>{o.r(t),o.d(t,{default:()=>y});var a=o(5043),n=o(4391),r=(o(2342),o(9555),o(3003)),s=o(2670),i=o(2115),d=(o(8421),o(4050),o(9959),o(9379)),l=o(1358),c=o(3637),u=o(6713),p=o(768),m=o(759),h=o(5645),v=o(579);var g=o(2725),R=(o(3127),o(3277)),D=(o(1584),o(314)),f=o(2268),O=o(6047);const b=()=>{const{showErrorToast:e}=(0,g.A)(),t=(0,r.wA)(),o="https://oi000186152-us1-space.3dexperience.3ds.com/enovia";let a=window.widget.getValue("email");console.log("Email in useBOSWidget:",a);return{handleBOSWidget:async(a,n,r,s,i,l)=>{try{console.log("Object id is:",r),console.log("Object type is:",s),t((0,h.Ve)(!0));const g=await(0,f.I)();if(!g)return void e(R.rK);console.log("[useBOSWidget] CSRF Headers:",g);let D="".concat(o,"/resources/v1/modeler/documents/parentId/").concat(r,"?parentRelName=SpecificationDocument"),b="Document"===s?"to":"from",w="".concat(D,"&parentDirection=").concat(b),S=await(0,O.ui)("GET",w,"",g);if(console.log("SpecDetails Response:",S),S&&S.status&&S.output.data.length>0){var c,u,p,m;let A,j,N=S.output.data.map((e=>({id:e.id,title:e.dataelements.title&&""!==e.dataelements.title.trim()?e.dataelements.title:e.dataelements.secondaryTitle,revision:e.dataelements.revision,state:e.dataelements.stateNLS,name:e.dataelements.name})));if(console.log("[useBOSWidget] Extracted Spec Documents:",N),"Document"===s){const y={data:[]};N.forEach((e=>{const t={id:e.id,identifier:e.id,type:"VPMReference",source:"".concat(o),relativePath:"/resources/v1/modeler/dseng/dseng:EngItem/".concat(e.id)};y.data.push(t)}));const E="".concat(o,"/resources/v1/modeler/dslc/version/getGraph"),C=await(0,O.ui)("POST",E,y,g);function I(e){if(/^\d+$/.test(e))return parseInt(e,10);let t=0;for(let o=0;o<e.length;o++)t=26*t+(e.charCodeAt(o)-"A".charCodeAt(0)+1);return t}console.log("response is:",C),C.output.results.forEach((e=>{const t=e.versions.reduce(((e,t)=>I(t.revision)>I(e.revision)?t:e));N=N.map((o=>e.versions.some((e=>e.id===o.id))?(0,d.A)((0,d.A)({},o),{},{isLatestRevision:o.id===t.id?"TRUE":"FALSE"}):o))})),console.log("ChildObjectDocument is:",N)}"Document"===s?(j="https://emr-product-datahub-server-qa.azurewebsites.net/bosAttribute/getLatestSpecItemDetails",A={SpecName:i,SpecRevision:l,Items:N.map((e=>({ItemName:e.name,ItemRevision:e.revision})))}):(j="https://emr-product-datahub-server-qa.azurewebsites.net/bosAttribute/getLatestItemSpecDetails",A={ItemName:i,ItemRevision:l,Specifications:N.map((e=>({SpecName:e.name,SpecRevision:e.revision})))}),console.log("Requested Body is:",A);const P=await(0,O.Fd)("POST",j,A);console.log("the response from node API is:",P);let x=[];null!==P&&void 0!==P&&null!==(c=P.data)&&void 0!==c&&null!==(u=c.data)&&void 0!==u&&u.Specifications?P.data.data.Specifications.forEach((e=>{let t=N.find((t=>t.name===e.SpecName&&t.revision===e.SpecRevision));x.push({childState:(null===t||void 0===t?void 0:t.state)||"",childTitle:(null===t||void 0===t?void 0:t.title)||"",childLatest:(null===t||void 0===t?void 0:t.isLatestRevision)||"FALSE",childName:e.SpecName,childRevision:e.SpecRevision,PrintOnPurchaseOrderRequired:e.PrintOnPurchaseOrderRequired,PrintOnWorkOrderRequired:e.PrintOnWorkOrderRequired,WorkOrderDocumentRequired:e.WorkOrderDocumentRequired,PrintOnReportOrderRequired:e.PrintOnReportOrderRequired,"SAP/JDE":e["SAP/JDE"]})})):null!==P&&void 0!==P&&null!==(p=P.data)&&void 0!==p&&null!==(m=p.data)&&void 0!==m&&m.Items?P.data.data.Items.forEach((e=>{let t=N.find((t=>t.name===e.ItemName&&t.revision===e.ItemRevision));x.push({childState:(null===t||void 0===t?void 0:t.state)||"",childTitle:(null===t||void 0===t?void 0:t.title)||"",childName:e.ItemName,childRevision:e.ItemRevision,childLatest:(null===t||void 0===t?void 0:t.isLatestRevision)||"FALSE",PrintOnPurchaseOrderRequired:e.PrintOnPurchaseOrderRequired,PrintOnWorkOrderRequired:e.PrintOnWorkOrderRequired,WorkOrderDocumentRequired:e.WorkOrderDocumentRequired,PrintOnReportOrderRequired:e.PrintOnReportOrderRequired,"SAP/JDE":e["SAP/JDE"]})})):console.warn("[useBOSWidget] Unexpected API response format."),console.log("[useBOSWidget] Final Merged Data for Dispatch:",x),t((0,h.Xv)(x))}else console.warn("[useBOSWidget] No connected childs."),t((0,h.Xv)([]))}catch(v){throw console.error("[useBOSWidget] Error:",v),v}finally{t((0,h.Ve)(!1))}}}},w=()=>{const{showErrorToast:e}=(0,g.A)(),{handleBOSWidget:t}=b(),[o,n]=(0,a.useState)(!1),s=(0,r.wA)(),i=(0,a.useCallback)((async o=>{try{const n=await(0,D.Sj)({dataItems:o});if(n.success){s((0,h.um)({cardData:n.data.cardData}));const e=n.data.cardData;var a,r;if(console.log("[Dragged Items are]",e),s((0,h.Rr)(!0)),n)await t(e["Collaborative Space"],e["Maturity State"],null===(a=o[0])||void 0===a?void 0:a.objectId,null===(r=o[0])||void 0===r?void 0:r.objectType,e.Name,e["Dropped Revision"])}else e(R.wX)}catch(i){console.error("[FetchObjectDetails] Error fetching details:",i),e(R.wX)}finally{n(!1)}}),[s,t]),d=(0,a.useCallback)((async t=>{n(!0),console.log("[handleDrop] handleDrop called with dataItems:",t);try{t&&t.length>0?await i(t):console.warn("[handleDrop] No data items to process.")}catch(o){n(!1),console.error("[Drop] Error in handleDrop:",o),console.log("[handleDrop] Error in handleDrop, setting loading to false"),e(R.nz)}}),[i,e]);return{initializeDroppableArea:(0,a.useCallback)((()=>{s((0,h.Rr)(!1));const t=setInterval((()=>{const o=document.querySelector(".droppable-container");o&&(clearInterval(t),(0,D.pn)(o,d,s,e))}),100);return()=>clearInterval(t)}),[d,s]),loading:o,handleDrop:d}};o(5362);const S=e=>{let{editableColumns:t,selectedRows:o,onApplyUpdate:n,valueOptions:r}=e;const[s,i]=(0,a.useState)(""),[d,l]=(0,a.useState)(""),c=e=>{s&&d?n(s,d,e?"all":"selected"):alert("Please select a column and a value.")};return(0,v.jsxs)("div",{className:"dropdown",children:[(0,v.jsx)("button",{className:"btn btn-outline-primary btn-lg m-2 dropdown-toggle",type:"button","data-bs-toggle":"dropdown",children:"Mass Update"}),(0,v.jsxs)("div",{className:"dropdown-menu p-3 ",style:{width:"300px"},children:[(0,v.jsx)("label",{children:"Select Column:"}),(0,v.jsxs)("select",{className:"form-select mb-2",onChange:e=>i(e.target.value),value:s,children:[(0,v.jsx)("option",{value:"",children:"-- Select Column --"}),t.map((e=>(0,v.jsx)("option",{value:e,children:e},e)))]}),(0,v.jsx)("label",{children:"Select Value:"}),(0,v.jsxs)("select",{className:"form-select mb-2",value:d,onChange:e=>l(e.target.value),disabled:!s,children:[(0,v.jsx)("option",{value:"",children:"-- Select Value --"}),r.map((e=>(0,v.jsx)("option",{value:e,children:e},e)))]}),(0,v.jsx)("button",{className:"btn btn-outline-success me-2 mb-2",onClick:()=>c(!1),disabled:!o.length,style:{cursor:o.length?"pointer":"not-allowed"},children:"Apply to Selected"}),(0,v.jsx)("button",{className:"btn btn-outline-primary",onClick:()=>c(!0),children:"Apply to All"})]})]})},A=e=>{let{onSave:t,state:o,selectedRows:a,tableData:n,onMassUpdate:r,type:s,latestRevision:i,droppedRevision:d}=e;const{showWarningToast:l}=(0,g.A)();return(0,v.jsxs)("div",{className:"d-flex cta-absolute",children:[(0,v.jsx)("button",{className:"btn btn-outline-success btn-lg m-2",onClick:()=>{"Document"!==s&&i!==d?l(R.EZ):t()},children:"Save"}),(0,v.jsx)(S,{editableColumns:["Print On Purchase Order Required","Print On Work Order Required","Work Order Document Required","Print On report Order Required","SAP/JDE"],selectedRows:a,onApplyUpdate:(e,t,o)=>{"Document"===s&&i===d?r("selected"===o?a:n,e,t):l(R.EZ)},valueOptions:["Yes","No"]})]})},j=()=>{const{initializeDroppableArea:e,loading:t}=w(),[o,n]=(0,a.useState)(0),[s,i]=(0,a.useState)([]),[D,f]=(0,a.useState)(!1),[b,S]=(0,a.useState)(!1),[j,N]=(0,a.useState)(!1),[P,x]=(0,a.useState)([]),y=(0,r.wA)(),{showSuccessToast:E,showErrorToast:C}=(0,g.A)();(0,a.useEffect)((()=>{P.length&&i(P.map((e=>(0,d.A)((0,d.A)({},e),{},{changedCells:{}}))))}),[P]);console.log("Table Data after Adding:",s);const I=(0,r.d4)((e=>e.droppedObject.selectedTableRows)),q=(0,r.d4)((e=>e.droppedObject.droppedObjectData));console.log("droppedObjectData",q);const k=(0,r.d4)((e=>e.droppedObject.loadingParentDetails));console.log("Parents Loading State:",k);const T=(0,r.d4)((e=>e.droppedObject.plantObjectData.proposedChanges));console.log("Proposed Changes are:",T);const W=(0,r.d4)((e=>e.droppedObject.isDropped)),L=(0,r.d4)((e=>e.droppedObject.BOSObjectData));console.log("Bos data in BOS Widget is:",L);const F=(0,r.d4)((e=>e.droppedObject.BOSObjectData.specDocument));console.log("BOSObjectData",F);const M=e=>{const t=e.map((e=>{const t=P.find((t=>t.Title===e.Title&&t.Revision===e.Revision));if(!t)return(0,d.A)((0,d.A)({},e),{},{changedCells:{}});const o={};return Object.keys(e).forEach((a=>{e[a]!==t[a]&&(o[a]=!0)})),(0,d.A)((0,d.A)({},e),{},{changedCells:o})}));i(t)};if(console.log("Table Data is:",s),(0,a.useEffect)((()=>{s.length>=0&&n((e=>e+1))}),[s]),q.cardData&&q.initialDraggedData)var _,B,U=q.cardData["Maturity State"],V=null===(_=q.initialDraggedData)||void 0===_||null===(B=_.data)||void 0===B?void 0:B.items[0].objectType;(0,a.useEffect)((()=>{W||e()}),[W,e]),(0,a.useEffect)((()=>{f(k)}),[k]);const J=(0,a.useMemo)((()=>((e,t)=>e?e.map((e=>{let o={Title:(null===e||void 0===e?void 0:e.childTitle)||"N/A",Revision:(null===e||void 0===e?void 0:e.childRevision)||"1",State:(null===e||void 0===e?void 0:e.childState)||"N/A","Print On Purchase Order Required":e.PrintOnPurchaseOrderRequired||"No","Print On Work Order Required":e.PrintOnWorkOrderRequired||"No","Work Order Document Required":e.WorkOrderDocumentRequired||"No","Print On report Order Required":e.PrintOnReportOrderRequired||"No","SAP/JDE":e["SAP/JDE"]||"No"};return"Document"===t&&(o.IsLatest=(null===e||void 0===e?void 0:e.childLatest)||"FALSE"),o})):[])(F,V)),[F,V]);(0,a.useEffect)((()=>{x(J)}),[J]),(0,a.useEffect)((()=>{J.length>=0&&(console.log("New Table Data:",J),i(J),n((e=>e+1)))}),[J]);const K=(0,a.useMemo)((()=>(e=>{if(!e||!e.cardData)return null;const t=e.cardData;let o={title:t.Title||"N/A",type:t.Type||"N/A","Maturity State":t["Maturity State"]||"N/A",owner:t.Owner||"N/A","Collaborative Space Title":t["Collaborative Space Title"]||"N/A",Description:t.Description||"N/A","Dropped Revision":t["Dropped Revision"]||"N/A","Latest Released Revision":t["Latest Released Revision"]||"N/A","CAD Format":t["CAD Format"]||"N/A",imageURL:t.imageURL||"https://oi000186152-us1-space.3dexperience.3ds.com/enovia/snresources/images/icons/large/I_VPMNavProduct108x144.png"};return"Document"!==t.Type&&(o.EIN=t.EIN||"N/A",o["CAD Format"]=t["CAD Format"]||"N/A"),o})(q)),[q]);console.log(K),(0,a.useEffect)((()=>{N(!!K)}),[K]);const z=(0,a.useMemo)((()=>((e,t,o)=>{const a=[{accessorKey:"Title",header:"Title"},{accessorKey:"Revision",header:"Revision"},{accessorKey:"State",header:"State"}];"Document"===e&&a.push({accessorKey:"IsLatest",header:"Is Latest"});const n=["Print On Purchase Order Required","Print On Work Order Required","Work Order Document Required","Print On report Order Required","SAP/JDE"].map((a=>({accessorKey:a,header:a,cell:n=>{let{row:r,getValue:s,table:i}=n;return("Document"===e?"FALSE"===r.original.IsLatest:t&&t!==o)?(0,v.jsx)("span",{children:s()}):(0,v.jsxs)("select",{value:s(),onChange:e=>{var t;const o=e.target.value,n=i.getRowModel().rows.map((e=>e.id===r.id?(0,d.A)((0,d.A)({},e.original),{},{[a]:o}):e.original));null===(t=i.options.meta)||void 0===t||t.updateTableData(n)},className:"appearance-none bg-transparent border-none cursor-pointer focus:outline-none",style:{width:"70%",padding:"5px",fontSize:"14px",background:"none",border:"none",textAlign:"left"},onMouseOver:e=>e.target.style.border="1px solid #ccc",onMouseOut:e=>e.target.style.border="none",children:[(0,v.jsx)("option",{value:"Yes",children:"Yes"}),(0,v.jsx)("option",{value:"No",children:"No"})]})}})));return[...a,...n]})(V,null===q||void 0===q?void 0:q.cardData["Latest Released Revision"],null===q||void 0===q?void 0:q.cardData["Dropped Revision"])),[V,null===q||void 0===q?void 0:q.cardData]);return(0,v.jsxs)(v.Fragment,{children:[b&&(0,v.jsxs)("div",{className:"loading-overlay",children:[(0,v.jsx)(u.A,{}),(0,v.jsx)("p",{children:"Saving..."})]}),!W&&!t&&!D&&(0,v.jsx)(l.A,{}),t&&(0,v.jsx)(u.A,{}),W&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"content-wrapper py-3 border-bottom",children:(0,v.jsxs)("div",{className:"d-flex ",children:[(0,v.jsx)("div",{className:" p-0 pt-4",children:(0,v.jsx)(c.A,{src:"https://thewhitechamaleon.github.io/testrapp/images/home.png",alt:"home-icon",className:"home-icon",onClick:()=>{e(),y((0,h.Rr)(!1)),y((0,h.um)({cardData:{},parentDetails:[],versions:[],initialDraggedData:[]})),y((0,h.Lq)({allPlants:[],initialAssignedPlants:[],uniquePlants:[],productChildren:[],CAName:!1,headers:{}})),i([]),N(!1)}})}),K&&(0,v.jsx)(m.A,{data:K})]})}),D?(0,v.jsx)("div",{className:"loading-indicator mt-5",children:(0,v.jsx)(u.A,{})}):(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"wrapper-cta",children:[(0,v.jsx)(A,{onSave:async()=>{console.log("Table Data is:",s),S(!0),console.log("Type of Parent:",V);let e,t,o=[];"Document"===V?(o={SpecName:q.cardData.Name,SpecRevision:q.cardData["Dropped Revision"]},e="ItemName",t="ItemRevision"):(console.log("It's a physical Product"),o={ItemName:q.cardData.Name,ItemRevision:q.cardData["Dropped Revision"]},e="SpecName",t="SpecRevision");const a=s.map((a=>{let n=F.find((e=>e.childTitle===a.Title&&e.childRevision===a.Revision));return(0,d.A)((0,d.A)({[e]:n?n.childName:null,[t]:a.Revision},o),{},{PrintOnPurchaseOrderRequired:a["Print On Purchase Order Required"],PrintOnWorkOrderRequired:a["Print On Work Order Required"],WorkOrderDocumentRequired:a["Work Order Document Required"],PrintOnReportOrderRequired:a["Print On report Order Required"],"SAP/JDE":a["SAP/JDE"]})}));a.sort(((e,t)=>e.SpecName!==t.SpecName?e.SpecName.localeCompare(t.SpecName):Number(e.SpecRevision)-Number(t.SpecRevision))),console.log("Formatted Data:",a);const n=await(0,O.Fd)("POST","https://emr-product-datahub-server-qa.azurewebsites.net/bosAttribute/createORupdateDetails",a);console.log("the response from node API is:",n),200===n.status?(E(R.KF),x(s),S(!1)):(C(R.fm),S(!1))},type:V,latestRevision:null===q||void 0===q?void 0:q.cardData["Latest Released Revision"],droppedRevision:null===q||void 0===q?void 0:q.cardData["Dropped Revision"],selectedRows:I,state:U,tableData:s,onMassUpdate:async(e,t,o)=>{console.log("Data when the Mass Update is Clicked:",e),console.log("Columns to Change:",t),console.log("Value after change:",o);const a=e.map((e=>(0,d.A)((0,d.A)({},e),{},{[t]:o})));console.log("Updated Data is:",a),console.log("Table Data is:",s);const n=s.map((e=>{const t=a.find((t=>t.Title===e.Title&&t.Revision===e.Revision));return t||e}));console.log("Merged Data:",n),M(n)}}),(0,v.jsx)(p.A,{data:s,columns:z,meta:{updateTableData:M},widgetType:"Bos_Attribute_Widget"},o)]})})]})]})};var N=o(174);const P=()=>{const{handleDrop:e}=w(),{showSuccessToast:t,showErrorToast:o}=(0,g.A)(),[n,r]=(0,a.useState)(!1);console.log("---[WidgetLifecycle]--- starts");return(0,a.useEffect)((()=>{if(!window.widget)return;console.trace("[WidgetLifecycle] \ud83d\udd04 `onRefresh` was called from:"),window.widget.addEvent("onRefresh",(async()=>{var a,n;const i=(new Error).stack.split("\n"),d=sessionStorage.getItem("userClickedRefresh");if((e=>e.some((e=>e.includes("UWA_Frame_Alone.js")||e.includes("bundle-min.js"))))(i)&&!d)return void console.warn("[WidgetLifecycle] \u26d4 Auto-refresh detected. Ignoring unwanted `onRefresh`.");sessionStorage.removeItem("userClickedRefresh"),r(!0);const l=s.A.getState().droppedObject.droppedObjectData.initialDraggedData;if(null===l||void 0===l||null===(a=l.data)||void 0===a||null===(n=a.items)||void 0===n||!n.length)return console.error("[WidgetLifecycle] \u26a0\ufe0f `initialDraggedData` is missing or invalid:",l),void r(!1);try{await(0,N.M)(l.data.items,e)}catch(c){console.error("[WidgetLifecycle] \u274c Error during refresh:",c),o(R.H6)}finally{r(!1),t(R._l)}}))}),[]),n?(0,v.jsx)(u.A,{}):null};o(8885);let x=null;function y(){if(window.widget){let e=!1;window.widget.addEvent("onLoad",(()=>{e?console.warn("[index.js] \u23f3 onLoad was already executed. Ignoring duplicate trigger."):(e=!0,function(){var e,t;requirejs(["DS/PlatformAPI/PlatformAPI"],(e=>{window.PlatformAPI=e}));let o=(null===(e=window.widget)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.querySelector("#root"))||document.getElementById("root");o||(o=document.createElement("div"),o.id="root",window.widget&&window.widget.body?window.widget.body.appendChild(o):document.body.appendChild(o)),x||(x=n.createRoot(o)),x.render((0,v.jsxs)(r.Kq,{store:s.A,children:[(0,v.jsx)(P,{}),(0,v.jsx)(j,{}),(0,v.jsx)(i.N9,{})]}))}())}))}else console.error("[index.js] \u274c Widget not detected! onLoad cannot be registered.")}!function(){if(window.parent&&window.parent.document){let e=window.parent.document.createElement("script");e.textContent='\n    function listenForRefreshClicks() {\n      // console.log("\ud83c\udf0d [Parent] Listening for manual refresh clicks...");\n\n      document.body.addEventListener("click", function (event) {\n        let refreshButton = event.target.closest("#refresh"); // Check if refresh was clicked\n\n        if (refreshButton) {\n          // console.log("\u2705 [Parent] User clicked Refresh!");\n          sessionStorage.setItem("userClickedRefresh", "true"); // Store flag\n          // console.log("Stored Flag:", sessionStorage.getItem("userClickedRefresh"));\n        }\n      }, true);\n    }\n\n    // \u2705 Ensure event listener is added even if DOM is already loaded\n    if (document.readyState === "loading") {\n      document.addEventListener("DOMContentLoaded", listenForRefreshClicks);\n    } else {\n      listenForRefreshClicks();\n    }\n  ',window.parent.document.body.appendChild(e)}else console.warn("\u26a0\ufe0f [index.js] Unable to inject script\u2014parent window not accessible.")}()}}]);
//# sourceMappingURL=248.3123d518.chunk.js.map
import{c as $,a as X}from"./core-js-c806274b.js";import{r as V}from"./jspdf-3896afd8.js";var Q={exports:{}};/*!
 * 
 *               jsPDF AutoTable plugin v3.6.0
 *
 *               Copyright (c) 2023 Simon Bengtsson, https://github.com/simonbengtsson/jsPDF-AutoTable
 *               Licensed under the MIT License.
 *               http://opensource.org/licenses/mit-license
 *
 */(function(Z,tt){(function(G,U){Z.exports=U(function(){try{return V}catch{}}())})(typeof globalThis<"u"?globalThis:typeof $<"u"?$:typeof window<"u"?window:typeof self<"u"?self:$,function(Y){return function(){var G={662:function(k,m){var D=this&&this.__extends||function(){var p=function(f,c){return p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(w,g){w.__proto__=g}||function(w,g){for(var u in g)Object.prototype.hasOwnProperty.call(g,u)&&(w[u]=g[u])},p(f,c)};return function(f,c){if(typeof c!="function"&&c!==null)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");p(f,c);function w(){this.constructor=f}f.prototype=c===null?Object.create(c):(w.prototype=c.prototype,new w)}}();Object.defineProperty(m,"__esModule",{value:!0}),m.CellHookData=m.HookData=void 0;var x=function(){function p(f,c,w){this.table=c,this.pageNumber=c.pageNumber,this.pageCount=this.pageNumber,this.settings=c.settings,this.cursor=w,this.doc=f.getDocument()}return p}();m.HookData=x;var C=function(p){D(f,p);function f(c,w,g,u,n,t){var e=p.call(this,c,w,t)||this;return e.cell=g,e.row=u,e.column=n,e.section=u.section,e}return f}(x);m.CellHookData=C},790:function(k,m,D){Object.defineProperty(m,"__esModule",{value:!0});var x=D(148),C=D(938),p=D(323),f=D(587),c=D(49),w=D(858);function g(u){u.API.autoTable=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e;n.length===1?e=n[0]:(console.error("Use of deprecated autoTable initiation"),e=n[2]||{},e.columns=n[0],e.body=n[1]);var r=(0,f.parseInput)(this,e),o=(0,w.createTable)(this,r);return(0,c.drawTable)(this,o),this},u.API.lastAutoTable=!1,u.API.previousAutoTable=!1,u.API.autoTable.previous=!1,u.API.autoTableText=function(n,t,e,r){(0,C.default)(n,t,e,r,this)},u.API.autoTableSetDefaults=function(n){return p.DocHandler.setDefaults(n,this),this},u.autoTableSetDefaults=function(n,t){p.DocHandler.setDefaults(n,t)},u.API.autoTableHtmlToJson=function(n,t){if(t===void 0&&(t=!1),typeof window>"u")return console.error("Cannot run autoTableHtmlToJson in non browser environment"),null;var e=new p.DocHandler(this),r=(0,x.parseHtml)(e,n,window,t,!1),o=r.head,i=r.body,h=o[0].map(function(s){return s.content});return{columns:h,rows:i,data:i}},u.API.autoTableEndPosY=function(){console.error("Use of deprecated function: autoTableEndPosY. Use doc.lastAutoTable.finalY instead.");var n=this.lastAutoTable;return n&&n.finalY?n.finalY:0},u.API.autoTableAddPageContent=function(n){return console.error("Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead."),u.API.autoTable.globalDefaults||(u.API.autoTable.globalDefaults={}),u.API.autoTable.globalDefaults.addPageContent=n,this},u.API.autoTableAddPage=function(){return console.error("Use of deprecated function: autoTableAddPage. Use doc.addPage()"),this.addPage(),this}}m.default=g},938:function(k,m){Object.defineProperty(m,"__esModule",{value:!0});function D(x,C,p,f,c){f=f||{};var w=1.15,g=c.internal.scaleFactor,u=c.internal.getFontSize()/g,n=/\r\n|\r|\n/g,t="",e=1;if((f.valign==="middle"||f.valign==="bottom"||f.halign==="center"||f.halign==="right")&&(t=typeof x=="string"?x.split(n):x,e=t.length||1),p+=u*(2-w),f.valign==="middle"?p-=e/2*u*w:f.valign==="bottom"&&(p-=e*u*w),f.halign==="center"||f.halign==="right"){var r=u;if(f.halign==="center"&&(r*=.5),t&&e>=1){for(var o=0;o<t.length;o++)c.text(t[o],C-c.getStringUnitWidth(t[o])*r,p),p+=u*w;return c}C-=c.getStringUnitWidth(x)*r}return f.halign==="justify"?c.text(x,C,p,{maxWidth:f.maxWidth||100,align:"justify"}):c.text(x,C,p),c}m.default=D},200:function(k,m){Object.defineProperty(m,"__esModule",{value:!0}),m.parseSpacing=m.getFillStyle=m.addTableBorder=m.getStringWidth=void 0;function D(f,c,w){w.applyStyles(c,!0);var g=Array.isArray(f)?f:[f],u=g.map(function(n){return w.getTextWidth(n)}).reduce(function(n,t){return Math.max(n,t)},0);return u}m.getStringWidth=D;function x(f,c,w,g){var u=c.settings.tableLineWidth,n=c.settings.tableLineColor;f.applyStyles({lineWidth:u,lineColor:n});var t=C(u,!1);t&&f.rect(w.x,w.y,c.getWidth(f.pageSize().width),g.y-w.y,t)}m.addTableBorder=x;function C(f,c){var w=f>0,g=c||c===0;return w&&g?"DF":w?"S":g?"F":null}m.getFillStyle=C;function p(f,c){var w,g,u,n;if(f=f||c,Array.isArray(f)){if(f.length>=4)return{top:f[0],right:f[1],bottom:f[2],left:f[3]};if(f.length===3)return{top:f[0],right:f[1],bottom:f[2],left:f[1]};if(f.length===2)return{top:f[0],right:f[1],bottom:f[0],left:f[1]};f.length===1?f=f[0]:f=c}return typeof f=="object"?(typeof f.vertical=="number"&&(f.top=f.vertical,f.bottom=f.vertical),typeof f.horizontal=="number"&&(f.right=f.horizontal,f.left=f.horizontal),{left:(w=f.left)!==null&&w!==void 0?w:c,top:(g=f.top)!==null&&g!==void 0?g:c,right:(u=f.right)!==null&&u!==void 0?u:c,bottom:(n=f.bottom)!==null&&n!==void 0?n:c}):(typeof f!="number"&&(f=c),{top:f,right:f,bottom:f,left:f})}m.parseSpacing=p},913:function(k,m){var D=this&&this.__extends||function(){var f=function(c,w){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,u){g.__proto__=u}||function(g,u){for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&(g[n]=u[n])},f(c,w)};return function(c,w){if(typeof w!="function"&&w!==null)throw new TypeError("Class extends value "+String(w)+" is not a constructor or null");f(c,w);function g(){this.constructor=c}c.prototype=w===null?Object.create(w):(g.prototype=w.prototype,new g)}}();Object.defineProperty(m,"__esModule",{value:!0}),m.getTheme=m.defaultStyles=m.HtmlRowInput=m.FONT_ROW_RATIO=void 0,m.FONT_ROW_RATIO=1.15;var x=function(f){D(c,f);function c(w){var g=f.call(this)||this;return g._element=w,g}return c}(Array);m.HtmlRowInput=x;function C(f){return{font:"helvetica",fontStyle:"normal",overflow:"linebreak",fillColor:!1,textColor:20,halign:"left",valign:"top",fontSize:10,cellPadding:5/f,lineColor:200,lineWidth:0,cellWidth:"auto",minCellHeight:0,minCellWidth:0}}m.defaultStyles=C;function p(f){var c={striped:{table:{fillColor:255,textColor:80,fontStyle:"normal"},head:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},body:{},foot:{textColor:255,fillColor:[41,128,185],fontStyle:"bold"},alternateRow:{fillColor:245}},grid:{table:{fillColor:255,textColor:80,fontStyle:"normal",lineWidth:.1},head:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},body:{},foot:{textColor:255,fillColor:[26,188,156],fontStyle:"bold",lineWidth:0},alternateRow:{}},plain:{head:{fontStyle:"bold"},foot:{fontStyle:"bold"}}};return c[f]}m.getTheme=p},259:function(k,m,D){Object.defineProperty(m,"__esModule",{value:!0}),m.parseCss=void 0;var x=D(200);function C(g,u,n,t,e){var r={},o=1.3333333333333333,i=f(u,function(_){return e.getComputedStyle(_).backgroundColor});i!=null&&(r.fillColor=i);var h=f(u,function(_){return e.getComputedStyle(_).color});h!=null&&(r.textColor=h);var s=f(u,function(_){return e.getComputedStyle(_).borderTopColor});s!=null&&(r.lineColor=s);var d=w(t,n);d&&(r.cellPadding=d);var y=parseInt(t.borderTopWidth||"");y=y/o/n,y&&(r.lineWidth=y);var S=["left","right","center","justify"];S.indexOf(t.textAlign)!==-1&&(r.halign=t.textAlign),S=["middle","bottom","top"],S.indexOf(t.verticalAlign)!==-1&&(r.valign=t.verticalAlign);var a=parseInt(t.fontSize||"");isNaN(a)||(r.fontSize=a/o);var W=p(t);W&&(r.fontStyle=W);var F=(t.fontFamily||"").toLowerCase();return g.indexOf(F)!==-1&&(r.font=F),r}m.parseCss=C;function p(g){var u="";return(g.fontWeight==="bold"||g.fontWeight==="bolder"||parseInt(g.fontWeight)>=700)&&(u="bold"),(g.fontStyle==="italic"||g.fontStyle==="oblique")&&(u+="italic"),u}function f(g,u){var n=c(g,u);if(!n)return null;var t=n.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);if(!t||!Array.isArray(t))return null;var e=[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])],r=parseInt(t[4]);return r===0||isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function c(g,u){var n=u(g);return n==="rgba(0, 0, 0, 0)"||n==="transparent"||n==="initial"||n==="inherit"?g.parentElement==null?null:c(g.parentElement,u):n}function w(g,u){var n=[g.paddingTop,g.paddingRight,g.paddingBottom,g.paddingLeft],t=96/(72/u),e=(parseInt(g.lineHeight)-parseInt(g.fontSize))/u/2,r=n.map(function(i){return parseInt(i||"0")/t}),o=(0,x.parseSpacing)(r,0);return e>o.top&&(o.top=e),e>o.bottom&&(o.bottom=e),o}},323:function(k,m){Object.defineProperty(m,"__esModule",{value:!0}),m.DocHandler=void 0;var D={},x=function(){function C(p){this.jsPDFDocument=p,this.userStyles={textColor:p.getTextColor?this.jsPDFDocument.getTextColor():0,fontSize:p.internal.getFontSize(),fontStyle:p.internal.getFont().fontStyle,font:p.internal.getFont().fontName,lineWidth:p.getLineWidth?this.jsPDFDocument.getLineWidth():0,lineColor:p.getDrawColor?this.jsPDFDocument.getDrawColor():0}}return C.setDefaults=function(p,f){f===void 0&&(f=null),f?f.__autoTableDocumentDefaults=p:D=p},C.unifyColor=function(p){return Array.isArray(p)?p:typeof p=="number"?[p,p,p]:typeof p=="string"?[p]:null},C.prototype.applyStyles=function(p,f){var c,w,g;f===void 0&&(f=!1),p.fontStyle&&this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(p.fontStyle);var u=this.jsPDFDocument.internal.getFont(),n=u.fontStyle,t=u.fontName;if(p.font&&(t=p.font),p.fontStyle){n=p.fontStyle;var e=this.getFontList()[t];e&&e.indexOf(n)===-1&&(this.jsPDFDocument.setFontStyle&&this.jsPDFDocument.setFontStyle(e[0]),n=e[0])}if(this.jsPDFDocument.setFont(t,n),p.fontSize&&this.jsPDFDocument.setFontSize(p.fontSize),!f){var r=C.unifyColor(p.fillColor);r&&(c=this.jsPDFDocument).setFillColor.apply(c,r),r=C.unifyColor(p.textColor),r&&(w=this.jsPDFDocument).setTextColor.apply(w,r),r=C.unifyColor(p.lineColor),r&&(g=this.jsPDFDocument).setDrawColor.apply(g,r),typeof p.lineWidth=="number"&&this.jsPDFDocument.setLineWidth(p.lineWidth)}},C.prototype.splitTextToSize=function(p,f,c){return this.jsPDFDocument.splitTextToSize(p,f,c)},C.prototype.rect=function(p,f,c,w,g){if(!["S","F","DF","FD",null].some(function(u){return u===g}))throw new TypeError("Invalid value '".concat(g,"' passed to rect. Allowed values are: 'S', 'F', 'DF', 'FD', null"));return this.jsPDFDocument.rect(p,f,c,w,g)},C.prototype.getLastAutoTable=function(){return this.jsPDFDocument.lastAutoTable||null},C.prototype.getTextWidth=function(p){return this.jsPDFDocument.getTextWidth(p)},C.prototype.getDocument=function(){return this.jsPDFDocument},C.prototype.setPage=function(p){this.jsPDFDocument.setPage(p)},C.prototype.addPage=function(){return this.jsPDFDocument.addPage()},C.prototype.getFontList=function(){return this.jsPDFDocument.getFontList()},C.prototype.getGlobalOptions=function(){return D||{}},C.prototype.getDocumentOptions=function(){return this.jsPDFDocument.__autoTableDocumentDefaults||{}},C.prototype.pageSize=function(){var p=this.jsPDFDocument.internal.pageSize;return p.width==null&&(p={width:p.getWidth(),height:p.getHeight()}),p},C.prototype.scaleFactor=function(){return this.jsPDFDocument.internal.scaleFactor},C.prototype.pageNumber=function(){var p=this.jsPDFDocument.internal.getCurrentPageInfo();return p?p.pageNumber:this.jsPDFDocument.internal.getNumberOfPages()},C}();m.DocHandler=x},148:function(k,m,D){Object.defineProperty(m,"__esModule",{value:!0}),m.parseHtml=void 0;var x=D(259),C=D(913);function p(w,g,u,n,t){var e,r;n===void 0&&(n=!1),t===void 0&&(t=!1);var o;typeof g=="string"?o=u.document.querySelector(g):o=g;var i=Object.keys(w.getFontList()),h=w.scaleFactor(),s=[],d=[],y=[];if(!o)return console.error("Html table could not be found with input: ",g),{head:s,body:d,foot:y};for(var S=0;S<o.rows.length;S++){var a=o.rows[S],W=(r=(e=a==null?void 0:a.parentElement)===null||e===void 0?void 0:e.tagName)===null||r===void 0?void 0:r.toLowerCase(),F=f(i,h,u,a,n,t);F&&(W==="thead"?s.push(F):W==="tfoot"?y.push(F):d.push(F))}return{head:s,body:d,foot:y}}m.parseHtml=p;function f(w,g,u,n,t,e){for(var r=new C.HtmlRowInput(n),o=0;o<n.cells.length;o++){var i=n.cells[o],h=u.getComputedStyle(i);if(t||h.display!=="none"){var s=void 0;e&&(s=(0,x.parseCss)(w,i,g,h,u)),r.push({rowSpan:i.rowSpan,colSpan:i.colSpan,styles:s,_element:i,content:c(i)})}}var d=u.getComputedStyle(n);if(r.length>0&&(t||d.display!=="none"))return r}function c(w){var g=w.cloneNode(!0);return g.innerHTML=g.innerHTML.replace(/\n/g,"").replace(/ +/g," "),g.innerHTML=g.innerHTML.split(/\<br.*?\>/).map(function(u){return u.trim()}).join(`
`),g.innerText||g.textContent||""}},587:function(k,m,D){Object.defineProperty(m,"__esModule",{value:!0}),m.parseInput=void 0;var x=D(148),C=D(360),p=D(200),f=D(323),c=D(291);function w(o,i){var h=new f.DocHandler(o),s=h.getDocumentOptions(),d=h.getGlobalOptions();(0,c.default)(h,d,s,i);var y=(0,C.assign)({},d,s,i),S;typeof window<"u"&&(S=window);var a=g(d,s,i),W=u(d,s,i),F=n(h,y),_=e(h,y,S);return{id:i.tableId,content:_,hooks:W,styles:a,settings:F}}m.parseInput=w;function g(o,i,h){for(var s={styles:{},headStyles:{},bodyStyles:{},footStyles:{},alternateRowStyles:{},columnStyles:{}},d=function(W){if(W==="columnStyles"){var F=o[W],_=i[W],M=h[W];s.columnStyles=(0,C.assign)({},F,_,M)}else{var v=[o,i,h],l=v.map(function(H){return H[W]||{}});s[W]=(0,C.assign)({},l[0],l[1],l[2])}},y=0,S=Object.keys(s);y<S.length;y++){var a=S[y];d(a)}return s}function u(o,i,h){for(var s=[o,i,h],d={didParseCell:[],willDrawCell:[],didDrawCell:[],willDrawPage:[],didDrawPage:[]},y=0,S=s;y<S.length;y++){var a=S[y];a.didParseCell&&d.didParseCell.push(a.didParseCell),a.willDrawCell&&d.willDrawCell.push(a.willDrawCell),a.didDrawCell&&d.didDrawCell.push(a.didDrawCell),a.willDrawPage&&d.willDrawPage.push(a.willDrawPage),a.didDrawPage&&d.didDrawPage.push(a.didDrawPage)}return d}function n(o,i){var h,s,d,y,S,a,W,F,_,M,v,l=(0,p.parseSpacing)(i.margin,40/o.scaleFactor()),H=(h=t(o,i.startY))!==null&&h!==void 0?h:l.top,b;i.showFoot===!0?b="everyPage":i.showFoot===!1?b="never":b=(s=i.showFoot)!==null&&s!==void 0?s:"everyPage";var P;i.showHead===!0?P="everyPage":i.showHead===!1?P="never":P=(d=i.showHead)!==null&&d!==void 0?d:"everyPage";var T=(y=i.useCss)!==null&&y!==void 0?y:!1,R=i.theme||(T?"plain":"striped"),j=!!i.horizontalPageBreak,A=(S=i.horizontalPageBreakRepeat)!==null&&S!==void 0?S:null;return{includeHiddenHtml:(a=i.includeHiddenHtml)!==null&&a!==void 0?a:!1,useCss:T,theme:R,startY:H,margin:l,pageBreak:(W=i.pageBreak)!==null&&W!==void 0?W:"auto",rowPageBreak:(F=i.rowPageBreak)!==null&&F!==void 0?F:"auto",tableWidth:(_=i.tableWidth)!==null&&_!==void 0?_:"auto",showHead:P,showFoot:b,tableLineWidth:(M=i.tableLineWidth)!==null&&M!==void 0?M:0,tableLineColor:(v=i.tableLineColor)!==null&&v!==void 0?v:200,horizontalPageBreak:j,horizontalPageBreakRepeat:A}}function t(o,i){var h=o.getLastAutoTable(),s=o.scaleFactor(),d=o.pageNumber(),y=!1;if(h&&h.startPageNumber){var S=h.startPageNumber+h.pageNumber-1;y=S===d}return typeof i=="number"?i:(i==null||i===!1)&&y&&(h==null?void 0:h.finalY)!=null?h.finalY+20/s:null}function e(o,i,h){var s=i.head||[],d=i.body||[],y=i.foot||[];if(i.html){var S=i.includeHiddenHtml;if(h){var a=(0,x.parseHtml)(o,i.html,h,S,i.useCss)||{};s=a.head||s,d=a.body||s,y=a.foot||s}else console.error("Cannot parse html in non browser environment")}var W=i.columns||r(s,d,y);return{columns:W,head:s,body:d,foot:y}}function r(o,i,h){var s=o[0]||i[0]||h[0]||[],d=[];return Object.keys(s).filter(function(y){return y!=="_element"}).forEach(function(y){var S=1,a;Array.isArray(s)?a=s[parseInt(y)]:a=s[y],typeof a=="object"&&!Array.isArray(a)&&(S=(a==null?void 0:a.colSpan)||1);for(var W=0;W<S;W++){var F=void 0;Array.isArray(s)?F=d.length:F=y+(W>0?"_".concat(W):"");var _={dataKey:F};d.push(_)}}),d}},291:function(k,m){Object.defineProperty(m,"__esModule",{value:!0});function D(C,p,f,c){for(var w=function(t){t&&typeof t!="object"&&console.error("The options parameter should be of type object, is: "+typeof t),typeof t.extendWidth<"u"&&(t.tableWidth=t.extendWidth?"auto":"wrap",console.error("Use of deprecated option: extendWidth, use tableWidth instead.")),typeof t.margins<"u"&&(typeof t.margin>"u"&&(t.margin=t.margins),console.error("Use of deprecated option: margins, use margin instead.")),t.startY&&typeof t.startY!="number"&&(console.error("Invalid value for startY option",t.startY),delete t.startY),!t.didDrawPage&&(t.afterPageContent||t.beforePageContent||t.afterPageAdd)&&(console.error("The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead"),t.didDrawPage=function(y){C.applyStyles(C.userStyles),t.beforePageContent&&t.beforePageContent(y),C.applyStyles(C.userStyles),t.afterPageContent&&t.afterPageContent(y),C.applyStyles(C.userStyles),t.afterPageAdd&&y.pageNumber>1&&y.afterPageAdd(y),C.applyStyles(C.userStyles)}),["createdHeaderCell","drawHeaderRow","drawRow","drawHeaderCell"].forEach(function(y){t[y]&&console.error('The "'.concat(y,'" hook has changed in version 3.0, check the changelog for how to migrate.'))}),[["showFoot","showFooter"],["showHead","showHeader"],["didDrawPage","addPageContent"],["didParseCell","createdCell"],["headStyles","headerStyles"]].forEach(function(y){var S=y[0],a=y[1];t[a]&&(console.error("Use of deprecated option ".concat(a,". Use ").concat(S," instead")),t[S]=t[a])}),[["padding","cellPadding"],["lineHeight","rowHeight"],"fontSize","overflow"].forEach(function(y){var S=typeof y=="string"?y:y[0],a=typeof y=="string"?y:y[1];typeof t[S]<"u"&&(typeof t.styles[a]>"u"&&(t.styles[a]=t[S]),console.error("Use of deprecated option: "+S+", use the style "+a+" instead."))});for(var e=0,r=["styles","bodyStyles","headStyles","footStyles"];e<r.length;e++){var o=r[e];x(t[o]||{})}for(var i=t.columnStyles||{},h=0,s=Object.keys(i);h<s.length;h++){var d=s[h];x(i[d]||{})}},g=0,u=[p,f,c];g<u.length;g++){var n=u[g];w(n)}}m.default=D;function x(C){C.rowHeight?(console.error("Use of deprecated style rowHeight. It is renamed to minCellHeight."),C.minCellHeight||(C.minCellHeight=C.rowHeight)):C.columnWidth&&(console.error("Use of deprecated style columnWidth. It is renamed to cellWidth."),C.cellWidth||(C.cellWidth=C.columnWidth))}},287:function(k,m,D){Object.defineProperty(m,"__esModule",{value:!0}),m.Column=m.Cell=m.Row=m.Table=void 0;var x=D(913),C=D(662),p=D(200),f=function(){function u(n,t){this.pageNumber=1,this.pageCount=1,this.id=n.id,this.settings=n.settings,this.styles=n.styles,this.hooks=n.hooks,this.columns=t.columns,this.head=t.head,this.body=t.body,this.foot=t.foot}return u.prototype.getHeadHeight=function(n){return this.head.reduce(function(t,e){return t+e.getMaxCellHeight(n)},0)},u.prototype.getFootHeight=function(n){return this.foot.reduce(function(t,e){return t+e.getMaxCellHeight(n)},0)},u.prototype.allRows=function(){return this.head.concat(this.body).concat(this.foot)},u.prototype.callCellHooks=function(n,t,e,r,o,i){for(var h=0,s=t;h<s.length;h++){var d=s[h],y=new C.CellHookData(n,this,e,r,o,i),S=d(y)===!1;if(e.text=Array.isArray(e.text)?e.text:[e.text],S)return!1}return!0},u.prototype.callEndPageHooks=function(n,t){n.applyStyles(n.userStyles);for(var e=0,r=this.hooks.didDrawPage;e<r.length;e++){var o=r[e];o(new C.HookData(n,this,t))}},u.prototype.callWillDrawPageHooks=function(n,t){for(var e=0,r=this.hooks.willDrawPage;e<r.length;e++){var o=r[e];o(new C.HookData(n,this,t))}},u.prototype.getWidth=function(n){if(typeof this.settings.tableWidth=="number")return this.settings.tableWidth;if(this.settings.tableWidth==="wrap"){var t=this.columns.reduce(function(r,o){return r+o.wrappedWidth},0);return t}else{var e=this.settings.margin;return n-e.left-e.right}},u}();m.Table=f;var c=function(){function u(n,t,e,r,o){o===void 0&&(o=!1),this.height=0,this.raw=n,n instanceof x.HtmlRowInput&&(this.raw=n._element,this.element=n._element),this.index=t,this.section=e,this.cells=r,this.spansMultiplePages=o}return u.prototype.getMaxCellHeight=function(n){var t=this;return n.reduce(function(e,r){var o;return Math.max(e,((o=t.cells[r.index])===null||o===void 0?void 0:o.height)||0)},0)},u.prototype.hasRowSpan=function(n){var t=this;return n.filter(function(e){var r=t.cells[e.index];return r?r.rowSpan>1:!1}).length>0},u.prototype.canEntireRowFit=function(n,t){return this.getMaxCellHeight(t)<=n},u.prototype.getMinimumRowHeight=function(n,t){var e=this;return n.reduce(function(r,o){var i=e.cells[o.index];if(!i)return 0;var h=i.styles.fontSize/t.scaleFactor()*x.FONT_ROW_RATIO,s=i.padding("vertical"),d=s+h;return d>r?d:r},0)},u}();m.Row=c;var w=function(){function u(n,t,e){var r,o;this.contentHeight=0,this.contentWidth=0,this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.height=0,this.x=0,this.y=0,this.styles=t,this.section=e,this.raw=n;var i=n;n!=null&&typeof n=="object"&&!Array.isArray(n)?(this.rowSpan=n.rowSpan||1,this.colSpan=n.colSpan||1,i=(o=(r=n.content)!==null&&r!==void 0?r:n.title)!==null&&o!==void 0?o:n,n._element&&(this.raw=n._element)):(this.rowSpan=1,this.colSpan=1);var h=i!=null?""+i:"",s=/\r\n|\r|\n/g;this.text=h.split(s)}return u.prototype.getTextPos=function(){var n;if(this.styles.valign==="top")n=this.y+this.padding("top");else if(this.styles.valign==="bottom")n=this.y+this.height-this.padding("bottom");else{var t=this.height-this.padding("vertical");n=this.y+t/2+this.padding("top")}var e;if(this.styles.halign==="right")e=this.x+this.width-this.padding("right");else if(this.styles.halign==="center"){var r=this.width-this.padding("horizontal");e=this.x+r/2+this.padding("left")}else e=this.x+this.padding("left");return{x:e,y:n}},u.prototype.getContentHeight=function(n){var t=Array.isArray(this.text)?this.text.length:1,e=this.styles.fontSize/n*x.FONT_ROW_RATIO,r=t*e+this.padding("vertical");return Math.max(r,this.styles.minCellHeight)},u.prototype.padding=function(n){var t=(0,p.parseSpacing)(this.styles.cellPadding,0);return n==="vertical"?t.top+t.bottom:n==="horizontal"?t.left+t.right:t[n]},u}();m.Cell=w;var g=function(){function u(n,t,e){this.wrappedWidth=0,this.minReadableWidth=0,this.minWidth=0,this.width=0,this.dataKey=n,this.raw=t,this.index=e}return u.prototype.getMaxCustomCellWidth=function(n){for(var t=0,e=0,r=n.allRows();e<r.length;e++){var o=r[e],i=o.cells[this.index];i&&typeof i.styles.cellWidth=="number"&&(t=Math.max(t,i.styles.cellWidth))}return t},u}();m.Column=g},360:function(k,m){Object.defineProperty(m,"__esModule",{value:!0}),m.assign=void 0;function D(x,C,p,f,c){if(x==null)throw new TypeError("Cannot convert undefined or null to object");for(var w=Object(x),g=1;g<arguments.length;g++){var u=arguments[g];if(u!=null)for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&(w[n]=u[n])}return w}m.assign=D},858:function(k,m,D){Object.defineProperty(m,"__esModule",{value:!0}),m.createTable=void 0;var x=D(323),C=D(287),p=D(189),f=D(913),c=D(360);function w(o,i){var h=new x.DocHandler(o),s=g(i,h.scaleFactor()),d=new C.Table(i,s);return(0,p.calculateWidths)(h,d),h.applyStyles(h.userStyles),d}m.createTable=w;function g(o,i){var h=o.content,s=e(h.columns);if(h.head.length===0){var d=n(s,"head");d&&h.head.push(d)}if(h.foot.length===0){var d=n(s,"foot");d&&h.foot.push(d)}var y=o.settings.theme,S=o.styles;return{columns:s,head:u("head",h.head,s,S,y,i),body:u("body",h.body,s,S,y,i),foot:u("foot",h.foot,s,S,y,i)}}function u(o,i,h,s,d,y){var S={},a=i.map(function(W,F){for(var _=0,M={},v=0,l=0,H=0,b=h;H<b.length;H++){var P=b[H];if(S[P.index]==null||S[P.index].left===0)if(l===0){var T=void 0;Array.isArray(W)?T=W[P.index-v-_]:T=W[P.dataKey];var R={};typeof T=="object"&&!Array.isArray(T)&&(R=(T==null?void 0:T.styles)||{});var j=r(o,P,F,d,s,y,R),A=new C.Cell(T,j,o);M[P.dataKey]=A,M[P.index]=A,l=A.colSpan-1,S[P.index]={left:A.rowSpan-1,times:l}}else l--,v++;else S[P.index].left--,l=S[P.index].times,_++}return new C.Row(W,F,o,M)});return a}function n(o,i){var h={};return o.forEach(function(s){if(s.raw!=null){var d=t(i,s.raw);d!=null&&(h[s.dataKey]=d)}}),Object.keys(h).length>0?h:null}function t(o,i){if(o==="head"){if(typeof i=="object")return i.header||i.title||null;if(typeof i=="string"||typeof i=="number")return i}else if(o==="foot"&&typeof i=="object")return i.footer;return null}function e(o){return o.map(function(i,h){var s,d,y;return typeof i=="object"?y=(d=(s=i.dataKey)!==null&&s!==void 0?s:i.key)!==null&&d!==void 0?d:h:y=h,new C.Column(y,i,h)})}function r(o,i,h,s,d,y,S){var a=(0,f.getTheme)(s),W;o==="head"?W=d.headStyles:o==="body"?W=d.bodyStyles:o==="foot"&&(W=d.footStyles);var F=(0,c.assign)({},a.table,a[o],d.styles,W),_=d.columnStyles[i.dataKey]||d.columnStyles[i.index]||{},M=o==="body"?_:{},v=o==="body"&&h%2===0?(0,c.assign)({},a.alternateRow,d.alternateRowStyles):{},l=(0,f.defaultStyles)(y),H=(0,c.assign)({},l,F,v,M);return(0,c.assign)(H,S)}},49:function(k,m,D){var x=this&&this.__spreadArray||function(v,l,H){if(H||arguments.length===2)for(var b=0,P=l.length,T;b<P;b++)(T||!(b in l))&&(T||(T=Array.prototype.slice.call(l,0,b)),T[b]=l[b]);return v.concat(T||Array.prototype.slice.call(l))};Object.defineProperty(m,"__esModule",{value:!0}),m.addPage=m.drawTable=void 0;var C=D(913),p=D(200),f=D(287),c=D(323),w=D(360),g=D(938),u=D(435);function n(v,l){var H=l.settings,b=H.startY,P=H.margin,T={x:P.left,y:b},R=l.getHeadHeight(l.columns)+l.getFootHeight(l.columns),j=b+P.bottom+R;if(H.pageBreak==="avoid"){var A=l.body,z=A.reduce(function(I,E){return I+E.height},0);j+=z}var O=new c.DocHandler(v);(H.pageBreak==="always"||H.startY!=null&&j>O.pageSize().height)&&(M(O),T.y=P.top),l.callWillDrawPageHooks(O,T);var B=(0,w.assign)({},T);l.startPageNumber=O.pageNumber(),H.horizontalPageBreak===!0?t(O,l,B,T):(O.applyStyles(O.userStyles),(H.showHead==="firstPage"||H.showHead==="everyPage")&&l.head.forEach(function(I){return y(O,l,I,T,l.columns)}),O.applyStyles(O.userStyles),l.body.forEach(function(I,E){var L=E===l.body.length-1;d(O,l,I,L,B,T,l.columns)}),O.applyStyles(O.userStyles),(H.showFoot==="lastPage"||H.showFoot==="everyPage")&&l.foot.forEach(function(I){return y(O,l,I,T,l.columns)})),(0,p.addTableBorder)(O,l,B,T),l.callEndPageHooks(O,T),l.finalY=T.y,v.lastAutoTable=l,v.previousAutoTable=l,v.autoTable&&(v.autoTable.previous=l),O.applyStyles(O.userStyles)}m.drawTable=n;function t(v,l,H,b){var P=u.default.calculateAllColumnsCanFitInPage(v,l);P.map(function(T,R){v.applyStyles(v.userStyles),R>0?_(v,l,H,b,T.columns):e(v,l,b,T.columns),r(v,l,H,b,T.columns),o(v,l,b,T.columns)})}function e(v,l,H,b){var P=l.settings;v.applyStyles(v.userStyles),(P.showHead==="firstPage"||P.showHead==="everyPage")&&l.head.forEach(function(T){return y(v,l,T,H,b)})}function r(v,l,H,b,P){v.applyStyles(v.userStyles),l.body.forEach(function(T,R){var j=R===l.body.length-1;d(v,l,T,j,H,b,P)})}function o(v,l,H,b){var P=l.settings;v.applyStyles(v.userStyles),(P.showFoot==="lastPage"||P.showFoot==="everyPage")&&l.foot.forEach(function(T){return y(v,l,T,H,b)})}function i(v,l,H){var b=v.styles.fontSize/H.scaleFactor()*C.FONT_ROW_RATIO,P=v.padding("vertical"),T=Math.floor((l-P)/b);return Math.max(0,T)}function h(v,l,H,b){var P={};v.spansMultiplePages=!0,v.height=0;for(var T=0,R=0,j=H.columns;R<j.length;R++){var A=j[R],z=v.cells[A.index];if(z){Array.isArray(z.text)||(z.text=[z.text]);var O=new f.Cell(z.raw,z.styles,z.section);O=(0,w.assign)(O,z),O.text=[];var B=i(z,l,b);z.text.length>B&&(O.text=z.text.splice(B,z.text.length));var I=b.scaleFactor();z.contentHeight=z.getContentHeight(I),z.contentHeight>=l&&(z.contentHeight=l,O.styles.minCellHeight-=l),z.contentHeight>v.height&&(v.height=z.contentHeight),O.contentHeight=O.getContentHeight(I),O.contentHeight>T&&(T=O.contentHeight),P[A.index]=O}}var E=new f.Row(v.raw,-1,v.section,P,!0);E.height=T;for(var L=0,J=H.columns;L<J.length;L++){var A=J[L],O=E.cells[A.index];O&&(O.height=E.height);var z=v.cells[A.index];z&&(z.height=v.height)}return E}function s(v,l,H,b){var P=v.pageSize().height,T=b.settings.margin,R=T.top+T.bottom,j=P-R;l.section==="body"&&(j-=b.getHeadHeight(b.columns)+b.getFootHeight(b.columns));var A=l.getMinimumRowHeight(b.columns,v),z=A<H;if(A>j)return console.error("Will not be able to print row ".concat(l.index," correctly since it's minimum height is larger than page height")),!0;if(!z)return!1;var O=l.hasRowSpan(b.columns),B=l.getMaxCellHeight(b.columns)>j;return B?(O&&console.error("The content of row ".concat(l.index," will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported.")),!0):!(O||b.settings.rowPageBreak==="avoid")}function d(v,l,H,b,P,T,R){var j=F(v,l,b,T);if(H.canEntireRowFit(j,R))y(v,l,H,T,R);else if(s(v,H,j,l)){var A=h(H,j,l,v);y(v,l,H,T,R),_(v,l,P,T,R),d(v,l,A,b,P,T,R)}else _(v,l,P,T,R),d(v,l,H,b,P,T,R)}function y(v,l,H,b,P){b.x=l.settings.margin.left;for(var T=0,R=P;T<R.length;T++){var j=R[T],A=H.cells[j.index];if(!A){b.x+=j.width;continue}v.applyStyles(A.styles),A.x=b.x,A.y=b.y;var z=l.callCellHooks(v,l.hooks.willDrawCell,A,H,j,b);if(z===!1){b.x+=j.width;continue}S(v,A,b);var O=A.getTextPos();(0,g.default)(A.text,O.x,O.y,{halign:A.styles.halign,valign:A.styles.valign,maxWidth:Math.ceil(A.width-A.padding("left")-A.padding("right"))},v.getDocument()),l.callCellHooks(v,l.hooks.didDrawCell,A,H,j,b),b.x+=j.width}b.y+=H.height}function S(v,l,H){var b=l.styles;if(v.getDocument().setFillColor(v.getDocument().getFillColor()),typeof b.lineWidth=="number"){var P=(0,p.getFillStyle)(b.lineWidth,b.fillColor);P&&v.rect(l.x,H.y,l.width,l.height,P)}else typeof b.lineWidth=="object"&&(a(v,l,H,b.fillColor),W(v,l,H,b.fillColor,b.lineWidth))}function a(v,l,H,b){var P=(0,p.getFillStyle)(0,b);v.rect(l.x,H.y,l.width,l.height,P)}function W(v,l,H,b,P){var T,R,j,A;P.top&&(T=H.x,R=H.y,j=H.x+l.width,A=H.y,P.right&&(j+=.5*P.right),P.left&&(T-=.5*P.left),z([T,R,j,A],P.top,b)),P.bottom&&(T=H.x,R=H.y+l.height,j=H.x+l.width,A=H.y+l.height,P.right&&(j+=.5*P.right),P.left&&(T-=.5*P.left),z([T,R,j,A],P.bottom,b)),P.left&&(T=H.x,R=H.y,j=H.x,A=H.y+l.height,P.top&&(R-=.5*P.top),P.bottom&&(A+=.5*P.bottom),z([T,R,j,A],P.left,b)),P.right&&(T=H.x+l.width,R=H.y,j=H.x+l.width,A=H.y+l.height,P.top&&(R-=.5*P.top),P.bottom&&(A+=.5*P.bottom),z([T,R,j,A],P.right,b));function z(O,B,I){var E;v.getDocument().setLineWidth(B),(E=v.getDocument()).line.apply(E,x(x([],O,!1),[(0,p.getFillStyle)(B,I)],!1))}}function F(v,l,H,b){var P=l.settings.margin.bottom,T=l.settings.showFoot;return(T==="everyPage"||T==="lastPage"&&H)&&(P+=l.getFootHeight(l.columns)),v.pageSize().height-b.y-P}function _(v,l,H,b,P){P===void 0&&(P=[]),v.applyStyles(v.userStyles),l.settings.showFoot==="everyPage"&&l.foot.forEach(function(R){return y(v,l,R,b,P)}),l.callEndPageHooks(v,b);var T=l.settings.margin;(0,p.addTableBorder)(v,l,H,b),M(v),l.pageNumber++,l.pageCount++,b.x=T.left,b.y=T.top,H.y=T.top,l.callWillDrawPageHooks(v,b),l.settings.showHead==="everyPage"&&(l.head.forEach(function(R){return y(v,l,R,b,P)}),v.applyStyles(v.userStyles))}m.addPage=_;function M(v){var l=v.pageNumber();v.setPage(l+1);var H=v.pageNumber();return H===l?(v.addPage(),!0):!1}},435:function(k,m,D){Object.defineProperty(m,"__esModule",{value:!0});var x=D(200),C=function(c,w){var g=(0,x.parseSpacing)(w.settings.margin,0),u=c.pageSize().width-(g.left+g.right);return u},p=function(c,w,g){var u;g===void 0&&(g={});var n=C(c,w),t=n,e=new Map,r=null,o=[],i=[],h=w.columns.length,s=(u=g==null?void 0:g.start)!==null&&u!==void 0?u:0,d=w.settings.horizontalPageBreakRepeat;if(d!=null&&Array.isArray(d))for(var y=function(_){var M=w.columns.find(function(v){return v.dataKey===_||v.index===_});M&&(e.set(M.index,M),o.push(M.index),i.push(w.columns[M.index]),t=t-M.wrappedWidth)},S=0,a=d;S<a.length;S++){var W=a[S];y(W)}else d!=null&&(r=w.columns.find(function(_){return _.dataKey===d||_.index===d}),r&&(o.push(r.index),i.push(w.columns[r.index]),t=t-r.wrappedWidth));for(;s<h;){if(Array.isArray(d)&&e.get(s)||(r==null?void 0:r.index)===s){s++;continue}var F=w.columns[s].wrappedWidth;if(t<F){(s===0||s===g.start)&&(o.push(s),i.push(w.columns[s]));break}o.push(s),i.push(w.columns[s]),t-=F,s++}return{colIndexes:o,columns:i,lastIndex:s}},f=function(c,w){for(var g=[],u=0,n=w.columns.length;u<n;){var t=p(c,w,{start:u===0?0:u});t&&t.columns&&t.columns.length?(u=t.lastIndex,g.push(t)):u++}return g};m.default={getColumnsCanFitInPage:p,calculateAllColumnsCanFitInPage:f,getPageAvailableWidth:C}},189:function(k,m,D){Object.defineProperty(m,"__esModule",{value:!0}),m.ellipsize=m.resizeColumns=m.calculateWidths=void 0;var x=D(200),C=D(435);function p(e,r){f(e,r);var o=[],i=0;r.columns.forEach(function(s){var d=s.getMaxCustomCellWidth(r);d?s.width=d:(s.width=s.wrappedWidth,o.push(s)),i+=s.width});var h=r.getWidth(e.pageSize().width)-i;h&&(h=c(o,h,function(s){return Math.max(s.minReadableWidth,s.minWidth)})),h&&(h=c(o,h,function(s){return s.minWidth})),h=Math.abs(h),!r.settings.horizontalPageBreak&&h>.1/e.scaleFactor()&&(h=h<1?h:Math.round(h),console.warn("Of the table content, ".concat(h," units width could not fit page"))),g(r),u(r,e),w(r)}m.calculateWidths=p;function f(e,r){var o=e.scaleFactor(),i=r.settings.horizontalPageBreak,h=C.default.getPageAvailableWidth(e,r);r.allRows().forEach(function(s){for(var d=0,y=r.columns;d<y.length;d++){var S=y[d],a=s.cells[S.index];if(a){var W=r.hooks.didParseCell;r.callCellHooks(e,W,a,s,S,null);var F=a.padding("horizontal");a.contentWidth=(0,x.getStringWidth)(a.text,a.styles,e)+F;var _=(0,x.getStringWidth)(a.text.join(" ").split(/\s+/),a.styles,e);if(a.minReadableWidth=_+a.padding("horizontal"),typeof a.styles.cellWidth=="number")a.minWidth=a.styles.cellWidth,a.wrappedWidth=a.styles.cellWidth;else if(a.styles.cellWidth==="wrap"||i===!0)a.contentWidth>h?(a.minWidth=h,a.wrappedWidth=h):(a.minWidth=a.contentWidth,a.wrappedWidth=a.contentWidth);else{var M=10/o;a.minWidth=a.styles.minCellWidth||M,a.wrappedWidth=a.contentWidth,a.minWidth>a.wrappedWidth&&(a.wrappedWidth=a.minWidth)}}}}),r.allRows().forEach(function(s){for(var d=0,y=r.columns;d<y.length;d++){var S=y[d],a=s.cells[S.index];if(a&&a.colSpan===1)S.wrappedWidth=Math.max(S.wrappedWidth,a.wrappedWidth),S.minWidth=Math.max(S.minWidth,a.minWidth),S.minReadableWidth=Math.max(S.minReadableWidth,a.minReadableWidth);else{var W=r.styles.columnStyles[S.dataKey]||r.styles.columnStyles[S.index]||{},F=W.cellWidth||W.minCellWidth;F&&typeof F=="number"&&(S.minWidth=F,S.wrappedWidth=F)}a&&(a.colSpan>1&&!S.minWidth&&(S.minWidth=a.minWidth),a.colSpan>1&&!S.wrappedWidth&&(S.wrappedWidth=a.minWidth))}})}function c(e,r,o){for(var i=r,h=e.reduce(function(M,v){return M+v.wrappedWidth},0),s=0;s<e.length;s++){var d=e[s],y=d.wrappedWidth/h,S=i*y,a=d.width+S,W=o(d),F=a<W?W:a;r-=F-d.width,d.width=F}if(r=Math.round(r*1e10)/1e10,r){var _=e.filter(function(M){return r<0?M.width>o(M):!0});_.length&&(r=c(_,r,o))}return r}m.resizeColumns=c;function w(e){for(var r={},o=1,i=e.allRows(),h=0;h<i.length;h++)for(var s=i[h],d=0,y=e.columns;d<y.length;d++){var S=y[d],a=r[S.index];if(o>1)o--,delete s.cells[S.index];else if(a)a.cell.height+=s.height,o=a.cell.colSpan,delete s.cells[S.index],a.left--,a.left<=1&&delete r[S.index];else{var W=s.cells[S.index];if(!W)continue;if(W.height=s.height,W.rowSpan>1){var F=i.length-h,_=W.rowSpan>F?F:W.rowSpan;r[S.index]={cell:W,left:_,row:s}}}}}function g(e){for(var r=e.allRows(),o=0;o<r.length;o++)for(var i=r[o],h=null,s=0,d=0,y=0;y<e.columns.length;y++){var S=e.columns[y];if(d-=1,d>1&&e.columns[y+1])s+=S.width,delete i.cells[S.index];else if(h){var a=h;delete i.cells[S.index],h=null,a.width=S.width+s}else{var a=i.cells[S.index];if(!a)continue;if(d=a.colSpan,s=0,a.colSpan>1){h=a,s+=S.width;continue}a.width=S.width+s}}}function u(e,r){for(var o={count:0,height:0},i=0,h=e.allRows();i<h.length;i++){for(var s=h[i],d=0,y=e.columns;d<y.length;d++){var S=y[d],a=s.cells[S.index];if(a){r.applyStyles(a.styles,!0);var W=a.width-a.padding("horizontal");if(a.styles.overflow==="linebreak")a.text=r.splitTextToSize(a.text,W+1/r.scaleFactor(),{fontSize:a.styles.fontSize});else if(a.styles.overflow==="ellipsize")a.text=n(a.text,W,a.styles,r,"...");else if(a.styles.overflow==="hidden")a.text=n(a.text,W,a.styles,r,"");else if(typeof a.styles.overflow=="function"){var F=a.styles.overflow(a.text,W);typeof F=="string"?a.text=[F]:a.text=F}a.contentHeight=a.getContentHeight(r.scaleFactor());var _=a.contentHeight/a.rowSpan;a.rowSpan>1&&o.count*o.height<_*a.rowSpan?o={height:_,count:a.rowSpan}:o&&o.count>0&&o.height>_&&(_=o.height),_>s.height&&(s.height=_)}}o.count--}}function n(e,r,o,i,h){return e.map(function(s){return t(s,r,o,i,h)})}m.ellipsize=n;function t(e,r,o,i,h){var s=1e4*i.scaleFactor();if(r=Math.ceil(r*s)/s,r>=(0,x.getStringWidth)(e,o,i))return e;for(;r<(0,x.getStringWidth)(e+h,o,i)&&!(e.length<=1);)e=e.substring(0,e.length-1);return e.trim()+h}},84:function(k){if(typeof Y>"u"){var m=new Error("Cannot find module 'undefined'");throw m.code="MODULE_NOT_FOUND",m}k.exports=Y}},U={};function N(k){var m=U[k];if(m!==void 0)return m.exports;var D=U[k]={exports:{}};return G[k].call(D.exports,D,D.exports,N),D.exports}var K={};return function(){var k=K;Object.defineProperty(k,"__esModule",{value:!0}),k.Cell=k.Column=k.Row=k.Table=k.CellHookData=k.__drawTable=k.__createTable=k.applyPlugin=void 0;var m=N(790),D=N(587),x=N(49),C=N(858),p=N(287);Object.defineProperty(k,"Table",{enumerable:!0,get:function(){return p.Table}});var f=N(662);Object.defineProperty(k,"CellHookData",{enumerable:!0,get:function(){return f.CellHookData}});var c=N(287);Object.defineProperty(k,"Cell",{enumerable:!0,get:function(){return c.Cell}}),Object.defineProperty(k,"Column",{enumerable:!0,get:function(){return c.Column}}),Object.defineProperty(k,"Row",{enumerable:!0,get:function(){return c.Row}});function w(e){(0,m.default)(e)}k.applyPlugin=w;function g(e,r){var o=(0,D.parseInput)(e,r),i=(0,C.createTable)(e,o);(0,x.drawTable)(e,i)}function u(e,r){var o=(0,D.parseInput)(e,r);return(0,C.createTable)(e,o)}k.__createTable=u;function n(e,r){(0,x.drawTable)(e,r)}k.__drawTable=n;try{var t=N(84);t.jsPDF&&(t=t.jsPDF),w(t)}catch{}k.default=g}(),K}()})})(Q);var q=Q.exports;const rt=X(q);export{rt as a};

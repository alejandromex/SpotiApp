/*! VersionVI: 30A200067s x */
function WDUpload(n,t,i,r){arguments.length&&(WDChamp.prototype.constructor.apply(this,[n,t,i]),this.m_oFlash=null,this.m_sFiltre=r,this.m_bMultiFichiers=!1,this.m_tabFichiersDragDrop=[],this.m_oUploadFichierDragDrop=null)}WDUpload.prototype=new WDChamp;WDUpload.prototype.constructor=WDUpload;WDUpload.prototype.ms_eProgressDataEnvoyee=0;WDUpload.prototype.ms_eProgressDataTotal=1;WDUpload.prototype.ms_eProgressDataFichierEnvoyee=2;WDUpload.prototype.ms_eProgressDataFichierTotal=3;WDUpload.prototype.ms_eProgressDataFichier=4;WDUpload.prototype.ms_sBoundary="WDUPLOAD";WDUpload.prototype.Init=function(n){if(WDChamp.prototype.Init.apply(this,arguments),this._Init(!1),n){var t=this;this.m_oDnDFichiers=new WDDnDFichiers(this.m_bMultiFichiers,function(n){return t.OnDropFichiers(n)},_JGE(n,document,!0,!1));this.m_fOnLoadFile=function(n){t.OnLoadFile(n||event)};this.m_fProgress=function(n){t.OnProgress(n||event)};this.m_fReadyStateChange=function(n){t.OnReadyStateChange(n||event)}}};WDUpload.prototype._Init=function(n){this.m_oFlash=this.oGetObjectEmbed(this.m_sAliasChamp,bIE);n&&(bFF?this.m_oFlash.data=this.m_oFlash.data:bIE&&(undefined!==this.m_oFlash.src?this.m_oFlash.src=this.m_oFlash.src:(this.m_oFlash.outerHTML=this.m_oFlash.outerHTML,this.m_oFlash=this.oGetObjectEmbed(this.m_sAliasChamp,bIE))));this.nSetTimeout(this.__InitFlash,500);bWK&&(_PAGE_[this.m_sAliasChamp]=this.m_oFlash)};WDUpload.prototype.__InitFlash=function(){if(this.m_oFlash&&clWDUtil.bEstDisplay(this.m_oFlash,document,!0))try{this.m_oFlash.SetAlias(this.m_sAliasChamp);this.m_oFlash.SetFiltre(this.m_sFiltre);this.m_bMultiFichiers=!0==this.m_oFlash.bGetMultiFichiers();this.m_oDnDFichiers&&(this.m_oDnDFichiers.m_bMultiFichiers=this.m_bMultiFichiers)}catch(n){this.nSetTimeout(this.__InitFlash,500)}};WDUpload.prototype.GetValeur=function(n,t,i){return WDChamp.prototype.GetValeur.apply(this,[n,this.__sGetFichiers(!1),i])};WDUpload.prototype.GetProp=function(n,t,i){switch(n){case this.XML_CHAMP_PROP_NUM_SOUSELEMENT:return this.__tabGetFichier(i-1)[0];case this.XML_CHAMP_PROP_NUM_OCCURRENCE:return this.__nGetOccurrence();default:return WDChamp.prototype.GetProp.apply(this,arguments)}};WDUpload.prototype.OnSubmit=function(){};WDUpload.prototype.Lance=function(){this.__Lance(clWDUtil.sConstuitProcedureParams(0,arguments))};WDUpload.prototype.__Lance=function(n){var t;if(0!=this.__nGetOccurrence()&&!this.__bGetUploadEnCours()){t=clWDUtil.sGetPageAction(null,!1,!0,!0);t=t+(t.indexOf("?")!=-1?"&":"?");var i="",r="&WD_BUTTON_CLICK_="+this.m_sAliasChamp,u=t+"WD_ACTION_=UPLOADFICHIER"+i+r,f;f=n!==undefined?t+"WD_ACTION_=UPLOADFICHIERFIN"+i+r+n:u;this.m_nReveilDernier=(new Date).getTime();this.m_sReveilURL=t+"WD_ACTION_=UPLOADREVEIL"+i+r;this.m_tabProgressDataDragDrop=[0,this.__nGetTailleTotale(this.__sGetFichiersDragDrop(!0)),0,0,0];this.m_tabProgressDataFlash=[0,this.__nGetTailleTotale(this.__sGetFichiersFlash(!0)),0,0,0];this.__LanceUploadFichierDragDrop(u,f)}};WDUpload.prototype.__LanceUploadFichierDragDrop=function(n,t){this.m_oUploadFichierDragDrop={m_sURL:n,m_sURLFinale:t,m_nFichier:0};this.__UploadFichierDragDrop()};WDUpload.prototype.__UploadFichierDragDrop=function(n){if(this.m_oUploadFichierDragDrop.m_nFichier<this.m_tabFichiersDragDrop.length){var t=new FileReader;t.onload=this.m_fOnLoadFile;t.readAsArrayBuffer(this.m_tabFichiersDragDrop[this.m_oUploadFichierDragDrop.m_nFichier])}else try{0<this.__nGetOccurrenceFlash()?this.__LanceUploadFlash(this.m_oUploadFichierDragDrop.m_sURL,this.m_oUploadFichierDragDrop.m_sURLFinale):this.OnFin(n)}finally{this.m_oUploadFichierDragDrop=null}};WDUpload.prototype.__LanceUploadFlash=function(n,t){this.m_oFlash.SetURLs(n,t);this.m_oFlash.ActionUpload()};WDUpload.prototype.__tabGetFichier=function(n){var r=this.__sGetFichiers(!0),i=r.split("\r\n"),t;return n>=0&&n<i.length?(t=i[n].split("\t"),t[1]=parseInt(t[1],10),t):["",0]};WDUpload.prototype.__sGetFichiers=function(n){var t=this.__sGetFichiersFlash(n);return 0<this.m_tabFichiersDragDrop.length&&(0<t.length&&(t+="\r\n"),t+=this.__sGetFichiersDragDrop(n)),t};WDUpload.prototype.__sGetFichiersDragDrop=function(n){for(var i=[],r=this.m_tabFichiersDragDrop.length,t=0;t<r;t++)i.push(this.m_tabFichiersDragDrop[t].name+(n?"\t"+this.m_tabFichiersDragDrop[t].size:""));return i.join("\r\n")};WDUpload.prototype.__sGetFichiersFlash=function(n){return this.m_oFlash&&clWDUtil.bEstDisplay(this.m_oFlash,document,!0)?this.m_oFlash.sGetFichiers(n):""};WDUpload.prototype.__nGetOccurrence=function(){return this.m_tabFichiersDragDrop.length+this.__nGetOccurrenceFlash()};WDUpload.prototype.__nGetOccurrenceFlash=function(){return this.m_oFlash&&clWDUtil.bEstDisplay(this.m_oFlash,document,!0)?parseInt(this.m_oFlash.nGetOccurrence(),10):0};WDUpload.prototype.__bGetUploadEnCours=function(){return this.m_oUploadFichierDragDrop?!0:this.m_oFlash&&clWDUtil.bEstDisplay(this.m_oFlash,document,!0)?!0==this.m_oFlash.bGetUploadEnCours():!1};WDUpload.prototype.__nGetTailleTotale=function(n){var r=0,i,t,u,f;if(0<n.length)for(i=n.split("\r\n"),u=i.length,t=0;t<u;t++)f=i[t].split("\t"),r+=parseInt(f[1],10);return r};WDUpload.prototype.nGetProgressData=function(n){return this.m_tabProgressData?this.m_tabProgressData[n]:0};WDUpload.prototype.Supprime=function(n){var t=n-1;if(t<this.m_tabFichiersDragDrop.length){this.m_tabFichiersDragDrop[t]=null;this.m_tabFichiersDragDrop.splice(t,1);return}this.m_oFlash.ActionSupprime(n-this.m_tabFichiersDragDrop.length+"")};WDUpload.prototype.SupprimeTout=function(){this.__SupprimeToutDragDrop();this.m_oFlash.ActionSupprimeTout()};WDUpload.prototype.__SupprimeToutDragDrop=function(){for(var t=this.m_tabFichiersDragDrop.length,n=0;n<t;n++)this.m_tabFichiersDragDrop[n]=null;this.m_tabFichiersDragDrop.length=0};WDUpload.prototype.nGetUploadTailleFichier=function(n){return n||(n=1),this.__tabGetFichier(n-1)[1]};WDUpload.prototype.OnAvancement=function(n,t,i,r,u){isNaN(n)&&(alert(STD_ERREUR_MESSAGE_UPLOAD),n=1,t=1);n+=this.m_tabProgressDataDragDrop[this.ms_eProgressDataTotal];t+=this.m_tabProgressDataDragDrop[this.ms_eProgressDataTotal];u+=this.m_tabProgressDataDragDrop[this.ms_eProgressDataFichier];this.m_tabProgressData=[n,t,i,r,u+1];this.bGetTimeXXXExiste("OnAvancement")||(this[this.sNomVariableTimeXXX("OnAvancement")]=this.nSetTimeout(this.__OnAvancement,clWDUtil.ms_oTimeoutImmediat))};WDUpload.prototype.__OnAvancement=function(){var n=(new Date).getTime();this.m_nReveilDernier&&n-this.m_nReveilDernier>18e4&&(clWDUtil.PrechargeImage(this.m_sReveilURL+"&RAND="+Math.random()),this.m_nReveilDernier=n);this.RecuperePCode(this.ms_nEventNavUploadAvancement)();delete this.m_tabProgressData;this.SupprimeTimeout("OnAvancement")};WDUpload.prototype.OnChange=function(){this.RecuperePCode(this.ms_nEventNavUploadSelection)()};WDUpload.prototype.OnDropFichiers=function(n){this.m_bMultiFichiers||this.SupprimeTout();for(var i=n.length,t=0;t<i;t++)this.m_tabFichiersDragDrop.push(n[t]);this.OnChange()};WDUpload.prototype.OnFin=function(n){this.__SupprimeToutDragDrop();delete this.m_tabProgressDataDragDrop;delete this.m_tabProgressDataFlash;clWDAJAXMain.bReponseGeneriqueDepuisTexte(n,_PAGE_,[]);this.RecuperePCode(this.ms_nEventNavUploadFin)()};WDUpload.prototype.OnDisplay=function(n,t){WDChamp.prototype.OnDisplay.apply(this,arguments);t&&this.m_oFlash&&clWDUtil.bEstFils(this.m_oFlash,n,document)&&this._Init(!0)};WDUpload.prototype.__AjouteChaineDansUint8Array=function(n,t,i){this.__AjouteUint8Array(n,t,new Uint8Array(Array.prototype.map.call(i,function(n){return n.charCodeAt(0)&255})))};WDUpload.prototype.__AjouteUint8Array=function(n,t,i){n.set(i,t)};WDUpload.prototype.OnLoadFile=function(n){var r=new XMLHttpRequest,u=this.ms_sBoundary+(new Date).getTime(),c=this.m_tabFichiersDragDrop[this.m_oUploadFichierDragDrop.m_nFichier],v=this.m_oUploadFichierDragDrop.m_nFichier==this.m_tabFichiersDragDrop.length-1&&0==this.__nGetOccurrenceFlash(),t=[],e,i,o;t.push("--");t.push(u);t.push("\r\n");t.push('Content-Disposition: form-data; name="Filename"');t.push("\r\n\r\n");t.push(unescape(encodeURIComponent(c.name)));t.push("\r\n");t.push("--");t.push(u);t.push("\r\n");t.push('Content-Disposition: form-data; name="Filedata"; filename="');t.push(unescape(encodeURIComponent(c.name)));t.push('"');t.push("\r\n");t.push("Content-Type: application/octet-stream");t.push("\r\n\r\n");e=t.join("");t=[];i=[];i.push("\r\n");i.push("--");i.push(u);i.push("\r\n");i.push('Content-Disposition: form-data; name="Upload"');i.push("\r\n\r\n");i.push("Submit Query");i.push("\r\n");i.push("--");i.push(u);i.push("--");o=i.join("");i=[];var s=new Uint8Array(n.target.result),l=e.length,a=l+s.length,h=a+o.length,f=new Uint8Array(h);this.__AjouteChaineDansUint8Array(f,0,e);this.__AjouteUint8Array(f,l,s);this.__AjouteChaineDansUint8Array(f,a,o);r.open("POST",v?this.m_oUploadFichierDragDrop.m_sURLFinale:this.m_oUploadFichierDragDrop.m_sURL,!0);r.setRequestHeader("Content-Type","multipart/form-data, boundary="+u);bCrm||r.setRequestHeader("Content-Length",h);r.onreadystatechange=this.m_fReadyStateChange;this.m_tabProgressDataDragDrop[this.ms_eProgressDataFichierEnvoyee]=0;this.m_tabProgressDataDragDrop[this.ms_eProgressDataFichierTotal]=0;r.upload&&clWDUtil.AttacheDetacheEvent(!0,r.upload,"progress",this.m_fProgress);this.m_oRequeteUpload=r;this.m_oRequeteUpload.m_nTailleTexteRequete=h-s.length;r.send(f.buffer)};WDUpload.prototype.__OnAvancementDnD=function(){var n=this.m_tabProgressDataDragDrop[this.ms_eProgressDataEnvoyee]+this.m_tabProgressDataDragDrop[this.ms_eProgressDataFichierEnvoyee],t=this.m_tabProgressDataDragDrop[this.ms_eProgressDataTotal]+this.m_tabProgressDataFlash[this.ms_eProgressDataTotal],i=this.m_tabProgressDataDragDrop[this.ms_eProgressDataFichierEnvoyee],r=this.m_tabProgressDataDragDrop[this.ms_eProgressDataFichierTotal]>0?this.m_tabProgressDataDragDrop[this.ms_eProgressDataFichierTotal]:this.m_tabFichiersDragDrop[this.m_oUploadFichierDragDrop.m_nFichier].size,u=this.m_oUploadFichierDragDrop.m_nFichier;this.m_tabProgressData=[n,t,i,r,u+1];this.__OnAvancement()};WDUpload.prototype.OnProgress=function(n){n.lengthComputable&&(this.m_tabProgressDataDragDrop[this.ms_eProgressDataFichierEnvoyee]=Math.max(n.loaded-this.m_oRequeteUpload.m_nTailleTexteRequete,0),this.m_tabProgressDataDragDrop[this.ms_eProgressDataFichierTotal]=n.total-this.m_oRequeteUpload.m_nTailleTexteRequete,this.__OnAvancementDnD(n))};WDUpload.prototype.OnReadyStateChange=function(n){if(this.__OnAvancementDnD(n),this.m_oRequeteUpload.readyState==WDAJAXRequete.prototype.readyStateComplete){this.m_oRequeteUpload.upload&&clWDUtil.AttacheDetacheEvent(!1,this.m_oRequeteUpload.upload,"progress",this.m_fProgress);this.m_oRequeteUpload.onreadystatechange=clWDUtil.m_pfVide;var t;200==this.m_oRequeteUpload.status&&(this.m_tabProgressDataDragDrop[this.ms_eProgressDataEnvoyee]+=this.m_tabFichiersDragDrop[this.m_oUploadFichierDragDrop.m_nFichier].size,t=this.m_oRequeteUpload.responseText);this.m_oRequeteUpload.m_nTailleTexteRequete=null;delete this.m_oRequeteUpload.m_nTailleTexteRequete;this.m_oRequeteUpload=null;delete this.m_oRequeteUpload;t&&(this.m_oUploadFichierDragDrop.m_nFichier++,this.__UploadFichierDragDrop(t))}}
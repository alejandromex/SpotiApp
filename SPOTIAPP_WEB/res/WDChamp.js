/*! VersionVI: 30A200067s x */
function WDTableauChamps(){this.m_tabChamps=[]}function WDPCodes(n){n!=undefined&&this.DeclarePCode.apply(this,n)}function WDChamp(n,t,i){arguments.length&&(this.m_sAliasChamp=n,t&&(this.m_sAliasTableZRParent=t,this.m_sAliasAttribut=i),this.m_tabChampsFils=new WDTableauChamps,this.m_oPCodes=new WDPCodes,this.m_eEtat=this.ms_eEtatActif)}function oGetObjetChamp(n){return WDChamp.prototype.ms_tabChamps.oGetChamp(n)}function AppelMethode(n,t,i){WDChamp.prototype.ms_tabChamps._AppelMethode(n,t,i)}function AppelMethodePtr(n,t,i){WDChamp.prototype.ms_tabChamps._AppelMethodePtr(n,t,i)}function AppelMethodeChamp(n,t,i){WDChamp.prototype.ms_tabChamps._AppelMethodeChamp(n,t,i)}function AppelMethodeChampPtr(n,t,i){WDChamp.prototype.ms_tabChamps._AppelMethodeChampPtr(n,t,i)}function oAppelFonctionChamp(n,t,i){return WDChamp.prototype.ms_tabChamps._oAppelFonctionChamp(n,t,i)}function WDChampParametres(n){n&&(WDChamp.prototype.constructor.apply(this,arguments),this.m_oParametres=null,this.m_oDonnees=null)}function WDChampParametresHote(n){n&&(WDChampParametres.prototype.constructor.apply(this,arguments),this.m_oHote=null)}function WDMenuContextuel(n,t,i){if(arguments.length){this.m_tabOptionsDescription=t;this.m_oSource=n&&clWDUtil.oGetOriginalTarget(n);this.m_nOptionSurvol=-1;var r=this;this.m_fOnMouseMove=function(n){return r.__OnMouseMove(n||event)};this.m_fOnClick=function(n){return r.__OnClick(n||event)};this.__CreeMenu();this.__Ouvre(n,i)}}WDTableauChamps.prototype.nGetNbChamps=function(){return this.m_tabChamps.length};WDTableauChamps.prototype.DeclareChamp=function(n){this.m_tabChamps[n.m_sAliasChamp]=n};WDTableauChamps.prototype.oGetChamp=function(n){return this.m_tabChamps[n]};WDTableauChamps.prototype._AppelMethode=function(n,t,i){clWDUtil.bForEachIn(this.m_tabChamps,function(r,u){return u&&u!=i&&u[n]&&u[n].apply(u,t),!0})};WDTableauChamps.prototype._AppelMethodePtr=function(n,t,i){clWDUtil.bForEachIn(this.m_tabChamps,function(r,u){return u&&u!=i&&n.apply(u,t),!0})};WDTableauChamps.prototype._AppelMethodeChamp=function(n,t,i){var r=this.oGetChamp(n);r&&r[t].apply(r,i)};WDTableauChamps.prototype._AppelMethodeChampPtr=function(n,t,i){var r=this.oGetChamp(n);r&&t.apply(r,i)};WDTableauChamps.prototype._oAppelFonctionChamp=function(n,t,i){var r=this.oGetChamp(n);return r?r[t].apply(r,i):undefined};WDPCodes.prototype.DeclarePCode=function(){for(var t=arguments.length,n=0;n<t;n+=2)this[arguments[n]]=arguments[n+1]};WDPCodes.prototype.RecuperePCode=function(n){return this[n]||clWDUtil.m_pfVide};WDPCodes.prototype.fRecuperePCodeDirect=function(n){return this[n]};WDChamp.prototype.ms_tabChamps=new WDTableauChamps;WDChamp.prototype.ms_tabTablesZRs=new WDTableauChamps;WDChamp.prototype.ms_nEventNavClick=0;WDChamp.prototype.ms_nEventNavBlur=10;WDChamp.prototype.ms_nEventNavChange=11;WDChamp.prototype.ms_nEventNavFocus=12;WDChamp.prototype.ms_nEventNavLoad=15;WDChamp.prototype.ms_nEventNavSelectLigne=20;WDChamp.prototype.ms_nEventNavModifSimple=21;WDChamp.prototype.ms_nEventNavAffichageMois=28;WDChamp.prototype.ms_nEventNavSelectionJour=29;WDChamp.prototype.ms_nEventNavUploadSelection=30;WDChamp.prototype.ms_nEventNavUploadAvancement=31;WDChamp.prototype.ms_nEventNavAgendaRdvSelection=32;WDChamp.prototype.ms_nEventNavAgendaRdvDeplacement=33;WDChamp.prototype.ms_nEventNavAgendaRdvRedim=34;WDChamp.prototype.ms_nEventNavAgendaPeriodeSelect=35;WDChamp.prototype.ms_nEventNavAgendaRdvSupprime=36;WDChamp.prototype.ms_nEventNavAgendaRdvAjoute=37;WDChamp.prototype.ms_nEventNavAgendaRdvEdition=38;WDChamp.prototype.ms_nEventNavAgendaRdvModifTitre=39;WDChamp.prototype.ms_nEventNavPlanningRdvDeplacementRessource=40;WDChamp.prototype.ms_nEventNavCalendrierChangementMois=41;WDChamp.prototype.ms_nEventNavAgendaPeriodeAffiche=45;WDChamp.prototype.ms_nEventNavUploadFin=46;WDChamp.prototype.ms_nEventNavAffichageLigne=47;WDChamp.prototype.ms_nEventNavTdbAjoute=64;WDChamp.prototype.ms_nEventNavTdbSupprime=65;WDChamp.prototype.ms_nEventNavTdbDeplacement=66;WDChamp.prototype.ms_nEventNavTdbRedimensionnement=67;WDChamp.prototype.ms_nEventNavCarteChangePosition=69;WDChamp.prototype.ms_eEtatActif=0;WDChamp.prototype.ms_eEtatLectureSeule=1;WDChamp.prototype.ms_eEtatGrise=4;WDChamp.prototype.ms_nIDObjetSaisie=2;WDChamp.prototype.ms_nIDObjetLibelle=3;WDChamp.prototype.ms_nIDObjetBouton=4;WDChamp.prototype.ms_nIDObjetInterrupteur=5;WDChamp.prototype.ms_nIDObjetImage=8;WDChamp.prototype.ms_nIDObjetCombo=14;WDChamp.prototype.ms_nIDObjetCellule=39;WDChamp.prototype.ID_SEPARATEUR="_";WDChamp.prototype.ms_sSuffixeHote="_HTE";WDChamp.prototype.ms_nNbAnimationsActives=0;WDChamp.prototype.Init=function(){if(this._vInitInitiale(),this.bGestionTableZR()){var n=this.ms_tabTablesZRs.oGetChamp(this.m_sAliasTableZRParent);n&&n.m_tabChampsFils.DeclareChamp(this)}WDChamp.prototype.ms_tabChamps.DeclareChamp(this);this._vLiaisonHTML()};WDChamp.prototype._vInitInitiale=function(){clWDUtil.AttacheOnScrollResize(WDChamp.prototype.__s_OnScrollResize);WDChamp.prototype._vInitInitiale=clWDUtil.m_pfVide};WDChamp.prototype.__s_OnScrollResize=function(n,t){AppelMethodePtr(t?WDChamp.prototype.OnScroll:WDChamp.prototype.OnResize,[n],undefined)};var AppelFonctionChamp=oAppelFonctionChamp;WDChamp.prototype.AppelMethodeAutres=function(n,t){AppelMethode(n,t,this)};WDChamp.prototype.AppelMethodeAutresPtr=function(n,t){AppelMethodePtr(n,t,this)};WDChamp.prototype.DeclarePCode=function(){this.m_oPCodes.DeclarePCode.apply(this.m_oPCodes,arguments)};WDChamp.prototype.RecuperePCode=function(n){return this.m_oPCodes.RecuperePCode(n)};WDChamp.prototype.nSetTimeout=function(n,t){var i=this,r=this.__tabArgumentsVersTableau(arguments,2);return clWDUtil.nSetTimeout(function(){n.apply(i,r)},t)};WDChamp.prototype.SetInterval=function(n,t,i){this[this.sNomVariableTimeXXX(n)]=setInterval(t,i)};WDChamp.prototype.__tabArgumentsVersTableau=function(n,t){return Array.prototype.slice.call(n,t)};WDChamp.prototype.nSetTimeoutUnique=function(n,t){this.AnnuleTimeXXX(n,!1);var i=this.nSetTimeout(this.TimeoutUnique,t,n,this.__tabArgumentsVersTableau(arguments,2));return this[this.sNomVariableTimeXXX(n)]=i,i};WDChamp.prototype.TimeoutUnique=function(n,t){this.SupprimeTimeout(n);this[n].apply(this,t)};WDChamp.prototype.bGetTimeXXXExiste=function(n){return this[this.sNomVariableTimeXXX(n)]!==undefined};WDChamp.prototype.AnnuleTimeXXX=function(n,t){var r=this.sNomVariableTimeXXX(n),i=this[r];i!==undefined&&(t?clearInterval(i):clWDUtil.ClearTimeout(i),delete this[r])};WDChamp.prototype.SupprimeTimeout=function(n){var t=this.sNomVariableTimeXXX(n);this[t]!==undefined&&delete this[t]};WDChamp.prototype.sNomVariableTimeXXX=function(n){return"m_nTimeXXX_"+n};WDChamp.prototype.SetEtat=function(n){this.m_eEtat=n};WDChamp.prototype.eGetEtat=function(){return this.m_eEtat};WDChamp.prototype.PreAffecteHTML=function(){this._vPreAffecteHTML.apply(this,arguments)};WDChamp.prototype._vPreAffecteHTML=clWDUtil.m_pfVide;WDChamp.prototype.PostAffecteHTML=function(){this._vPostAffecteHTML.apply(this,arguments)};WDChamp.prototype._vPostAffecteHTML=clWDUtil.m_pfVide;WDChamp.prototype.OnDisplay=function(){};WDChamp.prototype.ms_sOnDisplay="OnDisplay";WDChamp.prototype.OnResize=function(){this._vOnResize.apply(this,arguments)};WDChamp.prototype._vOnResize=clWDUtil.m_pfVide;WDChamp.prototype.OnScroll=function(){this._vOnScroll.apply(this,arguments)};WDChamp.prototype._vOnScroll=clWDUtil.m_pfVide;WDChamp.prototype.SetValeur=function(n,t){return t};WDChamp.prototype.ms_sSetValeur="SetValeur";WDChamp.prototype.GetValeur=function(n,t){return t};WDChamp.prototype.ms_sGetValeur="GetValeur";WDChamp.prototype.DeduitParam=function(n){this._vDeduitParam(clWDUtil.oEvalJSON(n))};WDChamp.prototype._vDeduitParam=clWDUtil.m_pfVide;WDChamp.prototype.ConstruitParam=function(){var n=this._vsConstruitParam.apply(this,arguments);n.length>0&&this._vSetValeurChampFormulaire(n)};WDChamp.prototype._vsConstruitParam=function(){return""};WDChamp.prototype.Refresh=function(){this._vRefresh.apply(this,arguments)};WDChamp.prototype._vRefresh=clWDUtil.m_pfVide;WDChamp.prototype.MasqueBarre=function(){this._vMasqueBarre.apply(this,arguments)};WDChamp.prototype._vMasqueBarre=clWDUtil.m_pfVide;WDChamp.prototype.AnimationDebut=function(){this._vAnimationDebut.apply(this,arguments)};WDChamp.prototype._vAnimationDebut=function(){this.ms_nNbAnimationsActives++};WDChamp.prototype.AnimationFin=function(){this._vAnimationFin.apply(this,arguments)};WDChamp.prototype._vAnimationFin=function(){this.ms_nNbAnimationsActives--};WDChamp.prototype.OnLigneTableZRAffiche=function(){this._vOnLigneTableZRAffiche.apply(this,arguments)};WDChamp.prototype._vOnLigneTableZRAffiche=clWDUtil.m_pfVide;WDChamp.prototype.OnLigneTableZRMasque=function(){this._vOnLigneTableZRMasque.apply(this,arguments)};WDChamp.prototype._vOnLigneTableZRMasque=clWDUtil.m_pfVide;WDChamp.prototype.OnTableZRAfficheAJAX=function(){this._vOnTableZRAfficheAJAX.apply(this,arguments)};WDChamp.prototype._vOnTableZRAfficheAJAX=function(n){this.m_sAliasTableZRParent==n&&this._vOnTableZRAfficheAJAXInterne()};WDChamp.prototype._vOnTableZRAfficheAJAXInterne=clWDUtil.m_pfVide;WDChamp.prototype.XML_CHAMP_PROP_NUM_SOUSELEMENT=-2;WDChamp.prototype.XML_CHAMP_PROP_NUM_CONTENU=-1;WDChamp.prototype.XML_CHAMP_PROP_NUM_VALEUR=1;WDChamp.prototype.XML_CHAMP_PROP_NUM_LIBELLE=3;WDChamp.prototype.XML_CHAMP_PROP_NUM_HAUTEUR=5;WDChamp.prototype.XML_CHAMP_PROP_NUM_LARGEUR=6;WDChamp.prototype.XML_CHAMP_PROP_NUM_COULEUR=10;WDChamp.prototype.XML_CHAMP_PROP_NUM_COULEURFOND=11;WDChamp.prototype.XML_CHAMP_PROP_NUM_ETAT=12;WDChamp.prototype.XML_CHAMP_PROP_NUM_OCCURRENCE=14;WDChamp.prototype.XML_CHAMP_PROP_NUM_VISIBLE=18;WDChamp.prototype.XML_CHAMP_PROP_NUM_VALEURAFFICHEE=21;WDChamp.prototype.XML_CHAMP_PROP_NUM_IMAGE=34;WDChamp.prototype.XML_CHAMP_PROP_NUM_URL=38;WDChamp.prototype.XML_CHAMP_PROP_NUM_BULLE=39;WDChamp.prototype.XML_CHAMP_PROP_NUM_X=41;WDChamp.prototype.XML_CHAMP_PROP_NUM_Y=42;WDChamp.prototype.XML_CHAMP_PROP_NUM_CURSEURSOURIS=43;WDChamp.prototype.XML_CHAMP_PROP_NUM_POLICEGRAS=47;WDChamp.prototype.XML_CHAMP_PROP_NUM_POLICEITALIQUE=48;WDChamp.prototype.XML_CHAMP_PROP_NUM_POLICENOM=49;WDChamp.prototype.XML_CHAMP_PROP_NUM_POLICESOULIGNE=50;WDChamp.prototype.XML_CHAMP_PROP_NUM_POLICETAILLE=51;WDChamp.prototype.XML_CHAMP_PROP_NUM_OPACITE=52;WDChamp.prototype.XML_CHAMP_PROP_NUM_CADRAGEH=53;WDChamp.prototype.XML_CHAMP_PROP_NUM_CADRAGEV=54;WDChamp.prototype.XML_CHAMP_PROP_NUM_SELECTIONNEE=55;WDChamp.prototype.XML_CHAMP_PROP_NUM_INDICATION=58;WDChamp.prototype.XML_CHAMP_PROP_NUM_BOUTONCALENDRIER=66;WDChamp.prototype.XML_CHAMP_PROP_NUM_VIGNETTE=68;WDChamp.prototype.XML_CHAMP_PROP_NUM_ENROULE=72;WDChamp.prototype.XML_CHAMP_PROP_NUM_VALEURINFERIEURE=89;WDChamp.prototype.XML_CHAMP_PROP_NUM_VALEURSUPERIEURE=90;WDChamp.prototype.XML_CHAMP_PROP_NUM_LIBELLEHTML=96;WDChamp.prototype.XML_CHAMP_PROP_NUM_MODECARTE=107;WDChamp.prototype.XML_CHAMP_PROP_NUM_ZOOM=108;WDChamp.prototype.XML_CHAMP_PROP_NUM_CLASSE=113;WDChamp.prototype.GetProp=function(n,t,i,r){switch(n){case this.XML_CHAMP_PROP_NUM_SOUSELEMENT:return null;case this.XML_CHAMP_PROP_NUM_VALEUR:return this.GetValeur(t,i,r);default:return i}};WDChamp.prototype.ms_sGetProp="GetProp";WDChamp.prototype.SetProp=function(n,t,i,r){switch(n){case this.XML_CHAMP_PROP_NUM_VALEUR:return this.SetValeur(t,i,r);default:return i}};WDChamp.prototype.ms_sSetProp="SetProp";WDChamp.prototype.vbZR=function(){return!1};WDChamp.prototype.bGestionTableZR=function(){return!!this.m_sAliasTableZRParent};WDChamp.prototype.oGetTableZRParent=function(){return this.bGestionTableZR()?this.ms_tabTablesZRs.oGetChamp(this.m_sAliasTableZRParent):undefined};WDChamp.prototype.sGetTableZRValeur=function(){return document.getElementsByName(this.m_sAliasTableZRParent)[0].value};WDChamp.prototype.nGetTableZRValeur=function(){return parseInt(this.sGetTableZRValeur(),10)};WDChamp.prototype.SetTableZRValeur=function(n,t,i){if(!i){var r=this.oGetTableZRParent();if(r){r.vTableZROnSelectLigne(t,n);return}}document.getElementsByName(this.m_sAliasTableZRParent)[0].value=t};WDChamp.prototype.SetTableZRValeurDirect=function(n){this.SetTableZRValeur(null,n,!0)};WDChamp.prototype.nGetTableZRDebut=function(){return parseInt(document.getElementsByName(this.m_sAliasTableZRParent+"_DEB")[0].value,10)};WDChamp.prototype.nGetTableZROccurrence=function(){var n=document.getElementsByName("_"+this.m_sAliasTableZRParent+"_OCC");return 0==n.length&&(n=document.getElementsByName(this.m_sAliasTableZRParent+"_OCC")),0<n.length?parseInt(n[0].value,10):0};WDChamp.prototype.PourToutesLignesTableZR=function(n,t){for(var r=this.nGetTableZRDebut(),u=this.nGetTableZROccurrence(),f=r+u,i=r;i<f;i++)n.apply(this,[i,t])};WDChamp.prototype.oAppelSurLigneTableZR=function(n,t,i,r){var f=r,u;try{n!==undefined&&this.bGestionTableZR()&&(u=this.sGetTableZRValeur());u!==undefined&&u!=n?this.SetTableZRValeurDirect(n):u=undefined;f=t.apply(this,i)}finally{u!==undefined&&this.SetTableZRValeurDirect(u)}return f};WDChamp.prototype._OnChampModifie=function(n,t){if(n){var i=this.oGetTableZRParent();i&&i.vTableZROnValideLigne(n,this,t)}};WDChamp.prototype._vLiaisonHTML=function(n){n=undefined!==n?n:"";var t;t=this.bGestionTableZR()?this.oGetElementByNameZR(document,n):this.oGetElementByName(document,n);t&&(this.m_oChampFormulaire=t)};WDChamp.prototype._sConstruitParamObjet=function(n){var r=[],i,t;for(i in n){t=n[i];switch(typeof t){case"boolean":t=t?"1":"0";break;case"string":case"number":default:t=encodeURIComponent(t);break;case"object":if(null!==t&&"function"==typeof t.getTime){t=t.getTime()+"";break}case"function":case"undefined":continue}r.push(i+"="+t.replace(/\,/g,"%2C"))}return r.join("&")};WDChamp.prototype._vsGetValeurChampFormulaire=function(){return this.m_oChampFormulaire?this.m_oChampFormulaire.value:""};WDChamp.prototype._vSetValeurChampFormulaire=function(n){this.m_oChampFormulaire&&(this.m_oChampFormulaire.value=n)};WDChamp.prototype.sGetNomElement=function(n){return this.m_sAliasChamp+n};WDChamp.prototype.oGetElementById=function(n,t){return n.getElementById(this.sGetNomElement(t))};WDChamp.prototype.oGetElementByName=function(n,t){return n.getElementsByName(this.sGetNomElement(t))[0]};WDChamp.prototype.sGetSuffixeIDElement=function(){for(var t=[],i=arguments.length,n=0;n<i;n++)t.push(arguments[n]);return this.ID_SEPARATEUR+t.join(this.ID_SEPARATEUR)};WDChamp.prototype.oGetIDElement=function(){return this.oGetElementById(document,this.sGetSuffixeIDElement.apply(this,arguments))};WDChamp.prototype.sGetNomElementZR=function(n){return this.sGetNomElementZRCalc(this.bGestionTableZR(),n)};WDChamp.prototype.sGetNomElementZRCalc=function(n,t){return n?this.sGetNomElementAttributIndice(this.nGetTableZRValeur(),t):this.sGetNomElement(t)};WDChamp.prototype.sGetNomElementAttributIndice=function(n,t){return"zrl_"+n+"_"+this.m_sAliasAttribut+t};WDChamp.prototype.oGetElementByIdZR=function(n,t){return n.getElementById(this.sGetNomElementZRCalc(this.bGestionTableZR(),t))};WDChamp.prototype.oGetElementByNameZR=function(n,t){return this.oGetElementByNameZRCalc(this.bGestionTableZR(),n,t)};WDChamp.prototype.oGetElementByNameZRCalc=function(n,t,i){return t.getElementsByName(this.sGetNomElementZRCalc(n,i))[0]};WDChamp.prototype.oGetElementByIdZRIndice=function(n,t,i){return n.getElementById(this.sGetNomElementAttributIndice(t,i))};WDChamp.prototype.oGetObjectEmbed=function(n,t){var i=document.getElementsByName(n);return i&&i.length>=1&&i[0]&&clWDUtil.bBaliseEstTag(i[0],"object")&&t?i[0]:i&&i.length>1&&i[1]?i[1]:document.getElementById(n)};WDChamp.prototype.bConversionValeur=function(n){switch(typeof n){case"boolean":return n;case"string":return n!="0";case"number":return n!="0";case"function":case"object":case"undefined":default:return!1}};WDChamp.prototype.s_nGetOffset=function(n){var t=parseInt(n,10);return!isNaN(t)&&t>0?t:0};WDChamp.prototype.s_nGetOffsetBorderPourWidth=function(n){return WDChamp.prototype.s_nGetOffset(n.borderLeftWidth)+WDChamp.prototype.s_nGetOffset(n.borderRightWidth)};WDChamp.prototype.s_nGetOffsetBorderPourHeight=function(n){return WDChamp.prototype.s_nGetOffset(n.borderTopWidth)+WDChamp.prototype.s_nGetOffset(n.borderBottomWidth)};bIEQuirks?(WDChamp.prototype._nGetOffsetWidth=function(n,t){return undefined===t&&(t=n.currentStyle),n.offsetWidth-this.s_nGetOffsetBorderPourWidth(t)},WDChamp.prototype._nGetOffsetHeight=function(n,t){return undefined===t&&(t=n.currentStyle),n.offsetHeight-this.s_nGetOffsetBorderPourHeight(t)}):(WDChamp.prototype._nGetOffsetWidth=function(n){return n.offsetWidth},WDChamp.prototype._nGetOffsetHeight=function(n){return n.offsetHeight});WDChamp.prototype._nGetLargeurAscenseurVertical=function(n){var t=n.clientWidth;return 0==t&&0==n.clientHeight?0:this._nGetOffsetWidth(n)-t};WDChamp.prototype._nGetHauteurAscenseurHorizontal=function(n){var t=n.clientHeight;return 0==t&&0==n.clientWidth?0:this._nGetOffsetHeight(n)-t};WDChamp.prototype.s_SetStyleLeft=function(n,t){n.style.left=t};WDChamp.prototype.s_SetStyleTop=function(n,t){n.style.top=t};WDChamp.prototype.s_SetStyleRight=function(n,t){n.style.right=t};WDChamp.prototype.s_SetStyleBottom=function(n,t){n.style.bottom=t};WDChamp.prototype.s_SetStyleWidth=function(n,t){n.style.width=t};WDChamp.prototype.s_SetStyleHeight=function(n,t){n.style.height=t};WDChamp.prototype.bAnimationsActives=function(){return this.ms_nNbAnimationsActives>0};WDChampParametres.prototype=new WDChamp;WDChampParametres.prototype.constructor=WDChampParametres;WDChampParametres.prototype.SetParametres=function(n,t){this.m_oParametres=n;var i;!1===t.m_bToutModifie?i=this._voFusionneDonne(t):this.m_oDonnees=t;this._vAppliqueParametres(i)};WDChampParametres.prototype._voFusionneDonne=clWDUtil.m_pfVide;WDChampParametres.prototype._vAppliqueParametres=clWDUtil.m_pfVide;WDChampParametres.prototype._vDeduitParam=function(n){WDChamp.prototype._vDeduitParam.apply(this,arguments);this.SetParametres(n[0],n[1])};WDChampParametres.prototype._vLiaisonHTML=function(n,t){n=undefined!==n?n:"_DATA";WDChamp.prototype._vLiaisonHTML.apply(this,[n,t])};WDChampParametres.prototype._bGrise=function(){this._vLiaisonHTML();var n=this.m_oChampFormulaire;return bIE?n.disabled:n.attributes.getNamedItem("disabled")};WDChampParametres.prototype._bLectureSeuleOuGrise=function(){this._vLiaisonHTML();var n=this.m_oChampFormulaire;return bIE?n.disabled||n.readOnly:n.attributes.getNamedItem("disabled")||n.attributes.getNamedItem("readonly")};WDChampParametres.prototype.bLectureSeuleOuGriseExterne=function(n){return this.oAppelSurLigneTableZR(n,this._bLectureSeuleOuGrise,[],!0)};WDChampParametresHote.prototype=new WDChampParametres;WDChampParametresHote.prototype.constructor=WDChampParametresHote;WDChampParametresHote.prototype._vLiaisonHTML=function(n,t){t=undefined!==t?t:this.ms_sSuffixeHote;WDChampParametres.prototype._vLiaisonHTML.apply(this,[n,t]);this.m_oHote=this.oGetElementByIdZR(document,t);this.m_oHote&&(this.m_bTailleVariable=this.__bStyleEnPourcent(this.m_oHote,"width")||this.__bStyleEnPourcent(this.m_oHote,"height")||!clWDUtil.bEstDisplay(this.m_oHote,document,bIEQuirks))};WDChampParametresHote.prototype.__bStyleEnPourcent=function(n,t){return-1!=this.__sGetElementStyleReel(n,t).indexOf("%")};WDChampParametresHote.prototype.__sGetElementStyleReel=function(n,t){var i=n.style[t],r;return""!=i?i:this.__oGetStyleRule&&(r=this.__oGetStyleRule("#"+this.sGetNomElement(this.ms_sSuffixeHote)),r&&(i=r.style[t],""!=i))?i:""};WDMenuContextuel.prototype.ms_sClasseGenerale="wb-menu-contextuel";WDMenuContextuel.prototype.ms_sClasseSeparateur="wb-menu-contextuel-separateur";WDMenuContextuel.prototype.ms_sClasseInactif="wb-menu-contextuel-inactif";WDMenuContextuel.prototype.ms_sClasseSurvol="wb-menu-contextuel-survol";WDMenuContextuel.prototype.ms_eOuvreSensAutomatique=-1;WDMenuContextuel.prototype.ms_eOuvreBasDroite=0;WDMenuContextuel.prototype.ms_eOuvreBasGauche=1;WDMenuContextuel.prototype.ms_eOuvreHautDroite=2;WDMenuContextuel.prototype.ms_eOuvreHautGauche=3;WDMenuContextuel.prototype.__CreeMenu=function(){var f,i,e,r,s,o;for(this.__CreeStyle(),window[this.ms_sNomTraductions]&&(f=window[this.ms_sNomTraductions]),i=document.createElement("ul"),i.className=this.ms_sClasseGenerale,e=this.m_tabOptionsDescription,s=e.length,r=0;r<s;r++){var n=e[r],t=document.createElement("li"),u=[];undefined!==n.m_oLibelle.sTitre&&(t.title=this.__sGetVariableOuDefaut(n.m_oLibelle,f,!0));n.m_bSeparateur&&u.push(this.ms_sClasseSeparateur);n.m_bInactif&&u.push(this.ms_sClasseInactif);u.length&&(t.className=u.join(" "));t.innerHTML=clWDUtil.sEncodeInnerHTML(this.__sGetVariableOuDefaut(n.m_oLibelle,f,!1));o=document.createElement("img");o.src=clWDUtil.sCheminImageRes(undefined,n.m_sImage||"vide.gif");t.insertBefore(o,t.firstChild);i.appendChild(t)}i.style.display="none";this.m_oMenu=document.body.appendChild(i);this.m_tabOptions=this.m_oMenu.getElementsByTagName("li")};WDMenuContextuel.prototype.__sGetVariableOuDefaut=function(n,t,i){if(t){var r=t[n.m_sTraduction];r&&(n=r)}return i?n.sTitre:n.sLibelle};WDMenuContextuel.prototype.__CreeStyle=function(){if(!WDMenuContextuel.prototype.ms_oFeuilleStyle){var n=clWDUtil.oCreeFeuilleStyle();clWDUtil.CreeStyle(n,"ul."+this.ms_sClasseGenerale,"background-color:"+_COL[0]+";color:"+_COL[10]+";border:1px solid "+_COL[16]+";z-index:999;position:absolute;text-align:left;margin:0;padding:0;list-style-type:none;font-family:Arial,Helvetica,sans-serif;font-size:8pt;cursor:pointer");clWDUtil.CreeStyle(n,"ul."+this.ms_sClasseGenerale+" li","padding-right:10px");clWDUtil.CreeStyle(n,"ul."+this.ms_sClasseGenerale+" li."+this.ms_sClasseSeparateur,"border-bottom:1px solid "+_COL[16]);clWDUtil.CreeStyle(n,"ul."+this.ms_sClasseGenerale+" li."+this.ms_sClasseInactif,"cursor:default;font-style:italic");clWDUtil.CreeStyle(n,"ul."+this.ms_sClasseGenerale+" li."+this.ms_sClasseSurvol,"background-color:"+_COL[5]+";color:"+_COL[15]);clWDUtil.CreeStyle(n,"ul."+this.ms_sClasseGenerale+" li img","background-color:"+_COL[21]+";width:11px;height:11px;padding:4px;margin-right:2px;vertical-align:middle");clWDUtil.CreeStyle(n,"ul."+this.ms_sClasseGenerale+" li."+this.ms_sClasseSurvol+" img","background-color:"+_COL[5]);WDMenuContextuel.prototype.ms_oFeuilleStyle=n}};WDMenuContextuel.prototype.__Ouvre=function(n,t){var f=clWDUtil.nSourisPosX(n,0),e=clWDUtil.nSourisPosY(n,0),o,s,i,r,u;this.ms_eOuvreSensAutomatique==t?(o=clWDUtil.__nGetBodyPropriete(document,"clientWidth"),s=clWDUtil.__nGetBodyPropriete(document,"clientHeight"),i=this.ms_eOuvreBasDroite):i=t;this.m_oMenu.style.display="";switch(t){case this.ms_eOuvreBasGauche:r=this.m_oMenu.offsetWidth-1;break;case this.ms_eOuvreHautDroite:u=this.m_oMenu.offsetHeight-1;break;case this.ms_eOuvreHautGauche:case this.ms_eOuvreSensAutomatique:r=this.m_oMenu.offsetWidth-1;u=this.m_oMenu.offsetHeight-1}for(;;){switch(i){case this.ms_eOuvreBasGauche:f-=r;break;case this.ms_eOuvreHautDroite:e-=u;break;case this.ms_eOuvreHautGauche:f-=r;e-=u}if(this.m_oMenu.style.left=f+"px",this.m_oMenu.style.top=e+"px",this.ms_eOuvreSensAutomatique==t&&(clWDUtil.__nGetBodyPropriete(document,"clientWidth")<o||clWDUtil.__nGetBodyPropriete(document,"clientHeight")<s))i<this.ms_eOuvreHautGauche?i++:(t=this.ms_eOuvreBasDroite,i=this.ms_eOuvreBasDroite);else break}clWDUtil.AttacheDetacheEvent(!0,document,"mousemove",this.m_fOnMouseMove,!1);clWDUtil.AttacheDetacheEvent(!0,this.m_oMenu,"click",this.m_fOnClick,!1);this.__Selection(null)};WDMenuContextuel.prototype.__Selection=function(n){var u=this.m_nOptionSurvol,i=-1,r,t,f;if(n)for(r=this.m_tabOptions,f=r.length,t=0;t<f;t++)if(clWDUtil.bEstFils(n,r[t],document)){i=this.m_tabOptionsDescription[t].m_bInactif?-1:t;break}i!=u&&(this.__SetStyleOption(u,this.ms_sClasseSurvol,undefined),this.__SetStyleOption(i,undefined,this.ms_sClasseSurvol),this.m_nOptionSurvol=i)};WDMenuContextuel.prototype.__SetStyleOption=function(n,t,i){-1!=n&&clWDUtil.RemplaceClassName(this.m_tabOptions[n],t,i)};WDMenuContextuel.prototype.__Masque=function(){clWDUtil.AttacheDetacheEvent(!1,this.m_oMenu,"click",this.m_fOnClick,!1);clWDUtil.AttacheDetacheEvent(!1,document,"mousemove",this.m_fOnMouseMove,!1);clWDUtil.oSupprimeElement(this.m_oMenu)};WDMenuContextuel.prototype.__OnMouseMove=function(n){var t=clWDUtil.oGetTarget(n);clWDUtil.bEstFils(t,this.m_oMenu,document)?this.__Selection(t):this.m_oSource&&clWDUtil.bEstFils(t,this.m_oSource,document)||this.__Masque()};WDMenuContextuel.prototype.__OnClick=function(n){var t=this.m_nOptionSurvol;-1!=t&&(this._vAction(n,this.m_tabOptionsDescription[t]),this.__Masque())}
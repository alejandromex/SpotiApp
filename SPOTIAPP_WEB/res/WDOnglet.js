/*! VersionVI: 30A200067s x */
function WDVolet(n,t){var i=n.m_sAliasChamp+"_"+(t+1),r,u;this.m_oTitre=document.getElementById(i);this.m_oCorps=document.getElementById("dww"+i);this.m_oLien=this.m_oTitre.getElementsByTagName("a")[0];this.m_nIndiceVolet=t;this.m_oTitre&&(r=this,u=n,this.m_fOnClick=this.m_oTitre.onclick,this.m_oTitre.onclick=function(n){r.OnClick(n||event,u)})}function WDOnglet(n,t,i,r){if(n){WDChamp.prototype.constructor.apply(this,[n,undefined,undefined]);this.m_nNbOnglets=t;this.m_tabOnglets=[];this.m_ePosition=i;this.m_tabStyleMasque=r;this.m_tabStyleAffiche=[];for(var u=r.length-1;0<=u;u--)this.m_tabStyleAffiche.push(r[u])}}WDVolet.prototype.OnClick=function(n,t){var r,i,u,f;if(this.m_oLien)if(bIE){if(this.m_oLien.disabled)return}else for(r=this.m_oLien.attributes,u=r.length,i=0;i<u;i++)if(f=r.item(i),f.nodeName.toLowerCase()=="disabled")return;t.OnClick(n,this.m_nIndiceVolet);this.m_fOnClick&&this.m_fOnClick.apply(this.m_oTitre,[n])};WDVolet.prototype.Affiche=function(n,t){var r,i;if(undefined===this.m_bAffiche||n!=this.m_bAffiche){clWDUtil.SetDisplay(this.m_oCorps,n);r=n?t.m_tabStyleAffiche:t.m_tabStyleMasque;clWDUtil.RemplaceClassName(this.m_oTitre,r[0],r[1]);i=n?"0":"1px";switch(t.m_ePosition){case t.ms_ePosVolet_Haut:this.m_oTitre.style.borderBottomWidth=i;break;case t.ms_ePosVolet_Bas:this.m_oTitre.style.borderTopWidth=i;break;case t.ms_ePosVolet_Gauche:this.m_oTitre.style.borderRightWidth=i;break;case t.ms_ePosVolet_Droite:this.m_oTitre.style.borderLeftWidth=i}bIE||(this.m_oTitre.style.borderCollapse=n?"separate":"collapse");AppelMethode(WDChamp.prototype.ms_sOnDisplay,[this.m_oCorps,n])}};WDVolet.prototype.bActif=function(){return this.m_oLien.disabled?!1:this.m_oLien.readOnly||this.m_oLien.attributes.READONLY?!1:!0};WDVolet.prototype.SetHauteur=function(n){this.m_oCorps.firstChild.firstChild.firstChild.height=n+"px"};WDOnglet.prototype=new WDChamp;WDOnglet.prototype.constructor=WDOnglet;WDOnglet.prototype.ms_ePosVolet_Haut=0;WDOnglet.prototype.ms_ePosVolet_Bas=1;WDOnglet.prototype.ms_ePosVolet_Gauche=2;WDOnglet.prototype.ms_ePosVolet_Droite=3;WDOnglet.prototype.Init=function(){WDChamp.prototype.Init.apply(this,arguments);for(var t=this.m_nNbOnglets,n=0;n<t;n++)this.m_tabOnglets.push(new WDVolet(this,n))};WDOnglet.prototype.OnClick=function(n,t){this.m_tabOnglets[t].bActif()&&this.AfficheVolet(t);this.RecuperePCode(this.ms_nEventNavModifSimple)(n)};WDOnglet.prototype.GetValeur=function(n,t,i){var r=parseInt(t,10);return WDChamp.prototype.GetValeur.apply(this,[n,r,i])};WDOnglet.prototype.SetValeur=function(n,t){WDChamp.prototype.SetValeur.apply(this,arguments);var i=parseInt(t,10);return!isNaN(i)&&i>=1&&this.AfficheVolet(i-1),i};WDOnglet.prototype.GetProp=function(n){switch(n){case this.XML_CHAMP_PROP_NUM_OCCURRENCE:return this.m_nNbOnglets;default:return WDChamp.prototype.GetProp.apply(this,arguments)}};WDOnglet.prototype.AfficheVolet=function(n){for(var i=this.m_nNbOnglets,t=0;t<i;t++)t!=n&&this.m_tabOnglets[t].Affiche(!1,this);this.m_tabOnglets[n].Affiche(!0,this);this._vSetValeurChampFormulaire(n+1)};WDOnglet.prototype.HauteurVolet=function(n){for(var i=this.m_nNbOnglets,t=0;t<i;t++)this.m_tabOnglets[t].SetHauteur(n)}
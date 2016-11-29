if (self.CavalryLogger) { CavalryLogger.start_js(["xo1MV"]); }

__d("XBrowserPushDisabledController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/notifications\/client\/push\/disabled\/",{});}),null);
__d("XBrowserPushXOutController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/notifications\/client\/push\/xout\/",{});}),null);
__d("XServiceWorkerSessionChangeController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/service_workers\/session\/persist\/",{});}),null);
__d('BrowserPushSessionChange.react',['cx','fbt','ix','AsyncRequest','BanzaiLogger','Image.react','ImageBlock.react','LayerFadeOnHide','React','ReloadPage','XBrowserPushDisabledController','XBrowserPushXOutController','XServiceWorkerSessionChangeController','XUIDialog.react','XUIDialogBody.react','XUIDialogButton.react','XUIDialogFooter.react','XUIDialogOkayButton.react','XUIDialogTitle.react','XUISpinner.react','XUIText.react'],(function a(b,c,d,e,f,g,h,i,j){var k,l;if(c.__markCompiled)c.__markCompiled();var m=c('React').PropTypes;k=babelHelpers.inherits(n,c('React').Component);l=k&&k.prototype;function n(){var o,p;'use strict';for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=l.constructor).call.apply(o,[this].concat(r)),this.state={dialogShown:true,spin:false},this.$BrowserPushSessionChange1=function(t){if(t)return;this.setState({dialogShown:false});this.$BrowserPushSessionChange2('session_keep');var u=c('XServiceWorkerSessionChangeController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(u).setMethod('post').setData({app_id:this.props.push.appID}).setAllowCrossPageTransition(true).setHandler(function(v){this.props.onHide();}.bind(this)).send();}.bind(this),this.$BrowserPushSessionChange2=function(event){var t={event:event,appid:this.props.push.appID,surface:'session_change'};c('BanzaiLogger').log('BrowserPushLoggerConfig',t);}.bind(this),this.$BrowserPushSessionChange3=function(){this.setState({spin:true});this.$BrowserPushSessionChange2('session_uninstall');this.$BrowserPushSessionChange2('xout');var t=c('XBrowserPushXOutController').getURIBuilder().getURI(),u=function(){this.props.push.unregisterPushAndSW(c('XBrowserPushDisabledController'),c('AsyncRequest')).done(function(v){c('ReloadPage').now();});}.bind(this);new (c('AsyncRequest'))().setURI(t).setMethod('post').setHandler(u).setAllowCrossPageTransition(true).send();}.bind(this),p;}n.prototype.componentDidMount=function(){'use strict';this.$BrowserPushSessionChange2('session_change_prompt');};n.prototype.render=function(){'use strict';if(!this.state.dialogShown)return null;var o=j('/images/notifications/potsy_jump.png');return (c('React').createElement(c('XUIDialog.react'),{shown:true,behaviors:{LayerFadeOnHide:c('LayerFadeOnHide')},onToggle:this.$BrowserPushSessionChange1,width:445,key:'dialog'},c('React').createElement(c('XUIDialogTitle.react'),null,i._("Las notificaciones en la computadora est\u00e1n activadas")),c('React').createElement(c('XUIDialogBody.react'),null,this.state.spin?c('React').createElement(c('XUISpinner.react'),{size:'large'}):c('React').createElement(c('ImageBlock.react'),{spacing:'medium'},c('React').createElement(c('Image.react'),{src:o,alt:i._("Las notificaciones en la computadora est\u00e1n activadas")}),c('React').createElement('div',null,c('React').createElement('div',{className:"_3-8h"},c('React').createElement(c('XUIText.react'),{size:'large'},i._("Si recibes una notificaci\u00f3n nueva, la ver\u00e1s en la esquina de la pantalla."))),c('React').createElement('div',{className:"_3-8h"},c('React').createElement(c('XUIText.react'),{size:'small'},i._("Para asegurarte de que recibes las notificaciones, debes seguir con la sesi\u00f3n iniciada en Facebook en esta computadora. Si est\u00e1s usando una computadora p\u00fablica o no quieres dejar tu sesi\u00f3n de Facebook abierta, haz clic en \"Deshacer\" para desactivar las notificaciones en la computadora.")))))),c('React').createElement(c('XUIDialogFooter.react'),null,c('React').createElement(c('XUIDialogButton.react'),{action:'button',label:i._("Deshacer"),onClick:this.$BrowserPushSessionChange3}),c('React').createElement(c('XUIDialogOkayButton.react'),{use:'confirm',action:'cancel'}))));};n.propTypes={onHide:m.func.isRequired,push:m.object.isRequired};f.exports=n;}),null);
__d('NotificationPermissionNotice.react',['cx','fbt','Event','Keys','React','XUIAmbientNUX.react'],(function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();var l=[],m=c('React').PropTypes;j=babelHelpers.inherits(n,c('React').Component);k=j&&j.prototype;function n(){var o,p;'use strict';for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.renderLayers=function(){var t=this.props.shortText?i._("Click the lock to give {browser_name} permission to send you desktop notifications.",[i.param('browser_name',this.props.browserName)]):i._("If you change your mind, click the lock to give {browser_name} permission to send you desktop notifications.",[i.param('browser_name',this.props.browserName)]);return (c('React').createElement(c('XUIAmbientNUX.react'),{contextRef:function(){return this.refs.noticeAnchor;}.bind(this),shown:true,position:'below',onCloseButtonClick:this.props.onHide,key:'nux'},t));}.bind(this),p;}n.prototype.componentDidMount=function(){'use strict';l.push(c('Event').listen(window,'mousedown',this.props.onHide));l.push(c('Event').listen(window,'keydown',function(event){if(event.keyCode===c('Keys').ESC)this.props.onHide();}.bind(this)));};n.prototype.componentWillUnmount=function(){'use strict';while(l.length>0){var o=l.pop();o.remove();}};n.prototype.render=function(){'use strict';return (c('React').createElement('span',null,c('React').createElement('span',{ref:'noticeAnchor',className:"_1_i1"}),this.renderLayers()));};n.propTypes={onHide:m.func.isRequired,shortText:m.bool,browserName:m.string.isRequired};f.exports=n;}),null);
__d('NotificationPermissionRequest.react',['cx','Spotlight.react','React'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';return (c('React').createElement(c('Spotlight.react'),{shown:true,onHide:this.props.onHide,key:'spotlight'},c('React').createElement('div',{className:"_n3"})));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={onHide:k.func.isRequired};f.exports=l;}),null);
__d('BrowserPushCommands',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='browser_push_ack',i='browser_push_redirect',j='browser_push_window_visible',k={ACK:h,REDIRECT:i,WINDOW_VISIBLE:j};f.exports=k;}),null);
__d('BrowserPushMessageRedirectUtil',['Bootloader','MercuryConfig'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function i(j){var k='(messages)(.*?)(?:(tid=))([^&]*)',l=j.match(k);if(!l)return true;var m=l.pop();if(c('MercuryConfig').FantaTabs){c('Bootloader').loadModules(["FantaTabActions"],function(n){n.openTab(m);},'BrowserPushMessageRedirectUtil');}else c('Bootloader').loadModules(["ChatOpenTab"],function(n){n.openThread(m,'jewel');},'BrowserPushMessageRedirectUtil');return false;};f.exports=h;}),null);
__d('BrowserPushMessageHandler',['BrowserPushCommands','BrowserPushMessageRedirectUtil','EventListener','isFacebookURI','URISchemes'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(event){if(event.data.command&&event.data.command===c('BrowserPushCommands').REDIRECT){if(window.onbeforeunload()===undefined){event.ports[0].postMessage({command:c('BrowserPushCommands').ACK,success:true});}else{event.ports[0].postMessage({command:c('BrowserPushCommands').ACK,success:false});return;}var j=event.data.uri;if(/^([^.:/?#]+):/.test(j)&&!c('URISchemes').isAllowed(/^([^.:/?#]+):/.exec(j)[0])&&c('isFacebookURI')(j))throw new Error('goURI: URI scheme rejected, URI: '+j);if(c('BrowserPushMessageRedirectUtil')(j))window.location.href=j;}}var i={registerRedirectHandler:function j(){c('EventListener').listen(window,'message',function(event){if(event.origin==='')h(event);});if(navigator.serviceWorker&&navigator.serviceWorker.addEventListener)navigator.serviceWorker.addEventListener('message',function(event){if(navigator.serviceWorker&&navigator.serviceWorker.controller&&event.target&&event.target.controller&&event.target.controller===navigator.serviceWorker.controller||new RegExp('^'+window.location.protocol+'//'+window.location.host+'$').test(event.origin))h(event);});}};f.exports=i;}),null);
__d('BrowserPushVisibilityChanger',['BrowserPushCommands','ClientServiceWorkerMessage','Visibility'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){new (c('ClientServiceWorkerMessage'))(c('BrowserPushCommands').WINDOW_VISIBLE,null).sendViaController();}var i={listenForVisibility:function j(){if(!c('Visibility').isHidden())h();c('Visibility').addListener(c('Visibility').VISIBLE,h);}};f.exports=i;}),null);
__d('PushRegistration',['Promise','BrowserPushMessageHandler','BrowserPushVisibilityChanger','Map','ServiceWorkerRegistration'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=window.Notification,i=new (c('Map'))();j.get=function(k,l){'use strict';if(i.has(l))return i.get(l);var m=new j(k,l);i.set(l,m);return m;};function j(k,l){'use strict';this.$PushRegistration3=k;this.appID=l;if(!j.$PushRegistration1&&!j.$PushRegistration2){j.$PushRegistration1=false;j.$PushRegistration2=false;}}j.prototype.getPushSubscription=function(){'use strict';return new (c('Promise'))(function(k,l){if(!h||h.permission==='denied')l(new Error('No permission or not supported'));c('ServiceWorkerRegistration').getWorkerRegistration(this.$PushRegistration3).then(function(m){if(!m){k(null);return;}m.pushManager.getSubscription().then(function(n){k(n);})['catch'](l);})['catch'](l);}.bind(this));};j.prototype.$PushRegistration4=function(k){'use strict';var l=k.endpoint;if('subscriptionId' in k&&!new RegExp('/'+k.subscriptionId+'$').test(l))l+='/'+k.subscriptionId;return l;};j.prototype.$PushRegistration5=function(k,l,m,n){'use strict';var o=this.$PushRegistration4(m),p=k.getURIBuilder().getURI(),q=new l(p);q.setData({app_id:this.appID,push_endpoint:o,subscription_keys:JSON.stringify(m.toJSON().keys)});q.setMethod('post');if(q.setHandler)q.setHandler(function(r){if(r.payload&&r.payload.session_change)n();});q.send();};j.prototype.getSubscription=function(){'use strict';return new (c('Promise'))(function(k,l){this.getPushSubscription().then(function(m){if(m){k(this.$PushRegistration4(m));}else k(null);}.bind(this))['catch'](l);}.bind(this));};j.prototype.maybeRegisterPushAgain=function(k,l,m){'use strict';return new (c('Promise'))(function(n,o){this.getPushSubscription().then(function(p){if(p){this.$PushRegistration5(k,l,p,m);n(this.$PushRegistration4(p));}else n(null);}.bind(this))['catch'](function(){n(null);});}.bind(this));};j.prototype.$PushRegistration6=function(k,l,m){'use strict';return new (c('Promise'))(function(n,o){if(j.$PushRegistration2&&!m){o(new Error('sending disable info already'));return;}j.$PushRegistration2=true;var p=k.getURIBuilder().getURI(),q=new l(p.toString());q.setData({appid:this.appID,from_browser_settings:m});q.setMethod('post');if(q.listen){q.listen('finally',n);q.listen('fail',function(){j.$PushRegistration2=false;o();});}else if(q.setErrorHandler&&q.setHandler){q.setErrorHandler(function(){j.$PushRegistration2=false;o();});q.setHandler(n);}else n();q.send();}.bind(this));};j.prototype.isPushRegistered=function(k,l,m,n,o,p,q){'use strict';c('BrowserPushMessageHandler').registerRedirectHandler();return new (c('Promise'))(function(r,s){this.getPushSubscription().then(function(t){r(!!t||k&&!j.pushPermissionIsPending());if(t){if(o){self.$PushRegistration5(l,n,p,q);}else c('BrowserPushVisibilityChanger').listenForVisibility();}else if(!t&&k)if(j.pushPermissionIsOn()){this.registerPush(l,n,p,q)['catch'](function(){});}else this.$PushRegistration6(m,n,false);}.bind(this))['catch'](function(){if(k){this.$PushRegistration6(m,n,false);s();}if(q)c('ServiceWorkerRegistration').unregisterControllingWorker();}.bind(this));}.bind(this));};j.prototype.$PushRegistration7=function(){'use strict';return new (c('Promise'))(function(k,l){h.requestPermission(k);});};j.prototype.registerPushAndWaitForEndpoint=function(k,l,m,n){'use strict';return new (c('Promise'))(function(o,p){this.$PushRegistration8(k,l,m,true,null,n).then(function(q){if(typeof q!=='string'){p(new Error('registerPushImpl did not return an endpoint'));return;}o(q);})['catch'](p);}.bind(this));};j.prototype.registerPush=function(k,l,m,n){'use strict';return this.registerPushWithFinishedCallBack(k,l,m,null,n);};j.prototype.registerPushWithFinishedCallBack=function(k,l,m,n,o){'use strict';return new (c('Promise'))(function(p,q){this.$PushRegistration8(k,l,m,false,n,o).then(function(r){if(typeof r!=='boolean'){q(new Error('registerPushImpl did not return a boolean'));return;}p(r);})['catch'](q);}.bind(this));};j.prototype.$PushRegistration8=function(k,l,m,n,o,p){'use strict';if(j.$PushRegistration1)return new (c('Promise'))(function(q,r){r(new Error('registering already'));});j.$PushRegistration1=true;return new (c('Promise'))(function(q,r){var s=c('ServiceWorkerRegistration').registerWorkerIfUnregistered(this.$PushRegistration3),t=this.$PushRegistration7();c('Promise').all([s,t]).then(function(u){var v=u[0];if(!j.pushPermissionIsOn()){if(p)v.unregister();throw new Error('Push permission was denied');}if(!n)q(true);v.pushManager.subscribe({userVisibleOnly:true}).then(function(w){if(n)q(this.$PushRegistration4(w));this.$PushRegistration5(k,l,w,m);if(o)o();c('BrowserPushVisibilityChanger').listenForVisibility();}.bind(this))['catch'](function(w){j.$PushRegistration1=false;if(p)v.unregister();r(w);});}.bind(this))['catch'](function(u){j.$PushRegistration1=false;r(u);});}.bind(this));};j.prototype.unregisterPushAndSW=function(k,l){'use strict';return new (c('Promise'))(function(m,n){this.$PushRegistration6(k,l,true).then(function(){c('ServiceWorkerRegistration').unregisterControllingWorker().done(m);})['catch'](n);}.bind(this));};j.prototype.unregisterPushOnly=function(k,l){'use strict';return new (c('Promise'))(function(m,n){this.getPushSubscription().then(function(o){if(o){o.unsubscribe().then(this.$PushRegistration6(k,l,true)).then(function(){m(true);})['catch'](n);}else n();}.bind(this))['catch'](n);}.bind(this));};j.pushPermissionIsPending=function(){'use strict';return h&&h.permission==='default';};j.pushPermissionIsOn=function(){'use strict';return h&&h.permission==='granted';};f.exports=j;}),null);
__d("XPushRegisterServiceWorkerController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/push\/register\/service_worker\/",{});}),null);
__d('BrowserPushDirectPromptInstaller',['Arbiter','AsyncRequest','BanzaiLogger','BrowserPushSessionChange.react','DOM','NotificationPermissionNotice.react','NotificationPermissionRequest.react','PushRegistration','React','ReactDOM','XBrowserPushDisabledController','XBrowserPushXOutController','XPushRegisterServiceWorkerController'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false;function i(event,m){var n={event:event,appid:m,surface:'prompt'};c('BanzaiLogger').log('BrowserPushLoggerConfig',n);}function j(m){if(!h){h=true;c('ReactDOM').unmountComponentAtNode(m);}}function k(m,n){var o=c('DOM').insertBefore(m,c('DOM').create('span')),p=o.pop();c('ReactDOM').render(c('React').createElement(c('BrowserPushSessionChange.react'),{onHide:function q(){c('ReactDOM').unmountComponentAtNode(m);},push:n}),p);}var l={installPush:function m(n,o,p,q,r,s,t,u){var v=c('PushRegistration').get(n,o);v.isPushRegistered(q,c('XPushRegisterServiceWorkerController'),c('XBrowserPushDisabledController'),c('AsyncRequest'),!!s,function(){k(p,v);},u).then(function(w){if(w||r)return;if(c('PushRegistration').pushPermissionIsPending())c('ReactDOM').render(c('React').createElement(c('NotificationPermissionRequest.react'),{onHide:function x(){j(p);}}),p);i('turn_on',o);v.registerPushWithFinishedCallBack(c('XPushRegisterServiceWorkerController'),c('AsyncRequest'),function(){k(p,v);},function(){c('Arbiter').inform('BrowserPushInstall/installed');},u).then(function(){j(p);i('install',o);})['catch'](function(x){j(p);if(window.Notification&&window.Notification.permission==='denied'){c('ReactDOM').render(c('React').createElement(c('NotificationPermissionNotice.react'),{onHide:function z(){c('ReactDOM').unmountComponentAtNode(p);},browserName:t}),p);i('deny',o);}else i('install_ignore',o);var y=c('XBrowserPushXOutController').getURIBuilder().getURI();new (c('AsyncRequest'))().setURI(y).setMethod('post').send();i('xout',o);});})['catch'](function(){});}};f.exports=l;}),null);
__d("XBrowserPushMuteController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/notifications\/client\/push\/mute\/",{push_endpoint:{type:"String",required:true},appid:{type:"Int",required:true},is_settings_page:{type:"Bool",defaultValue:false},__asyncDialog:{type:"Int"}});}),null);
__d('BrowserPushMuteOptions',['fbt','AsyncRequest','PushRegistration','React','ReactDOM','XBrowserPushMuteController'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k,l,m){var n=c('PushRegistration').get(l,m);n.getPushSubscription().done(function(o){if(o){var p=c('XBrowserPushMuteController').getURIBuilder().setString('push_endpoint',o.endpoint).setInt('appid',m).getURI();new (c('AsyncRequest'))().setURI(p).setRelativeTo(k).send();}});}var j={showMuteOptions:function k(l,m,n){if(!c('PushRegistration').pushPermissionIsOn())return;c('ReactDOM').render(c('React').createElement('a',{href:'#',onClick:function o(){i(l,m,n);}},h._("Silenciar")),l);}};f.exports=j;}),null);
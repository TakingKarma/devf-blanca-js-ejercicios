if (self.CavalryLogger) { CavalryLogger.start_js(["MOjGX"]); }

__d('BlueBarFocusListener',['CSS','Deferred','Event'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='f_key',i='f_click',j=null,k=function r(){j=null;};function l(r){c('CSS').removeClass(r,h);c('CSS').removeClass(r,i);}function m(r){if(j)j.reject();j=new (c('Deferred'))();j.then(function(s){l(r);c('CSS').addClass(r,s);}).done(k,k);}function n(){if(j)j.resolve(h);}function o(r){if(j)j.reject();c('CSS').removeClass(r,h);c('CSS').addClass(r,i);}function p(r){return function(event){r(event.getTarget());};}var q={listen:function r(s){if(!s)return;c('Event').listen(s,'focusout',p(l));c('Event').listen(s,'focusin',p(m));c('Event').listen(s,'click',p(o));c('Event').listen(s,'keyup',n);}};f.exports=q;}),null);
__d('RoyalBluebar',['Arbiter','Event','Run','SubscriptionsHandler'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={_subscriptionHandler:null,_getSubscriptionHandler:function i(){if(!this._subscriptionHandler){this._subscriptionHandler=new (c('SubscriptionsHandler'))();c('Run').onUnload(function(){this._subscriptionHandler.release();this._subscriptionHandler=null;}.bind(this));}return this._subscriptionHandler;},informOnClick:function i(j){this._getSubscriptionHandler().addSubscriptions(c('Event').listen(j,'click',function(event){if(c('Arbiter').inform('BlueBar/homeClick',event)===false)event.preventDefault();}));}};f.exports=h;}),null);
__d('NotificationSeenState',['NotificationConstants','NotificationUpdates','createObjectFrom'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i=1,j=2,k=0,l=i,m=i|j,n=c('NotificationConstants').PayloadSourceType.INITIAL_LOAD,o={UNSEEN_AND_UNREAD:k,SEEN_BUT_UNREAD:l,SEEN_AND_READ:m};function p(s){var t=[],u=[];Object.keys(s).forEach(function(v){var w=s[v],x=h[v];h[v]=w;if(x===undefined){t.push(v);u.push(v);return;}var y=x^w;if(y&i)t.push(v);if(y&j)u.push(v);});t.length&&c('NotificationUpdates').didUpdateSeenState(t);u.length&&c('NotificationUpdates').didUpdateReadState(u);}c('NotificationUpdates').subscribe('update-notifications',function(s,t){var u=t.nodes;if(!u||!u.length)return;var v=t.payloadsource,w=c('NotificationConstants').PayloadSourceType,x=v==w.ENDPOINT,y={};t.nodes.forEach(function(z){var aa=z.alert_id;if(!x||h[aa]===undefined)y[aa]=o[z.seen_state];});p(y);});c('NotificationUpdates').subscribe('update-seen',function(s,t){if(!t.seenState)return;var u=[],v={};Object.keys(t.seenState).forEach(function(x){if(!t.seenState[x]){u.push(x);return;}var y=h[x];if(y!==undefined)v[x]=y|i;});var w=babelHelpers['extends']({},c('createObjectFrom')(u,k),v);p(w);});c('NotificationUpdates').subscribe('update-read',function(s,t){if(!t.readState)return;var u=[],v={};Object.keys(t.readState).forEach(function(x){if(t.readState[x]){u.push(x);return;}var y=h[x];if(y!==undefined){v[x]=y&~j;}else if(t.payloadsource==n)v[x]=l;});var w=babelHelpers['extends']({},c('createObjectFrom')(u,m),v);p(w);});function q(s){var t=h[s];return t;}var r={isRead:function s(t){return q(t)===m;},isSeen:function s(t){return q(t)!==k;},getUnseenCount:function s(){return r.getUnseenIDs().length;},getUnseenIDs:function s(){return Object.keys(h).filter(function(t){return h[t]===k;});},getUnreadCount:function s(){return r.getUnreadIDs().length;},getUnreadIDs:function s(){return Object.keys(h).filter(function(t){return h[t]!==m;});}};f.exports=r;}),6);
__d('NotificationJewelControllerModuleLoader',['JSResource','NotificationSeenState','NotificationStore','NotificationUpdates'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();c('NotificationSeenState');c('NotificationStore');c('NotificationUpdates');f.exports=c('JSResource')('NotificationJewelController').__setRef('NotificationJewelControllerModuleLoader');}),null);
__d('NotificationJewelHeaderController',['DOM','Event','NotificationSeenState','NotificationUserActions','NotificationUpdates'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){'use strict';c('Event').listen(i,'click',function(){var k=c('NotificationSeenState').getUnreadIDs();if(k.length)c('NotificationUserActions').markNotificationsAsRead(k);});c('NotificationUpdates').subscribe('read-state-updated',function(){if(j)c('DOM').setContent(j,c('NotificationSeenState').getUnreadCount());});}f.exports=h;}),null);
__d('NotificationJewelListController',['Bootloader','React','ReactDOM'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=null,i=null;function j(k,l){'use strict';this.$NotificationJewelListController1=false;this.$NotificationJewelListController2=false;this.$NotificationJewelListController3=k;this.$NotificationJewelListController4=l;}j.prototype.open=function(){'use strict';this.$NotificationJewelListController1=true;this.$NotificationJewelListController5();};j.prototype.pause=function(){'use strict';this.$NotificationJewelListController2=true;this.$NotificationJewelListController5();};j.prototype.unpause=function(){'use strict';this.$NotificationJewelListController2=false;this.$NotificationJewelListController5();};j.prototype.$NotificationJewelListController5=function(){'use strict';if(!h||!i){c('Bootloader').loadModules(["NotificationList.react","NotificationJewelList.react"],function(k,l){h=k;i=l;this.$NotificationJewelListController6();}.bind(this),'NotificationJewelListController');}else this.$NotificationJewelListController6();};j.prototype.$NotificationJewelListController6=function(){'use strict';if(!h)return;c('ReactDOM').render(c('React').createElement(h,{hasEverBeenOpened:this.$NotificationJewelListController1,paused:this.$NotificationJewelListController2,tracking:this.$NotificationJewelListController4.tracking,negativeTracking:this.$NotificationJewelListController4.negativeTracking,shortenTimestamp:this.$NotificationJewelListController4.shortenTimestamp,businessID:this.$NotificationJewelListController4.businessID,maxHeight:this.$NotificationJewelListController4.maxHeight,useChevron:this.$NotificationJewelListController4.useChevron,chevronType:this.$NotificationJewelListController4.chevronType,numPerPage:5,listRenderer:i,upsell:this.$NotificationJewelListController4.upsell||null,endpoint:this.$NotificationJewelListController4.endpoint}),this.$NotificationJewelListController3);};f.exports=j;}),null);
__d('EXHPLeftNavController',['cx','csx','Arbiter','Bootloader','Event','Parent','UIPagelet','emptyFunction','requireWeak'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=void 0;function k(){if(!j){j=true;c('Bootloader').loadModules(["LeftNavActions","BookmarkPopoverMenu.react","LeftNavDragController","LeftNavItemDraggableBehavior"],c('emptyFunction'),'EXHPLeftNavController');}}var l=void 0;function m(){if(!l){l=true;c('UIPagelet').loadFromEndpoint('ReactLeftNavPagelet','pagelet_navigation').setHandler(function(){l=false;if(o){o.remove();o=null;}});}}var n={},o=void 0,p={init:function t(u){o=c('Event').listen(u,'click',function(event){var v=event.target,w=c('Parent').byAttribute(v,'data-nav-item-id');if(!w)return;var x=w.getAttribute('data-nav-item-id'),y=c('Parent').bySelector(v,"._26tg");if(y){q(y,x);event.preventDefault();}else r(w,x);});},consumeDidHaveClick:function t(u){var v=n[u];delete n[u];return !!v;}};function q(t,u){t.parentNode.replaceChild(s(),t);n[u]=true;k();m();}function r(t,u){var v=t.querySelector('.countValue');v&&v.remove();if(t.getAttribute('data-type')==='type_explore_feed'){m();c('requireWeak')('LeftNavController',function(w){c('Arbiter').inform('LeftNavController/topicFeedClick',u);});}}function s(){var t=document.createElement('span');t.className="_2ita _55ym _55yn _55yo";return t;}f.exports=p;}),null);
__d('ContextualHelpSearchController',['Event','AsyncRequest','DOM','CSS','Focus','Input'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=400;function i(j,k,l,m,n,o){this._token=null;this._timerID=0;this._lastQuery=null;this.loader=j;this.search_box=k;this.topics_area=l;this.results_area=m;this.clear_button=n;this.typing_listener=c('Event').listen(this.search_box,'keyup',this.setTimer.bind(this));this.clear_listener=c('Event').listen(this.clear_button,'click',this.clearResults.bind(this));if(o==null||o.focusSearchBox==null||o.focusSearchBox)c('Focus').set(this.search_box);this.async_request=null;}Object.assign(i.prototype,{source:'contextual_help',clearResults:function j(){this.show(this.topics_area);this._lastQuery='';c('Input').reset(this.search_box);c('Focus').set(this.search_box);if(this.async_request!==null){this.async_request.abort();this.async_request=null;}c('CSS').addClass(this.clear_button,'hidden_elem');},update:function j(){var k=c('Input').getValue(this.search_box);if(k===this._lastQuery)return;this._lastQuery=k;if(k===''){this.clearResults();return;}this.show(this.loader);var l={query:k,width:this._width||h,source:this.source};this.async_request=new (c('AsyncRequest'))('/help/ajax/search/').setData(l).setHandler(function(m){this._update(m);}.bind(this));this.async_request.send();},_update:function j(k){this.async_request=null;var l=k.getPayload().results;c('DOM').setContent(this.results_area,l);this.show(this.results_area);if(c('Input').getValue(this.search_box)===''){this.clearResults();}else c('CSS').removeClass(this.clear_button,'hidden_elem');},setTimer:function j(){if(this._timerID!==0)clearTimeout(this._timerID);this._timerID=setTimeout(this.update.bind(this),300);if(this.async_request!=null){this.async_request.abort();this.async_request=null;}},show:function j(k){var l=[this.loader,this.topics_area,this.results_area];for(var m=0;m<l.length;m++)c('CSS').addClass(l[m],'hidden_elem');c('CSS').removeClass(k,'hidden_elem');}});f.exports=i;}),null);
__d('JewelCountSideLoader',['CSS'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i={},j={},k={queueInstances:function l(m,n,o){h[m]={badge:n,root:o};},updateCountAndQueueArgs:function l(m,n,o){var p=i[m];if(p){p.updateCountAndArgs(o,n);return;}var q=h[m];if(!q)throw new Error('Jewel instances where not set');j[m]={count:n,args:o};c('CSS').conditionClass(q.root,'hasNew',n);q.badge.setLegacyContent(n);return;},getOverwritesForJewel:function l(m){if(j[m.name])return j[m.name];i[m.name]=m;return null;}};f.exports=k;}),null);
__d('NotificationJewelFunnelLoggingConstants',[],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();f.exports={FUNNEL_LOGGING_NAME:'WWW_NOTIFICATION_FUNNEL',FUNNEL_LOGGING_EVENT:{FETCH_NOTIFICATIONS:'fetch_notifications',OPEN_JEWEL:'open_jewel',CLOSE_JEWEL:'close_jewel',MOUSE_OVER_ON_JEWEL:'mouse_over_on_jewel',SCROLL_TO_FETCH:'scroll_to_fetch',FETCH_NEXT_SET:'fetch_next_set',CLEAR_BADGE_COUNT:'clear_badge_count'}};}),null);
__d('JewelBase',['csx','Promise','Arbiter','ArbiterMixin','CSS','DOM','Event','HTML','JewelCountSideLoader','Keys','Run','TabIsolation','Toggler','TooltipData','FunnelLogger','NotificationJewelFunnelLoggingConstants','mixin','reportData'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('NotificationJewelFunnelLoggingConstants').FUNNEL_LOGGING_NAME,l=c('NotificationJewelFunnelLoggingConstants').FUNNEL_LOGGING_EVENT,m={};i=babelHelpers.inherits(n,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;function n(o,p){'use strict';j.constructor.call(this);this.name=p.name;this.label=p.label;this.root=o;this.badge=p.badge;this.countNew=0;this.initialCount=0;this.escHandler=null;this.bootload_module=p.bootload_module;this.bootload_args=p.bootload_args;this.bootloading=null;this.togglerInstance=c('Toggler').getInstance(o).setSticky(false);c('Run').onAfterLoad(function(){return this.$JewelBase1();}.bind(this));if(p.keepOpenForSnowlift)this.togglerInstance.setPrePageTransitionCallback(this.$JewelBase2.bind(this));m[this.name]=this;this.$JewelBase3();var q=this.getFlyout(),r=new (c('TabIsolation'))(q);c('Toggler').createInstance(q).setSticky(false);this.$JewelBase4();c('Toggler').listen('show',this.root,function(s){c('FunnelLogger').appendAction(k,l.OPEN_JEWEL);this.$JewelBase5();this.hasNew()&&this.markSeen();this.reset();c('Arbiter').inform('layer_shown',{type:'Jewel'});r.enable();this.setupEvents();this.$JewelBase6();return this.$JewelBase1().then(function(){this.inform('opened');}.bind(this));}.bind(this));c('Toggler').listen('hide',this.root,function(s,t){c('FunnelLogger').appendAction(k,l.CLOSE_JEWEL);c('FunnelLogger').endFunnel(k);this.hasNew()&&this.markSeen();this.reset();this.inform('closed');c('Arbiter').inform('layer_hidden',{type:'Jewel'});r.disable();this.removeEvents();this.$JewelBase4();}.bind(this));c('Arbiter').subscribe('jewel/count-updated',function(s,t){t.jewel==this.name&&this.update(t);}.bind(this));c('Arbiter').subscribe('jewel/hide',function(s,t){this.hide();}.bind(this));}n.prototype.getRoot=function(){'use strict';return this.root;};n.prototype.hide=function(){'use strict';if(this.isOpen())c('Toggler').hide(this.root);};n.prototype.getFlyout=function(){'use strict';if(this.$JewelBase7===undefined)this.$JewelBase7=c('DOM').find(this.root,".__tw");return this.$JewelBase7;};n.prototype.hasNew=function(){'use strict';return c('CSS').hasClass(this.root,'hasNew');};n.prototype.isOpen=function(){'use strict';return c('CSS').hasClass(this.root,'openToggler');};n.prototype.reset=function(){'use strict';c('FunnelLogger').appendAction(k,l.CLEAR_BADGE_COUNT);c('CSS').removeClass(this.root,'hasNew');};n.prototype.setContent=function(o){'use strict';var p=c('DOM').find(this.root,'ul.jewelItemList');c('DOM').setContent(p,c('HTML')(o));};n.prototype.update=function(o){'use strict';this.countNew=o.count;if(typeof this.countNew==='number'&&this.countNew<0)this.countNew=0;this.badge.setLegacyContent(this.countNew);var p=isNaN(this.countNew)||this.countNew>0;c('CSS').conditionClass(this.root,'hasNew',p);this.inform('updated',o);};n.prototype.setupEvents=function(){'use strict';this.escHandler=c('Event').listen(document.documentElement,'keydown',function(o){if(o.keyCode===c('Keys').ESC)this.hide();}.bind(this));};n.prototype.removeEvents=function(){'use strict';if(this.escHandler){this.escHandler.remove();this.escHandler=null;}};n.prototype.markSeen=function(){'use strict';c('Arbiter').inform('jewel/count-updated',{jewel:this.name,count:0},c('Arbiter').BEHAVIOR_STATE);this.inform('marked-seen');};n.prototype.$JewelBase8=function(){'use strict';if(typeof this.$JewelBase9==='undefined')this.$JewelBase9=c('DOM').find(this.root,"a.jewelButton");return this.$JewelBase9;};n.prototype.$JewelBase4=function(){'use strict';var o=this.$JewelBase8();c('TooltipData').set(o,this.label);o.setAttribute('data-tooltip-delay','500');};n.prototype.$JewelBase6=function(){'use strict';c('TooltipData').remove(this.$JewelBase8());};n.prototype.$JewelBase2=function(o,p){'use strict';if(!this.$JewelBase10(p.from)&&!this.$JewelBase10(p.to))this.togglerInstance&&this.togglerInstance.hide();};n.prototype.$JewelBase10=function(o){'use strict';return o&&o.getQueryData().hasOwnProperty('theater');};n.prototype.$JewelBase5=function(){'use strict';c('reportData')('jewel_click',{gt:{count:this.countNew,initial:this.initialCount,jewel:this.name}});};n.prototype.$JewelBase1=function(){'use strict';if(!this.bootload_module)return c('Promise').resolve();if(!this.bootloading)this.bootloading=new (c('Promise'))(function(o,p){this.bootload_module.load().then(function(q){new q(this,this.bootload_args);o();}.bind(this))['catch'](p);}.bind(this));return this.bootloading;};n.prototype.$JewelBase3=function(){'use strict';if(this.bootloading)return;var o=c('JewelCountSideLoader').getOverwritesForJewel(this);if(!o)return;this.updateCountAndArgs(o.args,o.count);};n.prototype.updateCountAndArgs=function(o,p){'use strict';for(var q in o)if(o[q])this.bootload_args[q]=o[q];if(p)c('Arbiter').inform('jewel/count-updated',{jewel:this.name,count:p},c('Arbiter').BEHAVIOR_STATE);};f.exports=n;}),null);
__d('ModalMask',['DOM'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=null,i=0,j={show:function k(){i++;if(!h){h=c('DOM').create('div',{id:'modalMaskOverlay'});c('DOM').appendContent(document.body,h);}},hide:function k(){if(i){i--;if(!i&&h){c('DOM').remove(h);h=null;}}},getNode:function k(){return h;}};f.exports=j;}),null);
__d('LitestandChromeHomeCount',['cx','Arbiter','AsyncRequest','CSS','DOM','Event','LitestandMessages','UserAgent'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=300000,j={},k,l;function m(){l&&clearTimeout(l);if(k)return;l=setTimeout(n,i);}function n(){if(k)return;new (c('AsyncRequest'))().setURI('/ajax/litestand/newsfeed_count').setHandler(function(q){if(k)return;p.setCount(q.getPayload());m();}).setAllowCrossPageTransition(true).send();}function o(q){c('CSS').conditionClass(j.wrapNode,"_461d",q>0);if(q>0){var r=q>j.max?j.max+'+':q;c('DOM').setContent(j.countNode,r);}}var p={init:function q(r){j=r;c('Event').listen(j.homeNode,'click',function(event){var s=event.getModifiers(),t=s.shift,u=s.meta,v=s.control;if(t||c('UserAgent').isPlatform('Mac OS X')&&u||c('UserAgent').isPlatform('Windows')&&v)o(0);});c('Arbiter').subscribe(c('LitestandMessages').NEWSFEED_LOAD,function(){k=true;this.setCount(0);}.bind(this));c('Arbiter').subscribe(c('LitestandMessages').LEAVE_HOME,function(){k=false;m();});m();},setCount:function q(r){o(k?0:r);}};f.exports=p;}),null);
__d('AccessibilityShortcut',['AccessibilityLogger','Event','Focus','ge','onEnclosingPageletDestroy','warning'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function i(j,k){var l=c('Event').listen(j,'click',function(m){m.preventDefault();var n=c('ge')(k);if(n){c('Focus').set(n);c('AccessibilityLogger').logSRKey();}else c('warning')(n,'Failed to set focus on element with ID: %s',k);});c('onEnclosingPageletDestroy')(j,function(){return l.remove();});}};f.exports=h;}),null);
__d('QuicklingAugmenter',['URI'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=[],i={addHandler:function j(k){h.push(k);},augmentURI:function j(k){var l=[],m=new (c('URI'))(k);h.forEach(function(n){var o=n(m);if(!o)return m;l.push(n);m=m.addQueryData(o);});h=l;return m;}};f.exports=i;}),null);
__d('cancelIdleCallback',['TimerStorage','IdleCallbackImplementation'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports=function(){for(var h=arguments.length,i=Array(h),j=0;j<h;j++)i[j]=arguments[j];c('TimerStorage').unset(c('TimerStorage').IDLE_CALLBACK,i[0]);return Function.prototype.apply.call(c('IdleCallbackImplementation').cancelIdleCallback,b,i);};}),null);
__d('replaceNativeTimer',['clearInterval','clearTimeout','setInterval','setTimeout'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false;function i(){if(!h){h=true;c('setTimeout').nativeBackup=b.setTimeout;c('clearTimeout').nativeBackup=b.clearTimeout;c('setInterval').nativeBackup=b.setInterval;c('clearInterval').nativeBackup=b.clearInterval;b.setTimeout=c('setTimeout');b.clearTimeout=c('clearTimeout');b.setInterval=c('setInterval');b.clearInterval=c('clearInterval');}}f.exports=i;}),null);
__d('Quickling',['AjaxPipeRequest','Arbiter','CSSClassTransition','DocumentTitle','DOM','HTML','PageHooks','PageEvents','PageTransitionsRegistrar','QuicklingAugmenter','QuicklingConfig','Run','URI','UserAgent_DEPRECATED','PHPQuerySerializer','TimerStorage','cancelAnimationFrame','cancelIdleCallback','clearImmediate','clearInterval','clearTimeout','goOrReplace','isEmpty','replaceNativeTimer','requireWeak'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j;c('requireWeak')('PageTransitions',function(w){j=w;});var k=c('QuicklingConfig').version,l=c('QuicklingConfig').sessionLength,m=new RegExp(c('QuicklingConfig').inactivePageRegex),n=0,o,p='',q={isActive:function w(){return true;},isPageActive:function w(x){if(x=='#')return false;x=new (c('URI'))(x);if(x.getDomain()&&x.getDomain()!=new (c('URI'))(window.location.href).getDomain())return false;if(x.getPath()=='/l.php'){var y=x.getQueryData().u;if(y){y=new (c('URI'))(unescape(y)).getDomain();if(y&&y!=new (c('URI'))(window.location.href).getDomain())return false;}}var z=x.getPath(),aa=x.getQueryData();if(!c('isEmpty')(aa))z+='?'+c('PHPQuerySerializer').serialize(aa);return !m.test(z);},getLoadCount:function w(){return n;}};function r(w){w=w||'Facebook';c('DocumentTitle').set(w);if(c('UserAgent_DEPRECATED').ie()){p=w;if(!o)o=window.setInterval(function(){var x=p,y=c('DocumentTitle').get();if(x!=y)c('DocumentTitle').set(x);},5000,false);}}function s(w){var x=document.getElementsByTagName('link');for(var y=0;y<x.length;++y){if(x[y].rel!='alternate')continue;c('DOM').remove(x[y]);}if(w.length){var z=c('DOM').find(document,'head');z&&c('DOM').appendContent(z,c('HTML')(w[0]));}}h=babelHelpers.inherits(t,c('AjaxPipeRequest'));i=h&&h.prototype;function t(w){'use strict';var x={version:k};i.constructor.call(this,w,{quickling:x});this._isQuickling=true;}t.prototype._preBootloadFirstResponse=function(w){'use strict';return true;};t.prototype._fireDomContentCallback=function(){'use strict';this._request.cavalry&&this._request.cavalry.setTimeStamp('t_domcontent');if(j)j.transitionComplete();this._onPageDisplayed&&this._onPageDisplayed(this.pipe);i._fireDomContentCallback.call(this);};t.prototype._fireOnloadCallback=function(){'use strict';if(this._request.cavalry){this._request.cavalry.setTimeStamp('t_hooks');this._request.cavalry.setTimeStamp('t_layout');this._request.cavalry.setTimeStamp('t_onload');}i._fireOnloadCallback.call(this);};t.prototype.isPageActive=function(w){'use strict';return q.isPageActive(w);};t.prototype._versionCheck=function(w){'use strict';if(w.version==k)return true;var x=['quickling','ajaxpipe','ajaxpipe_token'];c('goOrReplace')(window.location,new (c('URI'))(w.uri).removeQueryData(x),true);return false;};t.prototype._processFirstResponse=function(w){'use strict';var x=w.getPayload();r(x.title);s(x.syndication||[]);window.scrollTo(0,0);c('CSSClassTransition').go(document.body,x.body_class||'',j.getMostRecentURI(),w.getRequest().getURI());c('Arbiter').inform('quickling/response');};t.prototype.getSanitizedParameters=function(){'use strict';return ['quickling'];};function u(){n++;return n>=l;}function v(w){c('AjaxPipeRequest').setCurrentRequest(null);if(u()){w.addQueryData({qsefr:1});return false;}w=c('QuicklingAugmenter').augmentURI(w);if(!q.isPageActive(w))return false;c('TimerStorage').clearAll(c('TimerStorage').ANIMATION_FRAME,c('cancelAnimationFrame'));c('TimerStorage').clearAll(c('TimerStorage').IDLE_CALLBACK,c('cancelIdleCallback'));c('TimerStorage').clearAll(c('TimerStorage').IMMEDIATE,c('clearImmediate'));c('TimerStorage').clearAll(c('TimerStorage').INTERVAL,c('clearInterval'));c('TimerStorage').clearAll(c('TimerStorage').TIMEOUT,c('clearTimeout'));window.ExitTime=Date.now();c('Run').__removeHook(c('PageHooks').ONLOAD_HOOK);c('Run').__removeHook(c('PageHooks').DOMREADY_HOOK);c('PageHooks').runHooks('onleavehooks');c('Arbiter').inform(c('PageEvents').AJAXPIPE_ONUNLOAD,{transition_type:'quickling'});new t(w).setCanvasId('content').send();var x=window.__bodyWrapper;if(x.getCodeUsage)x.clearCodeUsage();return c('PageTransitionsRegistrar').DELAY_HISTORY;}c('replaceNativeTimer')();c('Run').onAfterLoad(function w(){c('PageTransitionsRegistrar').registerHandler(v,1);});f.exports=b.Quickling=q;}),null);
__d('PrivacyLiteFlyoutBootloader',['regeneratorRuntime','Promise','Deferred','JSResource'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=false,i={loadFlyout:function j(){var k,l,m,n,o,p,q,event,r,s;return c('regeneratorRuntime').async(function t(u){while(1)switch(u.prev=u.next){case 0:if(!h){u.next=2;break;}return u.abrupt('return');case 2:h=true;u.next=5;return c('regeneratorRuntime').awrap(c('Promise').all([c('JSResource')('PrivacyLiteFlyout').__setRef('PrivacyLiteFlyoutBootloader').load(),this._getDeferredFlyoutElements().getPromise(),this._getDeferredFooterElements().getPromise()]));case 5:k=u.sent;l=k[0];m=k[1];n=m.flyout;o=m.flyoutRoot;p=k[2];q=p.footer;event=p.event;r=p.settingsExitPoint;s=p.basicsExitPoint;l.registerFlyoutToggler(n,o);l.registerSettingsAndBasicsLinkLogging(q,event,r,s);l.loadBody();case 18:case 'end':return u.stop();}},null,this);},setFlyoutVisible:function j(k){var l,m;return c('regeneratorRuntime').async(function n(o){while(1)switch(o.prev=o.next){case 0:o.next=2;return c('regeneratorRuntime').awrap(c('Promise').all([c('JSResource')('PrivacyLiteFlyout').__setRef('PrivacyLiteFlyoutBootloader').load(),this._getDeferredFlyoutElements().getPromise()]));case 2:l=o.sent;m=l[0];m.setFlyoutVisible(k);case 5:case 'end':return o.stop();}},null,this);},_getDeferredFlyoutElements:function j(){if(this._deferredFlyoutElements==null)this._deferredFlyoutElements=new (c('Deferred'))();return this._deferredFlyoutElements;},registerFlyoutElements:function j(k,l){this._getDeferredFlyoutElements().resolve({flyout:k,flyoutRoot:l});},_getDeferredFooterElements:function j(){if(this._deferredFooterElements==null)this._deferredFooterElements=new (c('Deferred'))();return this._deferredFooterElements;},registerFooterElements:function j(k,event,l,m){this._getDeferredFooterElements().resolve({footer:k,event:event,settingsExitPoint:l,basicsExitPoint:m});}};f.exports=i;}),null);
__d('PrivacyLiteFlyoutHelp',['csx','cx','Arbiter','AsyncRequest','Banzai','ContextualHelpSearchController','CSS','DOM','Event','Parent'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k;function l(m,n,o,p,q){this._width=315;k=c('DOM').find(n,'input');var r=c('DOM').create('div');c('ContextualHelpSearchController').call(this,m,k,r,o,p,{focusSearchBox:false});j=c('Parent').bySelector(n,"._8-a");c('Event').listen(q,'click',function(){this._hideSearch(this);c('Banzai').post('privacy_lite',{event:'plite_search_collapse',exit_point:null});}.bind(this));c('Arbiter').subscribe('PrivacyLiteFlyout/expandingSection',this._hideSearch.bind(this));var s=c('DOM').scry(j,"._d1r")[0];s&&c('Event').listen(s,'click',function(){c('CSS').addClass(j,"_aw6");k.focus();c('Banzai').post('privacy_lite',{event:'plite_search_expand',exit_point:null});if(!this.suggestedResults)new (c('AsyncRequest'))('/ajax/privacy/privacy_lite/help_suggestions').setHandler(function(t){var u=t.getPayload().searchSuggestions,v=c('DOM').find(j,"._4_8m");c('DOM').setContent(v,u);c('CSS').addClass(j,"_4_8l");}.bind(this)).send();}.bind(this));}Object.assign(l.prototype,c('ContextualHelpSearchController').prototype,{source:'privacy_shortcuts',_hideSearch:function m(){this.clearResults();c('CSS').removeClass(j,"_aw6");},show:function m(n){if(n===this.topics_area){c('CSS').removeClass(j,"_aw7");return;}else if(n===this.loader){c('CSS').addClass(j,"_aw7");c('CSS').hide(this.results_area);}else c('CSS').hide(this.loader);c('CSS').show(n);}});f.exports=l;}),null);
__d('ViewasChromeBar',['csx','cx','Arbiter','AsyncRequest','CSS','DOM','Event','Focus','ModalMask','PageTransitionsRegistrar','Parent'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j='ViewasChromeBar/initialized',k=null,l=false;function m(p){c('Arbiter').subscribe(j,p);}function n(p){c('CSS').addClass(p,"_7g7");var q=c('DOM').find(p,"._7g0");c('Focus').set(c('DOM').find(q,'.textInput'));}var o={initChromeBar:function p(q){if(l)return;k=q;l=true;c('Arbiter').inform(j,null,c('Arbiter').BEHAVIOR_STATE);},update:function p(q,r){m(function(){c('DOM').setContent(k,q);if(r)new (c('AsyncRequest'))('/ajax/privacy/glasgow/viewas_bar_flyout_open').send();});},registerSpecificModeOnClick:function p(q){c('Event').listen(q,'click',n.bind(null,c('Parent').bySelector(q,"._7f-")));},registerFlyoutModalMask:function p(){c('ModalMask').show();c('PageTransitionsRegistrar').registerHandler(c('ModalMask').hide,10);}};f.exports=o;}),null);
__d('XUIBadge',['cx','invariant','CSS','DOM'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(l){return parseInt(l,10)===l;}function k(l){'use strict';this.target=l.target;this.count=l.count;this.maxcount=l.maxcount;}k.prototype.getCount=function(){'use strict';return this.count;};k.prototype.setCount=function(l){'use strict';!j(l)?i(0):void 0;!(l>=0)?i(0):void 0;this.count=l;c('CSS').conditionClass(this.target,'hidden_elem',this.count===0);if(l>this.maxcount){c('DOM').setContent(this.target,this.maxcount+'+');c('CSS').addClass(this.target,"_5ugi");}else{c('DOM').setContent(this.target,l);c('CSS').removeClass(this.target,"_5ugi");}};k.prototype.setLegacyContent=function(l){'use strict';if(typeof l==='string'){c('CSS').conditionClass(this.target,'hidden_elem',l==0);c('DOM').setContent(this.target,l);c('CSS').removeClass(this.target,"_5ugi");}else this.setCount(l);};k.prototype.increment=function(){'use strict';this.setCount(this.getCount()+1);};f.exports=k;}),null);
__d('ServiceWorkerRegistration',['Promise','ClientServiceWorkerMessage'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h='serviceWorker' in navigator;function i(){var k=navigator.serviceWorker;if(!h||!k)throw new Error('serviceWorker is not supported in this browser');return k;}var j={isSupported:function k(){return h;},registerWorkerIfUnregistered:function k(l){var m=i();return new (c('Promise'))(function(n,o){this.getWorkerRegistration(l).done(function(p){if(!p){c('Promise').resolve(m.register(l)).done(function(){c('Promise').resolve(m.ready).done(n);});}else n(p);});}.bind(this));},unregisterControllingWorker:function k(){return new (c('Promise'))(function(l,m){var n=new (c('ClientServiceWorkerMessage'))('unregister',{},function(){l(true);});n.sendViaController();});},getWorkerRegistration:function k(l){var m=i();return c('Promise').resolve(m.getRegistration(l));},isAWorkerActivated:function k(){if(!navigator.serviceWorker||!navigator.serviceWorker.getRegistration)return c('Promise').resolve(false);return navigator.serviceWorker.getRegistration().then(function(l){return !!(l&&l.active);});}};f.exports=j;}),null);
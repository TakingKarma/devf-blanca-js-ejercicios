if (self.CavalryLogger) { CavalryLogger.start_js(["rp6zi"]); }

__d("LanguageDialectCategory",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={VIEWER_UNDERSTOOD:"viewer_understood",OTHER:"other"};}),null);
__d("LanguageDialectSetTypes",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={LANGUAGE_DETECTION:"language_detection",MT_SOURCE:"source",MT_TARGET:"target",MLC:"mlc"};}),null);
__d("LanguageSettingsAction",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={TRANSLATE_INTO:"translate_into",DO_NOT_TRANSLATE:"do_not_translate",DO_NOT_AUTO_TRANSLATE:"do_not_auto_translate",UNDO_NEVER_TRANSLATE:"undo_never_translate",UNDO_DISABLE_AUTO_TRANSLATE:"undo_disable_auto_translate"};}),null);
__d("TranslationPreferenceEvent",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={SEE_ORIGINAL:"click_see_original",HIDE_ORIGINAL:"click_hide_original",TRANSLATION_PREFERENCES:"click_translation_preferences",DISABLE_TRANSLATION:"disable_translation",DISABLE_AUTO_TRANSLATION:"disable_auto_translation",LANGUAGE_SETTINGS:"language_settings",EDIT_TRANSLATION:"edit_translation",REPORT_LANGUAGE:"report language",RATE_TRANSLATION:"rate_translation",TRANSLATE_ALL_COMMENTS:"translate_all_comments"};}),null);
__d("XLtgLanguageDialectTypeaheadController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/translation\/dialects\/",{value:{type:"String",defaultValue:""},q:{type:"String",defaultValue:""},dialect_set:{type:"Enum",defaultValue:"language_detection",enumType:1}});}),null);
__d('LanguageDialectAsyncSearchSource',['WebAsyncSearchSource','XLtgLanguageDialectTypeaheadController'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('WebAsyncSearchSource'));i=h&&h.prototype;function j(k){i.constructor.call(this,{bootstrapRequests:[{uri:c('XLtgLanguageDialectTypeaheadController').getURIBuilder().setEnum('dialect_set',k).getURI()}]});}j.prototype.searchImpl=function(k,l,m){if(!k){l(Object.values(this.getAllEntriesMap()),k);}else i.searchImpl.call(this,k,l,m);};f.exports=j;}),null);
__d('LanguageDialectViewRenderer.react',['cx','fbt','LanguageDialectCategory','React','SearchableEntry','XUIGrayText.react','XUITypeaheadViewItem.react','groupArray'],(function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;l.prototype.$LanguageDialectViewRenderer1=function(m){'use strict';return (c('React').createElement(c('XUITypeaheadViewItem.react'),{key:m.getUniqueID(),entry:m,highlighted:m===this.props.highlightedEntry,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight}));};l.prototype.$LanguageDialectViewRenderer2=function(m,n){'use strict';var o=null;switch(m){case c('LanguageDialectCategory').VIEWER_UNDERSTOOD:o=i._("Idiomas usados frecuentemente");break;case c('LanguageDialectCategory').OTHER:o=i._("Otros idiomas");break;default:break;}var p=n.map(function(q){return this.$LanguageDialectViewRenderer1(q);}.bind(this));if(o)p.unshift(c('React').createElement(c('XUIGrayText.react'),{key:m,className:"_2pir _2pi2",shade:'light',display:'block'},o));return p;};l.prototype.$LanguageDialectViewRenderer3=function(){var m;'use strict';var n=c('groupArray')(this.props.entries,function(p){return p.getType();}),o=Object.keys(n);if(o.length===1)return this.$LanguageDialectViewRenderer2('',this.props.entries);if(n.hasOwnProperty(c('LanguageDialectCategory').VIEWER_UNDERSTOOD)){o.splice(o.indexOf(c('LanguageDialectCategory').VIEWER_UNDERSTOOD),1);o.unshift(c('LanguageDialectCategory').VIEWER_UNDERSTOOD);}return (m=[]).concat.apply(m,o.map(function(p){return this.$LanguageDialectViewRenderer2(p,n[p]);}.bind(this)));};l.prototype.render=function(){'use strict';var m=this.props.hasCategories?this.$LanguageDialectViewRenderer3():this.$LanguageDialectViewRenderer2('',this.props.entries);return (c('React').createElement('ul',{className:"_5p0r",role:this.props.role},m));};function l(){'use strict';j.apply(this,arguments);}f.exports=l;}),null);
__d('LanguageDialectInlineTypeahead.react',['cx','AbstractTypeahead.react','React','SearchableEntry','LanguageDialectAsyncSearchSource','LanguageDialectViewRenderer.react'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;function k(l){'use strict';j.constructor.call(this,l);this.searchSource=new (c('LanguageDialectAsyncSearchSource'))(this.props.dialectType);this.state={query:''};}k.prototype.render=function(){'use strict';var l={};this.props.excludedDialects.forEach(function(m){return l[m]=true;});return (c('React').createElement(c('AbstractTypeahead.react'),{autoHighlight:true,inputClassName:"_5p0s",hideViewWithEntries:false,showEntriesOnFocus:true,onSelectAttempt:function(m){return this.$LanguageDialectInlineTypeahead1(m);}.bind(this),onChange:function(m){return this.$LanguageDialectInlineTypeahead2(m);}.bind(this),onClear:function(){return this.$LanguageDialectInlineTypeahead3();}.bind(this),searchSource:this.searchSource,placeholder:this.props.placeholder,excludedEntries:l,queryString:this.state.query,presenter:{ViewRenderer:c('LanguageDialectViewRenderer.react'),maxEntries:200,useLayer:false,extraRendererProps:{hasCategories:this.props.hasCategories}}}));};k.prototype.$LanguageDialectInlineTypeahead1=function(l){'use strict';this.props.onSelect&&this.props.onSelect(l);this.$LanguageDialectInlineTypeahead3();};k.prototype.$LanguageDialectInlineTypeahead2=function(event){'use strict';var l=event.target.value;this.props.onChange&&this.props.onChange(l);this.setState({query:event.target.value});};k.prototype.$LanguageDialectInlineTypeahead3=function(){'use strict';this.setState({query:''});};k.defaultProps={excludedDialects:[],hasCategories:false};f.exports=k;}),null);
__d('LanguageDialectSearchableDropdown.react',['cx','fbt','ContextualLayer.react','ContextualLayerAutoFlip','ContextualLayerUpdateOnScroll','LanguageDialectInlineTypeahead.react','LayerAutoFocus','LayerHideOnBlur','LayerHideOnEscape','React','SearchableEntry'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();var l=' \u25BE',m='xx_XX';j=babelHelpers.inherits(n,c('React').Component);k=j&&j.prototype;function n(o){k.constructor.call(this,o);this.state={selectedDialect:this.props.initialDialect?this.props.initialDialect:m,selectedDialectName:this.props.initialDialectName?this.props.initialDialectName:i._("Seleccionar"),isOpen:false};}n.prototype.$LanguageDialectSearchableDropdown2=function(o){this.setState({selectedDialect:o.getUniqueID(),selectedDialectName:o.getTitle(),isOpen:false});this.props.onSelect(o.getUniqueID());};n.prototype.$LanguageDialectSearchableDropdown3=function(){return i._("Mostrar idiomas disponibles");};n.prototype.$LanguageDialectSearchableDropdown4=function(){this.setState({isOpen:!this.state.isOpen});};n.prototype.render=function(){return (c('React').createElement('span',{className:this.props.className},c('React').createElement('a',{title:this.$LanguageDialectSearchableDropdown3(),ref:function(o){return this.$LanguageDialectSearchableDropdown1=o;}.bind(this),onClick:function(){return this.$LanguageDialectSearchableDropdown4();}.bind(this)},this.state.selectedDialectName,l),c('React').createElement(c('ContextualLayer.react'),{alignment:'left',autofocus:true,behaviors:{ContextualLayerAutoFlip:c('ContextualLayerAutoFlip'),ContextualLayerUpdateOnScroll:c('ContextualLayerUpdateOnScroll'),LayerAutoFocus:c('LayerAutoFocus'),LayerHideOnBlur:c('LayerHideOnBlur'),LayerHideOnEscape:c('LayerHideOnEscape')},contextRef:function(){return this.$LanguageDialectSearchableDropdown1;}.bind(this),position:'below',shown:this.state.isOpen},c('React').createElement('div',{className:"_5ge1"},c('React').createElement(c('LanguageDialectInlineTypeahead.react'),{dialectType:this.props.dialectType,onSelect:function(o){return this.$LanguageDialectSearchableDropdown2(o);}.bind(this),placeholder:this.props.placeholder,excludedDialects:this.props.excludedDialects,hasCategories:this.props.hasCategories})))));};n.defaultProps={initialDialect:m,hasCategories:false};f.exports=n;}),null);
__d('ProvideTranslationDialog.react',['cx','ContentTranslationStrings','Layout.react','React','XUIGrayText.react'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('Layout.react').Column,l=c('Layout.react').FillColumn,m=c('React').PropTypes;i=babelHelpers.inherits(n,c('React').Component);j=i&&i.prototype;n.prototype.render=function(){var o=this.props,p=o.onTranslationTextChange,q=o.defaultText,r=o.children;return (c('React').createElement('div',null,c('React').createElement(c('Layout.react'),null,c('React').createElement(k,{className:"_1isa"},c('React').createElement(c('XUIGrayText.react'),{style:{verticalAlign:'-10px'},size:'small',shade:'medium',weight:'bold'},c('ContentTranslationStrings').ORIGINAL_TEXT)),c('React').createElement(l,null,c('React').createElement(c('XUIGrayText.react'),{display:'block',size:'small'},r))),c('React').createElement(c('Layout.react'),{className:"_2pid"},c('React').createElement(k,{className:"_1isa"},c('React').createElement(c('XUIGrayText.react'),{className:"_2pir",size:'small',shade:'medium',weight:'bold'},c('ContentTranslationStrings').YOUR_TRANSLATION)),c('React').createElement(l,null,c('React').createElement('textarea',{className:"_5d_f",defaultValue:q,onChange:p})))));};function n(){i.apply(this,arguments);}n.propTypes={onTranslationTextChange:m.func,defaultText:m.string};f.exports=n;}),null);
__d('LtgTranslationPreferenceEntryBase',['BanzaiLogger'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this.translationData=i;}h.prototype.getPreferenceType=function(){'use strict';return null;};h.prototype.getShouldShowPreference=function(){'use strict';return false;};h.prototype.getEntryTitle=function(){'use strict';return null;};h.prototype.getEntrySubtitle=function(){'use strict';return null;};h.prototype.getConfirmDialogTitle=function(){'use strict';return null;};h.prototype.getConfirmDialogBody=function(){'use strict';return null;};h.prototype.getUseConfirmDialog=function(){'use strict';return false;};h.prototype.getSuccessDialogTitle=function(){'use strict';return null;};h.prototype.getSuccessDialogBody=function(){'use strict';return null;};h.prototype.getUseSuccessDialog=function(){'use strict';return false;};h.prototype.getUseCustomAction=function(){'use strict';return false;};h.prototype.getURIForAsyncAction=function(){'use strict';return null;};h.prototype.getGlyph=function(){'use strict';return null;};h.prototype.performAction=function(){'use strict';};h.prototype.log=function(){'use strict';c('BanzaiLogger').log('LtgTranslationPreferencesLoggerConfig',{translation_request_id:this.translationData.requestID,translation_trigger:this.translationData.trigger,content_id:this.translationData.targetID,translation_ent_id:this.translationData.translationID,click_type:this.getPreferenceType()});};f.exports=h;}),null);
__d("XTranslationCrowdsourcingSubmitAsyncController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/language_technology\/translation\/submit\/",{content_id:{type:"FBID"},source_dialect:{type:"String",required:true},target_dialect:{type:"String",required:true},translation:{type:"String",required:true}});}),null);
__d('LtgEditTranslationPreferenceEntryBase',['ContentTranslationStrings','LtgTranslationPreferenceEntryBase','TranslationPreferenceEvent','XTranslationCrowdsourcingSubmitAsyncController'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('LtgTranslationPreferenceEntryBase'));i=h&&h.prototype;function j(k){'use strict';i.constructor.call(this,k);this.newTranslation=this.translationData.translatedText.text;}j.prototype.getPreferenceType=function(){'use strict';return c('TranslationPreferenceEvent').EDIT_TRANSLATION;};j.prototype.getShouldShowPreference=function(){'use strict';return true;};j.prototype.getEntryTitle=function(){'use strict';return c('ContentTranslationStrings').EDIT_TRANSLATION_MENU;};j.prototype.getConfirmDialogTitle=function(){'use strict';return this.getEntryTitle();};j.prototype.getUseConfirmDialog=function(){'use strict';return true;};j.prototype.getUseSuccessDialog=function(){'use strict';return true;};j.prototype.getSuccessDialogTitle=function(){'use strict';return this.getConfirmDialogTitle();};j.prototype.getSuccessDialogBody=function(){'use strict';return c('ContentTranslationStrings').EDIT_TRANSLATION_THANKS;};j.prototype.getURIForAsyncAction=function(){'use strict';return c('XTranslationCrowdsourcingSubmitAsyncController').getURIBuilder().setFBID('content_id',this.translationData.targetID).setString('source_dialect',this.translationData.sourceDialect).setString('target_dialect',this.translationData.targetDialect).setString('translation',this.newTranslation).getURI();};f.exports=j;}),null);
__d('LtgEditTranslationPreferenceEntry',['LtgEditTranslationPreferenceEntryBase','ProvideTranslationDialog.react','React','TextWithEntities.react'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('LtgEditTranslationPreferenceEntryBase'));i=h&&h.prototype;j.prototype.getConfirmDialogBody=function(){'use strict';return (c('React').createElement(c('ProvideTranslationDialog.react'),{onTranslationTextChange:function(k){return this.newTranslation=k;}.bind(this),defaultText:this.translationData.translatedText.text},c('React').createElement(c('TextWithEntities.react'),{text:this.translationData.originalText})));};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('LtgLanguageSettingsBasePreferenceEntry',['ix','ContentTranslationStrings','LtgTranslationPreferenceEntryBase','TranslationPreferenceEvent','fbglyph'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('LtgTranslationPreferenceEntryBase'));j=i&&i.prototype;k.prototype.getPreferenceType=function(){'use strict';return c('TranslationPreferenceEvent').LANGUAGE_SETTINGS;};k.prototype.getShouldShowPreference=function(){'use strict';return true;};k.prototype.getEntryTitle=function(){'use strict';return c('ContentTranslationStrings').LANGUAGE_SETTINGS;};k.prototype.getUseConfirmDialog=function(){'use strict';return false;};k.prototype.getUseEditableDialog=function(){'use strict';return false;};k.prototype.getGlyph=function(){'use strict';return h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/gear_20_fig-dark-50.png");};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('LtgLanguageSettingsPreferenceEntry',['LtgLanguageSettingsBasePreferenceEntry','URI'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('LtgLanguageSettingsBasePreferenceEntry'));i=h&&h.prototype;j.prototype.performAction=function(){'use strict';new (c('URI'))('/settings').addQueryData('tab','language').go();};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d("XLtgTranslationFeedbackController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/translation\/feedback\/",{target_id:{type:"FBID",required:true},translation_id:{type:"FBID",required:true},request_id:{type:"String",required:true},trigger:{type:"Enum",required:true,enumType:1},rating:{type:"Int",required:true}});}),null);
__d('LtgRatingPreferenceEntry',['ContentTranslationStrings','TranslationPreferenceEvent','TranslationRating','LtgTranslationPreferenceEntryBase','XLtgTranslationFeedbackController'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('LtgTranslationPreferenceEntryBase'));i=h&&h.prototype;function j(k,l){'use strict';i.constructor.call(this,k);this.setRating(l);}j.prototype.getPreferenceType=function(){'use strict';return c('TranslationPreferenceEvent').RATE_TRANSLATION;};j.prototype.getEntryTitle=function(){'use strict';return c('ContentTranslationStrings').RATE_TRANSLATION;};j.prototype.getURIForAsyncAction=function(){'use strict';return c('XLtgTranslationFeedbackController').getURIBuilder().setEnum('trigger',this.translationData.trigger).setFBID('translation_id',this.translationData.translationID).setFBID('target_id',this.translationData.targetID).setString('request_id',this.translationData.requestID).setInt('rating',this.rating).getURI();};j.prototype.coerceRatingType=function(k){'use strict';switch(k){case 1:return c('TranslationRating').VERY_BAD;case 2:return c('TranslationRating').BAD;case 3:return c('TranslationRating').OK;case 4:return c('TranslationRating').GOOD;case 5:return c('TranslationRating').VERY_GOOD;default:return c('TranslationRating').UNDEFINED;}};j.prototype.setRating=function(k){'use strict';this.rating=this.coerceRatingType(k);};f.exports=j;}),null);
__d('AbstractRatingInput.react',['AbstractRating.react','React'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;function j(k){'use strict';i.constructor.call(this,k);this.state={rating:k.rating||0};}j.prototype.render=function(){'use strict';return (c('React').createElement(c('AbstractRating.react'),babelHelpers['extends']({},this.props,{onClick:this.props.onClick,onMouseOut:function(){this.setState({rating:this.props.rating});this.props.onMouseOut&&this.props.onMouseOut();}.bind(this),onMouseOver:function(k){this.setState({rating:k});this.props.onMouseOver&&this.props.onMouseOver(k);}.bind(this),rating:this.state.rating})));};j.prototype.componentDidUpdate=function(k){'use strict';if(this.props.rating!==k.rating)this.setState({rating:this.props.rating});};f.exports=j;}),null);
__d('StarRatingInput.react',['AbstractRatingInput.react','React','StarRatingEmptyStar.react','StarRatingFilledStar.react'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.prototype.render=function(){'use strict';return (c('React').createElement(c('AbstractRatingInput.react'),babelHelpers['extends']({},this.props,{emptyItem:c('React').createElement(c('StarRatingEmptyStar.react'),{size:this.props.size,color:this.props.emptyColor}),filledItem:c('React').createElement(c('StarRatingFilledStar.react'),{size:this.props.size,color:this.props.fillColor})})));};function j(){'use strict';h.apply(this,arguments);}j.defaultProps={maxRating:5,size:'20',color:'fig-light-20'};f.exports=j;}),null);
__d('LtgRatingTranslationPreference.react',['cx','CenteredContainer.react','ContentTranslationStrings','LtgRatingPreferenceEntry','TranslationRating','React','StarRatingInput.react','XUIText.react'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;function k(l){'use strict';j.constructor.call(this,l);this.state={hoverScore:this.props.score,score:this.props.score};}k.prototype.render=function(){'use strict';var l=this.state.hoverScore===c('TranslationRating').UNDEFINED?this.state.score:this.state.hoverScore,m=this.props.preferenceEntry.coerceRatingType(l);return (c('React').createElement(c('CenteredContainer.react'),{vertical:true},c('React').createElement(c('XUIText.react'),{size:'medium'},c('ContentTranslationStrings').RATE_TRANSLATION),c('React').createElement('div',{className:"_2pic _2pin"},c('React').createElement(c('StarRatingInput.react'),{rating:this.props.score,size:'24',onClick:function(n){return this.$LtgRatingTranslationPreference1(n);}.bind(this),onMouseOver:function(n){this.setState({hoverScore:this.props.preferenceEntry.coerceRatingType(n)});}.bind(this),onMouseOut:function(n){return this.setState({hoverScore:c('TranslationRating').UNDEFINED});}.bind(this)})),c('React').createElement(c('XUIText.react'),{className:"_2tsj"},m===c('TranslationRating').UNDEFINED?c('ContentTranslationStrings').CLICK_TO_RATE:c('ContentTranslationStrings').getUserFeedbackDescriptionForScore(m))));};k.prototype.$LtgRatingTranslationPreference1=function(l){'use strict';this.props.preferenceEntry.setRating(l);var m=this.props.preferenceEntry.rating;this.setState({score:m});this.props.onClick(m);};k.defaultProps={score:c('TranslationRating').UNDEFINED};f.exports=k;}),null);
__d('LtgReportLanguagePreferenceEntryBase',['BanzaiLogger','ContentTranslationStrings','LtgTranslationPreferenceEntryBase','TranslationPreferenceEvent'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('LtgTranslationPreferenceEntryBase'));i=h&&h.prototype;function j(k,l){'use strict';i.constructor.call(this,k);this.isShowingOriginal=l;this.correctedDialect='xx_XX';}j.prototype.getPreferenceType=function(){'use strict';return c('TranslationPreferenceEvent').DISABLE_AUTO_TRANSLATION;};j.prototype.getShouldShowPreference=function(){'use strict';return this.isShowingOriginal;};j.prototype.getEntryTitle=function(){'use strict';return c('ContentTranslationStrings').getReportLanguage(this.translationData.sourceDialectName);};j.prototype.getConfirmDialogTitle=function(){'use strict';return this.getEntryTitle();};j.prototype.getDialogBody=function(){'use strict';return c('ContentTranslationStrings').getReportLanguageDialogBody(this.translationData.sourceDialectName);};j.prototype.getUseConfirmDialog=function(){'use strict';return true;};j.prototype.getUseSuccessDialog=function(){'use strict';return true;};j.prototype.getSuccessDialogTitle=function(){'use strict';return this.getConfirmDialogTitle();};j.prototype.getSuccessDialogBody=function(){'use strict';return c('ContentTranslationStrings').REPORT_LANGUAGE_THANKS;};j.prototype.performAction=function(){'use strict';c('BanzaiLogger').log('LtgLanguageFeedbackLoggerConfig',{content_id:this.translationData.targetID,corrected_dialect:this.correctedDialect});};f.exports=j;}),null);
__d('LtgReportLanguagePreferenceEntry',['cx','ContentTranslationStrings','LanguageDialectSearchableDropdown.react','LanguageDialectSetTypes','LtgReportLanguagePreferenceEntryBase','React','TextWithEntities.react','XUIGrayText.react'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('LtgReportLanguagePreferenceEntryBase'));j=i&&i.prototype;k.prototype.getConfirmDialogBody=function(){'use strict';return (c('React').createElement('div',null,c('ContentTranslationStrings').getReportLanguageDialogBody(this.translationData.sourceDialectName),c('React').createElement(c('XUIGrayText.react'),{display:'block',size:'small',className:"_2ph_"},c('React').createElement(c('TextWithEntities.react'),{text:this.translationData.originalText})),c('ContentTranslationStrings').getReportLanguageSelector(c('React').createElement(c('LanguageDialectSearchableDropdown.react'),{dialectType:c('LanguageDialectSetTypes').LANGUAGE_DETECTION,excludedDialects:[this.translationData.sourceDialect],placeholder:c('ContentTranslationStrings').SEARCH,initialDialectName:c('ContentTranslationStrings').I_DONT_KNOW,onSelect:function(l){this.correctedDialect=l;}.bind(this)}))));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d("XLtgDisableAutoTranslatePreferenceController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/translation_preferences\/disable_auto_translate\/",{dialect:{type:"String",required:true},event_trigger:{type:"Enum",required:true,enumType:1}});}),null);
__d('LtgDisableAutoTranslatePreferenceEntry',['ix','ContentTranslationStrings','React','TranslationPreferenceEvent','TranslationTrigger','LtgTranslationPreferenceEntryBase','XLtgDisableAutoTranslatePreferenceController','LanguageSettingsAction','fbglyph'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('LtgTranslationPreferenceEntryBase'));j=i&&i.prototype;function k(l){'use strict';j.constructor.call(this,l);}k.prototype.getPreferenceType=function(){'use strict';return c('TranslationPreferenceEvent').DISABLE_AUTO_TRANSLATION;};k.prototype.getShouldShowPreference=function(){'use strict';return this.translationData.trigger===c('TranslationTrigger').AUTO_TRANSLATION;};k.prototype.getEntryTitle=function(){'use strict';return c('ContentTranslationStrings').getDisableAutoTranslate(this.translationData.sourceDialectName);};k.prototype.getConfirmDialogTitle=function(){'use strict';return this.getEntryTitle();};k.prototype.getConfirmDialogBody=function(){'use strict';return (c('React').createElement('div',null,c('React').createElement('div',null,c('ContentTranslationStrings').getDisableAutoTranslateDialog(this.translationData.sourceDialectName)),c('ContentTranslationStrings').LANGUAGE_SETTINGS_REMINDER));};k.prototype.getUseConfirmDialog=function(){'use strict';return true;};k.prototype.getUseSuccessDialog=function(){'use strict';return true;};k.prototype.getSuccessDialogTitle=function(){'use strict';return this.getConfirmDialogTitle();};k.prototype.getSuccessDialogBody=function(){'use strict';return c('ContentTranslationStrings').SETTINGS_SAVED;};k.prototype.getURIForAsyncAction=function(){'use strict';return c('XLtgDisableAutoTranslatePreferenceController').getURIBuilder().setString('dialect',this.translationData.sourceDialect).setEnum('event_trigger',c('LanguageSettingsAction').DO_NOT_AUTO_TRANSLATE).getURI();};k.prototype.getGlyph=function(){'use strict';return h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/hide_20_fig-dark-50.png");};f.exports=k;}),null);
__d("XLtgNeverTranslatePreferenceController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/translation_preferences\/never_translate\/",{dialect:{type:"String",required:true},event_trigger:{type:"Enum",required:true,enumType:1},redirect_uri:{type:"String"}});}),null);
__d('LtgNeverTranslatePreferenceEntry',['ix','ContentTranslationStrings','LanguageSettingsAction','LtgTranslationPreferenceEntryBase','React','TranslationPreferenceEvent','XLtgNeverTranslatePreferenceController','fbglyph'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('LtgTranslationPreferenceEntryBase'));j=i&&i.prototype;k.prototype.getPreferenceType=function(){'use strict';return c('TranslationPreferenceEvent').DISABLE_TRANSLATION;};k.prototype.getShouldShowPreference=function(){'use strict';return true;};k.prototype.getEntryTitle=function(){'use strict';return c('ContentTranslationStrings').getNeverTranslate(this.translationData.sourceDialectName);};k.prototype.getEntrySubtitle=function(){'use strict';return c('ContentTranslationStrings').getTranslatedFromTo(this.translationData.sourceDialectName,this.translationData.targetDialectName);};k.prototype.getConfirmDialogTitle=function(){'use strict';return this.getEntryTitle();};k.prototype.getConfirmDialogBody=function(){'use strict';return (c('React').createElement('div',null,c('React').createElement('div',null,c('ContentTranslationStrings').getNeverTranslateDialog(this.translationData.sourceDialectName)),c('ContentTranslationStrings').LANGUAGE_SETTINGS_REMINDER));};k.prototype.getUseConfirmDialog=function(){'use strict';return true;};k.prototype.getUseSuccessDialog=function(){'use strict';return true;};k.prototype.getSuccessDialogTitle=function(){'use strict';return this.getConfirmDialogTitle();};k.prototype.getSuccessDialogBody=function(){'use strict';return c('ContentTranslationStrings').SETTINGS_SAVED;};k.prototype.getURIForAsyncAction=function(){'use strict';return c('XLtgNeverTranslatePreferenceController').getURIBuilder().setString('dialect',this.translationData.sourceDialect).setEnum('event_trigger',c('LanguageSettingsAction').DO_NOT_TRANSLATE).getURI();};k.prototype.getGlyph=function(){'use strict';return h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/cross_20_fig-dark-50.png");};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('LtgTranslationUtils',['TranslationTrigger'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={hasSeeOriginalOption:function i(j){return j===c('TranslationTrigger').AUTO_TRANSLATION||j===c('TranslationTrigger').TRANSLATE_ALL;}};f.exports=h;}),null);
__d('LtgSeeOriginalPreferenceEntry',['ix','ContentTranslationStrings','LtgTranslationPreferenceEntryBase','LtgTranslationUtils','TranslationPreferenceEvent','fbglyph'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('LtgTranslationPreferenceEntryBase'));j=i&&i.prototype;function k(l,m,n){'use strict';j.constructor.call(this,l);this.isShowingOriginal=m;this.seeOriginalAction=n;}k.prototype.getPreferenceType=function(){'use strict';return this.isShowingOriginal?c('TranslationPreferenceEvent').HIDE_ORIGINAL:c('TranslationPreferenceEvent').SEE_ORIGINAL;};k.prototype.getShouldShowPreference=function(){'use strict';return c('LtgTranslationUtils').hasSeeOriginalOption(this.translationData.trigger);};k.prototype.getEntryTitle=function(){'use strict';if(this.isShowingOriginal)return c('ContentTranslationStrings').HIDE_ORIGINAL;return c('ContentTranslationStrings').SEE_ORIGINAL;};k.prototype.getUseConfirmDialog=function(){'use strict';return false;};k.prototype.getUseEditableDialog=function(){'use strict';return false;};k.prototype.getGlyph=function(){'use strict';return h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/rotate_20_fig-dark-50.png");};k.prototype.performAction=function(){'use strict';this.seeOriginalAction&&this.seeOriginalAction();};f.exports=k;}),null);
__d('LtgTranslationPreferencesTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:LtgTranslationPreferencesLoggerConfig',this.$LtgTranslationPreferencesTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:LtgTranslationPreferencesLoggerConfig',this.$LtgTranslationPreferencesTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$LtgTranslationPreferencesTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$LtgTranslationPreferencesTypedLogger1=babelHelpers['extends']({},this.$LtgTranslationPreferencesTypedLogger1,j);return this;};h.prototype.setClickType=function(j){this.$LtgTranslationPreferencesTypedLogger1.click_type=j;return this;};h.prototype.setContentID=function(j){this.$LtgTranslationPreferencesTypedLogger1.content_id=j;return this;};h.prototype.setTranslationEntID=function(j){this.$LtgTranslationPreferencesTypedLogger1.translation_ent_id=j;return this;};h.prototype.setTranslationRequestID=function(j){this.$LtgTranslationPreferencesTypedLogger1.translation_request_id=j;return this;};h.prototype.setTranslationTrigger=function(j){this.$LtgTranslationPreferencesTypedLogger1.translation_trigger=j;return this;};h.prototype.setVC=function(j){this.$LtgTranslationPreferencesTypedLogger1.vc=j;return this;};var i={click_type:true,content_id:true,translation_ent_id:true,translation_request_id:true,translation_trigger:true,vc:true};f.exports=h;}),null);
__d('LtgTranslationPreferences.react',['cx','ix','AsyncRequest','ContentTranslationStrings','CSS','Image.react','Link.react','LtgDisableAutoTranslatePreferenceEntry','LtgEditTranslationPreferenceEntry','LtgLanguageSettingsPreferenceEntry','LtgNeverTranslatePreferenceEntry','LtgRatingPreferenceEntry','LtgReportLanguagePreferenceEntry','LtgRatingTranslationPreference.react','LtgSeeOriginalPreferenceEntry','LtgTranslationPreferenceEntryBase','LtgTranslationPreferencesTypedLogger','LtgTranslationUtils','TranslationRating','MenuSeparator.react','Middot.react','PopoverMenu.react','React','ReactComponentWithPureRenderMixin','ReactXUIMenu','SimpleXUIDialog','TranslationPreferenceEvent','TranslationTrigger','XUIDialogButton.react','XUIDialogCancelButton.react','XUIMenuStaticItem.react','classWithMixins','highlight','mixin'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('ReactXUIMenu').Item,m='separator',n=[c('TranslationPreferenceEvent').RATE_TRANSLATION,m,c('TranslationPreferenceEvent').SEE_ORIGINAL,c('TranslationPreferenceEvent').DISABLE_TRANSLATION,c('TranslationPreferenceEvent').DISABLE_AUTO_TRANSLATION,c('TranslationPreferenceEvent').EDIT_TRANSLATION,c('TranslationPreferenceEvent').REPORT_LANGUAGE,c('TranslationPreferenceEvent').LANGUAGE_SETTINGS];j=babelHelpers.inherits(o,c('classWithMixins')(c('React').Component,c('mixin')(c('ReactComponentWithPureRenderMixin'))));k=j&&j.prototype;function o(p){k.constructor.call(this,p);this.state={rating:c('TranslationRating').UNDEFINED,isShowingOriginal:this.props.translationData.trigger===c('TranslationTrigger').SEE_TRANSLATION};}o.prototype.$LtgTranslationPreferences1=function(p){var q=null;switch(p){case c('TranslationPreferenceEvent').RATE_TRANSLATION:q=new (c('LtgRatingPreferenceEntry'))(this.props.translationData,this.state.rating);return (c('React').createElement(c('XUIMenuStaticItem.react'),{key:'rating'},c('React').createElement(c('LtgRatingTranslationPreference.react'),{onClick:function(r){this.setState({rating:r});this.$LtgTranslationPreferences2(q);}.bind(this),score:this.state.rating,translationData:this.props.translationData,preferenceEntry:q})));case m:return (c('React').createElement(c('MenuSeparator.react'),{key:'separator'}));case c('TranslationPreferenceEvent').SEE_ORIGINAL:if(this.props.shouldShowSeeOriginalInDropdown)q=new (c('LtgSeeOriginalPreferenceEntry'))(this.props.translationData,this.state.isShowingOriginal,function(){return this.$LtgTranslationPreferences3();}.bind(this));break;case c('TranslationPreferenceEvent').DISABLE_TRANSLATION:q=new (c('LtgNeverTranslatePreferenceEntry'))(this.props.translationData);break;case c('TranslationPreferenceEvent').DISABLE_AUTO_TRANSLATION:q=new (c('LtgDisableAutoTranslatePreferenceEntry'))(this.props.translationData);break;case c('TranslationPreferenceEvent').LANGUAGE_SETTINGS:q=new (c('LtgLanguageSettingsPreferenceEntry'))(this.props.translationData);break;case c('TranslationPreferenceEvent').EDIT_TRANSLATION:q=new (c('LtgEditTranslationPreferenceEntry'))(this.props.translationData);break;case c('TranslationPreferenceEvent').REPORT_LANGUAGE:q=new (c('LtgReportLanguagePreferenceEntry'))(this.props.translationData,this.state.isShowingOriginal);break;}if(q===null||!q.getShouldShowPreference())return null;return (c('React').createElement(l,{key:p,value:q},q&&q.getEntryTitle()));};o.prototype.$LtgTranslationPreferences4=function(p,q){if(!q.item.getValue)return;var r=q.item.getValue();this.$LtgTranslationPreferences2(r);};o.prototype.$LtgTranslationPreferences2=function(p){if(!p)return;if(p.getUseConfirmDialog()){this.$LtgTranslationPreferences5(p);}else this.$LtgTranslationPreferences6(p);p.log();};o.prototype.$LtgTranslationPreferences5=function(p){c('SimpleXUIDialog').showEx(p.getConfirmDialogBody(),p.getConfirmDialogTitle(),c('React').createElement('div',null,c('React').createElement(c('XUIDialogCancelButton.react'),null),c('React').createElement(c('XUIDialogButton.react'),{action:'cancel',label:c('ContentTranslationStrings').SUBMIT,use:'confirm',onClick:function(){return this.$LtgTranslationPreferences6(p);}.bind(this)})));};o.prototype.$LtgTranslationPreferences7=function(p){c('SimpleXUIDialog').show(p.getSuccessDialogBody(),p.getSuccessDialogTitle());};o.prototype.$LtgTranslationPreferences6=function(p){var q=p.getURIForAsyncAction();if(q!==null){new (c('AsyncRequest'))().setURI(q).send();}else p.performAction();if(p.getUseSuccessDialog())this.$LtgTranslationPreferences7(p);};o.prototype.$LtgTranslationPreferences3=function(){if(this.props.originalMessage)if(this.state.isShowingOriginal){c('CSS').hide(this.props.originalMessage);}else{c('CSS').show(this.props.originalMessage);c('highlight')(this.props.originalMessage);}this.setState({isShowingOriginal:!this.state.isShowingOriginal});if(this.props.onToggleOriginal)this.props.onToggleOriginal();this.$LtgTranslationPreferences8(this.state.isShowingOriginal?c('TranslationPreferenceEvent').HIDE_ORIGINAL:c('TranslationPreferenceEvent').SEE_ORIGINAL);};o.prototype.$LtgTranslationPreferences9=function(){this.$LtgTranslationPreferences8(c('TranslationPreferenceEvent').TRANSLATION_PREFERENCES);};o.prototype.render=function(){var p=n.map(function(u){return this.$LtgTranslationPreferences1(u);}.bind(this)),q=c('React').createElement(c('ReactXUIMenu'),{onItemClick:function(u,v){return this.$LtgTranslationPreferences4(u,v);}.bind(this)},p),r=[];r.push(c('React').createElement(c('PopoverMenu.react'),{key:'gear',menu:q},c('React').createElement(c('Link.react'),{onClick:function(){return this.$LtgTranslationPreferences9();}.bind(this)},this.props.isGray?c('React').createElement(c('Image.react'),{className:"_3-8w",src:i('/images/translations/gear_icon_gray.png')}):c('React').createElement(c('Image.react'),{className:"_3-8w",src:i('/images/browse/smurfbar/gear-icon.png')}))));var s=this.props.isGray?"_1u4h":null;if(c('LtgTranslationUtils').hasSeeOriginalOption(this.props.translationData.trigger)&&!this.props.shouldShowSeeOriginalInDropdown)r.push(c('React').createElement(c('Link.react'),{key:'seeOriginal',className:(this.props.isGray?"_1u4h":'')+(' '+"_h90"),onClick:function(){return this.$LtgTranslationPreferences3();}.bind(this)},this.state.isShowingOriginal?c('ContentTranslationStrings').HIDE_ORIGINAL:c('ContentTranslationStrings').SEE_ORIGINAL));r.push(c('React').createElement(c('PopoverMenu.react'),{key:'rating',menu:q},c('React').createElement(c('Link.react'),{onClick:function(){return this.$LtgTranslationPreferences9();}.bind(this),className:s},this.props.shouldShowTranslatedFromLanguage?c('ContentTranslationStrings').getTranslatedFrom(this.props.translationData.sourceDialectName):c('ContentTranslationStrings').RATE_TRANSLATION)));var t=[];r.forEach(function(u,v){if(v!==0)t.push(c('React').createElement(c('Middot.react'),{key:v,className:s}));t.push(u);});return (c('React').createElement('span',{className:"_5pio"},t));};o.prototype.$LtgTranslationPreferences8=function(event){new (c('LtgTranslationPreferencesTypedLogger'))().setTranslationEntID(this.props.translationData.translationID).setContentID(this.props.translationData.targetID).setTranslationRequestID(this.props.translationData.requestID).setTranslationTrigger(this.props.translationData.trigger).setClickType(event).log();};o.defaultProps={isGray:false,shouldShowTranslatedFromLanguage:false,originalMessage:null,translateAllTargetID:''};f.exports=o;}),null);
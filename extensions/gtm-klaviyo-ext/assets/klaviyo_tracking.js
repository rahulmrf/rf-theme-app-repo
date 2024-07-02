var form_id_clicked = undefined;
var custom_redirect_url = undefined;
var _uf = _uf || {};
  _uf.domain = window.location.origin;
// START UTM code //d12ue6f2329cfl.cloudfront.net/resources/utm_form-1.0.3.min.js
var UtmCookie;UtmCookie=function(){function UtmCookie(options){null==options&&(options={}),this._cookieNamePrefix="_uc_",this._domain=options.domain,this._sessionLength=options.sessionLength||1,this._cookieExpiryDays=options.cookieExpiryDays||365,this._additionalParams=options.additionalParams||[],this._utmParams=["utm_source","utm_medium","utm_campaign","utm_term","utm_content"],this.writeInitialReferrer(),this.writeLastReferrer(),this.writeInitialLandingPageUrl(),this.setCurrentSession(),this.additionalParamsPresentInUrl()&&this.writeAdditionalParams(),this.utmPresentInUrl()&&this.writeUtmCookieFromParams()}return UtmCookie.prototype.createCookie=function(name,value,days,path,domain,secure){var cookieDomain,cookieExpire,cookiePath,cookieSecure,date,expireDate;expireDate=null,days&&(date=new Date,date.setTime(date.getTime()+24*days*60*60*1e3),expireDate=date),cookieExpire=null!=expireDate?"; expires="+expireDate.toGMTString():"",cookiePath=null!=path?"; path="+path:"; path=/",cookieDomain=null!=domain?"; domain="+domain:"",cookieSecure=null!=secure?"; secure":"",document.cookie=this._cookieNamePrefix+name+"="+escape(value)+cookieExpire+cookiePath+cookieDomain+cookieSecure},UtmCookie.prototype.readCookie=function(name){var c,ca,i,nameEQ;for(nameEQ=this._cookieNamePrefix+name+"=",ca=document.cookie.split(";"),i=0;i<ca.length;){for(c=ca[i];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(nameEQ))return c.substring(nameEQ.length,c.length);i++}return null},UtmCookie.prototype.eraseCookie=function(name){this.createCookie(name,"",-1,null,this._domain)},UtmCookie.prototype.getParameterByName=function(name){var regex,regexS,results;return name=name.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),regexS="[\\?&]"+name+"=([^&#]*)",regex=new RegExp(regexS),results=regex.exec(window.location.search),results?decodeURIComponent(results[1].replace(/\+/g," ")):""},UtmCookie.prototype.additionalParamsPresentInUrl=function(){var j,len,param,ref;for(ref=this._additionalParams,j=0,len=ref.length;len>j;j++)if(param=ref[j],this.getParameterByName(param))return!0;return!1},UtmCookie.prototype.utmPresentInUrl=function(){var j,len,param,ref;for(ref=this._utmParams,j=0,len=ref.length;len>j;j++)if(param=ref[j],this.getParameterByName(param))return!0;return!1},UtmCookie.prototype.writeCookie=function(name,value){this.createCookie(name,value,this._cookieExpiryDays,null,this._domain)},UtmCookie.prototype.writeAdditionalParams=function(){var j,len,param,ref,value;for(ref=this._additionalParams,j=0,len=ref.length;len>j;j++)param=ref[j],value=this.getParameterByName(param),this.writeCookie(param,value)},UtmCookie.prototype.writeUtmCookieFromParams=function(){var j,len,param,ref,value;for(ref=this._utmParams,j=0,len=ref.length;len>j;j++)param=ref[j],value=this.getParameterByName(param),this.writeCookie(param,value)},UtmCookie.prototype.writeCookieOnce=function(name,value){var existingValue;existingValue=this.readCookie(name),existingValue||this.writeCookie(name,value)},UtmCookie.prototype._sameDomainReferrer=function(referrer){var hostname;return hostname=document.location.hostname,referrer.indexOf(this._domain)>-1||referrer.indexOf(hostname)>-1},UtmCookie.prototype._isInvalidReferrer=function(referrer){return""===referrer||void 0===referrer},UtmCookie.prototype.writeInitialReferrer=function(){var value;value=document.referrer,this._isInvalidReferrer(value)&&(value="direct"),this.writeCookieOnce("referrer",value)},UtmCookie.prototype.writeLastReferrer=function(){var value;value=document.referrer,this._sameDomainReferrer(value)||(this._isInvalidReferrer(value)&&(value="direct"),this.writeCookie("last_referrer",value))},UtmCookie.prototype.writeInitialLandingPageUrl=function(){var value;value=this.cleanUrl(),value&&this.writeCookieOnce("initial_landing_page",value)},UtmCookie.prototype.initialReferrer=function(){return this.readCookie("referrer")},UtmCookie.prototype.lastReferrer=function(){return this.readCookie("last_referrer")},UtmCookie.prototype.initialLandingPageUrl=function(){return this.readCookie("initial_landing_page")},UtmCookie.prototype.incrementVisitCount=function(){var cookieName,existingValue,newValue;cookieName="visits",existingValue=parseInt(this.readCookie(cookieName),10),newValue=1,newValue=isNaN(existingValue)?1:existingValue+1,this.writeCookie(cookieName,newValue)},UtmCookie.prototype.visits=function(){return this.readCookie("visits")},UtmCookie.prototype.setCurrentSession=function(){var cookieName,existingValue;cookieName="current_session",existingValue=this.readCookie(cookieName),existingValue||(this.createCookie(cookieName,"true",this._sessionLength/24,null,this._domain),this.incrementVisitCount())},UtmCookie.prototype.cleanUrl=function(){var cleanSearch;return cleanSearch=window.location.search.replace(/utm_[^&]+&?/g,"").replace(/&$/,"").replace(/^\?$/,""),window.location.origin+window.location.pathname+cleanSearch+window.location.hash},UtmCookie}();var UtmForm,_uf;UtmForm=function(){function UtmForm(options){null==options&&(options={}),this._utmParamsMap={},this._utmParamsMap.utm_source=options.utm_source_field||"USOURCE",this._utmParamsMap.utm_medium=options.utm_medium_field||"UMEDIUM",this._utmParamsMap.utm_campaign=options.utm_campaign_field||"UCAMPAIGN",this._utmParamsMap.utm_content=options.utm_content_field||"UCONTENT",this._utmParamsMap.utm_term=options.utm_term_field||"UTERM",this._additionalParamsMap=options.additional_params_map||{},this._initialReferrerField=options.initial_referrer_field||"IREFERRER",this._lastReferrerField=options.last_referrer_field||"LREFERRER",this._initialLandingPageField=options.initial_landing_page_field||"ILANDPAGE",this._visitsField=options.visits_field||"VISITS",this._addToForm=options.add_to_form||"all",this._formQuerySelector=options.form_query_selector||"form",this.utmCookie=new UtmCookie({domain:options.domain,sessionLength:options.sessionLength,cookieExpiryDays:options.cookieExpiryDays,additionalParams:Object.getOwnPropertyNames(this._additionalParamsMap)}),"none"!==this._addToForm&&this.addAllFields()}return UtmForm.prototype.addAllFields=function(){var fieldName,param,ref,ref1;ref=this._utmParamsMap;for(param in ref)fieldName=ref[param],this.addFormElem(fieldName,this.utmCookie.readCookie(param));ref1=this._additionalParamsMap;for(param in ref1)fieldName=ref1[param],this.addFormElem(fieldName,this.utmCookie.readCookie(param));this.addFormElem(this._initialReferrerField,this.utmCookie.initialReferrer()),this.addFormElem(this._lastReferrerField,this.utmCookie.lastReferrer()),this.addFormElem(this._initialLandingPageField,this.utmCookie.initialLandingPageUrl()),this.addFormElem(this._visitsField,this.utmCookie.visits())},UtmForm.prototype.addFormElem=function(fieldName,fieldValue){var allForms,firstForm,form,i,len;if(fieldValue&&(allForms=document.querySelectorAll(this._formQuerySelector),allForms.length>0))if("first"===this._addToForm)firstForm=allForms[0],this.insertAfter(this.getFieldEl(fieldName,fieldValue),firstForm.lastChild);else for(i=0,len=allForms.length;len>i;i++)form=allForms[i],this.insertAfter(this.getFieldEl(fieldName,fieldValue),form.lastChild)},UtmForm.prototype.getFieldEl=function(fieldName,fieldValue){var fieldEl;return fieldEl=document.createElement("input"),fieldEl.type="hidden",fieldEl.name=fieldName,fieldEl.value=fieldValue,fieldEl},UtmForm.prototype.insertAfter=function(newNode,referenceNode){return referenceNode.parentNode.insertBefore(newNode,referenceNode.nextSibling)},UtmForm}(),_uf=window._uf||{},window.UtmForm=new UtmForm(_uf);
// END UTM code //d12ue6f2329cfl.cloudfront.net/resources/utm_form-1.0.3.min.js

// UTM tracking on MailChimp
function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null) {
    return "";
  } else {
    return decodeURIComponent(results[1].replace(/\+/g, " "));
  }
}

function setUrlParameter(url, key, value) {
  var parts = url.split("#", 2), anchor = parts.length > 1 ? "#" + parts[1] : '';
  var query = (url = parts[0]).split("?", 2);
  if (query.length === 1)
    return url + "?" + key + "=" + value + anchor;

  for (var params = query[query.length - 1].split("&"), i = 0; i < params.length; i++)
    if (params[i].toLowerCase().startsWith(key.toLowerCase() + "="))
      return params[i] = key + "=" + value, query[query.length - 1] = params.join("&"), query.join("?") + anchor;

  return url + "&" + key + "=" + value + anchor
}

// Note: Only change the values after ":" if they are different for you
// They are the same one as you added in your email marketing provider
var utmParams = {
  "utm_source"   : "USOURCE",
  "utm_medium"   : "UMEDIUM",
  "utm_campaign" : "UCAMPAIGN",
  "utm_content"  : "UCONTENT",
  "utm_term"     : "UTERM"
};

var merge_vars = {};
for (var param in utmParams) {
  var paramValue = UtmForm.utmCookie.readCookie(param);
  if (null !== paramValue && '' !== paramValue) {
    merge_vars[utmParams[param]] = paramValue;
  }
}

// Adding other variables to send through api call to mailchimp
var iReferrer = UtmForm.utmCookie.initialReferrer() || '',
    lReferrer = UtmForm.utmCookie.lastReferrer() || '',
    iLandingPage = UtmForm.utmCookie.initialLandingPageUrl() || '';

merge_vars['IREFERRER'] = iReferrer.replace(/^https?%3A\/\//,'');
merge_vars['LREFERRER'] = lReferrer.replace(/^https?%3A\/\//,'');
merge_vars['ILANDPAGE'] = iLandingPage.replace(/^https?%3A\/\//,'');
merge_vars['VISITS'] = UtmForm.utmCookie.visits();

(function($) {
  var subscription_event_name = 'success_subscription';
  var custom_redirect_url = "/pages/thankyou";
  // Add an event listener.
  $(document).on('datalayerPush', function(e) {
    var redirect = '/thankyou/';
    $.each( dataLayer, function( key, value ) {
      if (value.hasOwnProperty("event") && (value.event == 'success_subscription')) {
        redirect = value.redirect;
      }
    });

    $(window.location).attr('href', redirect);
  });

  /* START EMBED KLAVIYO FORM TRACKING INTEGRATION */
  function show_klaviyo_emdeb_phone_input($input) {
    $input.closest('form').find('[data-testid="form-row"]').slideDown( "800");
  }
    
  // Select the node that will be observed for mutations
  const targetNodes = document.getElementsByClassName('klaviyo-embed-form-wrapper');
  
   
  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const callback = function(mutationsList, observer) {
  
      // Use traditional 'for loops' for IE 11
      for(const mutation of mutationsList) {
        
        if ( $(mutation.target).find('button').length > 0
      && undefined == $(mutation.target).closest('.klaviyo-embed-form-wrapper').find('form').attr('id')) {
  
          var $form = $(mutation.target).closest('.klaviyo-embed-form-wrapper').find('form'),
              id = $form.closest('.klaviyo-embed-form-wrapper').attr('id'),
              $emailInput = $form.find("input[type=email]" );
          $form.closest('.klaviyo-embed-form-wrapper').removeAttr('id');
  
          if (undefined == id) {
            id = 'footer_email_capture';
          }
          $form.attr('id', id);
          
  
          //$form.find("[data-testid=form-row]:nth-child(2)" ).css('display', "none");
          //$form.find("[data-testid=form-row]:nth-child(3)" ).css('display', "none");
          
          // Here do the bindings on the forms the stop obseerving 
          setTimeout(function(){
            var $form = $(mutation.target).closest('.klaviyo-embed-form-wrapper').find('form'),
                id = $form.attr('id'),
                $emailInput = $form.find("input[type=email]" );
            
            /* Fix to hide elements */
            $form.find("input[type=tel]").closest('[data-testid="form-row"]').css('display', "none");
            $form.find("input[type=tel]").closest('[data-testid="form-row"]').next().find("p").closest('[data-testid="form-row"]').css('display', "none");
  
  
            $emailInput.on('paste keyup focus', function() {
              show_klaviyo_emdeb_phone_input($emailInput);
            });
            $form.find("button").on("click", function(e) {
              $('body').find('#form_id_clicked').remove();
              $('body').append('<div style="display:none;" id="form_id_clicked" form_id_clicked='+id +'></div>');
              form_id_clicked = id;
            });
            $form.find('input[type="email"]').keypress(function( e ) {
              if (e.keyCode === 13) {
                $('body').find('#form_id_clicked').remove();
                $('body').append('<div style="display:none;" id="form_id_clicked" form_id_clicked='+id +'></div>');
                form_id_clicked = id;
              }
            });
            $form.find('input[type="tel"]').keypress(function( e ) {
              if (e.keyCode === 13) {
                $('body').find('#form_id_clicked').remove();
                $('body').append('<div style="display:none;" id="form_id_clicked" form_id_clicked='+id +'></div>');
                form_id_clicked = id;
              }
            });
            if ($emailInput.val() != '') {
              show_klaviyo_emdeb_phone_input($emailInput);
            }
            observer.disconnect();
          }, 300);
  
        }
      }
  };
  
  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);
  
  // Start observing the targets node for configured mutations
  for (let i = 0; i < targetNodes.length; i++) {
    observer.observe(targetNodes[i], config);
  }

  function afterSubmitEmbed(event) {
    var formId = $('#form_id_clicked').attr('form_id_clicked');
    
    var event_name = 'success_subscription';
    clearTimeout(timerForDatalayerPush);
    if (undefined == formId) {
      formId = 'footer_email_capture';
    }

    if (typeof dataLayer != "undefined") {
      var timerForDatalayerPush = setTimeout(function () {

        dataLayer.push({
            'event' : event_name,
            'formid' : formId,
            'email' : event.detail.metaData.$email,
            'fbLeadEventId' : 'rf_lead_' + MD5(event.detail.metaData.$email),
            'redirect' : custom_redirect_url  + window.location.search
        });
        //This will trigger the rediect
        if (false) {
          $(document).trigger({type : "datalayerPush"});
        }
      }, 100);
    }
  }
  var timerForKlaviyoPopup = setTimeout(function () {
    var $form = $('[data-testid="POPUP"] .klaviyo-form'),
        id = 'eip_email_capture',
        $emailInput = $form.find("input[type=email]" );

    $form.attr('id', id);

    /* Fix to hide elements */
    $form.find("input[type=tel]").closest('[data-testid="form-row"]').css('display', "none");
    $form.find("input[type=tel]").closest('[data-testid="form-row"]').next().find("p").closest('[data-testid="form-row"]').css('display', "none");

    $emailInput.on('paste keyup focus', function() {
      show_klaviyo_emdeb_phone_input($emailInput);
    });
    $form.find("button").on("click", function(e) {
      $('body').find('#form_id_clicked').remove();
      $('body').append('<div style="display:none;" id="form_id_clicked" form_id_clicked='+id +'></div>');
      form_id_clicked = id;
    });
    $form.find('input[type="email"]').keypress(function( e ) {
      if (e.keyCode === 13) {
        $('body').find('#form_id_clicked').remove();
        $('body').append('<div style="display:none;" id="form_id_clicked" form_id_clicked='+id +'></div>');
        form_id_clicked = id;
      }
    });
    $form.find('input[type="tel"]').keypress(function( e ) {
      if (e.keyCode === 13) {
        $('body').find('#form_id_clicked').remove();
        $('body').append('<div style="display:none;" id="form_id_clicked" form_id_clicked='+id +'></div>');
        form_id_clicked = id;
      }
    });
    if ($emailInput.val() != '') {
      show_klaviyo_emdeb_phone_input($emailInput);
    }
    
  }, 700);


  window.addEventListener("klaviyoForms", function(e) {

    if (e.detail.type == 'submit') {
      afterSubmitEmbed(e);
    } 
  });
  /* END EMBED KLAVIYO FORM TRACKING INTEGRATION */

})(jQuery);



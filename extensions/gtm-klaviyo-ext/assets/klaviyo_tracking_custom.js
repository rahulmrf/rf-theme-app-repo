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

var MD5 = function (string) {

    function RotateLeft(lValue, iShiftBits) {
            return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
    }
 
    function AddUnsigned(lX,lY) {
            var lX4,lY4,lX8,lY8,lResult;
            lX8 = (lX & 0x80000000);
            lY8 = (lY & 0x80000000);
            lX4 = (lX & 0x40000000);
            lY4 = (lY & 0x40000000);
            lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
            if (lX4 & lY4) {
                    return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
            }
            if (lX4 | lY4) {
                    if (lResult & 0x40000000) {
                            return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                    } else {
                            return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                    }
            } else {
                    return (lResult ^ lX8 ^ lY8);
            }
    }
 
    function F(x,y,z) { return (x & y) | ((~x) & z); }
    function G(x,y,z) { return (x & z) | (y & (~z)); }
    function H(x,y,z) { return (x ^ y ^ z); }
    function I(x,y,z) { return (y ^ (x | (~z))); }
 
    function FF(a,b,c,d,x,s,ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
    };
 
    function GG(a,b,c,d,x,s,ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
    };
 
    function HH(a,b,c,d,x,s,ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
    };
 
    function II(a,b,c,d,x,s,ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
    };
 
    function ConvertToWordArray(string) {
            var lWordCount;
            var lMessageLength = string.length;
            var lNumberOfWords_temp1=lMessageLength + 8;
            var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
            var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
            var lWordArray=Array(lNumberOfWords-1);
            var lBytePosition = 0;
            var lByteCount = 0;
            while ( lByteCount < lMessageLength ) {
                    lWordCount = (lByteCount-(lByteCount % 4))/4;
                    lBytePosition = (lByteCount % 4)*8;
                    lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
                    lByteCount++;
            }
            lWordCount = (lByteCount-(lByteCount % 4))/4;
            lBytePosition = (lByteCount % 4)*8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
            lWordArray[lNumberOfWords-2] = lMessageLength<<3;
            lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
            return lWordArray;
    };
 
    function WordToHex(lValue) {
            var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
            for (lCount = 0;lCount<=3;lCount++) {
                    lByte = (lValue>>>(lCount*8)) & 255;
                    WordToHexValue_temp = "0" + lByte.toString(16);
                    WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
            }
            return WordToHexValue;
    };
 
    function Utf8Encode(string) {
            string = string.replace(/\r\n/g,"\n");
            var utftext = "";
 
            for (var n = 0; n < string.length; n++) {
 
                    var c = string.charCodeAt(n);
 
                    if (c < 128) {
                            utftext += String.fromCharCode(c);
                    }
                    else if((c > 127) && (c < 2048)) {
                            utftext += String.fromCharCode((c >> 6) | 192);
                            utftext += String.fromCharCode((c & 63) | 128);
                    }
                    else {
                            utftext += String.fromCharCode((c >> 12) | 224);
                            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                            utftext += String.fromCharCode((c & 63) | 128);
                    }
 
            }
 
            return utftext;
    };
 
    var x=Array();
    var k,AA,BB,CC,DD,a,b,c,d;
    var S11=7, S12=12, S13=17, S14=22;
    var S21=5, S22=9 , S23=14, S24=20;
    var S31=4, S32=11, S33=16, S34=23;
    var S41=6, S42=10, S43=15, S44=21;
 
    string = Utf8Encode(string);
 
    x = ConvertToWordArray(string);
 
    a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
 
    for (k=0;k<x.length;k+=16) {
            AA=a; BB=b; CC=c; DD=d;
            a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
            d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
            c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
            b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
            a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
            d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
            c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
            b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
            a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
            d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
            c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
            b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
            a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
            d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
            c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
            b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
            a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
            d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
            c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
            b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
            a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
            d=GG(d,a,b,c,x[k+10],S22,0x2441453);
            c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
            b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
            a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
            d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
            c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
            b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
            a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
            d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
            c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
            b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
            a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
            d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
            c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
            b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
            a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
            d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
            c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
            b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
            a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
            d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
            c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
            b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
            a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
            d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
            c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
            b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
            a=II(a,b,c,d,x[k+0], S41,0xF4292244);
            d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
            c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
            b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
            a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
            d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
            c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
            b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
            a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
            d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
            c=II(c,d,a,b,x[k+6], S43,0xA3014314);
            b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
            a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
            d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
            c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
            b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
            a=AddUnsigned(a,AA);
            b=AddUnsigned(b,BB);
            c=AddUnsigned(c,CC);
            d=AddUnsigned(d,DD);
            }
 
        var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
 
        return temp.toLowerCase();
 }

// Adding other variables to send through api call to mailchimp
var iReferrer = UtmForm.utmCookie.initialReferrer() || '',
    lReferrer = UtmForm.utmCookie.lastReferrer() || '',
    iLandingPage = UtmForm.utmCookie.initialLandingPageUrl() || '';

merge_vars['IREFERRER'] = iReferrer.replace(/^https?%3A\/\//,'');
merge_vars['LREFERRER'] = lReferrer.replace(/^https?%3A\/\//,'');
merge_vars['ILANDPAGE'] = iLandingPage.replace(/^https?%3A\/\//,'');
merge_vars['VISITS'] = UtmForm.utmCookie.visits();

document.addEventListener("DOMContentLoaded", function() {
    const subscriptionEventName = 'success_subscription';
    const customRedirectUrl = "/pages/thankyou";
  
    // Add event listener
    document.addEventListener('datalayerPush', function(e) {
      let redirect = '/thankyou/';
      dataLayer.forEach(function(item) {
        if (item.hasOwnProperty("event") && (item.event == 'success_subscription')) {
          redirect = item.redirect;
        }
      });
      window.location.href = redirect;
    });
  
    // Show Klaviyo embed phone input
    function showKlaviyoEmbedPhoneInput(input) {
      input.closest('form').querySelector('[data-testid="form-row"]').style.display = 'block';
    }
  
    // Select the node that will be observed for mutations
    const targetNodes = document.querySelectorAll('.klaviyo-embed-form-wrapper');
  
    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };
  
    // Callback function to execute when mutations are observed
    const callback = function(mutationsList, observer) {
      for(const mutation of mutationsList) {
        if (mutation.target.querySelector('button') &&
            !mutation.target.closest('.klaviyo-embed-form-wrapper').querySelector('form').hasAttribute('id')) {
  
          let form = mutation.target.closest('.klaviyo-embed-form-wrapper').querySelector('form');
          let id = form.closest('.klaviyo-embed-form-wrapper').getAttribute('id');
          let emailInput = form.querySelector("input[type=email]");
  
          form.closest('.klaviyo-embed-form-wrapper').removeAttribute('id');
          if (!id) {
            id = 'footer_email_capture';
          }
          form.setAttribute('id', id);
  
          emailInput.addEventListener('input', function() {
            showKlaviyoEmbedPhoneInput(emailInput);
          });
  
          form.querySelector("button").addEventListener("click", function() {
            document.body.querySelector('#form_id_clicked')?.remove();
            let div = document.createElement('div');
            div.style.display = 'none';
            div.id = 'form_id_clicked';
            div.setAttribute('form_id_clicked', id);
            document.body.appendChild(div);
          });
  
          // Disconnect observer after setting up
          observer.disconnect();
        }
      }
    };
  
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);
  
    // Start observing the target node for configured mutations
    targetNodes.forEach(node => observer.observe(node, config));
  
    function afterSubmitEmbed(event) {
      let formId = document.querySelector('#form_id_clicked')?.getAttribute('form_id_clicked') || 'footer_email_capture';
  
      if (typeof dataLayer !== "undefined") {
        setTimeout(function () {
          dataLayer.push({
            'event': subscriptionEventName,
            'formid': formId,
            'email': event.detail.metaData.$email,
            'fbLeadEventId': 'rf_lead_' + MD5(event.detail.metaData.$email),
            'redirect': customRedirectUrl + window.location.search
          });
        }, 100);
      }
    }
  
    window.addEventListener("klaviyoForms", function(e) {
      if (e.detail.type == 'submit') {
        afterSubmitEmbed(e);
      } 
    });
  });
  
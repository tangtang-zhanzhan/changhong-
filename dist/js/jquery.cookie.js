"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};jQuery.cookie=function(e,o,n){var t,r;if(1<arguments.length&&(null===o||"object"!==(void 0===o?"undefined":_typeof(o))))return n=jQuery.extend({},n),null===o&&(n.expires=-1),"number"==typeof n.expires&&(t=n.expires,(r=n.expires=new Date).setDate(r.getDate()+t)),document.cookie=[encodeURIComponent(e),"=",n.raw?String(o):encodeURIComponent(String(o)),n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("");var i,p=(n=o||{}).raw?function(e){return e}:decodeURIComponent;return(i=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?p(i[1]):null};
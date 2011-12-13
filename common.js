  Math.uuid = function () {
           return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
               var r = Math.random() * 16 | 0,
                   v = c == 'x' ? r : (r & 0x3 | 0x8);
               return v.toString(16);
           });
       };


   //get params of document.location
    (function ($) {
       $.QueryString = (function (a) {
           if (a == "") return {};
           var b = {};
           for (var i = 0; i < a.length; ++i) {
               var p = a[i].split('=');
               if (p.length != 2) continue;
               b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
           }
           return b;
       })(window.location.search.substr(1).split('&'))
   })(jQuery);


   //work with cookies
   function setCookie(name, value, days) {
       if (days) {
           var date = new Date();
           date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
           var expires = "; expires=" + date.toGMTString();
       } else var expires = "";
       document.cookie = name + "=" + value + expires + "; path=/";
   }

   function getCookie(name) {
       var nameEQ = name + "=";
       var ca = document.cookie.split(';');
       for (var i = 0; i < ca.length; i++) {
           var c = ca[i];
           while (c.charAt(0) == ' ') c = c.substring(1, c.length);
           if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
       }
       return null;
   }


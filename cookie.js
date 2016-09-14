$.extend({
    /**
     * @param  {string}
     * @param  {string}
     * @param  {object}
     * @return {string or null}
     */
    cookie: function (cookieName, cookieValue, options) {
        var readCookie = function (name) {
            var arr,
                reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)'),
                matched = document.cookie.match(reg);
                // console.log(matched)
            if(arr = matched) {
                return unescape(arr[2]);
            } else {
                return null;
            }
        };
        var setCookie = function (name, value, options) {
            var time = options&&options.expires || 30,
                 path = options&&options.path || '',
                 domain= options&&options.domain || '';
            var exp = new Date();
            exp.setTime(exp.getTime() + time * 24 * 60 * 60 * 1000);
            document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+';path='+path+';domain='+domain;
        };
        if (cookieName && cookieValue) {
            //set cookie
            setCookie(cookieName, cookieValue, options);
        } else if (cookieName && $.isNull(cookieValue)) {
            //delete cookie
            setCookie(cookieName, '', {expires:-1});
        } else if (cookieName) {
            //read cookie
            return readCookie(cookieName);
        }
    }
});
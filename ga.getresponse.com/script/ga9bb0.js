var _paq = window._paq || [];

(function (xsid, grid, u, piwikJsUrl) {

    var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0],
        traits;

    traits = {
        xsid: xsid || '',
        email: document.cookie.replace(/(?:(?:^|.*;\s*)gaVisitorEmail\s*\=\s*([^;]*).*$)|^.*$/, "$1") || document.cookie.replace(/(?:(?:^|.*;\s*)visitorId\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '',
        uuid: document.cookie.replace(/(?:(?:^|.*;\s*)gaVisitorUuid\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '',
        valuable: document.cookie.replace(/(?:(?:^|.*;\s*)gaIsValuable\s*\=\s*([^;]*).*$)|^.*$/, "$1") || 0,
        save: function() {

            if (0 == this.uuid.length) {
                this.uuid = this.generateUuid();
                this.setCookie('gaVisitorUuid', this.uuid);
            }

            if (0 < this.email.length || 0 < this.xsid.length) {
                this.valuable = 1;
                this.setCookie('gaIsValuable', 1);
                this.removeCookie('gaVisitorEmail');
                this.removeCookie('gaVisitorId');
            }

            _paq.push(["setUserId", this.toString()]);
            _paq.push(["trackPageView"]);
        },
        toString: function() {
            return JSON.stringify({'uuid': this.uuid, 'email':this.email, 'xsid': this.xsid, 'valuable': this.valuable});
        },
        setCookie: function (param, value) {
            var date = new Date();
            date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
            document.cookie = param + '=' + value + '; expires=' + date.toGMTString() + '; path=/';
        },
        generateUuid: function() {
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
            return uuid;
        },
        removeCookie: function(param) {
            document.cookie = param + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
        }
    };

    _paq.push(["setCustomVariable", 1, "grid", grid, "visit"]);
    _paq.push(["enableLinkTracking", true]);
    _paq.push(["setTrackerUrl", u + 'index.php?ver=3']);
    traits.save();

    g.type="text/javascript"; g.async=true; g.defer=true; g.src=piwikJsUrl; s.parentNode.insertBefore(g,s);

    window.gaSetUserId = function (email) {
        if (email) {
            _paq.push(["setCustomUrl", window.location.href]);
            traits.email = email;
            traits.save();
        }
    };

    window.gaPush = function () {
        _paq.push(['setCustomUrl', window.location.href]);
        _paq.push(['trackPageView']);
    };

}('', 'sBDcHVU1ccXoIAQ==', 'https://ga.getresponse.com/', 'https://cdnjs.cloudflare.com/ajax/libs/piwik/3.5.0/piwik.js'));
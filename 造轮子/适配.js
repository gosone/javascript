function getClientWidth() {
        return window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
}

(function (baseWidth) {
    var clientWidth = getClientWidth();
    baseWidth = baseWidth || 414;
    var win = window;
    var doc = win.document.documentElement;
    var dpr = win.devicePixelRatio || 1;
    var rem;

    function refreshRem() {
        clientWidth = getClientWidth();
        rem = (clientWidth / baseWidth) * 100;
        rem = clientWidth < 360 ? rem * .9 : rem;
        rem = Math.min(rem, 150);
        doc.style.fontSize = rem + 'px';
    }
    doc.setAttribute('data-ckdpr', Math.round(dpr));
    doc.setAttribute('data-dpr', 1);
    var timeouter = null;
    win.addEventListener('resize', function () {
        clearTimeout(timeouter),
        timeouter = setTimeout(refreshRem, 300);
    },
    false);
    win.addEventListener('load', function () {
        clearTimeout(timeouter),
        timeouter = setTimeout(refreshRem, 1000);
    },
    false);
    win.addEventListener('pageshow', function (a) {
        win.persisted && (clearTimeout(timeouter), timeouter = setTimeout(refreshRem, 300));
    },
    false);
    refreshRem();
})();

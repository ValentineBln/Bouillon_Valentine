function rgpd_accept(choice, pixel, fade = true) {
    $("<div id='setCookieContainer' style='display:none'></div>").insertAfter("#rgpdInsertTarget");
    $("#setCookieContainer").load("footer.php?rgpdAccept=" + choice + "&rgpdAcceptPixel=" + pixel + "&nocache=1725952861");
    if (fade) $(".alertCookiesContainer,.alertCookies").fadeOut(400);
}

function rgpd_init() {
    $(".alertCookies .rgpdAccept").click(function () {
        rgpd_accept(1, 1);
    });

    $(".alertCookies .rgpdCustom,.rgpdOpenCookieSettingsBtn").click(function (e) {
        $(".alertCookies").remove();
        e.preventDefault();
        $("<div class='alertCookiesContainer' style='display:block'><div class='gridCookies'><div class='alertCookies cookieSettings'><p class='alertCookiesTitle'>Paramétrer les cookies</p><div class='rgpdCookieItem'><input type='checkbox' disabled checked /><label>Cookies nécessaires</label><p>Nécessaires au bon fonctionnement technique du site, ces cookies ne peuvent pas être refusés. Concernant les cookies analytiques, ils nous permettent d'améliorer la performance du site en mesurant le nombre de visites et les sources de trafic. Les données collectées sont anonymes.</p></div><div class='rgpdCookieItem'><input type='checkbox' id='acceptPixel' " + (document.cookie.search("acceptPixel=1") >= 0 ? "checked" : "") + " /><label for='acceptPixel'>Pixel de suivi</label><p>Le pixel permet aux réseaux sociaux de suivre votre navigation et de créer des audiences selon vos intérêts. Il peut être refusé.</p></div><div class='alertCookiesActions'><a class='rgpdAccept rgpdSaveSettings' title='Enregistrer mes préférences'>Enregistrer mes préférences</a></div></div></div>").insertAfter("#rgpdInsertTarget");
        $(".rgpdSaveSettings").click(function (e) {
            rgpd_accept(1, $("#acceptPixel").is(":checked") ? 1 : 0);
            $("#rgpdBlackOverlay").remove();
        });
        $("#rgpdCloseBtn").click(function (e) {
            $("#rgpdBlackOverlay").remove();
        });
        $("#rgpdBlackOverlay").click(function (e) {
            if (e.target === e.currentTarget) $(this).remove();
        });
    });

    $(".rgpdLink").click(function (e) {
        e.preventDefault();
        $("<div id='rgpdBlackOverlay'><div id='rgpdCloseBtn'>Fermer</div><div id='rgpdLoader'><iframe src='" + $(this).attr("href") + "'></iframe></div></div>").insertAfter("#rgpdInsertTarget");
        $("#rgpdBlackOverlay").click(function (e) {
            $(this).remove();
        });
    });

    if (document.cookie.search("acceptCookies=") < 0) {
        $(".alertCookies").delay(500).fadeIn(500);
    }
}
window.onload = function (e) {
    if (!window.jQuery) {
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = "//rgpd.toponweb.be/js/jquery.min.js";
        script.onload = function () { rgpd_init(); };
        document.getElementsByTagName('head')[0].appendChild(script);
    }
    else rgpd_init();
}
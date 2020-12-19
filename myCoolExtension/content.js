// content.js
var json = $("pre").eq(0).text();

if (json) {
    try {
        var obj = JSON.parse(json);
        $("pre").eq(0).text(JSON.stringify(obj, null, 4));
    } catch (e) {
        console.error("Caught error: " + e.message);
    }
}

var footer = $('div.footer');

if (footer) {
    footer.css('display', 'none');
}

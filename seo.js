function scroll() {
    var h = 0;
    var d = 100;
    var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, document.body.scrollHeight);
        h += d;
        if(h >= scrollHeight - window.innerHeight){
            clearInterval(timer);
        }
    }, 500);
}

var domain = 'suadieuhoa24h.net';
var a = document.createElement('a');
var linkText = document.createTextNode(domain);
a.appendChild(linkText);
a.href = 'https://' + domain;
document.body.prepend(a);
a.click();
scroll();
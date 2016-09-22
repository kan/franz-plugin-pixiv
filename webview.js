module.exports = (Franz, options) => {
    setTimeout(() => {
        location.reload();
    }, 300000);

    window.onscroll = function(ev) {
        const now = $('li.image-item a.work')[0].href;
        localStorage.setItem("Franz.Pixiv.latest", now);
    };

    $('li.image-item a').each((i, e) => {
        $(e).attr('target', '_blank');
    });

    function getMessages() {
        const latest = localStorage.getItem("Franz.Pixiv.latest");
        const now = $('li.image-item a.work')[0].href;

        var unread = 0;
        if (!latest) {
            localStorage.setItem("Franz.Pixiv.latest", now);
        }
        if (latest != now) {
            unread = 1;
        }

        Franz.setBadge($('li.message span.count').text(), unread);
    }

    Franz.loop(getMessages);
}

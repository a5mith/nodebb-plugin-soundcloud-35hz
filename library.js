(function(module) {
    "use strict";
    var Soundcloud = {},
        embed = '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/$1/$2&amp;color=006CFF&amp;download=true&amp;show_artwork=true"></iframe>',
        embeds = '<iframe width="100%" height="410" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/$1/sets/$2&amp;color=006CFF&amp;buying=false&amp;download=true&amp;show_artwork=true"></iframe>'
    var	embedtrack = /<a href="(?:https?:\/\/)?(?:www\.)?(?:soundcloud\.com)\/?([\w\-_]+)\/([\w\-_]+)">.+<\/a>/g;
    var	embedset = /<a href="(?:https?:\/\/)?(?:www\.)?(?:soundcloud\.com)\/?([\w\-_]+)\/sets\/([\w\-_]+)">.+<\/a>/g;


    Soundcloud.parse = function(data, callback) {
        callback(null, data);

        if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
        if (data.postData.content.match(embedtrack)) {
            data.postData.content = data.postData.content.replace(embedtrack, embed);
        }
        if (data.postData.content.match(embedset)) {
            data.postData.content = data.postData.content.replace(embedset, embeds);
        }
    };

    module.exports = Soundcloud;
}(module));

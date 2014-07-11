(function(module) {
    "use strict";
    var Soundcloud = {},
        embed = '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/$1/$2&amp;auto_play=false&amp;hide_related=false&amp;show_artwork=true"></iframe>'

    Soundcloud.parse = function(postContent, callback) {
        var	embed = /<a href="(?:https?:\/\/)?(?:www\.)?(?:soundcloud\.com)\/?([\w\-_]+)\/([\w\-_]+)">.+<\/a>/g;

        if (postContent.match(embed)) {
            postContent = postContent.replace(embed, embed);
        }

        callback(null, postContent);
    };

    module.exports = Soundcloud;
}(module));
(function(module) {
	"use strict";

	var SoundCloud = {},
		embed = '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/$1&amp;color=006CFF&buying=false&download=true"></iframe>';


	SoundCloud.parse = function(postContent, callback) {
		postContent = postContent.replace(/<a href="(?:https?:\/\/)?(?:www\.)?(?:soundcloud\.com)\/?(.+)">.+<\/a>/g, embed);
		callback(null, postContent);
	};

	module.exports = SoundCloud;
}(module));

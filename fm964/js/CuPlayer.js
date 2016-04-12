 
  $(function(){
  var playlist = [{
       title:"正在直播 FM89.5",
      artist:"旅游环保广播",
      mp3:"http://aiseet.lszb.atianqi.com/app_4/yjhbly.m3u8?bitrate=2000",
      poster: "/fm964/images/2.gif"
    }];
  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor:".music-player"
  };
  
  var options = {
    swfPath: "Jplayer.swf",
	solution: 'html, flash',
    supplied: "ogv, m4v, oga, mp3, m3u8,"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  
});

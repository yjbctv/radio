 
  $(function(){
  var playlist = [{
       title:"正在直播 FM89.5",
      artist:"旅游环保广播",
      mp3:"http://http.hz.qingting.fm/3947.mp3",
      poster: "/fm964/images/2.gif"
    }];
  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor:".music-player"
  };
  
  var options = {
    swfPath: "Jplayer.swf",
	solution: 'html, flash',
    supplied: "ogv, m4v, oga, mp3,"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  
});

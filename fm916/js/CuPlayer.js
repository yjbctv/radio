 
  $(function(){
  var playlist = [{
      title:"正在直播 FM91.6",
      artist:"综合资讯广播",
      mp3:"http://http.hz.qingting.fm/3946.mp3",
      poster: "/fm916/images/1.gif"
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

 
  $(function(){
  var playlist = [{
      title:"正在直播 FM91.6",
      artist:"综合资讯广播",
      mp3:"http://219.129.187.170:1069/live.mp3",
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

// AzuraCast Radio Stats
// Developed by LSmithx2

var nowPlayingTimeout;
var nowPlaying;

function loadNowPlaying() {
  $.ajax({
    cache: false,
    dataType: "json",
    url: 'https://twister.fibreserv.net/api/nowplaying/fragfm',
    success: function(playing) {
      console.log(playing);
      if (playing.now_playing.streamer != '')
      {
        currentDJ = playing.now_playing.streamer;
      }
      else
      {
        currentDJ = 'Non-Stop Requested Music!'; 
      }

      currentSong = playing.now_playing.song.text;
      //nextSong = playing.playing_next.song.text;

      $('.current-dj').text(currentDJ).fadeIn(300);
      $('.current-song').text(currentSong).fadeIn(300);
      //$('.next-song').text(nextSong).fadeIn(300);

      nowPlayingTimeout = setTimeout(loadNowPlaying, 15000);
    }
  }).fail(function() {
    nowPlayingTimeout = setTimeout(loadNowPlaying, 30000);
  });
}

$(function() {
  loadNowPlaying();
});

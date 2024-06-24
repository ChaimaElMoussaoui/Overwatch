function togglePlayPause() {
    var video = document.getElementById("myVideo");
    if (video.paused) {
        video.play();
        document.getElementById("playButton").style.display = "none"; // Hide the play button
    } else {
        video.pause();
        document.getElementById("playButton").style.display = "block"; // Show the play button
    }
}

function hidePlayButton() {
    document.getElementById("playButton").style.display = "none"; // Hide the play button when video starts playing
}

function showPlayButton() {
    document.getElementById("playButton").style.display = "block"; // Show the play button when video is paused
}

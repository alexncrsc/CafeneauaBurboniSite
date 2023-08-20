const video = document.getElementById('video-vtt');

// Function to change the active track
function changeTrack(language) {
    const tracks = video.textTracks;
    for (let i = 0; i < tracks.length; i++) {
        tracks[i].mode = (tracks[i].language === language) ? 'showing' : 'hidden';
    }
}

// Call this function to change to the 'ro' (Romanian) track
changeTrack('ro');

// Call this function to change to the 'en' (English) track
// changeTrack('en');

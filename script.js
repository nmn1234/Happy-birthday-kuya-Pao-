function playSurprise() {
    const surpriseDiv = document.getElementById("surprise");
    const song = document.getElementById("birthdaySong");

    surpriseDiv.classList.remove("hidden");
    song.play();
    alert("Happy Birthday, Kuya Pao! 🎉🎂🎈");
}
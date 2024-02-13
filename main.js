const countContent = document.getElementById("count-content");
const getContent = document.getElementById("get-content");


function openSidepanel() {
    document.getElementById("my-sidepanel").style.width = "150px";
    document.getElementById("open-sidepanel-btn").style.display = "none";
    getContent.style.display = "none";
    document.getElementById("media-content").style.display = "flex";
}

function closeSidepanel() {
    document.getElementById("my-sidepanel").style.width = "0";
    document.getElementById("my-sidepanel").style.transition = "1s";
    document.getElementById("open-sidepanel-btn").style.display = "block";
    getContent.style.display = "block";
    document.getElementById("media-content").style.display = "none";

}



function whenPlaying() {
    return countContent.textContent += 1;
}


document.addEventListener("DOMContentLoaded", () => {
    const videoPlayer = document.getElementById("video-player");

    async function fetchVideoFeed(url) {
        try {
            const response = await fetch(url);
            const videoBlob = await response.blob();
            const videoURL = URL.createObjectURL(videoBlob);

            videoPlayer.src = videoURL;
            videoPlayer.play();
        }
        catch (error) {
            console.error(`Error fetching video feed: ${error}`);
        }
    }
    // driver code with arguments!
    const videoFeedURL = "";
    fetchVideoFeed(videoFeedURL);
})
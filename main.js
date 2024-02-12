const countContent = document.getElementById("count-content");

function openSidepanel() {
    document.getElementById("my-sidepanel").style.width = "150px";
    document.getElementById("open-sidepanel-btn").style.display = "none";
}

function closeSidepanel() {
    document.getElementById("my-sidepanel").style.width = "0";
    document.getElementById("my-sidepanel").style.transition = "1s";
    document.getElementById("open-sidepanel-btn").style.display = "block";
}

function whenPlaying() {
    return countContent.textContent += 1;
}
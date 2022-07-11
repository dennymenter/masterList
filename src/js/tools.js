const src = document.getElementById("youTubeSrc");
const movieID = document.getElementById("youTubeID");
const results = document.getElementById("results");
const clear = document.getElementById("clear");
const preview = document.getElementById("preview");
const resultVideo = document.getElementById("resultVideo");
const copyBtn = document.getElementById("copy");


clear.addEventListener("click", () => {
    src.value = "";
    movieID.value = "";
    results.value = "";
    resultVideo.classList.remove("visible");
    resultVideo.classList.add("invisible");
    preview.classList.remove("visible");
    preview.classList.add("invisible");
    copyBtn.classList.add("invisible");
})

src.addEventListener("keyup", () => {

    let lastSlashIndex = src.value.lastIndexOf("/");
    let firstQuestionMarkIndex = src.value.indexOf("?");
    
    console.log("1st = " + lastSlashIndex + "  last = " + firstQuestionMarkIndex);

    movieID.value = src.value.substring(lastSlashIndex+1);

})

preview.addEventListener("click", () => {
    resultVideo.classList.remove("invisible");
    resultVideo.classList.add("visible");
})

copy.addEventListener("click", () => {
    //select text
    results.select();
    //copy
    document.execCommand("Copy");

    alert("code copied to clipboard");
})


function getMovieCode() {

    let resultHTML = 
    `
    <div class="auto-resizable-iframe">
        <div>
        <iframe width="560" height="315" src="${src.value}?rel=0&autoplay=1&loop=1&playlist=${movieID.value}"
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
    </div>
    </div>
    `

    results.value = resultHTML;
    resultVideo.innerHTML = resultHTML;

    // show preview button
    preview.classList.remove("invisible");
    preview.classList.remove("invisible");
    copyBtn.classList.remove("invisible");
    copyBtn.classList.add("visible");
}




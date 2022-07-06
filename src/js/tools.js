const src = document.getElementById("youTubeSrc");
const movieID = document.getElementById("youTubeID");
const results = document.getElementById("results");
const clear = document.getElementById("clear");
const preview = document.getElementById("preview");
const resultVideo = document.getElementById("resultVideo");


clear.addEventListener("click", () => {
    console.log("clicked here");
    

    console.log(src.value);
    src.value = "";
    movieID.value = "";
    results.value = "";
})

preview.addEventListener("click", () => {
    resultVideo.classList.remove("invisible");
    resultVideo.classList.add("visible");
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
    preview.classList.add("visible");
}




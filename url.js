window.onload = function() {
    document.getElementById("send-button").addEventListener("click", generateLink);
};

function generateLink() {
    let url = document.getElementById("source").value;
    fetch("https://api.shrtco.de/v2/shorten?url="+url)
    .then( response => response.json())
    .then(data => linksReady(data));
};

function linksReady(data) {
    console.log(data);
    let result = data.result;
    setLink("code", result.code);
    setLink("short-link", result.full_short_link);
    setLink("short-link2", result.full_short_link2);
    setLink("short-link3", result.full_short_link3);
}

function setLink(id, shortUrl) {
    document.getElementById(id).innerHTML
        = "<a href='"+shortUrl+"'>"+shortUrl+"</a>";
}


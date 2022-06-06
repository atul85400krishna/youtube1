
const api_key=`AIzaSyDP8p-yJQLul1_j1kHwacM4oFr-xlpybPo`



let search = async () => {
    try {
    let query = document.getElementById("query").value;
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;

  let res = await fetch(url);

        let data = await res.json();

        append(data.items);

        console.log(data);
} catch (err) {
  console.log(err);
}
};


let append = (data) => {
    let container = document.getElementById("results");

    data.forEach(({ id: { videoId }, snippet: {title, thumbnails } }) => {
       let div = document.createElement("div");
        let iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        let h3 = document.createElement("h3");
        h3.innerText=title;

        div.append(iframe, h3);

        container.append(div);
    });

    };
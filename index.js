let title, username, date
let posts = document.getElementById("posts")
function convertSecondsToDate(seconds) {
    const date = new Date(seconds * 1000); // Convert seconds to milliseconds

    const options = {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };

    return date.toLocaleString('en-US', options).replace(',', '');
}

async function fetchData() {
    const snapshot = await db.collection("threads").get();
    const data = [];

    snapshot.forEach((doc) => {
        data.push({
            id: doc.id,
            ...doc.data()
        });
    });

    // Convert data to JSON string
   // const jsonData = JSON.parse(data);

    // Log the JSON data
    console.log(data);

    // Use the JSON data
   return data
}

// Call the function to fetch and use data
window.onload = fetchData().then((data) => {
    // You can use jsonData here
    console.log("Data in JSON format:", data);
    for (i = 0; i < data.length; i++) {
        title = data[i].threadTitle;
        // username = data[i].threadOwner
        date = convertSecondsToDate(data[i].creationDate.seconds)
        let postDiv = document.createElement('li')
        postDiv.className = "row"
        postDiv.innerHTML = `
        <a href="">
                <h4 class="title">
                    ${title}
                </h4>
                <div class="bottom">
                    <p class="timestamp">
                        ${date}
                    </p>
                    <p class="comment-count">
                        ${data[i].commentCount} comments
                    </p>

                </div>
            </a>
        `
        posts.appendChild(postDiv)
    }
});
const output = document.getElementById("output");

const url = "https://jsonplaceholder.typicode.com/posts";

function renderPosts(data) {
  data.forEach((post) => {
    const postDiv = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = `Title: ${post.title}`;
    const body = document.createElement("p");
    body.textContent = `Body: ${post.body}`;

    postDiv.appendChild(title);
    postDiv.appendChild(body);
    output.appendChild(postDiv);
  });
}

async function getData() {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      console.log("Success", data);
      renderPosts(data);
    } else {
      console.log(`Server Error: ${response.status}`);
    }
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

getData();

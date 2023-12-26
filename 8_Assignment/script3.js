// The code given below is for one object refactor the code it for using the JSON Data.
let postsData = [
  {
    id: 1,
    author: "John",
    content: "Hello, Instagram!",
    likes: 10,
    comments: ["Great post!", "Nice photo!"],
    image: "https://files.codingninjas.in/image2-28694.jpg",
  },
  {
    id: 2,
    author: "Jane",
    content: "This is a great post!",
    likes: 15,
    comments: [],
    image: "https://files.codingninjas.in/oip-28704.jpg",
  },
  {
    id: 3,
    author: "Alice",
    content: "Another post",
    likes: 8,
    comments: [],
    image: "https://files.codingninjas.in/th-2-28706.jpg",
  },
  {
    id: 4,
    author: "Bob",
    content: "Check out this photo!",
    likes: 20,
    comments: [],
    image: "https://files.codingninjas.in/image1-28708.jpg",
  },
];
let likedPosts = new Set();

function renderPosts(postNumber) {
  const { id, author, content, likes, comments, image } = postsData[postNumber];
  const postsContainer = document.getElementById("posts");

  const postElement = document.createElement("div");
  postElement.classList.add("post");

  const authorElement = document.createElement("h3");
  authorElement.textContent = author;

  const contentElement = document.createElement("p");
  contentElement.textContent = content;

  const imageElement = document.createElement("img");
  imageElement.src = image;
  imageElement.alt = "Post Image";

  const likeButton = document.createElement("button");
  likeButton.textContent = `Like`;
  likeButton.classList.add("like-button");
  likeButton.addEventListener("click", () => {
    if (!likedPosts.has(id)) {
      likePost(postNumber);
      likedPosts.add(id);
      likeButton.disabled = true; // Disable the button after clicking
    }
  });

  const commentInput = document.createElement("input");
  commentInput.type = "text";
  commentInput.placeholder = "Write a comment...";

  const commentButton = document.createElement("button");
  commentButton.textContent = "Comment";
  commentButton.classList.add("comment-button");
  commentButton.addEventListener(
    "click",
    () => {
      addComment(commentInput.value, postNumber);
      commentInput.value = "";
    },
    { once: true }
  );

  const postFooter = document.createElement("div");
  postFooter.classList.add("post-footer");
  postFooter.textContent = `Likes: ${likes}   Comments: ${comments.length}`;

  const commentsContainer = document.createElement("div");
  commentsContainer.classList.add("comments-container");
  commentsContainer.style.display = "none";

  comments.forEach((comment) => {
    const commentElement = document.createElement("p");
    commentElement.textContent = comment;
    commentsContainer.appendChild(commentElement);
  });

  postElement.appendChild(authorElement);

  postElement.appendChild(imageElement);
  postElement.appendChild(contentElement);
  postElement.appendChild(likeButton);
  postElement.appendChild(commentInput);
  postElement.appendChild(commentButton);
  postElement.appendChild(postFooter);
  postElement.appendChild(commentsContainer);

  postFooter.addEventListener("click", () => {
    if (commentsContainer.style.display === "none") {
      commentsContainer.style.display = "block";
    } else {
      commentsContainer.style.display = "none";
    }
  });

  postsContainer.appendChild(postElement);
}

// Function to handle post liking
function likePost(postNumber) {
  postsData[postNumber].likes++;
  reRender();
  const likeButtons = document.querySelectorAll(".like-button");
  const button = likeButtons[postNumber];
  button.style.backgroundColor = "red";
}

// Function to handle adding a comment
function addComment(comment, postNumber) {
  postsData[postNumber].comments.push(comment);
  reRender();
}
function reRender() {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = "";
  for (postNumber in postsData) {
    renderPosts(postNumber);
  }
}

reRender();

const divEle = document.querySelector(".card-container");

// async function getUser(url, pos, className = "") {
//   await fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("ID Doesn't Exist");
//       }
//       return response.json();
//     })
//     .then((user) => {
//       showCard(user, pos, className);
//       return;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// async function getDetails(id) {
//   await getUser(`https://dummyjson.com/users/${id}`, "beforeend");
//   await getUser(`https://dummyjson.com/users/${id - 1}`, "afterbegin", "other");
//   await getUser(`https://dummyjson.com/users/${id + 1}`, "beforeend", "other");
// }

async function getUser(id, pos, className = "") {
  try {
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    if (!response.ok) {
      throw new Error("ID Doesn't Exist");
    }
    userData = await response.json();
    showCard(userData, pos, className);
  } catch (err) {
    console.log(err);
  }
}

async function getDetails(id) {
  await getUser(id, "beforeend");
  await getUser(id - 1, "afterbegin", "other");
  await getUser(id + 1, "beforeend", "other");
}

function showCard(data, pos, className = "") {
  const card = `<div class="user-card ${className}">
  <img src=${data.image} alt="Profile Image" />
      <h3>${data.firstName}</h3>
      <h3>${data.lastName}</h3>
      <p class="email">${data.email}</p>
      <button class="btn">View Profile</button>
      </div>`;

  divEle.insertAdjacentHTML(pos, card);
}

getDetails(2);

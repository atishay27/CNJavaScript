const divEle = document.querySelector(".card-container");

function getDetails(id) {
  const req = new XMLHttpRequest();

  req.open("GET", `https://dummyjson.com/users/${id}`);
  req.send();

  req.addEventListener("load", function () {
    const data = JSON.parse(req.responseText);
    showCard(data, "beforeend");
    const request2 = new XMLHttpRequest();

    request2.open("GET", `https://dummyjson.com/users/${id - 1}`);
    request2.send();
    request2.addEventListener("load", function () {
      if (request2.status === 404) return;
      const data = JSON.parse(this.responseText);
      console.log(data);
      showCard(data, "afterbegin", "other");
      const request3 = new XMLHttpRequest();

      request3.open("GET", `https://dummyjson.com/users/${id + 1}`);
      request3.send();
      request3.addEventListener("load", function () {
        if (request3.status === 404) return;
        const data = JSON.parse(this.responseText);
        console.log(data);
        showCard(data, "beforeend", "other");
      });
    });
  });
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

// function showCard(data) {
//   const card = document.createElement("div");
//   card.classList.add("user-card");

//   const userImage = document.createElement("img");
//   userImage.src = data.image;
//   userImage.alt = "Profile Image";
//   card.appendChild(userImage);

//   const userFname = document.createElement("h3");
//   userFname.textContent = data.firstName;
//   card.appendChild(userFname);

//   const userLname = document.createElement("h3");
//   userLname.textContent = data.lastName;
//   card.appendChild(userLname);

//   const userEmail = document.createElement("p");
//   userEmail.classList.add("email");
//   userEmail.textContent = data.email;
//   card.appendChild(userEmail);

//   const btn = document.createElement("button");
//   btn.textContent = "View Profile";
//   btn.classList.add("btn");
//   card.appendChild(btn);

//   divEle.appendChild(card);
// }

getDetails(2);

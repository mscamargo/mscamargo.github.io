fetch("https://api.github.com/users/mscamargo").then(response => {
  response.json().then(json => {
    document.querySelector(".avatar").src = json.avatar_url;

    const p = document.createElement("p");
    p.innerText = json.bio;
    document.querySelector(".description").appendChild(p);
  });
});

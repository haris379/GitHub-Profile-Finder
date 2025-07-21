const gitHubUrl = "https://api.github.com/users";
const userInput = document.querySelector("input");
const btn = document.querySelector("#fetchBtn");
const profile = document.querySelector("#profile")

const getUser = async () => {
  let userName = userInput.value.trim();
  let newUser = `${gitHubUrl}/${userName}`;
  let promise = await fetch(newUser);
  let data = await promise.json();

  profile.innerHTML = `
  <img src="${data.avatar_url}" alt="Avatar" />
  <h2>${data.name || "No name provided"}</h2>
  <p><strong>Username:</strong> ${data.login}</p>
  <p><strong>Followers:</strong> ${data.followers}</p>
  <p><strong>Public Repos:</strong> ${data.public_repos}</p>
  <p><strong>Bio:</strong> ${data.bio || "No bio available"}</p>
`;
profile.classList.remove("hidden");
};

btn.addEventListener("click", getUser);





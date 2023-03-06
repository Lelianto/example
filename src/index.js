const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((res) => res)
    .catch((error) => error);
};

const fetchDataGithub = async () => {
  // Panggil API untuk mendapatkan data
  const username = document.getElementById("username").value;
  if (!username) {
    return;
  }
  const headers = {
    headers: {
      Accept: "application/json",
      Authorization: "token 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",
    },
  };
  await axios
    .get(`https://api.github.com/users/${username}`, headers)
    .then((res) => {
      const imageElement = document.createElement("img");
      imageElement.setAttribute("src", res.data.avatar_url);
      imageElement.setAttribute("alt", "gambar user");
      imageElement.setAttribute("class", "w-10 h-10 rounded-full");
      document.getElementById("image").appendChild(imageElement);
    })
    .catch((error) => console.log({ error }));
};

document.getElementById("submit").addEventListener("click", fetchDataGithub);

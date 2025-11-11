const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector('.fact');
const btn = document.querySelector('.btn');

const getFacts = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    factPara.innerText = data.fact; 
  } catch (error) {
    factPara.innerText = "Oops! Could not load a cat fact 😿";
  }
};

// function getFacts() {
//   factPara.innerText = "Fetching a cat fact... 🐾"; 

//   fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Cat fact:", data.fact);
//       factPara.innerText = data.fact;
//     })
//     .catch((error) => {
//       console.log("Something went wrong:", error);
//       factPara.innerText = "Oops! Could not fetch a cat fact 😿";
//     });
// }

btn.addEventListener("click", getFacts);
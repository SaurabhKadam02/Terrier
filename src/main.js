const selectEl = document.querySelector("select");
const carpuselContainerEl = document.querySelector("carousel-inner");
console.log(selectEl, carpuselContainerEl);

const BASE_URL = "https://dog.ceo/api/";
console.log("started");

// ====get the list of dog breeds from api
async function getDogsList() {
  try {
    const response = await fetch(`${BASE_URL}breeds/list/all`);

    const data = await response.json();
    return Object.keys(data.message);
  } catch (err) {
    console.log(err);
  }
}
getDogsList();

// get list of ten images on breed
async function getDogImages(breed) {
  try {
    const res = await fetch(`${BASE_URL}breed/${breed}/images`);
    const data = await res.json();
    return data.message.slice(0, 10);
  } catch (err) {
    console.log(err);
  }
}
console.log(getDogsList());

async function renderoptions() {
  const breedlist = await getDogsList();
  for (let breed of breedlist) {
    const Option = document.createElement("option");
    Option.textContent = breed;
    selectEl.appendChild(Option);
  }
}
renderoptions();

async function rendecarousel() {
  const images = await getDogImages(breed);
  console.log(images);
}

selectEl.addEventListener("change", function (e) {
  rendecarousel(e.target.value);
});

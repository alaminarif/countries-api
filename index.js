const section = document.querySelector("section");

const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
loadCountries();
const displayCountries = (countries) => {
  const parent = document.querySelector(".parent");
  countries.forEach((country) => {
    // console.log(country.capital);
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
    <h3>${country.name.common}</h3>
    <p> ${country.capital}</p>
    <button onclick='loadCountryName("${country.name.common}")'> Deteils</button>
    `;
    parent.appendChild(div);
  });
};
const loadCountryName = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountriesDeteils(data));
};
const displayCountriesDeteils = (country) => {
  const div = document.querySelector(".countries-deteils");
  div.innerHTML = `
  <h4> Country Name : ${country[0].name.common}</h4>
  <p>Popilation : ${country[0].population}</p>
  <img width='300px' src='${country[0].flags.svg}'/>
  `;
  console.log(country[0].flags.svg);
};

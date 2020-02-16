const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.log(err);
  }
};
console.log('===== async and await');
fetchData();

// get countries api using fetch

async function getCountry() {
  const countriesPro = await fetch('https://restcountries.eu/rest/v2/all');
  const countriesJSON = await countriesPro.json();
  const myCountry = countriesJSON.filter(ele => ele.name === 'Nepal');
  myCountry.map(nepal =>
    console.log(nepal.name, nepal.capital, nepal.population)
  );
}
getCountry();

// get cats
async function getCat() {
  const catPro = await fetch('https://api.thecatapi.com/v1/breeds');
  const catJSON = await catPro.json();
  console.log(catJSON);
}
getCat();

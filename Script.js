console.log("File Linked")


// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
  
//   fetch("https://restcountries.com/v3.1/all", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

//Answer:

   // a. Get all the countries from Asia continent/region using Filter function:

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log(asiaCountries);
  })
  .catch(error => console.log(error));


   // b. Get all the countries with a population of less than 2 lakhs using Filter function:

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countriesWithLessPopulation = data.filter(country => country.population < 200000);
    console.log(countriesWithLessPopulation);
  })
  .catch(error => console.log(error));

   // c. Print the following details name, capital, flag using forEach function:

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital);
      console.log('Flag:', country.flags.svg);
    });
  })
  .catch(error => console.log(error));

   // d. Print the total population of countries using reduce function:

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const totalPopulation = data.reduce((accumulator, country) => accumulator + country.population, 0);
    console.log('Total Population:', totalPopulation);
  })
  .catch(error => console.log(error));

  // e. Print the country which uses US Dollars as currency:

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countryWithUSD = data.find(country => country.currencies && country.currencies.USD);
    console.log('Country with USD:', countryWithUSD.name.common);
  })
  .catch(error => console.log(error));


fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
  // a. Get all the countries from Asia continent/region using Filter function
  const countriesInAsia = data.filter(country => country.region === 'Asia');
  
  // b. Get all the countries with a population of less than 2 lakhs using Filter function
  const countriesWithPopulationLessThan2Lakhs = data.filter(country => country.population < 200000);
  
  console.log("Countries in Asia:", countriesInAsia);
  console.log("Countries with population less than 2 lakhs:", countriesWithPopulationLessThan2Lakhs);
})
.catch(error => {
  console.error('Error fetching data:', error);
});

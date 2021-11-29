const latitude = 50.4547;
const longitude = 30.5238;

const promise = fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`);
promise
    .then(value => {
        return value.json();
    })
    .then(value => {
        const country = value.country;
        return fetch(`https://restcountries.com/v3.1/name/${country}`);
    })
    .then(value => {
        value.json();
    })




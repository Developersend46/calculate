export const services={
    getContry,
    rendonData
}

async function rendonData() {
    const url = "http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1"
   return fetch(url).then(res => res.text()).then((data) => {
        return data
    });
}

async function getContry() {
    const url = "https://restcountries.eu/rest/v1/all"
   return fetch(url).then(res => res.text()).then((data) => {
        return data
    });
}
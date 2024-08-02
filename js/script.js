const url = 'https://weather-api-by-any-city.p.rapidapi.com/weather=' + city;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '650ab46a1cmshdde84b69ecd202fp186e69jsn857ccecdb098',
		'x-rapidapi-host': 'weather-api-by-any-city.p.rapidapi.com'
	}
};
const weather = (city) => {
    cityName.innerHTML = city
    fetch(url, options)
        .then((Response) => {
            return Response.json();
        }).then((data) => {
            console.log(data);
            let current = data.current
            // temprature
            temp_c2.innerHTML = current.temp_c
            temp_c.innerHTML = current.temp_c
            temp_f.innerHTML = current.temp_f
            cloud.innerHTML = current.cloud
            feelslike_c.innerHTML = current.feelslike_c
            // humudity
            humidity2.innerHTML = current.humidity
            humidity.innerHTML = current.humidity
            gust_kph.innerHTML = current.gust_kph
            gust_mph.innerHTML = current.gust_mph
            last_updated.innerHTML = current.last_updated
            // wind
            wind_kph2.innerHTML = current.wind_kph
            wind_kph.innerHTML = current.wind_kph
            wind_mph.innerHTML = current.wind_mph
            pressure_in.innerHTML = current.pressure_in
            wind_degree.innerHTML = current.wind_degree


        });
}

submit.addEventListener('click', (e) => {
    e.preventDefault()
    weather(city.value)
})
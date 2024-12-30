const input_value = document.querySelector("#input_weather")
const check_weather_btn = document.querySelector("#check_weather")
let cityName = document.querySelector("#city_name")
const local_time = document.querySelector('#local_time')
const temperature = document.querySelector("#temperature")
// const getCurrentLocation = document.querySelector("#getCurrentLocation")


// check_weather_btn.addEventListener("click", async () => {
//     const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=ceedbd63221a47658eb63222243012&q=${input_value.value}&aqi=yes`)
//     const data = await response.json()
//     cityName.innerHTML = `${data.location.name} - ${data.location.country}`
//     local_time.innerHTML = `${data.location.localtime}`
//     temperature.innerHTML = `${data.current.temp_c}`
// })

async function getCurrentLocation(lat, lon) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=ceedbd63221a47658eb63222243012&q=${lat},${lon}&aqi=yes`)
    const data = await response.json()
    cityName.innerHTML = `${data.location.name} - ${data.location.country}`
    local_time.innerHTML = `${data.location.localtime}`
    temperature.innerHTML = `${data.current.temp_c}`

}

const position = navigator.geolocation.getCurrentPosition(getPosition , getError)

function getPosition(position) {
   getCurrentLocation(position.coords.latitude , position.coords.longitude)

}

function getError(){
    console.log("error")
}
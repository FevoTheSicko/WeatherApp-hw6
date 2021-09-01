
const cityname = document.getElementById('input').value
window.addEventListener('load', forecast())

function invoked(evt) {

    console.log("invoked")
}
function getapi(evt) {

    console.log('getapi invoked')
    const cityname = document.getElementById('input').value

    console.log(cityname)
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=da02c9d77467379d42d407a317682de7")
        .then(response => response.json())
        .then((data => {
            console.log('getapi data')
            console.log(data)
            document.getElementById("cityname").textContent = `${cityname}`
            document.getElementById("tempature").textContent = "tempature is " + Math.round(data.main.feels_like - 272.5) + " degrees"
            document.getElementById("humidity").textContent = "humidity is " + data.main.humidity + "%"
            document.getElementById("wind-speed").textContent = "current wind speed is " + Math.round(data.wind.speed * 3.6) + " kilometers per second"
            //document.getElementById("uv-index").textContent = different api for uv index


        }
        ))

}
function forecast() {
    console.log('forecast data')
    // var cityname = document.getElementById("input").value
    const cityname = 'melbourne'
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&appid=da02c9d77467379d42d407a317682de7")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log('dt is ' + data.list[0].dt)
            console.log(new Date(data.list[36].dt * 1000)) //gives us 13;00 time add 8 to get next day
            //day 1 = index 4
            //day 1 = index 12
            //day 1 = index 20
            //day 1 = index 28
            //day 1 = index 36

        })
        .catch((err) => console.log(err))
}





//var apikey  = "da02c9d77467379d42d407a317682de7"
//var usercityinput = "melbourne"
function getcurrentdate() {
    let currentdate = new Date();
    let cDay = currentdate.getDate()
    let cMonth = currentdate.getMonth() + 1
    let cYear = currentdate.getFullYear()
    console.log(cDay);
    console.log(cMonth);
    console.log(cYear);

}
getcurrentdate()



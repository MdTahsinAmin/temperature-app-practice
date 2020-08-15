const apiKey ={
    apiId   :'715f124620f4a16407b62966177bbf48',
    baseUrl :'https://api.openweathermap.org/data/2.5/weather'
};

const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click',function(){
      let cityName = document.getElementById('cityName').value;

       fetch(`${apiKey.baseUrl}?q=${cityName}&units=metric&&appid=${apiKey.apiId}`)
       .then(response => response.json())
       .then(data => dataFromSever(data));
});
function dataFromSever(data){
  //console.log(data);
  
  setValueAndDescription(data,'cityHeader','temperature','description');

  let weatherIcon = document.getElementById('weatherIcon');

  weatherIcon.src ="http://openweathermap.org/img/wn/"+data.weather[0].icon+".png";
  
  let now = new Date();

  let date = document.getElementById('date');

  date.innerText = dateBuilder(now);

}

function setValueAndDescription(data ,cityHead , temp , desc){
    let cityHeader =  document.getElementById(cityHead).innerText;

    cityHeader =  `${data.name}, ${data.sys.country}`;

    let temperature = document.getElementById(temp).innerText;
  
    temperature = (data.main.temp);

    let description = document.getElementById(desc).innerText;

     description = data.weather[0].main;

     document.getElementById(cityHead).innerText  = cityHeader;

     document.getElementById(temp).innerText = temperature;

     document.getElementById(desc).innerText = description;

}

function dateBuilder(d){
    let months =["January","February","March","April","May","June","July","August",
                 "September","October" ,"November","December"];
    
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let day = days[d.getDay()];

    let date = d.getDate();

    let month = months[d.getMonth()];

    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}


var axios = require('axios');

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/find?';


//
const ID ='&type=accurate&mode=json&appid=bafc30bb40b8b5db3e40cc0c41a5113a&units=metric';
module.exports={
  getTemp:function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}q=${encodedLocation+ID}`;
  return  axios.get(requestUrl).then(function (response) {

      if(response.data.cod==="404" && response.data.message){
        throw new Error(response.data.message);
      }else if(response.data.cod==="200"){
        return response.data.list[0].main.temp
      }else{
        throw new Error('Try again');
      }
    },function (response) {
      throw new Error(response.data.message);
    });
  }
}

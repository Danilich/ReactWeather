var React= require('react');
var About = (props)=>{
  return(
      <div>
  <h1 className="text-center">About Component</h1>
    <p>This React app </p>
    <p>

      Here some of the tools
    </p>
    <ul>
      <li>
      <a href="https://facebook.github.io/react">React</a> -This was
        the Javascript framework
      </li>
      <li>
        <a href="https://openweathermap.org">Open Weather Map</a>- I used
          Open weather map to search for weather by city name.
      </li>
    </ul>
    </div>
  );
};

module.exports=About;

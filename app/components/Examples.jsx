var React= require('react');

var{Link}=require('react-router');

var Examples = (props)=>{
  return(
    <div>
  <h1 className="text-center">Examples</h1>
  <p>Few locations</p>
  <ol>
    <li>
      <Link to='/?location=London'>London</Link>
    </li>

    <li>
        <Link to='/?location=Moscow'>Moscow</Link>


    </li>


  </ol>
  </div>
  );
};

module.exports=Examples;

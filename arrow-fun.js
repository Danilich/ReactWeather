var names = ['daniil','oleg','bratishka'];
names.forEach(function (name) {
console.log('foreach',name);
});
names.forEach((name)=>{
console.log('arrowFunc',name);
});
names.forEach((name)=>console.log('arrowFunc',name));

var returnMe = (name)=>name+'!';
console.log(returnMe('Lox'));


var person  ={
  name:'daniil',
  greet:function(){
    names.forEach( (name) =>{
      console.log(this.name + 'says hi'+name);
    });
  }
};

person.greet();


//function add(a,b){
//  return a+b;
//}

var add = (a,b)=>a+b;
console.log(add(1,2));





//console.log(add(1,3));

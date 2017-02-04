
function getTempPromise(location) {
  return new Promise(function(resolve,reject) {
    setTimeout(function () {
      resolve(79);
      reject('City not found');
    },1000);
  });

}

getTempPromise('London').then(function (temp) {
console.log('promise sucess',temp);
},function (err) {
    console.log('promise errr',err);
})


function addPromise(a,b) {
  return new Promise(function(resolve,reject) {
    setTimeout(function () {
      resolve(a+b);
      reject('City not found');
    },1000);
  });

}

addPromise(2,4).then(function (a) {
console.log('promise sucess',a);
},function (err) {
    console.log('promise errr',err);
})

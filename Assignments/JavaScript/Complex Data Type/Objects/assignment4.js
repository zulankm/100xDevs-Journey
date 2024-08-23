function vote(arr){
var ans = [];
ans = arr.filter(arr => arr.age >18 &&  arr.gender == "male");

return ans;


}

const users = [{
  name: "kartikay",
  age: 23,
  gender: "male"
},{
  name: 'harsh',
  age: 20,
  gender: "female"
},{
  name: "harkirat",
  age: 28,
  gender: "male"

}
]
console.log(vote(users));




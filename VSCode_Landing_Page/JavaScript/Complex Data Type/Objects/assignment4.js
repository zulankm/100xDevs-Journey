function vote(arr){
var ans = [];
for(var i = 0; i < arr.length;i++){
  if(arr[i].age > 18 && arr[i].gender == "male")
      ans.push(arr[i]);

}
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
var eligible = vote(users);
for(var i = 0; i < eligible.length; i++)
{
  console.log(eligible[i]);
}




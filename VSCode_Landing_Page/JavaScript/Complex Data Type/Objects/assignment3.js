let user = {
  name: "Kartikay",
  age: 23,
  gender: "Male"
}
function greet(user){
  if(user.gender == "Male" && user.age > 18)
      console.log("Hi Mr " + user.name + " ,your age is " + user.age + " and can vote");
  else if(user.gender == "Female"  && user.age > 18)
    console.log("Hi Mrs " + user.name + " ,your age is " + user.age  + " and can vote");
  else if(user.gender == "Others"  && user.age > 18)
    console.log("Hi Others " + user.name + " ,your age is " + user.age  + " and can vote");
}
greet(user);
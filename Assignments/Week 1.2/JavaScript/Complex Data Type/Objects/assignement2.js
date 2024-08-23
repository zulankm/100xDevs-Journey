let user = {
  name: "Kartikay",
  age: 23,
  gender: "Male"
}
function greet(user){
  if(user.gender == "Male")
      console.log("Hi Mr " + user.name + " ,your age is " + user.age);
  else if(user.gender == "Female")
    console.log("Hi Mrs " + user.name + " ,your age is " + user.age);
  else if(user.gender == "Others")
    console.log("Hi Others " + user.name + " ,your age is " + user.age);
}
greet(user);
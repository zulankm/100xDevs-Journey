function canVote(age)
{
  let result = (age > 18);
  return result;
}

let eligible = canVote(19);
console.log(eligible);
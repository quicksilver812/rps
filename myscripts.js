const choice=(prompt("Enter your choice:"));

function randomString(strings) 
{
  const index = Math.floor(Math.random() * strings.length);
  return strings[index];
}

const strings = ['rock', 'paper', 'scissors'];
console.log(randomString(strings)); 

console.log(choice);
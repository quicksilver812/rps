const choice1=(prompt("Enter your choice:"));

function randomString(strings) 
{
  const index = Math.floor(Math.random() * strings.length);
  return strings[index];
}

const strings = ['rock', 'paper', 'scissors'];
let choice2=randomString(strings);

//if(choice1!="rock"||choice1!="paper"||choice1!="scissors")
//console.log("Wrong Input!");
//else
//{
  console.log("Computer Choice: "+choice2); 
  console.log("User Choice: "+choice1);

  if(choice1=="rock"&&choice2=="scissors")
  console.log("Player wins!");
  else if(choice1=="scissors"&&choice2=="rock")
  console.log("Computer wins!");

  else if(choice1=="scissors"&&choice2=="paper")
  console.log("Player wins!");
  else if(choice1=="paper"&&choice2=="scissors")
  console.log("Computer wins!");

  else if(choice1=="paper"&&choice2=="rock")
  console.log("Player wins!");
  else if(choice1=="rock"&&choice2=="paper")
  console.log("Computer wins!");

  else
  console.log("Draw!")

//}
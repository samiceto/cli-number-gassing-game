import inquirer from "inquirer"

let randomNumber=Math.floor(Math.random()*10 +1);



let answer= await inquirer.prompt([{
    name:"comingnumber",
    type:"number",
    message:"please inter a number between 1 to 10"

}])
if (randomNumber === answer.comingnumber){
    console.log("your number has matched the figer congrated");
}
else{
    console.log("your number did'nt macthed please try again");
}
let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie","Marge", "Sam"]
let withMarmaduke = petNames.push("Marmaduke, ")
console.log(petNames.length)

//add user name to then end of the array 
let userName = prompt ("Enter your name.")
let addUserName = petNames. push(userName)
alert("The action taken was: add " + userName + ".")
alert("The updated arrray is: " + petNames)

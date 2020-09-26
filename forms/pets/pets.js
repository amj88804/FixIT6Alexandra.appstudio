let petNames = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie","Marge", "Sam"]
let withMarmaduke = petNames.push("Marmaduke")
console.log(petNames.length)

//remove vinny from the array
let pos1 = 5
let remVinny = petNames.splice(pos1, 1) 
console.log("The action taken was: remove " + remVinny + ".")
console.log("The updated arrray is: " + petNames)

//remove marty from the array
let pos2 = 3
let remMarty = petNames.splice(pos2, 1) 
console.log("The action taken was: remove " + remMarty + ".")
console.log("The updated arrray is: " + petNames)


//add nancy to the array
let addNancy = petNames.unshift("Nancy")
console.log("The action taken was: add Nancy.")
console.log("The updated arrray is: " + petNames)


//add user name to then end of the array 
let userName = prompt ("Enter your name.")
let addUserName = petNames. push(userName)
console.log("The action taken was: add " + userName + ".")
console.log("The updated arrray is: " + petNames)

//Array index where Riley is located 
let pos3 = petNames.indexOf('Riley')
console.log("The action taken was: get index of 'Riley'.")
console.log("The index of Riley is: " + pos3)

//Array index where Cindy is located 
let pos4 = petNames.indexOf('Cindy')
console.log("The action taken was: get index of 'Cindy'.")
console.log("The index of Cindy is: " + pos4)

//With Maramduke data array
console.log("With Marmaduke data: " + petNames)

//AB scenario

//Remove Darcy
let remNancy = petNames.shift("Nancy")
console.log("The action taken was: remove Nancy.")
console.log("The updated arrray is: " + petNames)

//Add Barney
let addBarney = petNames.unshift("Barney")
console.log("The action taken was: add Barney.")
console.log("The updated arrray is: " + petNames)

//adding more names to the new array
let allPets = petNames.push(["Ted", "Fred", "Jed", "Ned", "Ed", "Zed"])
console.log("The action taken was: add 'Ted', 'Fred', 'Jed', 'Ned', 'Ed', 'Zed',")
console.log("The new array is: " + petNames)

//String variable for pets
let stringPets=petNames.join(",")
console.log("The action taken was: read pet names as a string")
console.log("The new array is: " + petNames)

//add Agnes
let addAgnes = petNames.unshift("Agnes")
console.log("The action taken was: add Agnes.")
console.log("The updated arrray is: " + petNames)








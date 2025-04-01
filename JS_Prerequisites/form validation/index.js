/*------------Objects and how to access their Values --------------*/
// const formData = { 
//     name: "John", 
//     email: "john@example.com", 
//     password: "12345"
// };
// console.log(formData.name);     // John
// console.log(formData["email"])
// //updating the value inside object
// formData.email = "jamu@mahadusta.com"
// console.log(formData)


/*---------------Object.keys() and forEach() Loop ------------- */
//Object.keys(), gives us all the keys (property names of an object) as an array

// let formData = {name:'jamu',age:5,type:'maha dusta'}
// console.log(Object.keys(formData))
// const keys = Object.keys(formData)
// keys.forEach((key)=>{
//     console.log(key,formData[key])
// })



/*-----------------Object.values() and some() to Check Errors------*/
//Object.value() is used to get all the values of an object as an array

// const person = {
//     name:'baba jamu',
//     age:5,
//     type:'hello'
// }
// const values = Object.values(person)
// console.log(values)

// // some() => It checks if any value meets a condition (like 5 exits or not).
// console.log(values.some((values)=> values == ""))
// console.log(values.some((values)=> !values == ""))



/*---------------------Updating an Object Dynamically ------------- */
// const errors = {}
// errors["name"] = 'Name is required'
// console.log(errors)




/*-------------Using trim() to Remove Spaces--------------- */
// const name = "   jamu   "
// console.log(name)
// console.log(name.trim())
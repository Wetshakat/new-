// console.log("racy")
// console.log("25")
//  setTimeout(()=>{
//     console.log("emmy");
//  },5000);
// console.log("tz")
// console.log("victory")
// console.log("https://swapi.dev/api/people/1")

// const getPeople = () =>{
//    const request =  XMLHttpRequest();
//    request.addEventListener(`readystatechange`, ()=>{
//       if(request.readyState === 4 && request.status===200){console.log(request.responseText);} else if(request,readyState===4){
//          console.log(`could not fetch data`);
//       }
      
//    });
//    request.open(`GET`, `https://swapi.dev/api/people/1`);
//       request.send();
// };
// getPeople(1);

// // Import node-fetch
// const fetch = require("node-fetch");

// // Example function to fetch data
// async function getPeople() {
//     const url = "https://jsonplaceholder.typicode.com/users"; // Example API endpoint
//     try {
//         const response = await fetch(`curl https://swapi.dev/api/people/1`); // Make the request
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json(); // Parse JSON response
//         console.log(data); // Do something with the data
//     } catch (error) {
//         console.error("Error fetching data:", error.message);
//     }
// }

// // Call the function
// getPeople();

// import fetch from 'node-fetch';

// async function getPeople() {
//     const url = "https://jsonplaceholder.typicode.com/users";
//     try {
//         const response = await fetch(`curl https://swapi.dev/api/people/1`);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching data:", error.message);
//     }
// }

// getPeople();

// Example of a GET request
// fetch(`https://api.github.com/users/${"wetshakat"}/repos`
// ) 
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('those not exist'); 
//     }
//     return response.json(); 
//   })
//   .then(data => {
//     console.log(data);})
//   .catch(error => {
//     console.error('There has been a problem with your fetch operation:', error);
//   });

fetch(`https://api.github.com/users/${"Wetshakat"}/repos`
) 
.then(response=>{if(!response.ok){
   throw new error('those not exist');
}
return response.json();
})
.then(data=>{console.log(data);})
.catch(error=>{console.error('we dont have an idea on what you want',error);});
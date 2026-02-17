
// Objective: Practice array manipulation using functional patterns (filter, map, reduce, and destructuring) by processing real data from an API.
// Filter: Only include users whose id is an even number.
// Transform: Create a new array of objects containing only the id, name, and the city (extracted from the nested address object).
// Add: Insert a "Guest User" at the beginning of the list without mutating the original result.
// Statistics: Calculate the total number of characters in all usernames combined using reduce.

fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(users => {
      // YOUR CODE STARTS HERE
        console.log("--- Processed Users ---");
      // 1. Filter even IDs

        const evenUsers = users.filter(user => user.id % 2 == 0)

      // 2. Map to clean objects {id, name, city}

        const transformUsers = users.map(user => ({ // Esto significa que para cada usuario, me aplicas el codigo siguiente que viene despues de la flecha arrow. 
                id: user.id,
                name: user.name,                       // Al poner => ({}) indico que esto es un objeto y es lo que se devolverá y no es codigo
                city: user.address.city
        }));

      // 3. Add Guest User at the start using Spread (...)

        const guest = {
            id: 0,
            name: 'Hannibal Lecter',
            username: 'Hannibal',
            email: 'hanniballecter@killer.com',
            address: {
                street: 'Hospital Street',
                suite: 'Apt. 1',
                city: 'Baltimore',
                zipcode: '21201',
                geo: { 
                    lat: "-37", 
                    lng: "84" 
                }
            },
            phone: '1-770-746-8021 x56442',
            website: 'hannibal.com',
            company: {
                name: 'FBI',
                catchPhrase: 'Criminal profiling and analysis',
                bs: 'catch high-profile serial killers'
            }
        };

        const newUserInUsers = [guest,...users]
      
        console.log("--- Statistics ---");

      // 4. Reduce to count total characters in names
    
      const resultado = newUserInUsers.reduce(function(total, user) {
            return total += user.name.length;
      }, 0);
      
        console.log(resultado);
  });
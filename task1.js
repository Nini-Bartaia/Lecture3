const user=[{name: 'Temo', age:25}, {name: 'Lasha', age: 21}, {name: 'Ana',age: 28}]


function fun(user){
        let smallestAge = Infinity;
       
        for (let i = 0; i < user.length; i++) {
          const userOne = user[i];
          if (userOne.hasOwnProperty('name') && userOne.hasOwnProperty('age')) {
            if (userOne.age < smallestAge) {
              smallestAge = userOne.age;
              personName= userOne.name
            

              
            }
          }
         
        }
      
        return personName;
      };
      
console.log(fun(user))


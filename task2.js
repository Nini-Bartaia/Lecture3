const user={name: 'Temo', age:25}


function fun(user){

    let clone={...user}

    return clone

}

console.log(fun(user))
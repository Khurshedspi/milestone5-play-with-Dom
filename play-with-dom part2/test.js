function upperName (name){
    console.log(name. toUpperCase());
}

function fullName(first, callback){
    const fullName = first + " hasan ";
    callback(fullName);
}

fullName("rokib", upperName)
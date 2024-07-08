//import bcrypt from "bcryptjs"
const a=require("bcrypt");
let user={
    name:'poojitha',
    email:'abs@gmail.com',
    password:'abc582'
};
let salt=a.genSaltSync(10);
let hashedpassword=a.hashSync(user.password,salt);
console.log(hashedpassword);
let updatedUser={
    ...user,
    password:hashedpassword
};
if(a.compareSync('abc582',hashedpassword)){
    console.log('password matched');
}
else{
    console.log('not matched');
}
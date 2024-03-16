const accountId = 14453
let accountEmail = "princeku20401@gmail.com"
var accountPassword = "abc123"
accountCity = "Jaipur"
let accountState;

//accountId = 2 // not allowed

accountEmail = "hell0@123.com"
accountPassword = "123456"
accountCity = "patna"

console.log(accountId)

/*
prefere not use var
beacuse of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

var Mustache = require('mustache');
var result = Mustache.render("Hi, {{first}} {{last}}!", {
    first: "Jail",
    last: "Andrade"
});

console.log(result);
var fs = require('fs');

var options = {
    encoding: "utf-8"
};

fs.readFile('myfile.txt', options, function(err, data){
    if (err){
        console.log('Error: ' + JSON.stringify(err));
        return;
    }

    console.log(data.match(/x/gi).length + " letter X's");
});
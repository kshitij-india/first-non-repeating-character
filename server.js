var http= require('http');
var url= require('url');
var { parse } = require('querystring');
var fs= require('fs');

function findFirstNonRepeatingCharacter(name){
    if(name== undefined){
        return "Please enter valid string";
    }
    else{
        for(var i=0; i< name.length; i++){
            if((name.slice(0,i)+name.slice(i+1)).includes(name.charAt(i)) == false)
                return `First non repeating character: ${name.charAt(i)}`;
        }

        if(i== name.length)
            return "No non repeating character found";
    }
}

var server= http.createServer(function(req, res){
    if(req.method== "GET"){
        var html= fs.readFileSync('index.html');
        res.end(html);
    }
    else if(req.method== "POST"){
    
        let str= "";
        req.on('data', function(chunk){
            str+= chunk.toString();
        });

        req.on('end', function(){
            var parsedStr= parse(str);

            if(parsedStr.str){
                var firstNonRepeatingCharacter= findFirstNonRepeatingCharacter(parsedStr.str);
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(firstNonRepeatingCharacter);
            }
            else{
                res.end("Please send string in the input");
            }
            
        });
    }

});

exports.listen= function(port, callback){
    server.listen(port, function(){
        console.log(`Server listening on port ${port}. Navigate to http://localhost:${port} to proceed.`);

        if(callback) callback();
    });
};

exports.close= function(){
    server.close();
};
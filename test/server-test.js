var request= require('request');
var expect= require('chai').expect;
var fs= require('fs');

var server= require('../server');


describe('test cases for server accepting string and returning first non repeating character', function(){
    before('start the server', function(){
        server.listen(3001);
    });

    describe('should return first non repeating character if it exists', function(){

        it('should return a for the string a', function(done){

            request.post({url: 'http://localhost:3001', form: {str: "a"}}, function(error, response, body){

                expect(error).to.not.exist;
                expect(body).to.equal('First non repeating character: a');
                done();
            });
        });

        it('should return b for the string aab', function(done){

            request.post({url: 'http://localhost:3001', form: {str: "aab"}}, function(error, response, body){

                expect(error).to.not.exist;
                expect(body).to.equal('First non repeating character: b');
                done();
            });
        });

        it('should return b for the string aba', function(done){

            request.post({url: 'http://localhost:3001', form: {str: "aba"}}, function(error, response, body){

                expect(error).to.not.exist;
                expect(body).to.equal('First non repeating character: b');
                done();
            });
        });
    });

    describe('it should return proper message if there is no non repeating character', function(){

        it('should return "No non repeating character found" for the string aa', function(done){

            request.post({url: 'http://localhost:3001', form: {str: "aa"}}, function(error, response, body){

                expect(error).to.not.exist;
                expect(body).to.equal('No non repeating character found');
                done();
            });
        });

        it('should return "No non repeating character found" for the string abab', function(done){

            request.post({url: 'http://localhost:3001', form: {str: "abab"}}, function(error, response, body){

                expect(error).to.not.exist;
                expect(body).to.equal('No non repeating character found');
                done();
            });
        });

        it('should return "No non repeating character found" for the string abba', function(done){

            request.post({url: 'http://localhost:3001', form: {str: "abba"}}, function(error, response, body){

                expect(error).to.not.exist;
                expect(body).to.equal('No non repeating character found');
                done();
            });
        });
    });

    it('should return proper error message if no string is passed in the POST request', function(done){

        request.post({url: 'http://localhost:3001', form: {param: "abba"}}, function(error, response, body){

            expect(error).to.not.exist;
            expect(body).to.equal('Please send string in the input');
            done();
        });        
    });

    it('should render html file "index.html" on GET request', function(done){

        request('http://localhost:3001', function(error, response, body){

            expect(error).to.not.exist;

            fs.readFile('./index.html', function(err, data){
                expect(err).to.not.exist;
                expect(body).to.equal(data.toString());
                done();
            });
        });
    });

    after('close the server', function(){
        server.close();
    });
});
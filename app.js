// Jan 30th 2018

// Source: /Users/sanjivsingh/chatBot/BotBuilder-Samples/Node/intelligence-LUIS
// require ('dotenv-extended').load()

var builder  = require('botbuilder');
var restify  = require('restify'); 

   
    // SETUP Restify Server (local machine) 
    var server = restify.createServer(); 
        server.listen( process.env.port || process.env.PORT || 3978, 
                       function() { console.log('%s listening to %s', server.name, server.url); }); 


    // CONNECTOR to communicate with Bot Framework Service (remote endpoint)
    var connector = new builder.ChatConnector( {
        appId: process.env.MicrosoftAppId, 
        appPassword: process.env.MicrosoftAppPassword } );                                                 


    // LISTENING at REST endpoint
    server.post( '/api/messages', connector.listen() );

    // RECEIVE user message and respond by echoing each message back to the user w/prefix
    var bot = new builder.UniversalBot( connector, 
                                        function(session) { session.send("You said: %s", 
                                                                         session.message.text); 
                                                          }); 
       
// --- end part 1: URL: https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-quickstart 













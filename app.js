// Jan 30th 2018

// Source: /Users/sanjivsingh/chatBot/BotBuilder-Samples/Node/intelligence-LUIS
// require ('dotenv-extended').load();

var builder  = require('botbuilder');
var restify  = require('restify'); 

// ----- Quick Debug area ----- 
console.log(' App ID %s',   process.env.MicrosoftAppId)
console.log(' Password %s', process.env.MicrosoftAppPassword)
// ------ End Debug area ------


// Section 1: Setup BOT Server: REST endpoint, PORT listener, BOT process 
   
    // SETUP Restify Server (local machine) 
    var server = restify.createServer(); 
        server.listen( process.env.port || process.env.PORT || 3978, 
                       function() { console.log('%s listening to %s', server.name, server.url); }); 


    // CONNECTOR to communicate with Bot Framework Service (remote endpoint)
    var connector = new builder.ChatConnector( {
        appId: process.env.MicrosoftAppId, 
        appPassword: process.env.MicrosoftAppPassword } );                                                 



    // RECEIVE user message and respond by echoing each message back to the user w/prefix
    var bot = new builder.UniversalBot( connector); 

    // LISTENING at REST endpoint
    server.post( '/api/messages', connector.listen() );


// Section 2: Setup BOT dialog
   
    // Default dialog 
    bot.dialog('/', function(session) { 
              session.send("SkillAdvisor says ... : %s", session.message.text);
    });

       
// --- end part 1: URL: https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-quickstart 




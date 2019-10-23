Object// Include the cluster module
var cluster = require('cluster');

// Code to run if we're in the master process
/*

if (cluster.isMaster) {

    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    // Listen for terminating workers
    cluster.on('exit', function (worker) {

        // Replace the terminated workers
        console.log('Worker ' + worker.id + ' died :(');
        cluster.fork();

    });

// Code to run if we're in a worker process
}
else {/**/

  // author(s):  Patrice-Morgan Ongoly
  // version: 0.3.0
  // last modified: Sunday, October 20, 2019 06:59 EST
  // description:

  // required modules
  var bodyParser = require('body-parser');
  var express = require('express');
  var WhichBrowser = require('which-browser');
  // main application instance

  var app = express();

  // main application settings

  var config = {
      PORT: process.env.PORT || 8008,
      DIRECTORY: [
          './',           /* 0 */
          './css',        /* 1 */
          './js',         /* 2 */
          './media/texture',  /* 3 */
          './media/gifs', /* 4 */
          './media/pattern', /* 5 */
          './media/img',  /* 6 */
          './media/sounds',   /* 7 */
          './media/vid',    /* 8 */
          './media/model',    /* 9 */
          './uploads',        /* 10 */
          './drafts/docs',       /* 11 */
          './media/upload',       /* 12 */
          './media/room',         /* 13 */
          './media/img/bg',       /* 14 */
          './media/room/media/model', /* 15 */
          './board/',             /* 16 */
      ]
  };

  var deviceType = 'unknown';
  let dir = config.DIRECTORY;

  app.engine('html', require('ejs').renderFile);

  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

  app.use(express.static('/'));
var result;
  app.get('/', function(req, res){
      result = new WhichBrowser(req.headers);
      console.log(result.toString());
      if(result.isType('desktop')){
          console.log('This is a desktop computer.');
          deviceType = 'desktop';
      }
      else{
          console.log('This is a mobile device.');
          deviceType = 'mobile';
      }

      res.render('index.html',{root: dir[0]});
  });

  app.get('/login', function(req, res){
      console.log("------------------------- \n accessing login page");
      result = new WhichBrowser(req.headers);
      console.log(result.toString());
      res.render('login.html',{root: dir[0]});
  });

  app.get('/augr', function(req, res){
      console.log("------------------------- \n accessing AugR");
      result = new WhichBrowser(req.headers);
      console.log(result.toString());
      res.render('augr.html',{root: dir[0]});
  });

  app.get('/ceo', function(req, res){
      console.log("------------------------- \n accessing ceo page");
      result = new WhichBrowser(req.headers);
      console.log(result.toString());
      res.render('ceo.html',{root: dir[0]});
  });

  app.get('/guedalia', function(req, res){
      console.log("------------------------- \n accessing guedalia page");
      result = new WhichBrowser(req.headers);
      console.log(result.toString());
      res.render('guedalia.html',{root: dir[0]});
  });

  app.get('/louis', function(req, res){
      console.log("------------------------- \n accessing louis page");
      result = new WhichBrowser(req.headers);
      console.log(result.toString());
      res.render('louis.html',{root: dir[0]});
  });

  app.get('/eric', function(req, res){
      console.log("------------------------- \n accessing eric page");
      result = new WhichBrowser(req.headers);
      console.log(result.toString());
      res.render('eric.html',{root: dir[0]});
  });

  app.get('/noah', function(req, res){
      console.log("------------------------- \n accessing noah page");
      result = new WhichBrowser(req.headers);
      console.log(result.toString());
      res.render('noah.html',{root: dir[0]});
  });

  app.get('/cam', function(req, res){
      console.log("------------------------- \n accessing cam page");
      result = new WhichBrowser(req.headers);
      console.log(result.toString());
      res.render('cam.html',{root: dir[0]});
  });

  app.get('/css/:stylesheet_id', function(req, res){
      let stylesheet_id = req.params.stylesheet_id;
      res.sendFile(stylesheet_id, {root: dir[1]} );
  });

  app.get('/js/:script_id', function(req, res){
      let script_id = req.params.script_id;
      res.sendFile(script_id, {root: dir[2]} );
  });

  app.get('/media/img/:img_id', function(req, res){
      let img_id = req.params.img_id;
      res.sendFile(img_id, {root: dir[6]} );
  });

  var io = require('socket.io').listen(app.listen(config.PORT, function(){
      console.log('connecting \n . \n .. \n ... \n .... \n ..... \n ------------------------------------------');
      console.log('    ORM 0.3.0');
      console.log('------------------------------------------');
      console.log(`[0] listening on port ${config.PORT}`);
      console.log('------------------------------------------');

  }));

  var profiles = {
    "guest" : {
      index: [-1, "login"],
      name: "FOR MEMBERS EYES ONLY",
      profilepic: "hov_ig_logo.png",
      content: {
        youtube : "https://www.youtube.com",
        linkedin: "https://www.linkedin.com",
        instagram: "https://www.instagram.com",
        whatsapp: "+1 617 855 9966"
      },
      replyto: "admin@houseofven.us",
      profilename: "guest",
      profilepass: "guest",
      loggedIn: false,
      timeStart: null
    },
    "ceo" : {
      index: [0, "ceo"],
      name: "Patrice-Morgan Ongoly",
      profilepic: "pamo_profile.jpeg",
      content: {
        youtube : "https://www.youtube.com/channel/UCGbhZq-wHMPHgg-Zdt9hfWw",
        linkedin: "https://www.linkedin.com/in/patrice-morgan-ongoly-8841b318a/",
        instagram: "https://www.instagram.com/ceo.hov/",
        whatsapp: "+1 617 855 9966"
      },
      replyto: "ceo@houseofven.us",
      profilename: "starmaker",
      profilepass: "james!230NG0LY",
      loggedIn: false,
      timeStart: null
    },
    "guedalia" : {
      index: [1, "guedalia"],
      name: "Guedalia Dina-Lenda",
      profilepic: "gue_profile.png",
      content: {
        youtube : "https://www.youtube.com/",
        linkedin: "https://www.linkedin.com/",
        instagram: "https://www.instagram.com/roger_dina",
        whatsapp: "+242 06 531 7575"
      },
      replyto: "gue.acornparkmd@gmail.com",
      profilename: "LaD17",
      profilepass: "l3r0id3MADZIA",
      loggedIn: false,
      timeStart: null
    },
    "eric" : {
      index: [2, "eric"],
      name: "Eric Romano",
      profilepic: "eric_profile.png",
      content: {
        youtube : "https://www.youtube.com/",
        linkedin: "https://www.linkedin.com/in/eric-romano-b03453109",
        instagram: "https://www.instagram.com/ericalan_1228",
        whatsapp: "+1 516 732 8551"
      },
      replyto: "ericrom1228@gmail.com",
      profilename: "eromano1",
      profilepass: "Ero122896",
      loggedIn: false,
      timeStart: null
    },
    "noah" : {
      index: [3, "noah"],
      name: "Noah Dagne",
      profilepic: "noah_profile.png",
      content: {
        youtube : "https://www.youtube.com/",
        linkedin: "https://www.linkedin.com/in/noah-dagne",
        instagram: "https://www.instagram.com/samiy.dagne",
        whatsapp: "+1 301 281 3066"
      },
      replyto: "dagne.noah@gmail.com",
      profilename: "dagne.noah",
      profilepass: "t3$tp@$$w0RD",
      loggedIn: false,
      timeStart: null
    },
    "cam" : {
      index: [4, "cam"],
      name: "Cameron Reed",
      profilepic: "cam_profile.jpg",
      content: {
        youtube : "https://www.youtube.com/",
        linkedin: "https://www.linkedin.com/in/cameronhreed/",
        instagram: "https://www.instagram.com/reed.cameron",
        whatsapp: "+1 301 875 1938"
      },
      replyto: "chylton@gmail.com",
      profilename: "chylton",
      profilepass: "t3$tp@$$w0RD",
      loggedIn: false,
      timeStart: null
    },
    "louis" : {
      index: [5, "louis"],
      name: "Louis Banzani",
      profilepic: "louis_profile.png",
      content: {
        youtube : "https://www.youtube.com/",
        linkedin: "https://www.linkedin.com/",
        instagram: "https://www.instagram.com/banzanilouis",
        whatsapp: "+242 05 382 9114"
      },
      replyto: "Lbanzani35@gmail.com",
      profilename: "lbanzani",
      profilepass: "l3g@rd!3ndufl3uvE",
      loggedIn: false,
      timeStart: null
    },
  };
  var signatures = {};

  var history = [];

  var lastLength = 0;

  var localHistory = null;

var pingCount = 0;
var checkSignatures = setInterval(function(){
  let keys = Object.keys(profiles);
  console.log(`[ping [${pingCount}]`);
  for(var c=0; c<keys.length; c++){
    //console.log(user);
    (function(){
      let user = profiles[keys[c]];

      //  console.log(user);
      if(user.loggedIn&&user.timeStart!=null){
        let now = (new Date).getTime();
        let diff = now-user.timeStart;


        console.log(`[${c}] ${diff} since login`);
        let ratioToThirty = (diff/(1.8*Math.pow(10, 6))); //100*     1.8*

        if((ratioToThirty>80&&ratioToThirty<82)||(ratioToThirty>90&&ratioToThirty<92)){
          console.log("TODO: broadcast logout warning to all sockets connected to this account");
        }

        if(ratioToThirty>1){
      //  let pos = signatures.map(function(e) { return e.user; }).indexOf(user);
          user.loggedIn = false;

        /*  for(var p = 0; p<Object.keys(signatures).length; p++){
            Object.values(signatures)[p].indexOf()
          }
          signatures[result.toString()].history.push("client-conn");*/
          if(user.loginHistory==undefined||user.loginHistory==null){
            user.loginHistory = [];
          }
          user.loginHistory.push({
            sessionStart: user.timeStart,
            sessionEnd: (new Date).getTime()
          });
          user.timeStart = null;

          let signs = Object.values(signatures);
          for(var e =0;e<signs.length; e++){
            (function(){
              if(signs[e].user == user){
                signs[e].history.push("loggedout");
                console.log(signs[e]);
                console.log("logged out \n ------------------------------");
              }
            })();
          }
          console.log("TODO: broadcast logout sequence to all sockets connected to this account");
        }
      }
    })();

  }
  pingCount++;
}, 30000);
  io.sockets.on('connection', function(socket){
      console.log(socket.conn.remoteAddress);
      var address = {address : socket.conn.remoteAddress};
      console.log(`client connected at ${address.address}`);
      let numOfSigns = Object.keys(signatures).length;

      console.log(`num of signs ${numOfSigns}`);
      if(numOfSigns==0){
        if(result==null){
          result = {
            total: "long-poll",
            browser: "unknown",
            os: "unknown",
            engine: "unknown",
            isMobile: "unknown",
            history: [],
            user: {}
          }
        }
        let signature = {
          object: address,
          total: result.toString(),
          browser: result.browser.toString(),
          engine: result.engine.toString(),
          os: result.os.toString(),
          isMobile: result.isMobile(),
          history: [],
          user: profiles["guest"]
        };
        signatures[result.toString()] = signature;
        console.log(`signature:`);
        console.log(signature);
      }
      else{

        let total = Object.values(signatures);
        console.log(`existing SIGNATURES ------------------------\n`);
        console.log(signatures);
        console.log(`------------------------`);
        console.log(`current sign ${result.toString()}`);

        let alreadyConnectedToThis = false;
        for(var t=0;t<numOfSigns;t++){
          (function(){
            if(total[t].total==result.toString()){
                //if there is a match use it...
              localHistory = total[t].history;
              console.log("already connected to this");
              alreadyConnectedToThis = true;
            }
              /*total[t].browser==result.browser.toString()
            total[t].engine==result.engine.toString()
            total[t].os==result.os.toString()
            total[t].isMobile==result.isMobile()*/
          })();
        }

        // ... otherwise create a new signature
          if(localHistory==null||alreadyConnectedToThis==false){
            let signature = {
              object: address,
              total: result.toString(),
              browser: result.browser.toString(),
              engine: result.engine.toString(),
              os: result.os.toString(),
              isMobile: result.isMobile(),
              history: [],
              user: profiles["guest"]
            };
            signatures[result.toString()] = signature;
          }

          signatures[result.toString()].history.push("client-conn");
          signatures[result.toString()].history.push("logged");
          localHistory = signatures[result.toString()].history;

      }

      socket.on("CLIENTidentifyNodeAsViewerToSERVER", function(data){
          if(data.status){
              console.log(`node connected to network ${data.network}`);
              console.log(`checking out DIA ${data.dia}`);
              console.log(`loading content...\n ${data.content}`);
              /////


              numOfSigns = Object.keys(signatures).length;

              console.log(`num of signs ${numOfSigns}`);
              if(numOfSigns==0){
                let signature = {
                  object: address,
                  total: result.toString(),
                  browser: result.browser.toString(),
                  engine: result.engine.toString(),
                  os: result.os.toString(),
                  isMobile: result.isMobile(),
                  history: [],
                  user: profiles["guest"]
                };
                signatures[result.toString()] = signature;
                console.log(`signature:`);
                console.log(signature);
              }
              else{
                let alreadyConnectedToThis = false;
                let total = Object.values(signatures);
                console.log(`existing SIGNATURES ------------------------\n`);
                console.log(signatures);
                console.log(`------------------------`);
                console.log(`current sign ${result.toString()}`);

                let current = null;
                for(var t=0;t<numOfSigns;t++){
                  (function(){
                    if(total[t].total==result.toString()){
                        //if there is a match use it...
                      localHistory = total[t].history;
                      alreadyConnectedToThis = true;
                      console.log("already connected to this");
                      console.log(localHistory);
                      //current = localHistory;
                    }
                  })();
                }

                // ... otherwise create a new signasendture

                if(localHistory==null||alreadyConnectedToThis==false){
                    let signature = {
                      object: address,
                      total: result.toString(),
                      browser: result.browser.toString(),
                      engine: result.engine.toString(),
                      os: result.os.toString(),
                      isMobile: result.isMobile(),
                      history: [],
                      user: profiles["guest"]
                    };
                    signatures[result.toString()] = signature;
                    /*history.push({
                       object : address,
                       activity: [],
                       sign: signature
                     });*/
                  }
                  signatures[result.toString()].history.push(data.content);
                  signatures[result.toString()].history.push("logged");
                  localHistory = signatures[result.toString()].history;
                  if(localHistory.lastIndexOf("loggedin")>-1&&data.content=="login"&&(localHistory.lastIndexOf("loggedin")>localHistory.lastIndexOf("loggedout"))){
                    socket.emit("SERVERsendProfileToUserOnCLIENT", {status: true, user: signatures[result.toString()].user});
                  }

                  if(data.content=="augr"&&(localHistory.lastIndexOf("loggedin")>localHistory.lastIndexOf("loggedout"))){
                    socket.emit("SERVERsendAugRProfileToUserOnCLIENT", {status: true, user: signatures[result.toString()].user});
                  }
                  else if((data.content=="augr")&&(localHistory.lastIndexOf("loggedin")<0||localHistory.lastIndexOf("loggedin")<localHistory.lastIndexOf("loggedout"))){
                    socket.emit("SERVERsendAugRProfileToUserOnCLIENT", {status: true, user: profiles["guest"]});
                  }

              }




              /////


              socket.emit("SERVERnodeHasIdentifiedCLIENT", {status: true});
          }
      });

      socket.on("CLIENTrequestLoginForUserOnSERVER", function(data){
        if(data.status){
          console.log(data.user);
          let source = Object.values(profiles);
          let passes = [];
          for(var o=0; o<source.length; o++){
              (function(){
                passes.push(source[o].profilepass);
              })();
          }
          setTimeout(function(){
            let loc = passes.indexOf(data.user.pass);
            if(loc>-1){
              console.log("found it!");
              let choice = source[loc];
              console.log(loc);
              choice.timeStart = (new Date).getTime();
              console.log(choice);

              if(numOfSigns==0){
                  let signature = {
                    object: address,
                    total: result.toString(),
                    browser: result.browser.toString(),
                    engine: result.engine.toString(),
                    os: result.os.toString(),
                    isMobile: result.isMobile(),
                    history: ["logged", "login","loggedin"],
                    user: choice
                  };
                  signatures[result.toString()] = signature;

                  profiles[Object.keys(profiles)[loc]].loggedIn = true;

                  console.log(`signature:`);
                  console.log(signature);
                  socket.emit("SERVERsendProfileToUserOnCLIENT", {status: true, user: choice});
              }
              else{
                  let total = Object.values(signatures);
                  let alreadyConnectedToThis = false;
                  console.log(`existing SIGNATURES ------------------------\n`);
                  console.log(signatures);
                  console.log(`------------------------`);
                  console.log(`current sign ${result.toString()}`);

                  for(var t=0;t<numOfSigns;t++){
                      (function(){
                          if(total[t].total==result.toString()){
                          //if there is a match use it...
                        localHistory = total[t].history;
                        console.log("already connected to this");
                        alreadyConnectedToThis = true;
                      }
                      })();
                  }

                  // ... otherwise create a new signature
                  if(localHistory==null||alreadyConnectedToThis==false){
                      let signature = {
                        object: address,
                        total: result.toString(),
                        browser: result.browser.toString(),
                        engine: result.engine.toString(),
                        os: result.os.toString(),
                        isMobile: result.isMobile(),
                        history: [],
                        user: profiles["guest"]
                      };
                      signatures[result.toString()] = signature;
                  }

                  profiles[Object.keys(profiles)[loc]].loggedIn = true;

                  signatures[result.toString()].history.push("loggedin");
                  signatures[result.toString()].user = choice;
                  localHistory = signatures[result.toString()].history;
                  socket.emit("SERVERsendProfileToUserOnCLIENT", {status: true, user: choice});
                }
            }
            else{
              console.log("user not found :(");
              console.log(passes);
              socket.emit("SERVERrequestAnotherLoginAttemptFromCLIENT", {status: true, });
            }
          }, 100);

        }
      });

      socket.on("CLIENTrequestUserProfileFromSERVER", function(data){
          if(data.status){
              console.log(`requesting profile for ${data.name}...`);
              if(profiles[data.name].loggedIn == true){
                console.log(profiles[data.name]);
                socket.emit("SERVERsendProfileToUserOnCLIENT", {status: true, user: profiles[data.name]});
              }
              else{
                socket.emit("SERVERsendProfileToUserOnCLIENT", {status: true, user: profiles["guest"]});
              }
          }
      });

      socket.on('disconnect', function(){
          console.log(`socket ${socket.id} disconnected.`);
      });
  });

/*}
/**/

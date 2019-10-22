// Include the cluster module
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
      result = new WhichBrowser(req.headers);
      res.render('login.html',{root: dir[0]});
  });

  app.get('/ceo', function(req, res){
      result = new WhichBrowser(req.headers);
      res.render('ceo.html',{root: dir[0]});
  });

  app.get('/guedalia', function(req, res){
      result = new WhichBrowser(req.headers);
      res.render('guedalia.html',{root: dir[0]});
  });

  app.get('/eric', function(req, res){
      result = new WhichBrowser(req.headers);
      res.render('eric.html',{root: dir[0]});
  });

  app.get('/noah', function(req, res){
      result = new WhichBrowser(req.headers);
      res.render('noah.html',{root: dir[0]});
  });

  app.get('/cam', function(req, res){
      result = new WhichBrowser(req.headers);
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
      profilepass: "guest"
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
      profilepass: "james!230NG0LY"
    },
    "guedalia" : {
      index: [1, "guedalia"],
      name: "Guedalia Dina-Lenda",
      profilepic: "gue_profile.png",
      content: {
        youtube : "https://www.youtube.com/channel/UCGbhZq-wHMPHgg-Zdt9hfWw",
        linkedin: "https://www.linkedin.com/",
        instagram: "https://www.instagram.com/",
        whatsapp: "+1 617 855 9966"
      },
      replyto: "gue.acornparkmd@gmail.com",
      profilename: "LaD17",
      profilepass: "l3r0id3MADZIA"
    },
    "eric" : {
      index: [2, "eric"],
      name: "Eric Romano",
      profilepic: "eric_profile.png",
      content: {
        youtube : "https://www.youtube.com/",
        linkedin: "https://www.linkedin.com/",
        instagram: "https://www.instagram.com/",
        whatsapp: "+1 617 855 9966"
      },
      replyto: "ericrom1228@gmail.com",
      profilename: "eromano1",
      profilepass: "Ero122896"
    },
    "noah" : {
      index: [3, "noah"],
      name: "Noah Dagne",
      profilepic: "noah_profile.png",
      content: {
        youtube : "https://www.youtube.com/",
        linkedin: "https://www.linkedin.com/",
        instagram: "https://www.instagram.com/",
        whatsapp: "+1 617 855 9966"
      },
      replyto: "dagne.noah@gmail.com",
      profilename: "dagne.noah",
      profilepass: "p@ssw0rD"
    },
    "cam" : {
      index: [4, "cam"],
      name: "Cameron Reed",
      profilepic: "cam_profile.jpg",
      content: {
        youtube : "https://www.youtube.com/",
        linkedin: "https://www.linkedin.com/",
        instagram: "https://www.instagram.com/",
        whatsapp: "+1 617 855 9966"
      },
      replyto: "chylton@gmail.com",
      profilename: "chylton",
      profilepass: "p@ssw0rD"
    }
  };
  var signatures = {};

  var history = [];

  var lastLength = 0;

  var localHistory = null;
  io.sockets.on('connection', function(socket){
      console.log(socket.conn.remoteAddress);
      var address = {address : socket.conn.remoteAddress};
      console.log(`client connected at ${address.address}`);
      let numOfSigns = Object.keys(signatures).length;

      console.log(`num of signs ${numOfSigns}`);
      if(numOfSigns==0){
        let signature = {
          total: result.toString(),
          browser: result.browser.toString(),
          engine: result.engine.toString(),
          os: result.os.toString(),
          isMobile: result.isMobile(),
          history: [],
          user: profiles["user"]
        };
        signatures[result.toString()] = signature;
        console.log(`signature:`);
        console.log(signature);
      }
      else{

        let total = Object.values(signatures);
        console.log(`SIGNATURES!!!!`);
        console.log(signatures);
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
              user: profiles["user"]
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
                  total: result.toString(),
                  browser: result.browser.toString(),
                  engine: result.engine.toString(),
                  os: result.os.toString(),
                  isMobile: result.isMobile(),
                  history: []
                };
                signatures[result.toString()] = signature;
                console.log(`signature:`);
                console.log(signature);
              }
              else{
                let alreadyConnectedToThis = false;
                let total = Object.values(signatures);
                console.log(`SIGNATURES!!!!`);
                console.log(signatures);
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
                      total: result.toString(),
                      browser: result.browser.toString(),
                      engine: result.engine.toString(),
                      os: result.os.toString(),
                      isMobile: result.isMobile(),
                      history: [],
                      user: profiles["user"]
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
                  if(localHistory.indexOf("loggedin")>-1&&data.content=="login"){
                    socket.emit("SERVERsendProfileToUserOnCLIENT", {status: true, test: "overhere", user: signatures[result.toString()].user});
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
                  console.log(`SIGNATURES!!!!`);
                  console.log(signatures);
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
                        user: profiles["user"]
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

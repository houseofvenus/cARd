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
else {*/

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

  app.get('/', function(req, res){
      var result = new WhichBrowser(req.headers);
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
      var result = new WhichBrowser(req.headers);
      console.log(result.toString());
      if(result.isType('desktop')){
          console.log('This is a desktop computer.');
          deviceType = 'desktop';
      }
      else{
          console.log('This is a mobile device.');
          deviceType = 'mobile';
      }

      res.render('login.html',{root: dir[0]});
  });

  app.get('/ceo', function(req, res){
      var result = new WhichBrowser(req.headers);
      console.log(result.toString());
      if(result.isType('desktop')){
          console.log('This is a desktop computer.');
          deviceType = 'desktop';
      }
      else{
          console.log('This is a mobile device.');
          deviceType = 'mobile';
      }

      res.render('ceo.html',{root: dir[0]});
  });

  app.get('/guedalia', function(req, res){
      var result = new WhichBrowser(req.headers);
      console.log(result.toString());
      if(result.isType('desktop')){
          console.log('This is a desktop computer.');
          deviceType = 'desktop';
      }
      else{
          console.log('This is a mobile device.');
          deviceType = 'mobile';
      }

      res.render('guedalia.html',{root: dir[0]});
  });

  app.get('/eric', function(req, res){
      var result = new WhichBrowser(req.headers);
      console.log(result.toString());
      if(result.isType('desktop')){
          console.log('This is a desktop computer.');
          deviceType = 'desktop';
      }
      else{
          console.log('This is a mobile device.');
          deviceType = 'mobile';
      }

      res.render('eric.html',{root: dir[0]});
  });

  app.get('/noah', function(req, res){
      var result = new WhichBrowser(req.headers);
      console.log(result.toString());
      if(result.isType('desktop')){
          console.log('This is a desktop computer.');
          deviceType = 'desktop';
      }
      else{
          console.log('This is a mobile device.');
          deviceType = 'mobile';
      }

      res.render('noah.html',{root: dir[0]});
  });

  app.get('/cam', function(req, res){
      var result = new WhichBrowser(req.headers);
      console.log(result.toString());
      if(result.isType('desktop')){
          console.log('This is a desktop computer.');
          deviceType = 'desktop';
      }
      else{
          console.log('This is a mobile device.');
          deviceType = 'mobile';
      }

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

  var history = [];

  var lastLength = 0;
  io.sockets.on('connection', function(socket){
      console.log(socket.conn.remoteAddress);
      var address = {address : socket.conn.remoteAddress}
      console.log(`client connected at ${address.address}`);

    /*  console.log(address.headers.host);
      console.log(address.headers.referer);
      console.log(address.headers.time);*/
      //console.log(address);
      if(history.length==0){
        history.push({
           object : address,
           activity: []
         });
      }
      else{
        let logged = false;
        for(var u=0; u<history.length; u++){
          (function(){
            console.log(history[u].object.address);
            if(history[u].object.address==address.address){
              logged = true;
              history[u].activity.push("logged");
            }
          })();
        }
        if(!logged){
          history.push({
            object :address,
            activity: []
          });
        }
        else{
          console.log("already connected to this");
        }
      }
      //var conn = socket;

      // applicationClient sockets

      // client sockets
      socket.on("CLIENTidentifyNodeAsViewerToSERVER", function(data){
          if(data.status){
              console.log(`node connected to network ${data.network}`);
              console.log(`checking out DIA ${data.dia}`);
              console.log(`loading content...\n ${data.content}`);

              for(y=0; y<history.length; y++){
                (function(){
                  let foundOne = false;
                  if(history[y].object.address == socket.handshake.address){
                    for(w=0; w<history[y].activity.length; w++){
                      //let last = history[y].activity.length-1;
                      if(history[y].activity[w]=="loggedin"&&data.content=="login"){
                        //history[y].activity.push(data.content);
                        foundOne = true;
                      }
                    }
                    if(foundOne){
                      history[y].activity.push("redirect-loggedin");

                      console.log(history[y].object.address);
                      console.log(history[y].activity);

                      console.log("sending user directly to page they are already logged into");
                      console.log(socket.id);
                      socket.emit("SERVERsendProfileToUserOnCLIENT", {status: true, user: history[y].object.USER});
                    }
                    else{
                      history[y].activity.push(data.content);
                      console.log(history[y].object.address);
                      console.log(history[y].activity);
                    }
                  }
                })();
              }

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
              console.log(choice);
            /*  for(z=0; z<history.length;z++){
                (function(){*/
                  history[loc].activity.push("loggedin");
                  history[loc].object.USER = choice;
            /*    })();
          }*/
              //history
              socket.emit("SERVERsendProfileToUserOnCLIENT", {status: true, user: choice});
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
              console.log(profiles[data.name]);
              socket.emit("SERVERsendProfileToUserOnCLIENT", {status: true, user: profiles[data.name]});
          }
      });

      socket.on('disconnect', function(){
          console.log(`socket ${socket.id} disconnected.`);
      });
  });

/*}
/**/

function init(){
    buildExperience();
    connectNodeToNetwork();
}

var sessionManager = null;

document.addEventListener("DOMContentLoaded", function(){
    //console.log("Hello world");
    init();
});

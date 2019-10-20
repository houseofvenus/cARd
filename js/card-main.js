function init(){
    buildExperience();
    connectNodeToNetwork("ceo");
}

var sessionManager = null;

document.addEventListener("DOMContentLoaded", function(){
    //console.log("Hello world");
    init();
});

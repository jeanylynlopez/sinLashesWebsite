// NAME SPACING

const app = {}

// BOOTSTRAP STUFF

app.bootstrap = function(){
    // CAROUSEL
    $('.carousel').carousel({
        interval: 1000,
        keyboard: true, 
    })

}

// INITIALIZATION

app.init = function(){
    app.bootstrap();
}

// DOC READY

$(function(){
    app.init();
})


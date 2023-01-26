window.onload = (event) => {
    update();
}

window.onresize = (event) => {
    update();
}

function update() {
    let width = $(window).width();
    $('#img').attr('src', width < 480 ? 'img/phone.png' : width < 768 ? 'img/tablet.png' : 'img/Mac.png')
    $('#code').css('display',  width >= 480 ? 'flex' : 'none')
}
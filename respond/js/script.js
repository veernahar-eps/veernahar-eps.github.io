window.onload = (event) => {
    update();
}

window.onresize = (event)=>{
    update();
}

function update(){
    console.log("update")

    let width = $(window).width();
    if(width < 480){
        document.getElementById("img").src = 'img/phone.png'
    }else if(width < 768){
        document.getElementById("img").src = 'img/tablet.png'
    }else{
        document.getElementById("img").src = 'img/Mac.png'
    }
}
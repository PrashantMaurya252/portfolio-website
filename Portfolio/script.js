function firstPageAnime(){
    var tl=gsap.timeline();

    tl.from('#nav',{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut,
    })

    .to('.boundingElem',{
        y:'0',
        duration:2,
        ease:Expo.easeInOut,
        stagger:.2,
    })

}

function circleMouseFollower(){
    window.addEventListener('mousemove',function(dets){
        document.querySelector('#minicircle').style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
    })
}

circleMouseFollower();
firstPageAnime();
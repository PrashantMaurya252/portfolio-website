

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

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
        delay:-1,
    })

    .from('#herofooter',{
        y:0,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut,
    })


}
function circleChaptaKaro(){

    //define default scale value
    var xscale=1
    var yscale=1;

    var xprev=0;
    var yprev=0;

    window.addEventListener('mousemove',function(dets){
        var xdiff= dets.clientX-xprev;
        var ydiff= dets.clientY-yprev;
        xprev=dets.clientX;
        yprev=dets.clientY;

        xscale=gsap.utils.clamp(0.8,1.2,xdiff);
        yscale=gsap.utils.clamp(0.8,1.2,ydiff);

        circleMouseFollower(xscale,yscale);
    })
}

function circleMouseFollower(xscale,yscale){
    window.addEventListener('mousemove',function(dets){
        document.querySelector('#minicircle').style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`
    })
}

circleMouseFollower();
firstPageAnime();
circleChaptaKaro();


document.querySelectorAll(".elem").forEach(function(elem){
    var rotate=0;
    var diffrot=0;
    elem.addEventListener('mouseleave',function(dets){
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: Power3,
        
          
        })
    })
    elem.addEventListener('mousemove',function(dets){
        var diff=dets.clientY- elem.getBoundingClientRect().top
        diffrot=dets.clientX-rotate;
        rotate=dets.clientX;
        gsap.utils.clamp(-20,20,diffrot)
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            top:diff,
            left:dets.clientX,
            rotate:gsap.utils.clamp(-20,20,diffrot*0.5)
          
        })
    })
})
var csr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    csr.style.left = dets.x+"px"
    csr.style.top = dets.y+"px"
})

gsap.to("#nav",{
    backgroundColor:"#040720",
    height: "100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start: " top -10%",
        end:"top -11%",
        scrub:1
    }
    
})
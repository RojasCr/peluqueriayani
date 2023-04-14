const trabajos = document.getElementById("trabajos");
const siguienteBtn = document.getElementById("siguiente");
const anteriorBtn = document.getElementById("anterior");
const fondo = document.getElementById("fondo");
const contfondo = document.getElementById("contenedor_fondo");
const nosotros = document.getElementById("nosotros");

const volverInicioBtn = document.getElementById("volverInicio");

const trabajosAnimation = () => {
    const trabajosHeight = trabajos.offsetTop;
    const diferencia = trabajosHeight - scrollY;

    if(diferencia<window.innerHeight-150){
        trabajos.style.animation = "apareceIzquierda 2s linear forwards";
    } /*else{
        trabajos.style.animation = "desapareceIzquierda 2s linear forwards";
        
    }*/
}

const nosotrosAnimation = () => {
    const nosotrosHeight = nosotros.offsetTop;
    const diferencia = nosotrosHeight - scrollY;
    
    if(diferencia<window.innerHeight-120){
        nosotros.style.animation = "apareceAbajo 2s linear forwards";
    }/* else{
        nosotros.style.animation = "desapareceAbajo 2s linear forwards";
        
    }*/
}


window.addEventListener("scroll", () => {
    trabajosAnimation();
    nosotrosAnimation();
})

volverInicioBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("volvio")
    window.scrollTo({top: 0, behavior: "smooth"});
})

// fondo.addEventListener("load", () => {
//     //fondo.style.animation = "aparece 2s linear forwards"
//     fondo.style.opacity = "0.5"
// })

let fondos = 1;

siguienteBtn.addEventListener("click", () => {
    // fondo.style.animationName="none"
    fondo.style.animationName = "desapareceIzquierda";
    
    if(fondos === 1){
        fondos++ 
        
        
        //fondo.style.animationPlayState="running"
        setTimeout(() => {
            fondo.src = `./images/fondo${fondos}.jpg`;
            fondo.style.animationName = "apareceIzquierda";
        }, 2000)
        
        //fondo.style.animationName = "5s"
        return
    }
    
    if(fondos === 2){
        fondos++;
        //fondo.style.animationName = ""
        setTimeout(() => {
            fondo.src = `./images/fondo${fondos}.jpeg`;
            fondo.style.animationName = "apareceIzquierda";
        }, 2000)
    
        return;
    }

    if(fondos === 3){
        fondos = 1;
        //fondo.style.animationName = ""
        setTimeout(() => {
            fondo.src = `./images/fondo${fondos}.jpg`;
            fondo.style.animationName = "apareceIzquierda";
        }, 2000)
    
        return;
    }
})


anteriorBtn.addEventListener("click", () => {
    // fondo.style.animationName="none"
    fondo.style.animationName = "desapareceIzquierda";
    if(fondos === 3){
        fondos-- 
        
        
        //fondo.style.animationPlayState="running"
        setTimeout(() => {
            fondo.src = `./images/fondo${fondos}.jpg`;
            fondo.style.animationName = "apareceIzquierda";
        }, 2000)
        
        //fondo.style.animationName = "5s"
        return
    }
    
    if(fondos === 2){
        fondos--;
        //fondo.style.animationName = ""
        setTimeout(() => {
            fondo.src = `./images/fondo${fondos}.jpg`;
            fondo.style.animationName = "apareceIzquierda";
        }, 2000)
    
        return;
    }

    if(fondos === 1){
        fondos = 3;
        //fondo.style.animationName = ""
        setTimeout(() => {
            fondo.src = `./images/fondo${fondos}.jpg`;
            fondo.style.animationName = "apareceIzquierda";
        }, 2000)
    
        return;
    }
})

const d = document;
const boton = d.getElementById("button");
const input = d.getElementById("pass");
const img = d.getElementById("sorpresa");
const secret_p = d.getElementById("secret");

const yo = "XMAS";

const cambioImagen = () =>{
    img.src = './img/Marcos.jpg';
    img.style.width = '300px';
    img.style.height = '300px';
    img.style.borderRadius = '15px';
    secret_p.style.visibility = "visible";
};

boton.addEventListener("click", (e)=>{
    if (input.value == "") {
        alert("Completa el campo")
    } else {
        if(input.value != yo){
            alert("Clave Incorrecta")
        }else{
            cambioImagen();
        }
    }
    e.preventDefault();
});




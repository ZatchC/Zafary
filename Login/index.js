const boton = window.document.querySelector('#boton')

boton.addEventListener      ('click', mostrarDato);


function mostrarDato () {

   const correo = window.document.querySelector('#email')
   const textoinput = correo.value;

   if (textoinput === 'Xatch.cc@hotmail.com'){   
    console.log('puedes ingresar')
   } else{
    console.log('NO puedes ingresar')
   }
  
   const clave = window.document.querySelector('#password')
   const textoinput2 = clave.value;

   if (textoinput2 === 'Completoitaliano'){   
    console.log('puedes ingresar')
   } else{
    console.log('NO puedes ingresar')
   }
   

}

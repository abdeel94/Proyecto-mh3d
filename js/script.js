// validacion contacto

(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

//Jquery acceso 
$(document).ready(function(){
    $("#myModal").validate({
        rules: {
            forma_usuario: {
              required: true,
              email: true
            },
            forma_contraseña:{
                required:true,
                minlength:6,
                maxlength:14
            }

         },
         messages:{
             forma_usuario: {
                 required: "Por favor ingrese su e-mail de usuario",
                 email:"El correo no es válido"
             },
             forma_contraseña:{
                 required: "Introduzca la contraseña",
                 minlegth: "Minimo 6 caracteres",
                 maxlength: "Máximo 14 caracteres"

             }
                
           }

    });
});
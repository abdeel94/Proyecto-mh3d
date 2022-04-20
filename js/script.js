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
    $("#submit").click(function (){
        var forma_usuario = $("#forma_usuario").val();
        var forma_contraseña =$("#forma_contraseña").val();
        
        if(forma_usuario.length == "")
        {
            $("#p1").text("Por favor ingresa tu correo electronico");
            $("#forma_usuario").focus();
            return false;
        }
        else if (forma_contraseña.length==""){
            $("#p2").text("Por favor ingresa tu contraseña");
            $("#forma_contraseña").focus();
            return false;
        }
    });
});
        
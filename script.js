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

//jquery

$(function() {

    $("form[name='registro']").validate({

      rules: {

        registronombre: {
            required: true,
            minlength: 4,
            maxlength : 8

        },

        registromail: {
          required: true,
          email: true
        },
        registropassword: {
          required: true,
          minlength: 4
        },

        registrorepeatpass: {
            required: true,
            equalTo: "#registropassword"
        }
        },

      messages: {
        registronombre: {
            required: "Ingrese un nombre.",
            minlength: "El nombre no puede tener menos de 4 carácteres.",
            maxlength : "El nombre no puede tener más de 8 carácteres."

        },
        registropassword: {
          required: "Ingrese una contraseña.",
          minlength: "La contraseña debe tener mas de 4 carácteres."
        },
        registromail: "Ingrese un email válido.",

          registrorepeatpass:"La contraseña debe ser igual al campo anterior."
      },
 
      submitHandler: function(form) {
        form.submit();
      }
      
    });
  });

  $(function() {

    $("form[name='acceso']").validate({

      rules: {

        accesoemail: {
            required: true,
            email: true

        },

        accesopassword: {
          required: true,
          minlength: 4
        }
      },

      messages: {
          accesopassword: {
          required: "Ingrese una contraseña.",
          minlength: "La contraseña debe tener mas de 4 carácteres."
        },
        accesoemail: "Ingrese un email válido."
       
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });

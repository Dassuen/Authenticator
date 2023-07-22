// Função para tratar o envio do formulário de registro
$("body").on('submit',"#registerForm", function(event){
    event.preventDefault();
    var email = $('input[name="email"]').val();
    var password = $('input[name="password"]').val();
    console.log("ENTROU")
    // Criar novo usuário com email e senha
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Registro bem-sucedido
            console.log('Registro bem-sucedido:', userCredential.user);
            // Redirecionar para a página de login após o registro
            //window.location.href = '<?php echo base_url("login"); ?>';
        })
        .catch((error) => {
            // Tratar erros de registro
            console.error('Erro de registro:', error.message);
        });
});
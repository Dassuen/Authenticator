// Função para tratar o envio do formulário de login
$("body").on('submit',"#loginForm", function(event){
    event.preventDefault();
    var email = $('input[name="email"]').val();
    var password = $('input[name="password"]').val();
    console.log("ENTROU")
    // Criar novo usuário com email e senha
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
});


// Botões de autenticação
const btnGithub = document.querySelector('.btn-github');
const btnGoogle = document.querySelector('.btn-google');

// Função para autenticação com o GitHub
btnGithub.addEventListener('click', () => {
    var provider = new firebase.auth.GithubAuthProvider();

    // Fazer login com o GitHub
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var token = credential.accessToken;

        // The signed-in user info.
        var user = result.user;
        // IdP data available in result.additionalUserInfo.profile.
            // ...
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
});

// Função para autenticação com o Google
btnGoogle.addEventListener('click', () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    // Fazer login com o Google
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // IdP data available in result.additionalUserInfo.profile.
            // ...
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
});
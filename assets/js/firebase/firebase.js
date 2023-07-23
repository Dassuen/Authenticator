
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_AUTH_DOMAIN",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_STORAGE_BUCKET",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID"
};
// Inicialização do Firebase
const app = firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Obter instância de autenticação
var auth = firebase.auth();
firebase.auth().languageCode = 'pt-Br';

// Função para fazer logout
function logout() {
    auth.signOut()
        .then(function() {
            // Logout bem-sucedido
            window.location.href = 'login';
        })
        .catch(function(error) {
            // Tratar erros de logout
            console.error(error);
        });
}
var loggedIn = false;
var visitantesPagina = 0;

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verifica se o usuário e senha estão corretos
    if (checkCredentials(username, password)) {
        loggedIn = true;
        showContent();
    } else {
        if (!checkUser(username)) {
            alert("Usuário incorreto. Por favor, tente novamente.");
        } else {
            alert("Senha incorreta. Por favor, tente novamente.");
        }
    }
});

// Verifica se as credenciais são válidas
function checkCredentials(username, password) {
    // Lista de usuários e senhas corretas
    var users = [
        { username: "usuario1", password: "senha1" },
        { username: "usuario2", password: "senha2" },
        { username: "usuario3", password: "senha3" }
    ];

    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            return true;
        }
    }
    return false;
}


function checkUser(username) {
    var users = [
        { username: "Vicente", password: "7392" },
        { username: "João", password: "9876" },
        { username: "usuario3", password: "senha3" }
    ];

    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            return true;
        }
    }
    return false;
}

function showContent() {
    if (loggedIn) {
        document.getElementById("loginContainer").classList.add("hidden");
        document.getElementById("adminContainer").classList.remove("hidden");
    } else {
        document.getElementById("loginContainer").classList.remove("hidden");
        document.getElementById("adminContainer").classList.add("hidden");
    }
}

var users = [
    { username: "Vicente", password: "7392" },
    { username: "João", password: "9876" },
    { username: "usuario3", password: "senha3" }
];

function addUser() {
    var adminPassword = prompt("Digite a senha de administrador:");
    if (adminPassword === "admin123") {
        var newUsername = prompt("Digite o nome de usuário:");
        var newPassword = prompt("Digite a senha:");

        
        users.push({ username: newUsername, password: newPassword });
        
        alert("Novo usuário adicionado com sucesso!");
    } else {
        alert("Acesso negado");
    }
}


document.getElementById("viewLogsLink").addEventListener("click", function(event) {
    event.preventDefault();

    visitantesPagina++;
    alert(`Número de visitantes na página de logs: ${visitantesPagina}`);
});


window.onload = function() {
    showContent();
    
};
document.getElementById("manageReportsLink").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Relatórios não disponíveis.");
});

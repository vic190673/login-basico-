window.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'u') {
        alert('O acesso ao código fonte está bloqueado.');
        e.preventDefault(); 
    }
});

window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert('O acesso às ferramentas de desenvolvedor está bloqueado.');
});

window.addEventListener('keydown', function(e) {
    if ((e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) || (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j'))) {
        e.preventDefault();
        alert('O acesso às ferramentas de desenvolvedor está bloqueado.');
    }
});
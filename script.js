document.addEventListener("DOMContentLoaded", function() {
    // Simulação de dados (pode ser substituído por entrada de usuário)
    const name = "João da Silva";
    const profession = "Desenvolvedor Web";
    const description = "Criando soluções digitais inovadoras.";
    const linkedinUrl = "https://linkedin.com/in/seuperfil";
    const githubUrl = "https://github.com/seuperfil";
    const emailUrl = "mailto:seuemail@exemplo.com";

    // Preenchendo os campos do cartão
    document.getElementById('name').textContent = name;
    document.getElementById('profession').textContent = profession;
    document.getElementById('description').textContent = description;
    document.getElementById('linkedin').href = linkedinUrl;
    document.getElementById('github').href = githubUrl;
    document.getElementById('email').href = emailUrl;
});

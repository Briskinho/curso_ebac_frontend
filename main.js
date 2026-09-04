$(document).ready(function() {
    $('#btn-buscar-github').click(function() {
        const username = $('#github-username').val();
        
        if(username.length === 0) {
            alert('Por favor, digite um usuário.');
            return;
        }

        const endpoint = `https://api.github.com/users/${username}`;
        const botao = $(this);
        
        botao.find('i').removeClass('bi-search').addClass('spinner-border spinner-border-sm');

        fetch(endpoint)
            .then(function(resposta) {
                if (!resposta.ok) {
                    throw new Error('Usuário não encontrado no GitHub.');
                }
                return resposta.json();
            })
            .then(function(json) {
                // Injetando os dados retornados nos IDs
                $('#avatar').attr('src', json.avatar_url);
                $('#name').text(json.name); 
                $('#username').text(`@${json.login}`);
                $('#repos').text(json.public_repos);
                $('#followers').text(json.followers);
                $('#following').text(json.following);
                $('#profile-link').attr('href', json.html_url);

                // alterar telas
                $('#search-screen').addClass('d-none').removeClass('d-flex');
                $('#profile-screen').removeClass('d-none');
            })
            .catch(function(erro) {
                alert(erro.message);
            })
            .finally(function() {
                botao.find('i').removeClass('spinner-border spinner-border-sm').addClass('bi-search');
            });
    });

    // Função para voltar à tela inicial
    $('#btn-nova-busca').click(function() {
        $('#profile-screen').addClass('d-none');
        $('#search-screen').removeClass('d-none').addClass('d-flex');
        $('#github-username').val('');
    });
});
$('form').on('submit', function(e) {
    e.preventDefault();

    const nomeTarefa = $('#nome-nova-tarefa').val();
    const novaTarefa = $(`
        <li>
            <span>${nomeTarefa}</span>
            <button class="remover-tarefa">Excluir</button>
        </li>
    `);
    
    novaTarefa.find('span').on('click', function () {
        $(this).toggleClass('completed');
    });

    novaTarefa.find('.remover-tarefa').on('click', function () {
        $(this).parent().remove();
    });

    $('ul').append(novaTarefa);

    $('#nome-nova-tarefa').val('');
})
const form = document.getElementById('form-tarefas');
let linhas = " ";
const tarefas = [];


$('form').on('submit', function(e){
    e.preventDefault();
    const tarefa = $('inserir-tarefa').val();

    adicionaLinha();
    atualizaTabela();
})





function adicionaLinha(){
    const tarefa = document.getElementById('inserir-tarefa');
    

    if(tarefas.includes(tarefa.value)){
        alert(`A Tarefa: ${tarefa.value} já foi inserido.`);
    }

    else{
        tarefas.push(tarefa.value);
        print(`${tarefas}`)

        let linha = '<tr>';
        linha += `<li> ${tarefa.value}</li>`;
        linha += `</tr>`;

        linhas += linha;
    }

    tarefa.value = '';
    
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}



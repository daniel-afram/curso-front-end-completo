let itens = [];

document.querySelector('input[type=submit]')
.addEventListener('click', ()=>{
    let nomeProduto = document.querySelector('input[name=nome_produto]');
    let precoProduto = document.querySelector('input[name=valor_produto]');

    itens.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });

    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;
    listaProdutos.innerHTML = "";
    itens.map(function(val){
        soma += parseFloat(val.valor);
        listaProdutos.innerHTML+= 
        `
        <div class="lista-produtos-single">
            <h3>` +val.nome+ `</h3>
            <h3 class="preco-produto"><span>R$ ` +val.valor+ `</span></h3>
        </div>
        `
    });
    soma = soma.toFixed(2);
    nomeProduto = "";
    precoProduto = "";

    let somaTotal = document.querySelector('.soma-produto h1');
    somaTotal.innerHTML = 'Total R$ ' + soma;
});

document.querySelector('button[name=limpar]')
.addEventListener('click', ()=>{
    itens = [];
    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML = "Total R$ 0";
});
var quantidadeDeParagrafos = document.getElementsByTagName('p');

//alert(quantidadeDeParagrafos.length);

quantidadeDeParagrafos[0].innerHTML = 'Manipulado via JS!';

for (var i = 0; i < quantidadeDeParagrafos.length; i++) {
    quantidadeDeParagrafos[i].innerHTML = 'Manipulado via JS - ' + i;
}
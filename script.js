window.addEventListener('load', function() {
    var ola =  'Olá Mundo!';
    var elementH1 = document.createElement('h1');

    console.log(ola);
    window.alert(ola);
    elementH1.appendChild(document.createTextNode(ola));
    document.getElementById('container').appendChild(elementH1);
})
window.addEventListener('load', function() {
    var ola =  'Olá Mundo!';
    var elementH1   = document.createElement('h1'); // Cria a tag <h1>
    var square      = document.createElement('div');
    var container   = document.getElementById('container');

    container.style.position = "relative";
    square.style.position = 'absolute';
    square.className = 'square';
    square.style.left = 0;
    square.style.top = '14em';

    console.log(ola);
    window.alert(ola);


    elementH1.appendChild(document.createTextNode(ola));
    container.appendChild(elementH1);
    container.appendChild(square);

    moveSquare(square);

})

function moveSquare(square){
    let position = 0;
    let speed = 1;
    setInterval(function(){
        square.style.left = (position+=speed) + 'px';
        if(position <=0 || position >= (window.innerWidth-square.offsetWidth)){
            speed *= -1;
        }

    }, 5);
    
}
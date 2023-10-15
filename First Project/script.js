const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(ali){
        console.log(ali);
        console.log(ali.target);
        if(ali.target.id === 'green'){
            body.style.backgroundColor = ali.target.id;
        }
        if(ali.target.id === 'pink'){
            body.style.backgroundColor = ali.target.id;
        }
        if(ali.target.id === 'white'){
            body.style.backgroundColor = ali.target.id;
        }
        if(ali.target.id === 'blue'){
            body.style.backgroundColor = ali.target.id;
        }
        if(ali.target.id === 'yellow'){
            body.style.backgroundColor = ali.target.id;
        }
    });
});
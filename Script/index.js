document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();

    const inputNumber = document.getElementById('input-number').value;
    const inputPin = document.getElementById('input-pin').value;

    if(inputPin === '1234'){
        window.location.href = './home.html'
    }
    else{
        alert('Please Provide Your Valid Info')
    }
})
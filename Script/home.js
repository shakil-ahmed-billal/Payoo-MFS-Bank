document.getElementById('add-amount').addEventListener('click', function(event){
    event.preventDefault();

    const inputPin = document.getElementById('input-pin').value;
    let inputAmount = document.getElementById('input-amount').value;
    
    
    if(inputPin === '1234'){
        const inputNewAmount = parseFloat(inputAmount);

        let balance =document.getElementById('account-blc').innerText;
        const newAcBalance = parseFloat(balance)

        const newBalance = inputNewAmount + newAcBalance ;
        document.getElementById('account-blc').innerText = newBalance;
        
    }
    else{
        alert('Please Provide Your Valid Info')
    }
})
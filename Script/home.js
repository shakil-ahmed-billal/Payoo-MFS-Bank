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

// cash out function add ..
document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashPin = document.getElementById('cash-out-pin').value;
    let cashOut = document.getElementById('cash-out-amount').value;

    if(cashPin === '1234'){
        const inputCashOut = parseFloat(cashOut);

        let cashBalance = document.getElementById('account-blc').innerText;
        const newCashBalance = parseFloat(cashBalance);
        const accountBalance = newCashBalance - inputCashOut ;
        document.getElementById('account-blc').innerText = accountBalance;

    }
    else{
        alert('Please Provide Your Valid Info')
    }
})
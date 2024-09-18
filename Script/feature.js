// paypoo feature function add ,,,,,,,,,,,,
//show cash out form section.......
document.getElementById('cash-out-button').addEventListener('click', function(){
    // show  cash out feature 
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-fund-form').classList.add('hidden')
})

// show add form button ........

document.getElementById('add-funds-btn').addEventListener('click', function(){

    // show add funds form
    document.getElementById('add-fund-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden')

})
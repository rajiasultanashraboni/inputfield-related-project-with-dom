document.getElementById('calculate')
.addEventListener('click',function(){
    
    // console.log('calculate button clicked')
    const income = inputFieldValueById('income');
    const software = inputFieldValueById('software');
    const courses = inputFieldValueById('courses');
    const internet = inputFieldValueById('internet');

    // console.table({income,software,courses,internet})

    const totalExpenses = software+courses+internet;
    const balance = income-totalExpenses;
    // console.log(totalExpenses,balance)

    // show expenses and balance 

    const showTotalExpenses = inputTextValueById('total-expenses');
    // console.log(showTotalExpenses)
    document.getElementById('total-expenses').innerText = totalExpenses.toFixed(2);
    const showTotalbalance = inputTextValueById('balance');
    // console.log(showTotalbalance)
    document.getElementById('balance').innerText = balance.toFixed(2);

    const result = document.getElementById('results');
    result.classList.remove('hidden');

    // history section 

    const div = document.createElement('div');
    div.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500";

    div.innerHTML=`
        <p class = "text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
        <p class = "text-xs text-gray-500">Income: ${income.toFixed(2)}</p>
        <p class = "text-xs text-gray-500">expense: ${totalExpenses.toFixed(2)}</p>
        <p class = "text-xs text-gray-500">Balance: ${balance.toFixed(2)}</p>
        
    `
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(div,historyContainer.firstChild);
    
})


// add event listeners for savings 

document.getElementById('calculate-savings').addEventListener('click',function(){
    // console.log('test')

    // console.log(savings)
    const income = inputFieldValueById('income');
    const software = inputFieldValueById('software');
    const courses = inputFieldValueById('courses');
    const internet = inputFieldValueById('internet');
    const totalExpenses = software+courses+internet;
    const balance = income-totalExpenses;
    
    const savings = inputFieldValueById('savings');
    const savingsAmount = (savings*balance)/100;
    // console.log(savingsAmount)

    const SavingsAmountShow = inputTextValueById('savings-amount');
    document.getElementById('savings-amount').innerText = savingsAmount.toFixed(2);
    // console.log(SavingsAmountElement)

    const remainingAmount = balance-savingsAmount;
    // console.log(remainingAmount);

    // show remaining amount 

    const showRemainingAmount = inputTextValueById('remaining-balance');
    document.getElementById('remaining-balance').innerText = remainingAmount



})
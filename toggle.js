document.getElementById('history-tab')
.addEventListener('click',function(){
    document.getElementById('history-tab').classList.add('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

    document.getElementById('assistant-tab').classList.remove('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

    // hide expense form 
    const expenseForm = document.getElementById('expense-form');
    expenseForm.classList.add('hidden');

    const showResults= document.getElementById('results');
    showResults.classList.remove('hidden')

    // show history section 

    const historySection = document.getElementById('history-section');
    historySection.classList.remove('hidden')
});


document.getElementById('assistant-tab')
.addEventListener('click',function(){
    document.getElementById('assistant-tab').classList.add('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

    document.getElementById('history-tab').classList.remove('text-white', 'font-semibold', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

    const expenseForm = document.getElementById('expense-form');
    expenseForm.classList.remove('hidden');

    


});
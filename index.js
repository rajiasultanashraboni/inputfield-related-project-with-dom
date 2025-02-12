document.getElementById('calculate')
.addEventListener('click',function(event){
    event.preventDefault();
    // console.log('calculate button clicked')
    const income = inputFieldValueById('income');
    const software = inputFieldValueById('software');
    const courses = inputFieldValueById('courses');
    const internet = inputFieldValueById('internet');

    // console.table({income,software,courses,internet})
    
})
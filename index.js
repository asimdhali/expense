// getting all the value


// add event listener for calculate button
const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function(){
    const income = parseFloat(document.getElementById("income").value);
    const sofware = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);
    // console.table({income, sofware, courses, internet})

    const totalExpenses = sofware + courses + internet
    const balance = income - totalExpenses;
    // console.table({totalExpenses, balance})


    const totalExpenseElement = document.getElementById('total-expenses');
    totalExpenseElement.innerText = totalExpenses.toFixed(2);

    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);


    // Result
    const result = document.getElementById('results');
    result.classList.remove('hidden');
})


// add event listener for savings button
const calculateSavingsBtn = document.getElementById('calculate-savings');
calculateSavingsBtn.addEventListener('click', function(){
    const income = parseFloat(document.getElementById("income").value);
    const sofware = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);


    const savingsParcentage = parseFloat(document.getElementById('savings').value);
    // console.log(typeof savingsParcentage);

    const totalExpenses = sofware + courses + internet
    const balance = income - totalExpenses;

    const savingsAmount = (savingsParcentage * balance) / 100;
    // console.log(savingsAmount)

    const remainingBalance = balance -savingsAmount;

    const savingsElement = document.getElementById('savings-amount');
    savingsElement.innerText = savingsAmount.toFixed(2);

    const remainingElement = document.getElementById('remaining-balance');
    remainingElement.innerText = remainingBalance.toFixed(2);
})
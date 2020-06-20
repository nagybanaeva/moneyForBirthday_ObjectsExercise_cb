var budget = {
    'income': 8000,
    'expenses': 5952,
    'savings': function() {
        alert('Your recent savings: ' + (budget.income - budget.expenses));
    }
};
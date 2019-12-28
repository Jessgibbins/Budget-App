// BUDGET CONTROLLER

const budgetController = (function() {

    

})();



// UI CONTROLLER

const UIController = (function() {

    return {
        getInput: function() {
            return {
                type: document.getElementsByClassName('.add__type').nodeValue, // Will be either inc or exp
                description: document.getElementsByClassName('add__description').value,
                value: document.getElementsByClassName('.add__value').value
            };
        }
    };

})();



// GLOBAL APP CONTROLLER

const controller = (function(budgetCtrl, UICtrl) {

    let ctrlAddItem = function() {

        // 1. Get the field input data
        let input = UICtrl.getInput();
        console.log(input);

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    })

})(budgetController, UIController);
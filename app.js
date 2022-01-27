var stockName = document.querySelector("#stocks");
var initialPrice = document.querySelector("#initial-price");
var qty = document.querySelector("#quantity");
var currPrice = document.querySelector("#current-price");
var btn = document.querySelector("#submit");
var output = document.querySelector("#output-box");

function profitOrLoss(stocks, initial, quantity, current) {
    if (initial < 1 || quantity < 1 || current < 1) {
        // incorrect input 
        giveMsg(`please enter all the input!`)

    } else {
        if (initial > current) {
            // loss 
            var loss = (initial - current) * quantity;
            var percent = (((initial - current) / initial) * 100).toFixed(2);
            var flag = 1;
            giveMsg(`your ${stocks} made you a loss of ${loss} i.e ${percent}%`, flag);

        } else if (initial < current) {
            // profit 
            var profit = (current - initial) * quantity;
            var percent = (((current - initial) / initial) * 100).toFixed(2);
            var flag = 2;
            giveMsg(`yayy....your ${stocks} made a profit of ${profit} i.e ${percent}%`, flag);
        } else {
            // no profitOrLoss,loss 
            var flag = 0;
            giveMsg(`no pain no gain and.....that's a pain`, flag)
        }
    }
}

btn.addEventListener("click", eventHandler);

function eventHandler() {
    var initPrice = Number(initialPrice.value);
    var amount = Number(qty.value);
    var cp = Number(currPrice.value);
    var stock = stockName.value;
    profitOrLoss(stock, initPrice, amount, cp);

}


function giveMsg(message, val) {
    switch (val) {
        case (1):
            output.innerText = message;
            output.style.color = 'red';

            break;
        case (2):
            output.innerText = message;
            output.style.color = 'green';
            break;
            case (0):
            output.innerText = message;
            output.style.color = 'blue';
            break;
            

        default:
            output.innerText = message;
            output.style.color = '';
            break;
    }
}
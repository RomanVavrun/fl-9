function userCard(number) {

    let balance = 100;
    let transactionLimit = 100;
    let key = number;

    function getCardOptions() {
        console.log(
            'balance: ' + this.balance + '\n',
            'transactionLimit: ' + this.transactionLimit + '\n',
            'historyLogs: ' + this.historyLogs() + '\n',
            'key: ' + this.key + '\n'
        );
    }

    function putCredits(sum) {
        this.balance + sum;
        let now = new Date().toISOString()
        historyLogs('Withdrawal of credits ', now)
    }

    function takeCredits(sum) {
        let maxCredits = transactionLimit + balance;
        if (sum > maxCredits) {
            return console.log('You dont have such more Credits! ');
        } else {
            balance - sum;
        }
        let now = new Date().toISOString()
        historyLogs('Received credits ', now)
    }

    function setTransactionLimit(maxTransactionLimit) {
        this.maxTransactionLimit = maxTransactionLimit;
        let now = new Date().toISOString()
        historyLogs('Transaction limit change', now, transactionLimit)
    }

    function transferCredits(sum, card) {
        let taxProcent = 0.5;
        let onehundred = 100;
        let taxes = sum / onehundred;
        taxes * taxProcent;

        if (this.takeCredits(sum + taxes)) {
            return console.log('You dont have such more Credits!');
        }
        card.putCredits(sum);
    }

    function historyLogs(operationType, data) {
        let operationTypes = [];
        let now = data;
        this.operationTypes += operationType;
        console.log(
            'operationType: ' + operationTypes + ',',
            'credits: ' + balance + ',',
            'operationTime: ' + now
        )

    }

}

function UsereAccount(name) {
    this.name = name;
    this.card = [];

    function addCard(index) {
        this.card += userCard(index);
    }
}

//  full version
// function takeCredits(sum) { // 150
//     let maxCredits = transactionLimit + balanse;
//     if (sum > maxCredits) {
//         console.log('You dont have such more Credits!');
//         return;
//     } else if (sum > balanse) {
//         sum -= balanse;
//         balanse -= balanse;
//         transactionLimit -= sum; 
//     } else {
//         balanse -= sum;
//     }
const operationsPanel = new Operation('.add-transaction','.delete-transaction','.light','.dark','.add-transaction-panel','.transaction')
operationsPanel.run()


const addTransaction = new Add ('.save','.cancel','#name','#amount','#category')
addTransaction.run()


const createOperation = new Creator('.income-area','.expenses-area','.available-money','.delete');
createOperation.run()


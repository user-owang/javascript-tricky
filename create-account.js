function createAccount(pin, amount) {
  let correctPin = pin;
  let balance = amount;

  const checkBalance = (guess) => {
    if (guess !== correctPin) return "Invalid PIN.";
    return `Current balance: $${balance}`;
  };

  const deposit = (guess, cash) => {
    if (guess !== correctPin) return "Invalid PIN.";
    balance += cash;
    return `Succesfully deposited $${cash}. Current balance: $${balance}.`;
  };

  const withdraw = (guess, cash) => {
    if (guess !== correctPin) return "Invalid PIN.";
    if (cash > balance) return "Insufficient funds. Transaction cancelld";
    balance -= cash;
    return `Succesfully withdrew $${cash}. Current balance: $${balance}.`;
  };

  const changePin = (old, change) => {
    if (old !== correctPin) return "Invalid PIN.";
    correctPin = change;
    return "PIN successfully changed!";
  };

  return {
    checkBalance,
    deposit,
    withdraw,
    changePin,
  };
}

module.exports = { createAccount };

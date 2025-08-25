const validPin = 1234;

document.getElementById("add-money-btn").addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Add money button clicked");

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const pinNumber = document.getElementById("pin-number").value;


  // if(bank === ""){
  //  alert("Please select a bank");
  //  return;
  // }

    if(accountNumber === "" || isNaN(addAmount) || pinNumber === "" || bank === "") {
        alert("Please fill in all fields");
        return;
    }
    if(!/^\d{11}$/.test(accountNumber)) {
    alert("Account number must be exactly 11 digits");
    return;
}
    if(parseInt(pinNumber) !== validPin) {
        alert("Invalid PIN");
        return;
    }

    const availableBalance = parseInt(document.getElementById("account-balance").innerText);
    const newBalance = availableBalance + addAmount;
    document.getElementById("account-balance").innerText = newBalance;


});

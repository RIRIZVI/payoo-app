const validPin = 1234;

document.getElementById("add-money-btn").addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Add money button clicked");

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const pinNumber = document.getElementById("pin-number").value;
    // Validation

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


// withdraw money section 
//const validPin = 1234;
document.getElementById("withdraw-money-btn").addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Withdraw money button clicked");

    const agentNumber = document.getElementById("agent-number").value.trim();
    const withdrawAmount = parseInt(document.getElementById("withdraw-amount").value);
    const pinNumber = document.getElementById("cashout-pin-number").value.trim();


   // const availableBalance1 = parseInt(document.getElementById("account-balance").innerText);
   // const newBalance1 = availableBalance1 - withdrawAmount;
   // document.getElementById("account-balance").innerText = newBalance1;

    // Validation
    if(agentNumber === "" || isNaN(withdrawAmount) || pinNumber === "") {
        alert("Please fill in all fields");
        return;
    }
    if(!/^\d{11}$/.test(agentNumber)) {
        alert("Agent number must be exactly 11 digits");
        return;
    }
    if(parseInt(pinNumber) !== validPin) {
        alert("Invalid PIN");
        return;
    }
    if(withdrawAmount > parseInt(document.getElementById("account-balance").innerText)) {
        alert("Insufficient balance");
        return;
    }
    const availableBalance2 = parseInt(document.getElementById("account-balance").innerText);
    const newBalance2 = availableBalance2 - withdrawAmount;
    document.getElementById("account-balance").innerText = newBalance2;
});

// Toggle effect
document.getElementById("add-money").addEventListener("click", function() {
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("add-money-parent").style.display = "block";
});

document.getElementById("cash-out").addEventListener("click", function() {
    
    document.getElementById("cash-out-parent").style.display = "block";
    document.getElementById("add-money-parent").style.display = "none";
    
});

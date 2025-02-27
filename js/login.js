document.getElementById('loginBtn').addEventListener('click', function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById('account-number').value;

    const accountPin = document.getElementById('account-pin').value;
    const convertedPin = parseInt(accountPin);
   
    if(accountNumber.length === 11){
        if(convertedPin === 12345){
            window.location.href="./main.html";
        } else{
            alert('Please valid PIN');
        }
    } else {
        alert('Please 11 digit valid Account Number');
    }
})

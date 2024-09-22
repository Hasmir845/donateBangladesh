function getInputValueById(id){
    return parseFloat(document.getElementById(id).value);
}

function getInnerTextValue(id){
    return parseFloat(document.getElementById(id).innerText)
}

function getButtons(id){
    document.getElementById(id).addEventListener('click',function(){
        const noakhaliDonationAmount = getInputValueById('noakhali-donation-amount');
        if(noakhaliDonationAmount < 0 || isNaN(noakhaliDonationAmount)){
            alert ('Invalid Amount')
            return;
        }
        else{
            const totalBalance = getInnerTextValue('total-balance');
            if(totalBalance < noakhaliDonationAmount){
                alert ('Insufficient Balance');
                return;
            }
            else{
                const newBalance = totalBalance - noakhaliDonationAmount;
                document.getElementById('total-balance').innerText = newBalance;
            }
            const noakhaliDonationBalance = getInnerTextValue('noakhali-donation-balance');
                const newDonationBalance = noakhaliDonationBalance + noakhaliDonationAmount;
                console.log(newDonationBalance);
                document.getElementById('noakhali-donation-balance').innerText = newDonationBalance;
        }
            document.getElementById('noakhali-donation-amount').value = '';
    })
}

const btnNoakhali = getButtons('btn-noakhali');
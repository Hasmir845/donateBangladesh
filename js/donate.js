function getInputValueById(id){
    return parseFloat(document.getElementById(id).value);
}

function getInnerTextValue(id){
    return parseFloat(document.getElementById(id).innerText)
}

//* noakhali donation

function getNoakhaliDonateButtons(id){
    document.getElementById(id).addEventListener('click',function(){
        const noakhaliDonationAmount = getInputValueById('noakhali-donation-amount');
        if(noakhaliDonationAmount <= 0 || isNaN(noakhaliDonationAmount)){
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
                document.getElementById('noakhali-donation-balance').innerText = newDonationBalance;
        }
            document.getElementById('noakhali-donation-amount').value = '';
            const noakhaliFlood = document.getElementById('noakhali-flood').innerText;
            const history = document.createElement('div');
            history.className = " bg-white mt-3 space-y-3 border border-gray-300 rounded-xl p-3";
            history.innerHTML = `
            <p>${noakhaliDonationAmount} Taka Is ${noakhaliFlood}</p>
            <p>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} From Bangladesh </p>
            `
            const historyContainer = document.getElementById('history');
            historyContainer.appendChild(history);
            
            document.getElementById('modal').classList.remove('hidden');
    })
}

const btnNoakhali = getNoakhaliDonateButtons('btn-noakhali');

//* feni donation

function getFeniDonateButtons(id){
    document.getElementById(id).addEventListener('click',function(){
        const feniDonationAmount = getInputValueById('feni-donation-amount');
        if(feniDonationAmount <= 0 || isNaN(feniDonationAmount)){
            alert ('Invalid Amount')
            return;
        }
        else{
            const totalBalance = getInnerTextValue('total-balance');
            if(totalBalance < feniDonationAmount){
                alert ('Insufficient Balance');
                return;
            }
            else{
                const newBalance = totalBalance - feniDonationAmount;
                document.getElementById('total-balance').innerText = newBalance;
            }
            const feniDonationBalance = getInnerTextValue('feni-donation-balance');
                const newDonationBalance = feniDonationBalance + feniDonationAmount;
                document.getElementById('feni-donation-balance').innerText = newDonationBalance;
        }
            document.getElementById('feni-donation-amount').value = '';

            const history = document.createElement('div');
            const feniFlood = document.getElementById('feni-flood').innerText;
            history.className = " bg-white mt-3 space-y-3 border border-gray-300 rounded-xl p-3";
            history.innerHTML = `
            <p>${feniDonationAmount} Taka Is ${feniFlood}</p>
            <p>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} From Bangladesh</p>
            `
            const historyContainer = document.getElementById('history');
            historyContainer.appendChild(history);
            
            document.getElementById('modal').classList.remove('hidden');
    })
}

const btnNFeni = getFeniDonateButtons('feni-btn');

//* movement donation

function getMovementDonateButtons(id){
    document.getElementById(id).addEventListener('click',function(){
        const movementDonationAmount = getInputValueById('movement-donation-amount');
        if(movementDonationAmount <= 0 || isNaN(movementDonationAmount)){
            alert ('Invalid Amount')
            return;
        }
        else{
            const totalBalance = getInnerTextValue('total-balance');
            if(totalBalance < movementDonationAmount){
                alert ('Insufficient Balance');
                return;
            }
            else{
                const newBalance = totalBalance - movementDonationAmount;
                document.getElementById('total-balance').innerText = newBalance;
            }
            const movementDonationBalance = getInnerTextValue('movement-donation-balance');
                const newDonationBalance = movementDonationBalance + movementDonationAmount;
                document.getElementById('movement-donation-balance').innerText = newDonationBalance;
        }
            document.getElementById('movement-donation-amount').value = '';

            const history = document.createElement('div');
            const quotaMovement = document.getElementById('quota-movement').innerText;
            history.className = " bg-white mt-3 space-y-3 border border-gray-300 rounded-xl p-3";
            history.innerHTML = `
            <p>${movementDonationAmount} Taka Is ${quotaMovement}</p>
            <p>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} From Bangladesh</p>
            `
            const historyContainer = document.getElementById('history');
            historyContainer.appendChild(history);
            
            document.getElementById('modal').classList.remove('hidden');
    })
}

const btnMovement = getMovementDonateButtons('movement-btn');

document.getElementById('modal-btn').addEventListener('click',function(){
    document.getElementById('modal').classList.add('hidden')
})

document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('history-btn').classList.add('bg-btnColor');
    document.getElementById('donation-btn').classList.remove('bg-btnColor');
    document.getElementById('card-container').classList.add('hidden');
    document.getElementById('history').classList.remove('hidden');
})
document.getElementById('donation-btn').addEventListener('click',function(){
    document.getElementById('donation-btn').classList.add('bg-btnColor')
    document.getElementById('history-btn').classList.remove('bg-btnColor');
    document.getElementById('card-container').classList.remove('hidden');
    document.getElementById('history').classList.add('hidden');
})

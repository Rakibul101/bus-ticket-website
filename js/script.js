const seats = document.getElementsByClassName('seat');
let allSeats = 40;
let allCount = 0;
const arr = [];
let money =0;
for(const seat of seats){
    seat.addEventListener('click', function(e){
        if(arr.includes(seat)){
            alert("Already selected.");
        }
        else{
            arr.push(seat);
            allSeats = allSeats - 1;
            allCount = allCount + 1;
            if(allCount <=4 ){
                e.target.style.backgroundColor = '#1DD100';
                document.getElementById('number-count').innerText = allCount;
                document.getElementById('seats-available').innerText = allSeats;
                const element = document.getElementById('new-price');
                const li = document.createElement('li');
                const p = document.createElement('p');
                p.innerText = e.target.innerText;
                const economy = document.createElement('p');
                economy.innerText = 'Economy';
                const price = document.createElement('p');
                price.innerText = 550;
                li.appendChild(p);
                li.appendChild(economy);
                li.appendChild(price);
                element.appendChild(li);
                const totalPrice = document.getElementById('total-price');
                money = money + 550;
                totalPrice.innerText = money;
                couponCode (allCount);
                applyCoupon(money);
            }
            else{
                alert("you can't select more than 4 seats");
            }
        }
    })
}

function couponCode(allCount){
    const discoutInput = document.getElementById('discount-input');
}
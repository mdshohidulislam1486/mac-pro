const updatePrice=(id)=>{
    if(id === '8gb'){
        priceFunction('extra-memory', 0);
    } else if(id === '16gb'){
        priceFunction('extra-memory', 180);
    } else if( id === '256gb'){
        priceFunction('extra-storage', 0); 
    } else if(id === '512gb'){
        priceFunction('extra-storage', 100);
    } else if(id === '1tb'){
        priceFunction('extra-storage', 180);
    } else if(id === '25aug'){
        priceFunction('delivery-charge', 0);
    } else if(id === '21aug'){
        priceFunction('delivery-charge', 20);
    } 
    subTotalPrice()
}
const priceFunction=(id, price)=>{
    document.getElementById(id).innerText = price;
}
const getSpanValue=(id)=>{
    const innerValue = document.getElementById(id).innerText;
    return parseInt(innerValue)
}
const subTotalPrice=()=>{
    const subTotal = 1299 + 
    getSpanValue('extra-memory') +
    getSpanValue('extra-storage') + 
    getSpanValue('delivery-charge');
    priceFunction('subtotal-price', subTotal);
    priceFunction('total-price', subTotal);
    
}

const cuponApply=()=>{
    const cuponInput = document.getElementById('discount')
    const cuponCode = cuponInput.value
    if(cuponCode === 'stevekaku'){
    const totalPriceInput = getSpanValue('subtotal-price');
    const afterDiscountPrice = totalPriceInput * .80;
    priceFunction('total-price', afterDiscountPrice);
    }
    cuponInput.value= '';
}
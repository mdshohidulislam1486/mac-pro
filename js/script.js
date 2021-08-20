
function memoryUpadate(isAdding){
    const extraMemory = document.getElementById('extra-memory');
    if(isAdding){
        extraMemory.innerText = '180';
    } else{
        extraMemory.innerText ='0';
    }
}

function storageUpdate(storage){
    const extraStorage =document.getElementById('extra-storage');
    
    if(storage == 'primary'){
        extraStorage.innerText= '0';
    } else if(storage == "secondary"){
        extraStorage.innerText= '100';
    } else if(storage == 'finally'){
        extraStorage.innerText = '180';
    }
}

function delivaryOptions(isFast){
    const deliveryCharge = document.getElementById('delivery-charge');
    if(isFast){
        deliveryCharge.innerText = '20';
    } else{
        deliveryCharge.innerText ='0';
    }
}

/* 
function totalExtraAdded(){
    const extraMemory = document.getElementById('extra-memory').innerText;
    const extraStorage =document.getElementById('extra-storage').innerText;
    const deliveryCharge = document.getElementById('delivery-charge').innerText;

   const totalExtraAdded = parseFloat(extraMemory) + parseFloat(extraStorage) + parseFloat(deliveryCharge);
    return totalExtraAdded
} */


console.log(totalExtraAdded())

function  subTotalPrice(){
    const defaultSubTotal = document.getElementById('subtotal-price').innerText;
    const deafultToNum = parseFloat(defaultSubTotal);
    defaultSubTotal.innerText = deafultToNum +  totalExtraAdded()
    
}




document.getElementById('memory-eight').addEventListener('click', function(){
    memoryUpadate(false);
    subTotalPrice();
    totalExtraAdded()
    
})

document.getElementById('memory-sixteen').addEventListener('click', function(){
    memoryUpadate(true)
    subTotalPrice()
    totalExtraAdded()
})
document.getElementById('storage-primary').addEventListener('click', function(){
    storageUpdate('primary');
    subTotalPrice();
    
})

document.getElementById('storage-secondary').addEventListener('click', function(){
    storageUpdate("secondary")
})

document.getElementById('storage-finally').addEventListener('click', function(){
    storageUpdate("finally")
    
})

document.getElementById('free-delivery').addEventListener('click', function(){
    delivaryOptions(false)
})
document.getElementById('payment-delivery').addEventListener('click', function(){
    delivaryOptions(true)
})

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


function totalExtraAdded(){
    const extraMemory = document.getElementById('extra-memory').innerText;
    const extraStorage =document.getElementById('extra-storage').innerText;
    const deliveryCharge = document.getElementById('delivery-charge').innerText;

   const totalExtraAdded = parseFloat(extraMemory) + parseFloat(extraStorage) + parseFloat(deliveryCharge);
    return totalExtraAdded
}




function  subTotalPrice(extraCost){
    const defaultSubTotal = document.getElementById('subtotal-price');

    if(extraCost == 'memory-eight' ){
        defaultSubTotal.innerText = 1229 +  totalExtraAdded()
    } else if(extraCost == "memory-sixteen"){
        defaultSubTotal.innerText = 1229 + totalExtraAdded()
    } else if (extraCost == 'storage-primary'){
        defaultSubTotal.innerText = 1229 + totalExtraAdded()
    } else if (extraCost == 'sotrage-secondary'){
        defaultSubTotal.innerText = 1229 + totalExtraAdded()
    }
     else if (extraCost == 'sotrage-finally'){
        defaultSubTotal.innerText = 1229 + totalExtraAdded()
    }
     else if (extraCost == 'free-delivery'){
        defaultSubTotal.innerText = 1229 + totalExtraAdded()
    }
     else if (extraCost == 'payment-delivery'){
        defaultSubTotal.innerText = 1229 + totalExtraAdded()
    }
    
    
}




document.getElementById('memory-eight').addEventListener('click', function(){
    memoryUpadate(false);
    subTotalPrice("memory-eight");
    
    
    
})

document.getElementById('memory-sixteen').addEventListener('click', function(){
    memoryUpadate(true)
    subTotalPrice("memory-sixteen")
    
})
document.getElementById('storage-primary').addEventListener('click', function(){
    storageUpdate('primary');
    subTotalPrice('storage-primary')
    
})

document.getElementById('storage-secondary').addEventListener('click', function(){
    storageUpdate("secondary")
    subTotalPrice('storage-secondary')
})

document.getElementById('storage-finally').addEventListener('click', function(){
    storageUpdate("finally")
    subTotalPrice('storage-finally')
    
})

document.getElementById('free-delivery').addEventListener('click', function(){
    delivaryOptions(false)
    subTotalPrice('free-delivery')
})
document.getElementById('payment-delivery').addEventListener('click', function(){
    delivaryOptions(true)
    subTotalPrice('payment-delivery')
})
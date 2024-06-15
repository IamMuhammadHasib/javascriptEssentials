function totalPrice(){
    document.getElementById('total').innerText = `Total price: ${
        parseFloat(document.getElementById('item-1').value)
        +parseFloat(document.getElementById('item-2').value)
        +parseFloat(document.getElementById('item-3').value)
    }`;
}
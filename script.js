function calculateTotal(){
    let total = 0;
    let rows = document.querySelectorAll("table tr");

    rows.forEach((row, index) => {
        if(index === 0) return; // Skip header

        let checkbox = row.querySelector("input[type='checkbox']");
        let qtyInput = row.querySelector("input[type='number']");

        if(checkbox.checked){
            let price = parseInt(checkbox.getAttribute("data-price"));
            let qty = parseInt(qtyInput.value);
            total += price * qty;
        }
    });

    document.getElementById("total").innerText = total;
}

function sendOrder(){
    let name = document.getElementById("name").value;
    let village = document.getElementById("village").value;

    
    let message = "Hello 20 20 Bakers,%0AName: " + name + "%0AVillage: " + village + "%0A%0AOrder Details:%0A";

    
    let total = 0;
    

    let rows = document.querySelectorAll("table tr");

    rows.forEach((row, index) => {
        if(index === 0) return;

        let checkbox = row.querySelector("input[type='checkbox']");
        let qtyInput = row.querySelector("input[type='number']");

        if(checkbox.checked){
            let item = checkbox.value;
            let price = parseInt(checkbox.getAttribute("data-price"));
            let qty = parseInt(qtyInput.value);
            let itemTotal = price * qty;

            total += itemTotal;

            message += item + " - " + qty + " = ₹" + itemTotal + "%0A";
        }
    });

    message += "%0ATotal Amount = ₹" + total;

    window.open("https://wa.me/919161467834?text=" + message);
}



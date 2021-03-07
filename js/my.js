console.log("PA-3");
console.log(form);

function getFunc() {
    //subTotal
    let subTotal = parseInt(document.getElementById("subTotal").value); //get Input
    console.log(subTotal);

    if (subTotal >= 100 && subTotal <= 10000) {
        //Tax
        let tax = document.getElementById("tax").value = subTotal * 0.12;
        console.log(tax);

        //Total
        let total = document.getElementById("total").value =  subTotal + tax;
        console.log(total);

        //amountPaid
        let amountPaid = document.getElementById("amountPaid").value = subTotal + tax;
        if (amountPaid > 0) {
            document.getElementById("amountPaid").disabled = false;
        } else {
            document.getElementById("amountPaid").disabled = true;
        }

        let change = document.getElementById("change").value = amountPaid - total;
        document.getElementById("button").style.backgroundColor = "green";

        //Minimum = amountPaid, so decrement cannot go below minimum but can when typed or pasted.
        document.getElementById("amountPaid").min = amountPaid;
        
    }else{
        console.log("a should be >=100 and <= 10,000");
    }
}
function ap2Change(){
    let total = parseInt(document.getElementById("total").value);
    let amountPaid = parseInt(document.getElementById("amountPaid").value);

    let change = document.getElementById("change").value = amountPaid - total;

    if (change < 0){
        document.getElementById("button").style.backgroundColor = "darkred";
    }else{
        document.getElementById("button").style.backgroundColor = "green";
    }

    

}




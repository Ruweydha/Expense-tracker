var totalAmount = []

function validate(e){

    let date = $("#date").val();
    let description =$("#description").val();
    let amount = $("#amount").val();

    if(!date || !description || ! amount){
        alert("Enter all fields");
    }
    else{
      $("#table").append(function(){
        var table = document.getElementById("table");
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var total = 0;
    
        cell1.innerHTML = date;
        cell2.innerHTML = description;
        cell3.innerHTML = amount;

        totalAmount.push(parseInt(cell3.innerHTML = amount));

        for(i=0; i<totalAmount.length; i++){
            total += totalAmount[i];
        }

        document.getElementById("total").innerHTML = `Total: ${total}`;
      })
    }

    e.preventDefault();
}

document.querySelector("button").onclick = validate;
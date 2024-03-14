function clickBtn() {
    var sonA = document.getElementById("sonA").value;
    var sonB = document.getElementById("sonB").value;
    var amal = document.getElementById("amal").value;
    var javob = document.getElementById("display");
   if (sonA !== "" && sonB !== "") {
       var result = 0;
       sonA = parseFloat(sonA);
       sonB = parseFloat(sonB);
       switch (amal) {
           case "+" : {
               result = sonA + sonB;
               break;
           }
           case "-" : {
               result = sonA - sonB;
               break;
           }
           case "*" : {
               result = sonA * sonB;
               break;
           }
           case "/" : {
               result = sonA / sonB;
               break;
           }
           default :
               result = 0;
       }
       javob.innerText = result;
   }else {
       alert("Malumotlaringiz bo'sh");
   }
}

var ARR = [];

var draw = function () {
    var userName = document.getElementById("fish").value;
    var match = document.getElementById("uchrashuv").value;
    var paySum = document.getElementById("pay").value;
    var date = new Date().getDate() + "."+(new Date().getMonth()+1) + "."+ new Date().getFullYear();
    if (userName !== "" && paySum !== "") {
        var obj = {
            userName : userName,
            paySum : paySum,
            match : match,
            date : date
        }
        ARR.push(obj);
        inner();
        document.getElementById("fish").value = "";
        document.getElementById("pay").value = "";
    }else {
        alert("Ma'lumotlarni to'liq kiriting!");
    }
    console.log(ARR);
}

function inner() {
    var tr = "";
    var i = 0;
    for (var td of ARR) {
        i++;
        tr += "<tr>" +
                "<td>" + i + "</td>"+
                "<td>" + td.userName + "</td>"+
                "<td>" + td.paySum + "</td>"+
                "<td>" + td.match + "</td>"+
                "<td>" + td.date + "</td>"+
              "<tr>";
    }
    document.getElementById("tBody").innerHTML = tr;
}
function fillForm(){
  var name = document.getElementById("inputName").value;
  var position = document.getElementById("inputPosition").value;
  var address = document.getElementById("inputAddress").value;
  var phone = document.getElementById("inputPhone").value;
  var email = document.getElementById("inputEmail").value;
  var img = document.getElementById("inputURLimage").value;
  var linkedin = document.getElementById("inputURLlinkedin").value;

  document.getElementById("name").innerHTML = name;
  document.getElementById("position").innerHTML = position;
  document.getElementById("address").innerHTML = address;
  document.getElementById("phone").innerHTML = phone;
  document.getElementById("email").innerHTML = email;
  document.getElementById("img").setAttribute("src", img);
  document.getElementById("linkedin").setAttribute("href", linkedin);
}

document.getElementById("submit").onclick=function() {
  document.getElementById("myTable").style.display="block";

  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  var name = row.insertCell(0);
  var position = row.insertCell(1);
  var address = row.insertCell(2);
  var phone = row.insertCell(3);
  var email = row.insertCell(4);
  var linkedin = row.insertCell(5);
  var img = row.insertCell(6);
  var act = row.insertCell(7);
  name.innerHTML = document.getElementById("inputName").value;
  position.innerHTML = document.getElementById("inputPosition").value;
  address.innerHTML = document.getElementById("inputAddress").value;
  phone.innerHTML = document.getElementById("inputPhone").value;
  email.innerHTML = document.getElementById("inputEmail").value;
  linkedin.innerHTML = document.getElementById("inputURLlinkedin").value;
  img.innerHTML = document.getElementById("inputURLimage").value;
  act.innerHTML = `<button type="button" class="btn btn-info" data-toggle="modal" data-target="#modal-primary"
                          onclick='fillForm()'>Show</button>`;

  // resetform();
  return false;
}

function resetform(){
  document.getElementById("myForm").reset();
}

function resetTbl(){
  for(var i = 1; i < myTable.rows.length;)
  {
    myTable.deleteRow(i);
  }
  // document.getElementById("myTable").remove();
  // document.getElementById("myTable").html("");
}

document.getElementById("save").onclick=function() {
  document.getElementById("myTable").style.display="block";

  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  var name = row.insertCell(0);
  var position = row.insertCell(1);
  var address = row.insertCell(2);
  var phone = row.insertCell(3);
  var email = row.insertCell(4);
  var linkedin = row.insertCell(5);
  var img = row.insertCell(6);
  var act = row.insertCell(7);

  name.innerHTML = document.getElementById("inputName").value;
  position.innerHTML = document.getElementById("inputPosition").value;
  address.innerHTML = document.getElementById("inputAddress").value;
  phone.innerHTML = document.getElementById("inputPhone").value;
  email.innerHTML = document.getElementById("inputEmail").value;
  linkedin.innerHTML = document.getElementById("inputURLlinkedin").value;
  img.innerHTML = document.getElementById("inputURLimage").value;
  act.innerHTML = `<button>View</button>`;

  return false;
}


// function save(){
//   var name = document.getElementById("inputName").val();
//   var position = document.getElementById("inputPosition").val();
//   var address = document.getElementById("inputAddress").val();
//   // var count = document.getElementById("myTable tr").length;
//   if (document.getElementById("inputName")!="" && document.getElementById("inputPosition")!="" &&
//       document.getElementById("inputAddress")!="") {
//     document.getElementById("myTable tbody").append('<tr class="child"><td>'+count+'</td><td>'+name+'</td><td>'+
//       position+'</td><td>'+address+'</td><td><a href="javascript:void(0);" class="remCF1 btn btn-small btn-danger">Remove</a></td></tr>');
//   }
// }
//
// document.on('click','.remCF1')=function (){
//   this.parent().remove();
//   document.getElementById("myTable tbody tr").each(function (i){
//     (this.find('td')[0]).html(i+1);
//   }
// }


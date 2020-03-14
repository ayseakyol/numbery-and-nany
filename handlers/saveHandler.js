function saveInputHandler(entries) {
  //debugger;
  //let newArr = [];
  let input = document.getElementById("content").value;
  let isValueNaN = isNaN(input);
  if (!isNaN(input)) {
    let ul = document.getElementById("numbery");
    let li = document.createElement("LI");
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
  }
  if (isNaN(input)) {
    let ul = document.getElementById("nany");
    let li = document.createElement("LI");
    li.appendChild(document.createTextNode(input));
    ul.appendChild(li);
  }

  //if (entries.nany.includes(input) || entries.numbery.includes(li)) {
  //return alert("this is already exist.");
  //}
}

//if (nany.includes(newInput)) {
//alert(`It already exists in the list!`);
//return;
//}

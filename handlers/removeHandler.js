function removeInputHandler() {
  let input = document.getElementById("content").value;

  if (li) {
    const indexValue = entries.nany.indexOf(input);

    entries.nany.splice(indexValue, 1);
  } else {
    const indexValue = entries.numbery.indexOf(input);

    entries.numbery.splice(indexValue, 1);
  }
  let ulElement;
  if (li) {
    ulElement = document.getElementById("numbery");
  } else {
    ulElement = document.getElementById("nany");
  }

  for (let i = 0; i < ulElement.children.length; i++) {
    const child = ulElement.children[i];

    if (child.textContent === String(isValueNaN)) {
      ulElement.removeChild(child);
    }
  }
}

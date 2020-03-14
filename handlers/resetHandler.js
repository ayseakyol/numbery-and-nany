function resetHandler() {
  li.numbery = [];
  li.nany = [];
  li.past = [];
  document.getElementById("content").innerHTML = "";
  document.getElementById("numbery").innerHTML = "";
  document.getElementById("nany").innerHTML = "";

  // log interaction: handler name, new state
  log.push({
    handler: "reset",
    entries: JSON.parse(JSON.stringify(entries))
  });
  return true;
}

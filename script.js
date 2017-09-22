$(document).ready(function(){
  $("#button").click(function(e){
    e.preventDefault();
    let searchVal = $("#search").val();
    document.location.href = `file:///Users/jessicaduarte/Desktop/Q1/${searchVal}/index.html`
  })
})

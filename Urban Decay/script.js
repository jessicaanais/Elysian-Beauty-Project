$(document).ready(function(){
  $.get('http://localhost:3000',function(data){
    console.log(data["Urban Decay"])

    for(let i =0; i < data["Urban Decay"].length; i++) {
      console.log(data["Urban Decay"][i].name)

      let div = document.getElementsByClassName('child');
      let h3 = document.createElement("h2");
      h3.innerHTML = data["Urban Decay"][i].name;
      div[i].appendChild(h3);



      let img = document.createElement('img')
      img.setAttribute('src', data["Urban Decay"][i].image_link)
      let a = document.createElement('a')
      a.setAttribute('href',`${data["Urban Decay"][i].website_link}`);
      a.appendChild(img);
      div[i].appendChild(a)

      let p = document.createElement('p')
      p.textContent = data["Urban Decay"][i].price;
      div[i].appendChild(p)

      var btn = document.createElement("BUTTON");
      btn.textContent = "Add to Cart"
      div[i].appendChild(btn);



      let p1 = document.createElement('p')
      p1.textContent = data["Urban Decay"][i].rating
      div[i].appendChild(p1)

      let p2 = document.createElement('p')
      p2.textContent = data["Urban Decay"][i].description
      div[i].appendChild(p2);


    }
    console.log(data);
    let firstItem = data["Urban Decay"]["0"].price;
    let firstItem1 = data["Urban Decay"]["1"].price;
    let firstItem2 = data["Urban Decay"]["2"].price;
    let firstItem3 = data["Urban Decay"]["3"].price;
    let firstItem4 = data["Urban Decay"]["4"].price;
    console.log(firstItem2);
    function start(){

    }
  });


});

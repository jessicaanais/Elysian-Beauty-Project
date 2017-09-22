$(document).ready(function(){
  $.get('http://localhost:3000',function(data){
    console.log(data["L'Oreal Paris"])

    for(let i =0; i < data["L'Oreal Paris"].length; i++) {
      console.log(data["L'Oreal Paris"][i].name)

      let div = document.getElementsByClassName('child');
      let h3 = document.createElement("h2");
      h3.innerHTML = data["L'Oreal Paris"][i].name;
      div[i].appendChild(h3);


      let img = document.createElement('img')
      img.setAttribute('src', data["L'Oreal Paris"][i].image_link)
      div[i].appendChild(img)

      let p = document.createElement('p')
      p.textContent = data["L'Oreal Paris"][i].price
      div[i].appendChild(p)

      let p1 = document.createElement('p')
      p1.textContent = data["L'Oreal Paris"][i].rating
      div[i].appendChild(p1)

      let p2 = document.createElement('p')
      p2.textContent = data["L'Oreal Paris"][i].description
      div[i].appendChild(p2);

    }
  });
});

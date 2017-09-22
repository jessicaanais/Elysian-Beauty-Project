$(document).ready(function(){
  $.get('http://localhost:3000',function(data){
    console.log(data["Tarte"])

    for(let i =0; i < data["Tarte"].length; i++) {
      console.log(data["Tarte"][i].name)

      let div = document.getElementsByClassName('child');
      let h3 = document.createElement("h2");
      h3.innerHTML = data["Tarte"][i].name;
      div[i].appendChild(h3);


      let img = document.createElement('img')
      img.setAttribute('src', data["Tarte"][i].image_link)
      div[i].appendChild(img)

      let p = document.createElement('p')
      p.textContent = data["Tarte"][i].price
      div[i].appendChild(p)

      let p1 = document.createElement('p')
      p1.textContent = data["Tarte"][i].rating
      div[i].appendChild(p1)

      let p2 = document.createElement('p')
      p2.textContent = data["Tarte"][i].description
      div[i].appendChild(p2);

    }
  });
});

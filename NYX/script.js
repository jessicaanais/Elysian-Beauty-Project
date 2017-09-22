$(document).ready(function(){
  $.get('http://localhost:3000',function(data){
    // console.log(data["Too Faced"])

    for(let i =0; i < data["NYX"].length; i++) {
      // console.log(data["Too Faced"][i].nameNYX

      let div = document.getElementsByClassName('child');
      let h3 = document.createElement("h2");
      h3.innerHTML = data["NYX"][i].name;
      div[i].appendChild(h3);


      let img = document.createElement('img')
      img.setAttribute('src', data["NYX"][i].image_link)
      let a = document.createElement('a')
      a.setAttribute('href',`${data["NYX"][i].website_link}`);
      a.appendChild(img);
      div[i].appendChild(a);

      let p = document.createElement('p')
      p.textContent = data["NYX"][i].price
      div[i].appendChild(p)

      let p1 = document.createElement('p')
      p1.textContent = data["NYX"][i].rating
      div[i].appendChild(p1)

      let p2 = document.createElement('p')
      p2.textContent = data["NYX"][i].description
      div[i].appendChild(p2);

    }
  });
});

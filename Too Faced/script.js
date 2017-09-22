$(document).ready(function(){
  $.get('http://localhost:3000',function(data){
    console.log(data["Too Faced"])

    for(let i =0; i < data["Too Faced"].length; i++) {
      console.log(data["Too Faced"][i].name)

      let div = document.getElementsByClassName('child');
      let h3 = document.createElement("h2");
      h3.innerHTML = data["Too Faced"][i].name;
      div[i].appendChild(h3);


      let img = document.createElement('img')
      img.setAttribute('src', data["Too Faced"][i].image_link)
      let a = document.createElement('a')
      a.setAttribute('href',`${data["Too Faced"][i].website_link}`);
      a.appendChild(img);
      div[i].appendChild(a)

      let p = document.createElement('p')
      p.textContent = data["Too Faced"][i].price
      div[i].appendChild(p)

      let p1 = document.createElement('p')
      p1.textContent = data["Too Faced"][i].rating
      div[i].appendChild(p1)

      let p2 = document.createElement('p')
      p2.textContent = data["Too Faced"][i].description
      div[i].appendChild(p2);

    }
  });
});

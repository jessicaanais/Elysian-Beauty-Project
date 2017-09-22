$(document).ready(function(){
  $.get('http://localhost:3000',function(data){
    console.log(data["Anatasia Beverly Hills"])

    for(let i =0; i < data["Anatasia Beverly Hills"].length; i++) {
      console.log(data["Anatasia Beverly Hills"][i].name)

      let div = document.getElementsByClassName('child');
      let h3 = document.createElement("h2");
      h3.innerHTML = data["Anatasia Beverly Hills"][i].name.toUpperCase();
      div[i].appendChild(h3);


      let img = document.createElement('img')
      img.setAttribute('src', data["Anatasia Beverly Hills"][i].image_link)
      let a = document.createElement('a')
      a.setAttribute('href',`${data["Anatasia Beverly Hills"][i].website_link}`);
      a.appendChild(img);
      div[i].appendChild(a)

      let p = document.createElement('p')
      p.textContent = data["Anatasia Beverly Hills"][i].price
      div[i].appendChild(p)

      let p1 = document.createElement('p')
      p1.textContent = data["Anatasia Beverly Hills"][i].rating
      div[i].appendChild(p1)

      let p2 = document.createElement('p')
      p2.textContent = data["Anatasia Beverly Hills"][i].description
      div[i].appendChild(p2);

    }
  });
});

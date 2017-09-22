$(document).ready(function(){
  $.get('http://localhost:3000',function(data){
    console.log(data["MAC"])

    for(let i =0; i < data["MAC"].length; i++) {
      console.log(data["MAC"][i].name)

      let div = document.getElementsByClassName('child');
      let h3 = document.createElement("h2");
      h3.innerHTML = data["MAC"][i].name;
      div[i].appendChild(h3);


      let img = document.createElement('img')
      img.setAttribute('src', data["MAC"][i].image_link)
      let a = document.createElement('a')
      a.setAttribute('href',`${data["MAC"][i].website_link}`);
      a.appendChild(img);
      div[i].appendChild(a)

      let p = document.createElement('p')
      p.textContent = data["MAC"][i].price
      div[i].appendChild(p)

      let p1 = document.createElement('p')
      p1.textContent = data["MAC"][i].rating
      div[i].appendChild(p1)

      let p2 = document.createElement('p')
      p2.textContent = data["MAC"][i].description
      div[i].appendChild(p2);

    }
  });
});

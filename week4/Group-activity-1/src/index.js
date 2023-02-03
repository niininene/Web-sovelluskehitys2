const foo = fetch('https://xkcd.now.sh/?comic=latest')
  .then((response) => response.json()) 
  .then((data) => {
    console.log(data);
    const image = document.createElement("img");
    image.setAttribute('src', data.img);
    image.setAttribute('alt', data.alt);

    document.body.appendChild(image);
  })
  .catch((error) => console.log('error is', error));

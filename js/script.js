const cards = [
  {
    img: "chatGPT-logo.svg",
    name: "Course name",
    description: "Hello, world!",
    price: '$14.99'
  },
  {
    img: "math-logo.svg",
    name: "Course name",
    description: "Hello, world!",
    price: '$14.99'
  },
  {
    img: "online-english-tutor-01.svg",
    name: "Course name",
    description: "Hello, world!",
    price: '$14.99'
  }
];

const generateCard = (arr) => {
  const cards = document.querySelector('.cards');


  for (let i = 0; i < arr.length; i +=1) {
    const card = document.createElement('div');
    const img = document.createElement('img');
    const h4 = document.createElement('h4');
    const desc = document.createElement('p');
    const price = document.createElement('p');
    
    card.setAttribute('class', 'card');
    img.src = `../assets/${arr[i].img}`;
    h4.textContent = `${arr[i].name}`;
    desc.textContent = `${arr[i].description}`;
    price.textContent = `${arr[i].price}`;

    card.appendChild(img);
    card.appendChild(h4);
    card.appendChild(desc);
    card.appendChild(price);
    cards.appendChild(card);
  }
};

generateCard(cards);
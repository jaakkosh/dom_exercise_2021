// Put code of task C here

const main = document.querySelector('main');

const article = document.createElement('article');
const header = document.createElement('header');
const h2 = document.createElement('h2');
const figure = document.createElement('figure');
const figcaption = document.createElement('figcaption');
const img = document.createElement('img');
const p = document.createElement('p');

h2.innerHTML = 'Otsikko';
figcaption.innerHTML = 'Kuvateksti';
p.innerHTML = 'jotain tesksii';

img.src ="http://placekitten.com/320/160";
img.alt ='jotain tekstiä'

header.appendChild(h2)
figure.appendChild(img)
figure.appendChild(figcaption)
article.appendChild(header)
article.appendChild(figure)
article.appendChild(p)

main.appendChild(article)

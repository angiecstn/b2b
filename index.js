window.addEventListener('DOMContentLoaded', (event) => {
  fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(json => console.log(json))  }
)

document.body.onload = addElement;

function addElement () {
  let main = document.querySelector('#app');

  let header = document.createElement('header')
  header.classList.add('header')
  let h1 = document.createElement('h1')
  let h3 = document.createElement('h3')
  h1.innerText = 'New Title'
  h3.innerText = 'Subtitle'
  header.appendChild(h1)
  header.appendChild(h3)
  h1.classList.add('h1')

  let style = document.createElement('style')
  style.innerText = `
    .header {
      background: lightpink;
      padding: 20px;
    }
    .h1 {
      text-align: center;
    }
  `

  main.appendChild(header)
  main.appendChild(style)

}

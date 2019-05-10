// fetch('https://jsonplaceholder.typicode.com/posts/')
// .then(response => response.json())
// .then(json => console.log(json))  }

window.addEventListener('DOMContentLoaded', main)

function render (rootEl, model) {

  let modelKeys = Object.keys(model)

  modelKeys.forEach(key => {
    let el = document.createElement(key)

    if (typeof model[key] === 'string') {
      el.innerHTML = model[key]
    } else {

      let children = Object.keys(model[key])

      children.forEach(childKey => {
        let childrenEl = document.createElement(childKey)
        childrenEl.innerHTML = model[key][childKey]
        el.appendChild(childrenEl)
      })
    }

    rootEl.appendChild(el);
  })

}


function main () {
  // Component models ------>
  let header = {
    'header': {
      'h1': 'New Title',
      'h3': 'Subtitle',
    }
  }

  let list = {
    'ul' : ''
  }

  let listItem = {
    'li' : {
      'h5': 'List title',
      'p': 'list body'
    }
  }

  let  style = {
    'style': `
    header {
      background: lightpink;
      padding: 20px;
    }
    h1 {
      text-align: center;
      margin: 0;
    }
    h3 {
      margin: 0;
    }
    `
  }
  // END ------>

  let mainElement = document.querySelector('#app');
  let bodyElement = mainElement.closest('body');

  render(mainElement, header)
  render (mainElement, list)

  let listElement = document.querySelector('ul');

  render (listElement, listItem)

  for (var i = 0; i < 50; i++) {
    render(listElement, listItem)
  }
  render (bodyElement, style)
}

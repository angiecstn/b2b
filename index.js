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

function requestData () {
  let res = fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(json => json)
  return res
}


function header (title, subtitle) {
  let headerElement = document.createElement('header')
  headerElement.innerHTML = `
    <h1 class="title">${title}</h1>
    <h3>${subtitle}</h3>
  `
  return headerElement
}

function listItem (title, body) {
  let element = document.createElement('li')
  element.innerHTML = `
  <h5>${title} </h5>
  <p> ${body} </p>
  `
  return element
}


function main () {
  // Component models ------>
  let headerState = {
    'header': {
      'h1': 'New Title 2',
      'h3': 'Subtitle',
    }
  }

  let list = {
    'ul' : ''
  }

  let stateLi = {
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

  mainElement.appendChild(header(headerState.header.h1, headerState.header.h3))

  render (mainElement, list)

  let ul = document.querySelector('ul');

  requestData().then(data => {
    // for (var i = 0; i < 10; i++) {
    //   render(ul, listItem)
    // }
    let li = listItem(data[0].title, data[0].body)

    ul.appendChild(li)
    // console.log(ul)
    // render (mainElement, ul)
  })

  render (bodyElement, style)
}

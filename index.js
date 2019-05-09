// fetch('https://jsonplaceholder.typicode.com/posts/')
// .then(response => response.json())
// .then(json => console.log(json))  }

window.addEventListener('DOMContentLoaded', main)

function createHeader (mainElement) {
  console.log(mainElement)
  let vdom = {
    'header': {
      'h1': 'New Title',
      'h3': 'Subtitle'
    },
    'style': `
      .header {
        background: lightpink;
        padding: 20px;
      }
      .h1 {
        text-align: center;
      }
    `
  }
  let vdomKeys = Object.keys(vdom)

  vdomKeys.forEach(key => {
    let el = document.createElement(key)

    if (typeof vdom[key] === 'string') {
      el.innerText = vdom[key]
    } else {

      let children = Object.keys(vdom[key])

      children.forEach(childKey => {
        let childrenEl = document.createElement(childKey)
        childrenEl.innerText = vdom[key][childKey]
        el.appendChild(childrenEl)
      })
    }

    console.log(el)
  })

}

function organise() {

}

function main () {
  let mainElement = document.querySelector('#app');
  createHeader(mainElement)
}

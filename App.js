
const parent = React.createElement(
    'div', {id:'parent'},
     React.createElement('div', {id:'child'},
        React.createElement('h1', {}, 'Im an h1 tag')
      ))

console.log(parent)

const heading =   React.createElement("h1", {id:'heading'}, "NamasteEveryone")

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);



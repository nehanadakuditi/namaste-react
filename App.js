//react element(object) => html(browser understands)

const parent= React.createElement("div", {id:"parent"}, 
    React.createElement("div",
        {id:"child"},[React.createElement("h1",{},"React is Awesome!"), React.createElement("h2",{},"React is the best")]) )



//const heading= React.createElement("h1",{id:"heading", abd:"xyz"}, "Hello World from React");
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
//console.log(heading);
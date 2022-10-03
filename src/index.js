const React = require('react');
const ReactDom = require('react-dom/client');

const fruits = ["Apple","Orange","Apricot","Black rowan","Cranberry"];

let fruit = <div>
    <h1>
        List of fruits
    </h1>
    <ul>
        {fruits.map((item)=>(
            <li>{item}</li>
        ))}
    </ul>
</div>

let root = ReactDom.createRoot(document.getElementById('root'));
root.render(fruit);
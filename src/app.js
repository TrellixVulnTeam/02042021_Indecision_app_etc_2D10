console.log('App.js is runnig!');

// create app object title/subtitle
// user title/subtitle in the template
// render template

// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

// JSX - JavaScript XML

const app= {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const template = (
<div>
<h1>{app.title}</h1> 
<p>{app.subtitle && <p>{app.subtitle}</p>}</p>
<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
<ol>
    <li>Item one</li>
    <li>Item two</li>
</ol>
</div>
);


const userName = 'David';
const userAge = 35;
const userLocation = 'Seoul';

const user = {
    name: 'Seunghun',
    age: 23,
    location: 'Helsinki'

};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
}


const templateTwo = (
    <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
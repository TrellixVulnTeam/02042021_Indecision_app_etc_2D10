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


const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option); 
    e.target.elements.option.value = '';
    renderThisApp();
  };
}

const removeAll = () => {
  app.options = [];
  renderThisApp();
};




const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);



const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length); 
    const option = app.options[randomNum];
    console.log(randomNum);
    alert(option);
};
const template = (
    <div>
    <h1>{app.title}</h1> 
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <p>{app.options.length}</p>
    <button onClick={removeAll}>Remove All</button>
    
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
    <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
    </form>
    </div>
    );
const renderThisApp = () => {
    const template = (
        <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <p>{app.options.length}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={removeAll}>Remove All</button>
        <ol>
        {/* map over app.options getting back an array of lis (set key and text for each) */}
        {
            app.options.map((option) => {
                return <li key={option}>{option}</li>;
            })
        }

        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>            
        </form>
        </div>
        );

        
ReactDOM.render(template, appRoot);
}

renderThisApp();

class Counter extends React.Component {
constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
        count: 0
    };
}
    handleAddOne () {
        this.setState(() => {
            return {
                count : this.state.count+= 1
            };
        });
    }

    handleMinusOne() {
        this.setState(() => {
            return {
                count : this.state.count-= 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count : this.state.count = 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

// 1. Create 3 methods: handleAddOne, handleMinusOne, handleReset
// 2. Use console.log to priunt method name
// 3. Wire up onClick & bind in the constructor

ReactDOM.render(<Counter />, document.getElementById('app'));

//  const userName = 'David';
//  const userAge = 35;
//  const userLocation = 'Seoul';

//  const user = {
//      name: 'Seunghun',
//      age: 23,
//      location: 'Helsinki'
//  };
//  function getLocation(location) {
//      if (location) {
//          return <p>Location: {location}</p>;
//      } 
//  }
//  let count = 0;
//  const addOne = () => {
//    count++;
//    console.log('addOne');
//    renderCounterApp();
//  };
//  const minusOne = () => {
//      //subtract 1 from count - rerender
//      count--;
//      console.log('minusOne')
//      renderCounterApp();
//  };
//  const reset = () => {
//      count = 0;
//      console.log('reset')
//      renderCounterApp();
//  };
//  const templateTwo = (
//      <div>
//        <h1>Count: {count}</h1>    
//        <button onClick={addOne}>+1</button>
//        <button onClick={minusOne}>-1</button>
//        <button onClick={reset}>reset</button>
//      </div>
//  );

//  console.log(templateTwo);

//  ReactDOM.render(templateTwo, appRoot);

//  const renderCounterApp = () => {
//      const templateTwo = (
//          <div>
//            <h1>Count: {count}</h1>    
//            <button onClick={addOne}>+1</button>
//            <button onClick={minusOne}>-1</button>
//            <button onClick={reset}>reset</button>
//          </div>
//      );

//      ReactDOM.render(templateTwo, appRoot);
//  };

//  renderCounterApp();


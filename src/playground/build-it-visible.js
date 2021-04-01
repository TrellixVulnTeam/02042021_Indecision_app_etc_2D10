//visibilityToggle - render, constructor, handleToggleVisibility
//visibility -> false

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    }
    
    handleToggleVisibility() {
        this.setState(() => {
            return {
                visibility: !this.state.visibility
            }
        })
    }
    render() {
    return (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
        {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
            <div>
                <p>내가 보이나요 진짜로 너 코딩 개잘해</p>
            </div>
        )}
        </div>
      )
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };
// const render = () => {
//     const template = (
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//         </button>
//         {visibility && (
//             <div>
//             <p>내가 보이나요 당신은 천재입니다!</p>
//             </div>
//         )}
//         </div>
//     );
    

//     ReactDOM.render(template, document.getElementById('app'));
// };

// render();


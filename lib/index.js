const React = require('react');
const ReactDOM = require('react-dom');
const store = require('./data-store');

require('./reset.css');
require('./style.scss');

class IdeaBox extends React.Component {
  constructor() {
    super();
    this.state = {
      ideas: store.all(), 
    }
  }

  componentDidMount() {
    store.on('change', ideas => {
      this.setState({ ideas: ideas });
    });
  }
  

  render() {
    return (
      <div className="IdeaBox">
        <section className='sidebar'>
          <header>
            <h1> { this.props.title }</h1>
          </header>
        </section>
        <section className="main-content">
        
        </section>
      </div>
    );
  }
}

ReactDOM.render(<IdeaBox/>, document.querySelector(".application"));

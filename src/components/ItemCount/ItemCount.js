class App extends Component {
    constructor() {
      super();
      this.state = {
        counter: 0
      };
    }}
    handleIncrement = () => {
        this.setState({ counter: this.state.counter + 1 });
        this.setState({ counter: this.state.counter - 1 });
    };
import * as React from 'react';

interface IProp { 
  scroll: number;
}

class App extends React.Component<IProp> {
  public render() {
    const { scroll } = this.props;

    return (
      <div style={{height: 2000, fontSize: '200px'}}>
        {scroll}
      </div>
    );
  }
}

export default App;

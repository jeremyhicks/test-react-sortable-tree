import React from 'react';
import logo from './logo.svg';
import './App.css';

import SortableTree from 'react-sortable-tree';
// In your own app, you would need to use import styles once in the app
import 'react-sortable-tree/style.css';


class App extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        { title: 'Chicken', subtitle: 'little', expanded: true, children: [{ title: 'Eggs', subtitle: 'white' }] },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <div style={{ height: 300 }}>
          <SortableTree
            treeData={this.state.treeData}
            onChange={treeData => this.setState({ treeData })}
            isVirtualized={false}
          />
        </div>
      </div>
    );
  }
}

export default App;

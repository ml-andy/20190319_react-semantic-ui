import React from 'react';
import { Header, Image, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { HorizontalBar } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      target: {
        name: '',
        index: -1,
      },
    };
  }
  render() {
    return (
      <>
        <Modal
          open={this.state.isModalOpen}
          onClose={() => this.setState({
            isModalOpen: false,
          })}
        >
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src="https://cdn-images-1.medium.com/max/2400/1*K0a7xINk0RM5gfXGSN68cw.png" />
            <Modal.Description>
              <Header>{ this.state.target.name }</Header>
              <p>index: { this.state.target.index }</p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
        <HorizontalBar
          data={data}
					onElementsClick={(el) => {
            if (el.length > 0) {
              const { _index: index = 0 } = el[0];
              const name = data.labels[index];
              this.setState({
                isModalOpen: true,
                target: {
                  name,
                  index,
                },
              });
            }
					}}
        />
      </>
    );
  }
}

export default App;

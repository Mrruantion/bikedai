import React, { Component } from 'react'
import { Modal, Button } from 'antd';

const LocalizedModal = React.createClass({
  getInitialState() {
    return { visible: false };
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  handleOk() {
    this.setState({
      visible: false,
    });
  },
  handleCancel() {
    this.setState({
      visible: false,
    });
  },
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Show Modal</Button>
        <Modal title="Modal" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
          okText="OK" cancelText="Cancel"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
      </div>
    );
  },
});

function confirm() {
  Modal.confirm({
    title: 'Confirm',
    content: 'Bla bla ...',
    okText: 'OK',
    cancelText: 'Cancel',
  });
}


class Page extends React.Component {
	render(){
		return (
		<div>
		  <LocalizedModal />
		  <br />
		  <Button onClick={confirm}>confirm</Button>
		</div>
		)
	}
}

export default Page
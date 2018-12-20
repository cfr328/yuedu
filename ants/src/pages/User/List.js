import React from 'react';
import { Table, Divider, Tag, Modal, Button, form } from 'antd';

const columns = [{
  title: 'ID',
  dataIndex: 'id',
  key: 'id',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: '门店名称',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '城市',
  dataIndex: 'city',
  key: 'city',
}, {
  title: '门店图片',
  dataIndex: 'pic',
  key: 'pic',
}, {
  title: '收入',
  dataIndex: 'income',
  key: 'income',
}, {
  title: '门店状态',
  dataIndex: 'status',
  key: 'status',
}, {
  title: '门店物品数量',
  dataIndex: 'num',
  key: 'num',
 },{
  title: '操作',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:void(0);" onClick={this.showModal}>编辑</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  id: '8',
  name: '西北旺地铁',
  address: '北京市西北旺地铁站',
  city: '北京市',
  income: '0',
  status: '门店关闭',
  num: '0',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  id: '7',
  name: '西北旺地铁',
  address: '北京市西北旺地铁站',
  city: '北京市',
  income: '0',
  status: '正常营业',
  num: '0',
  tags: ['loser'],
}, {
  key: '3',
  id: '6',
  name: '西北旺地铁',
  address: '北京市西北旺地铁站',
  city: '北京市',
  income: '0',
  status: '门店关闭',
  num: '0',
  tags: ['cool', 'teacher'],
}, {
  key: '4',
  id: '5',
  name: '西北旺地铁',
  address: '北京市西北旺地铁站',
  city: '北京市',
  income: '0',
  status: '门店关闭',
  num: '0',
  tags: ['loser'],
}, {
  key: '5',
  id: '4',
  name: '西北旺地铁',
  address: '北京市西北旺地铁站',
  city: '北京市',
  income: '0',
  status: '正常营业',
  num: '0',
  tags: ['cool', 'teacher'],
}];

class ListPage extends React.PureComponent{
  columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: '门店名称',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '城市',
    dataIndex: 'city',
    key: 'city',
  }, {
    title: '门店图片',
    dataIndex: 'pic',
    key: 'pic',
  }, {
    title: '收入',
    dataIndex: 'income',
    key: 'income',
  }, {
    title: '门店状态',
    dataIndex: 'status',
    key: 'status',
  }, {
    title: '门店物品数量',
    dataIndex: 'num',
    key: 'num',
   },{
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:void(0);" onClick={this.showModal}>编辑</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    ),
  }];
  state = { 
    visible: false 
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  hideModal = () => {
    this.setState({
      visible: false,
    });
  }
  
  render() {
    return <React.Fragment>
      <Table columns={this.columns} dataSource={data}/>
        <Modal
        title="Basic Modal"
        visible={this.state.visible}
        onOk={this.hideModal}
        onCancel={this.hideModal}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </React.Fragment>
  }
}

export default ListPage;

 
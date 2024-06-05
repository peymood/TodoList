import { Row, Col } from 'antd';
import './App.scss';
import TodoMain from './Components/TodoMain'
import { SearchOutlined } from '@ant-design/icons';

function App() {
  return (
    <div className="App">
      
        <Row justify={'space-between'} className='Row' >
          <Col span={4} ></Col>
          <Col span={16} >TodoList</Col>
          <Col span={4} ><SearchOutlined /></Col>
        </Row>
      
      <TodoMain  />
    </div>
  );
}

export default App;
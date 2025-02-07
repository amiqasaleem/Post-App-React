import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
const RegisterForm = ({register}) => {
  return (
    <div style={{width:'100vw', height:'90vh'}}>
        <Form name="basic" labelCol={{span: 8,}} wrapperCol={{ span: 16,}}
        style={{maxWidth: '30vw',height:'90%',backgroundColor:'violet',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',border:'2px solid purple', borderRadius:'2rem', margin:'auto'}}
        initialValues={{remember: true,}}
        onFinish={register}
        onFinishFailed={onFinishFailed}
        autoComplete="off">

        <Form.Item label="Email" name="email" 
        rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}>
          <Input style={{width:'200px'}}/>
        </Form.Item>
        <Form.Item label="Password" name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}>
          <Input.Password style={{width:'200px'}}/>
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" style={{backgroundColor:'purple', padding:'1rem 2rem'}}>
            Submit
          </Button>
          <p>Already have an account? <Link to={'/login'} style={{color:'purple', textDecoration:'underline'}}>Login here.</Link></p>
        </Form.Item>
      </Form>
      </div>
  )
}
export default RegisterForm;
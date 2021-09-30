//import React, { Component } from 'react';
import React, { useState  } from 'react';

import { Form, Button, Container, Row, Alert } from 'react-bootstrap';
import { withRouter,useHistory } from 'react-router-dom';
import User from './User';





function Login() {

  const [email, Setemail] = useState(0);
  const [password, Setpassword] = useState(0);
  const [errMessage, seterrMessage] = useState(0);
  const history = useHistory();



  const click = async () => {
    try {
      await User.login(email, password);

      history.push('/list1' );
    } catch (e) {
      return ({ errMessage: 'メールアドレスかパスワードが違います' });
    }
  };

  const handleChange = e => {
    return ({ [e.target.id]: e.target.value });
  };

  
    return (
      <Container className="center">
        <Row className="justify-content-md-center">
          <Form>
            {errMessage && (
              <Alert variant="danger"></Alert>
            )}
            <p>
              <b>ログイン</b>
            </p>
            <Form.Group controlId="email">
              <Form.Label>メールアドレス</Form.Label>
              <Form.Control
                type="email"
                placeholder="メールアドレスを入力してください"
                onChange={handleChange}
                value={Setemail}
                
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>パスワード</Form.Label>
              <Form.Control
                type="password"
                placeholder="パスワードを入力してください"
                onChange={handleChange}
                value={Setpassword}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={click}>
              ログイン
            </Button>
          </Form>
        </Row>
      </Container>
    );
  
}

export default withRouter(Login);

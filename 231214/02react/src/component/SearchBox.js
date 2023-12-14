import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Form, Button } from "react-bootstrap";

const SearchBox = () => {
  const [keyWord, setkeyWord] = useState('');
  const dispatch = useDispatch();
  const changekeyWord = (event) => {
    setkeyWord(event.target.value);
  };
  const searchByname = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyWord } });
  };
  return (
    <Form onSubmit={searchByname}>
      <Row className="searchBox">
        <Col>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={changekeyWord}
          />
        </Col>
        <Col>
          <Button type="submit">검색</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;

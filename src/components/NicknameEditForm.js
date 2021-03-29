import React from 'react';
import {Form , Input} from "antd";
import styled from 'styled-components'

const InputSearch = styled(Input.Search)`
    margin-bottom: 20px;
    border: 1px gray;
    padding: 20px;
`;

const MyComponent = () => {
    return (
        <Form>
            <InputSearch addonBefore={"닉네임"} enterButton={"수정"}/>
        </Form>
    );
};

export default MyComponent;

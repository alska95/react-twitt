import React from 'react';
import {List , Button , Card } from 'antd';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {StopOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";

const Followers = styled(List)`
  margin-bottom: 20px;
  text-align: center;
`


const FollowList = ({header , data}) => {

    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn);

        return (
            <>
            {isLoggedIn ?
                    <Followers
                        grid = {{gutter: 4 , xs : 2 , md : 3}}
                        size = "small"
                        header={<div>{header}</div>}
                        loadMore={<div style={{testAlign:'center', margin:'10px 0'}}><Button>더보기</Button></div>}
                        bordered
                        dataSource={data}
                        renderItem={(item)=>(
                            <List.Item style={{marginTop:20 }}>
                                <Card actions={[<StopOutlined key={"stop"}/>]}>
                                    <Card.Meta description={item.nickname}/>
                                </Card>
                            </List.Item>
                        )}/>:
                <div>로그인 하세요!</div>
            }
            </>

        );
};

FollowList.propTypes = {
    header:PropTypes.string.isRequired,
    data:PropTypes.array.isRequired,
}
export default FollowList;

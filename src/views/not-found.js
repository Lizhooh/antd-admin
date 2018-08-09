import React, { } from 'react';
import styled from 'styled-components';

export default () => (
    <Panel className="flex flex-center">
        <Main className="flex flex-ai-center">
            <img src={require('../assets/not-found.png')} />
            <div>
                <h3>404 - 抱歉，你访问的页面不存在</h3>
                <p>您要找的页面没有找到，请返回首页继续浏览</p>
            </div>
        </Main>
    </Panel>
);

const Panel = styled.div`
    margin: 20px;
    height: 500px;
    background-color: #fff;
`;

const Main = styled.div`
    border-radius: 6px;
    padding: 20px;
    color: #567;

    > img {
        max-width: 100%;
        max-height: 100%;
        margin-right: 20px;
    }
`;
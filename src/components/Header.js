import React from 'react'
import { Menu, Icon } from 'antd';
import { createBrowserHistory } from 'history'



export default function Header(props){
    const history = createBrowserHistory({
        basename: '',             //基链接
        forceRefresh: true        //是否强制刷新
    });
    
    
      const handleClick = e => {
        console.log('click ', e);
        //this.setState({
         // current: e.key,
       // });
       history.push(e.key);

      };

     return(

        <Menu onClick={handleClick}  selectable="true"  mode="horizontal">
        <Menu.Item key="/">
          <Icon type="mail" />
          首页
        </Menu.Item>
        <Menu.Item key="/list">
          <Icon type="appstore" />
          运价列表
        </Menu.Item>
        <Menu.Item key="us">
          <Icon type="mail" />
          关于我们
        </Menu.Item>
        </Menu>
    
)
}

 
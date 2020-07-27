import * as React from 'react';
import styled from 'styled-components'; 
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { RouterStore } from 'mobx-react-router';
import AccountService from './service/AccountService';

const LoginContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    padding:'20px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
})

const Title = styled('span')({
    fontSize: '24px',
    color: 'rgb(0,0,0,0.7)',
    fontWeight: 550
})

const TextInput = styled('input')({
    margin: '20px',
    padding: '10px',

})

const LoginBtn = styled('input')({
    maring: '10px',
    padding: '10px',
    backgroundColor: '#70CDF2',
    color: '#FFF',
    borderRadius: '5px',
    borderWidth: '0px',
    minWidth: '100px'
})

type LoginPageProps = {
    routing?: RouterStore
    account?: AccountService
    
}

@inject('routing')
@inject('account')
@observer
export default class LoginPage extends React.Component<LoginPageProps>{

    @observable
    username: string = '';

    @observable
    password: string = '';

    async login(){
        console.log(this.username,this.password)
        let res = await this.props.account?.loginUser(this.username,this.password)
        if(res){
            this.props.routing?.push('/users')
        }
    }

    render(){
        return(
            <React.Fragment>
                <LoginContainer>
                    <Title>Login</Title>
                    <TextInput type="text" placeholder="Account ID" value={this.username} 
                        onChange={(e)=>this.username = e.target.value} />
                    <TextInput type="password" placeholder="Password" value={this.password}
                        onChange={e=>this.password=e.target.value} />
                    <LoginBtn type="submit" value="Login" onClick={()=>this.login()}/>
                </LoginContainer>
            </React.Fragment>
        )
    }
}
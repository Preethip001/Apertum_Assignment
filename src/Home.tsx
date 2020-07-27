import * as React from 'react';
import styled from 'styled-components'; 
import { Switch, Route } from 'react-router';
import LoginPage from './LoginPage';
import UsersPage from './UsersPage';

export const HomeContainer = styled('div')({
    backgroundColor: 'E5E5E5'
})

export const Header = styled('div')({
    backgroundColor: 'FFFFFF',
    width: '100%',
    height: '72px',
    display: 'flex',
    padding: '18px',
    alignContent: 'center',
    position: 'fixed',
    left: '0',
    top: '0'
})

export const Body = styled('div')({
    backgroundColor: 'transparent',

})

export const HamBurgerMenu = styled('a')({
    textDecoration: 'none',
    color: '606060',
    textAlign: 'center',
    width: '28px',
    height: '28px',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0px 15px 0px 0px',
    fontSize: '25px',
    '&:hover':{
        textDecoration: 'none',

    }

})

export const Logo = styled('img')({
    margin: '0px 15px 0px 0px',
})

export const Name = styled('label')({
    color: '000000',
    fontFamily: 'Raleway',
    textTransform: 'uppercase',
    fontSize: '22px',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0px 15px 0px 0px',
})


export const Span = styled('div')({
    display: 'flex',
    flexGrow: 1
})


export const AccountIcon = styled('div')({
    width: '38px',
    height: '38px',
    borderRadius: '18px',
    backgroundColor: 'C4C4C4',
    margin: '0px 15px'
})
export const HomeItemsContainer = styled('div')({
    padding: '109px 93px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})


class Home extends React.Component<{},{}>{

    render(){
        return(
            <React.Fragment>
                <HomeContainer>
                    <Header>
                        {/* <HamBurgerMenu href="">&#9776;</HamBurgerMenu> */}
                        <Logo alt="" src={require("./Images/logo.svg")}></Logo>
                        <Name>Apertum Assignment</Name>
                        <Span></Span>
                        <AccountIcon></AccountIcon>
                    </Header>
                    <Body>
                        <HomeItemsContainer>
                        <Switch>
                            
                            <Route path="/users" component={UsersPage} />
                            
                            <Route path="/" component={LoginPage} />
                        </Switch>
                            
                        </HomeItemsContainer>
                        
                    </Body>
                </HomeContainer>
            </React.Fragment>
        );
    }
}

export default Home;
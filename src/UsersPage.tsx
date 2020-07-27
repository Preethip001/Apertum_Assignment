import * as React from 'react';
import styled from 'styled-components'; 
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { RouterStore } from 'mobx-react-router';
import AccountService from './service/AccountService';


const FilterBtn = styled('input')({
    margin: '10px',
    padding: '10px',
    backgroundColor: '#FA6568',
    color: '#FFF',
    borderRadius: '5px',
    borderWidth: '0px',
    width: '100px',
    alignSelf: 'flex-end'
})

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column'
})

const Card = styled('div')({
    minWidth: '200px',
    minHeight: '200px',
    zIndex: 10,
    backgroundColor: '#FFF',
    margin: '10px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column'
})

const UsersConatiner = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
})

const Text = styled('span')({
    margin: '5px'
})

type User = {
    firstName: string
    lastName: string
    age: string
    accountId: string
}

type UsersPageProps = {
    routing?: RouterStore
    account?: AccountService
    
}

@inject('routing')
@inject('account')
@observer
export default class UsersPage extends React.Component<UsersPageProps>{

    @observable
    usersList:  User[] = [];

    applyFilter(){
        console.log('age>=20 && age<30 && length of full name >=10')
        let users: User[] = this.props.account?.usersList?this.props.account?.usersList:[];
        if(users.length>0){
            let filteredList = users.filter(user=>parseInt(user.age)>=20 && parseInt(user.age)<=30 && (user.firstName+user.lastName).length>=10)
            this.usersList = filteredList;
        }
    }

    removeFilter(){
        this.usersList = this.props.account?.usersList?this.props.account?.usersList:[];
    }

    async componentDidMount(){
        await this.props.account?.getUsers();
        this.usersList = this.props.account?.usersList?this.props.account?.usersList:[];
    }

    render(){
        return(
            <React.Fragment>
                <Container>
                <FilterBtn type="submit" value="Filter" onClick={()=>this.applyFilter()}/>
                <FilterBtn type="submit" value="Reset" onClick={()=>this.removeFilter()}/>
                <UsersConatiner>
                    {this.usersList.map((user,i)=>
                    <Card key={`user-${i}`}>
                        <Text>{`Name: ${user.firstName} ${user.lastName}`}</Text>
                        <Text>{`Age: ${user.age}`}</Text>
                    </Card>
                    )}
                </UsersConatiner>
                </Container>
            </React.Fragment>
        )
    }
}
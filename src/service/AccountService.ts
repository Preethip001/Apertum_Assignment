import { observable } from 'mobx';
import { getUrl } from '../assets/serverInfo';

type GetUsersResult = "SUCCESS" | "ERROR"

export default class AccountService {

    private _usersList = [];

    get usersList(){
        return this._usersList;
    }
    
    async loginUser(username: string, password: string): Promise<boolean|null>{
        console.log("AccountService",username,password)
        try{
            let obj = {
                accountId: username,
                pswd: password
            }
			let url = getUrl(`/user/login`)
			let result = await fetch(url, {
                method: 'POST',
                body:JSON.stringify(obj),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept-Encoding': 'application/json'
                }
			});
			var response = JSON.parse(await result.text()) 
            console.log("AccountService",response) //{"token": ${token},"message":"You got the token!"}
            if(response.message == 'You got the token!' && response.token){
                localStorage.setItem('authToken',response.token)
                    return true;
            }
			return false
		}catch(error){
            console.log(error);
            return null;
        }
    }

    async getUsers(): Promise<GetUsersResult>{
        try{
            let token = localStorage.getItem('authToken')
			let url = getUrl(`/users`)
			let result = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept-Encoding': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
			});
			var response = JSON.parse(await result.text()) 
            console.log("getUsers",response) //{"token": ${token},"message":"You got the token!"}
            this._usersList = response;
            return "SUCCESS"
		}catch(error){
            console.log(error);
            return "ERROR";
        }
    }
}
import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";  

//all services are made in such a way that if backend changes only this file will change

// const client = new Client()
//     .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<YOUR_PROJECT_ID>'); // Your project ID

// const account = new Account(client);

// const result = await account.create(
//     '<USER_ID>', // userId
//     'email@example.com', // email
//     '', // password
//     '<NAME>' // name (optional)
// );

// console.log(result);

//better code export for registration

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            //ref to client
            //methods
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);
        this.account = new Account(this.client)
    }
    //signup method
    async createAccount({ email, password,name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                //call another method and now login //msg redirect
                return this.login({email, password})
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }// can be fail as well
        // so try catch
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }
    // login or not
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service:: getCurrentUser :: error", error)
            // or throw error
        }
        return null;
    }

    //logout
    async logout() { 
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error)
        }
    }
}

const authService = new AuthService();
export default authService;
//we will make object so dont have make object in component in registration

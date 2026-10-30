 import { expect, type Locator, type Page } from '@playwright/test';
 export class LoginPage{
    page:Page;
    userName:Locator;
    password:Locator;
    loginBtn:Locator
    constructor(page:Page){
        this.page = page;
        this.userName =   page.getByPlaceholder('email@example.com');
        this.password = page.getByPlaceholder('enter your passsword');
        this.loginBtn =  page.getByRole("button" , {name:'login'});
    }

    async goTO(){
        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    }

   async validateLogin(userName : string, Password : string){
       await this.userName.fill(userName);
       await this.password.fill(Password);
       await this.loginBtn.click();
       await this.page.waitForLoadState('networkidle');
    }
 }


import { type Page } from '@playwright/test';

import {LoginPage} from "./LoginPage";
import {DashboardPage} from "./DashboardPage";
import { CardPage } from "./CardPage";



export class POManager{
 
    page:Page;
    loginPage:LoginPage;
    dashboardPage:DashboardPage;
    cardPage:CardPage;
    constructor(page:Page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.cardPage = new CardPage(this.page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getDashboardPage(){
        return this.dashboardPage;
    }

    getCardPage(){
        return this.cardPage;
    }

}


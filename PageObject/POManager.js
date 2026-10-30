
const {LoginPage} = require("./LoginPage");
const {DashboardPage}= require("./DashboardPage");
const {CardPage} = require("./CardPaGe");
class POManager{
    constructor(page){
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

module.exports = {POManager};
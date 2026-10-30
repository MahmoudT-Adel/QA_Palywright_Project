 class LoginPage{
    constructor(page){
        this.page = page;
        this.userName =   page.getByPlaceholder('email@example.com');
        this.password = page.getByPlaceholder('enter your passsword');
        this.loginBtn =  page.getByRole("button" , {name:'login'});
    }

    async goTO(){
        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    }

   async validateLogin(userName , Password){
       await this.userName.fill(userName);
       await this.password.fill(Password);
       await this.loginBtn.click();
       await this.page.waitForLoadState('networkidle');
    }
 }

 module.exports = {LoginPage};
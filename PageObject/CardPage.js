class CardPage{
    constructor(page){
        this.page = page;
         this.cart =page.locator('div li').first().waitFor();
          this.product =page.getByText('ZARA COAT 3').isVisible();
          this.checkoutBtn = page.getByRole("button",{name :'Checkout'});
          this.country = page.getByPlaceholder('Select Country');
         this.indiBtn= page.getByRole("button" , {name:' India'}).nth(1);
         this.placeOrderBtn = page.getByText('Place Order');
          this.checkResult =   page.getByText(" Thankyou for the order. ")
        }

        async createOrder(){
await this.cart;
await this.product;
 await this.checkoutBtn.click();
 await this.country.pressSequentially("ind");
 await this.indiBtn.click();
 await this.placeOrderBtn.click();
//  await expect (this.checkResult).toBeVisible();
}
}

module.exports = {CardPage};
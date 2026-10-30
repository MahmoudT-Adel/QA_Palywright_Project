import { expect, type Locator, type Page } from '@playwright/test';
export class CardPage{
    page:Page;
    cart:Locator;
    product:Locator;
    checkoutBtn:Locator;
    country:Locator;
    indiBtn:Locator;
    placeOrderBtn:Locator;
    checkResult:Locator;
    constructor(page:any){
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


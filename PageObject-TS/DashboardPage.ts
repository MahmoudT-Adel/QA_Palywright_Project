import { type Locator, type Page } from '@playwright/test';
export class DashboardPage {
    page: Page;
    products: Locator;
    ProductText: Locator;
    cart: Locator;  
    constructor(page:any) {
        this.page = page;
        this.products = page.locator('.card-body');
    this.ProductText = page.locator('.card-body b').nth(0).waitFor();
       this.cart = page.locator('[routerlink*="cart"]');}

    async addProductToCart(ProductName: string) {
          await this.products.filter({hasText: ProductName}).getByRole("button", {name:' Add To Cart'}).click();
    }
async goToCart() {
    await this.cart.click();
}
}

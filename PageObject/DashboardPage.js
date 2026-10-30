class DashboardPage {
    constructor(page) {
        this.page = page;
        this.products = page.locator('.card-body');
       this.ProductText =page.locator('.card-body b').nth(0).waitFor();
       this.cart = page.locator('[routerlink*="cart"]');}

    async addProductToCart(ProductName) {
          await this.products.filter({hasText: ProductName}).getByRole("button", {name:' Add To Cart'}).click();

    }
async goToCart() {
    await this.cart.click();
}
}

module.exports = {DashboardPage};



import  {test, expect} from "@playwright/test";

test('Client Can Login', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    const UserEmail ='m27mouMd1122@gmail.com'
    const email = page.getByPlaceholder('email@example.com');
    const password = page.getByPlaceholder('enter your passsword');
    const loginBtn = page.getByRole("button" , {name:'login'});

    const ProductName = 'ZARA COAT 3';
    const products = page.locator('.card-body');

    await email.fill(UserEmail);
    await password.fill('.bCsw8gt5@U@yH9');
    await loginBtn.click();
  //  await page.waitForLoadState('networkidle');
  

    await page.locator('.card-body b').nth(0).waitFor();
    await products.filter({hasText: ProductName}).getByRole("button", {name:' Add To Cart'}).click();

    
     await page.locator('[routerlink*="cart"]').click();
     await page.locator('div li').first().waitFor();

    await page.getByText(ProductName).isVisible()
    
      await page.getByRole("button",{name :'Checkout'}).click();
    
  await  page.getByPlaceholder('Select Country').pressSequentially("ind")


 await page.getByRole("button" , {name:' India'}).nth(1).click();
 await page.getByText('Place Order').click();
 await expect (page.getByText(" Thankyou for the order. ")).toBeVisible();

});

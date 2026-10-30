import  {test, expect} from '@playwright/test';


test('PlayWright Special Locator' , async ({page})=>{
  const slowExpect = expect.configure({ timeout: 9000 });
  page.goto("https://rahulshettyacademy.com/angularpractice/")
  await page.getByLabel("Check me out if you Love IceCreams!").click();
  await page.getByLabel("Gender").selectOption("Female")
  await page.getByLabel("Employed").check();
  await page.getByLabel("Password").fill("bw234EE")
  await page.getByRole("button" , {name :"Submit"}).click();
  await page.getByText(" The Form has been submitted successfully!.").isVisible();
  await page.getByRole("link" , {name:'Shop'}).click();
 await page.locator("app-card-list app-card").filter({hasText:"Nokia Edge"}).getByRole("button").click();
 await slowExpect(page.locator(".my-4").first()).toBeVisible();
 page.pause();
})

import {test, expect} from "@playwright/test";
test('First Step To Playwight' , async ({browser})=>{
    const contxt = await browser.newContext();
    const page = await contxt.newPage();
    const username = page.locator('#username');
    const signInBtn = page.locator('#signInBtn');
    const cardTitles = page.locator('.card-body a');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
     console.log(await page.title())
     await username.fill('rahulshet')
     await page.locator('[type=password]').fill('Learning@830$3mK2')
     await signInBtn.click()
     console.log(await page.locator('[style*="block"]').textContent());
     await expect(await page.locator('[style*="block"]')).toContainText('Incorrect')
     await username.fill("")
     await username.fill('rahulshettyacademy')
     await signInBtn.click()
   console.log(  await cardTitles.first().textContent());    
      console.log(await cardTitles.nth(0).textContent());   
        console.log(await cardTitles.allTextContents())                        
})

test('UI controls' , async ({page})=>{
  await  page.goto('https://rahulshettyacademy.com/loginpagePractise/')
  const  userName = page.locator('#username');
  const signInBtn = page.locator('#signInBtn');
   const dropdown = page.locator("select.form-control");
   await dropdown.selectOption("consult");
  const radioBtn = page.locator(".radiotextsty").last();
  const radioTerms = page.locator("#terms");
  const documentLink = page.locator("[href*='documents-request']");
  await radioBtn.click();
  await page.locator("#okayBtn").click();

  console.log(await radioBtn.isChecked());
  expect(await radioBtn).toBeChecked();
  
  await radioTerms.click();
  await expect(radioTerms).toBeChecked();
await radioTerms.uncheck();
expect (await radioTerms.isChecked()).toBeFalsy();

await  expect(documentLink).toHaveAttribute('class','blinkingText');
  //await page.pause();
})

test('Conrtol Handel Windows' , async ({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
const documentLink = page.locator("[href*='documents-request']");
  const  userName = page.locator('#username');
  
 const [newPage] =await Promise.all([
  context.waitForEvent('page'),
  documentLink.click()
])

 let text:any ;
 text = await newPage.locator(".red").textContent();
const arrayText = text.split("@"); 
// console.log( text);
// console.log(arrayText)
// console.log(arrayText[1].trim().split(" ")[0]);
const domain =arrayText[1].trim().split(" ")[0];
await userName.fill(domain);
console.log(await userName.inputValue());




})

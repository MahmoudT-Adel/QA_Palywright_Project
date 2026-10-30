import { test, expect } from "@playwright/test";
import { POManager } from "../PageObject-TS/POManager";
import { customtest } from "../Utils-Ts/test-base";
import dataSet from "../Utils/PlaceOrderDetails.json";



for(const data of dataSet)
  {
  test(`Client Can Login ${data.ProductName}`, async ({ page }) => 
    {
    const poManager = new POManager(page);

    const loginPage = poManager.getLoginPage();
    await loginPage.goTO();
    await loginPage.validateLogin(data.UserEmail, data.Password);

    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.addProductToCart(data.ProductName);
    await dashboardPage.goToCart();

    const cardPage = poManager.getCardPage();
    await cardPage.createOrder();
    await expect(cardPage.checkResult).toBeVisible();
  })
};

customtest(`Client Can Login`, async ({ page, testDataForOrder }) => {
    const poManager = new POManager(page);

    const loginPage = poManager.getLoginPage();
    await loginPage.goTO();
    await loginPage.validateLogin(testDataForOrder.UserEmail, testDataForOrder.Password);

    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.addProductToCart(testDataForOrder.ProductName);
    await dashboardPage.goToCart();

    const cardPage = poManager.getCardPage();
    await cardPage.createOrder();
    await expect(cardPage.checkResult).toBeVisible();
  })

import { test as baseTest } from "@playwright/test";

interface TestDataForOrder{
    UserEmail: string;
    Password: string;
    ProductName: string;
}
export const customtest= baseTest.extend<{ testDataForOrder: TestDataForOrder }>({

    testDataForOrder:{
        UserEmail: "m27mouMd1122@gmail.com",
        Password: ".bCsw8gt5@U@yH9",
        ProductName: "ZARA COAT 3"
    }
})
const  baseTest =  require("@playwright/test");


exports.customtest= baseTest.extend({

    testDataForOrder:{
        UserEmail: "m27mouMd1122@gmail.com",
        Password: ".bCsw8gt5@U@yH9",
        ProductName: "ZARA COAT 3"
    }
})
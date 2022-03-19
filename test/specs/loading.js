const mainPage = require("../pageobjects/mainPage");

describe('Dynamic loading page', async () => {

    it('wait for the hiden element to show', async () => {

        await mainPage.open()
        await mainPage.dynamicButton.click()

        await expect($('h3=Dynamically Loaded Page Elements')).
        
    });

});
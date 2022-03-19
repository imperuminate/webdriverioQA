// const dynamicLoadPage = require("../pageobjects/dynamicLoadPage1");

describe('Dynamic loading page', async () => {

    it('wait for the hiden element to show', async () => {

        // await dynamicLoadPage.open()
        // await dynamicLoadPage.startButton.click()
        // await expect(dynamicLoadPage.finishText).toEqual('Hello World!')

        const startButton = $('#start')
        const finishText = $('#finish h4')

        browser.url(/dynamic_loading/1)

        startButton.click()

        expect(finishText).toEqual('Hello World!')

    })

})
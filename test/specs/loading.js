const dynamicLoadPage = require("../pageobjects/dynamicLoadPage1");

describe('Dynamic loading page', async () => {

    it('wait for the hiden element to show', async () => {

        const loading = $('#loading')

        await dynamicLoadPage.open()
        await dynamicLoadPage.startButton.click()

        await loading.waitForDisplayed()
        await loading.waitForDisplayed({reverse: true})

        await dynamicLoadPage.finishText.waitForDisplayed({timeout: 150000})

        await expect(dynamicLoadPage.finishText).toHaveTextContaining('Hello World!')


        // await browser.pause(5000) // = 5 sec.

        // const startButton = $('#start button')
        // const finishText = $('#finish h4')
        // await browser.url('/dynamic_loading/1')
        // await startButton.click()
        // await browser.pause(9000)
        // await expect(finishText.getText()).toEqual('Hello World!')
    })

})


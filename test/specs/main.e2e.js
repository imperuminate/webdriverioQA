const mainPage = require("../pageobjects/mainPage")

describe('Main page', async () => {

    it('Verify list items', async () => {

        await mainPage.open()

        await expect(mainPage.listExamples).toBeElementsArrayOfSize({gte: 1})

    })

})
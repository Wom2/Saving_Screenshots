import DynamicPage from '../pageobjects/dynamic_load.page.js'

describe ('Dynamic Screenshots', () => {
    it ('should take screenshots', async () => {

        await DynamicPage.open()

        await (browser).pause(2000)

        await (browser).saveScreenshot('test/images/Projectscreenshot.png')
        await (DynamicPage).start.click()
        await (browser).pause(6000)
        await expect(DynamicPage.Hello).toHaveTextContaining(
            'Hello World!'
        )
        await (browser).saveScreenshot('test/images/Projectscreenshots.png')

        await (browser).pause(3000)


    });
});
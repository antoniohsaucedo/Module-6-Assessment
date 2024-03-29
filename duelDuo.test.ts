
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


test('Check that clicking the Draw button displays the div with id = “choices”', async () => {
    const draw = await driver.findElement(By.id('draw'))
    const displayed = await draw.isDisplayed()
    expect(displayed).toBe('choice')
})
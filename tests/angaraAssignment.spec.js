const {test, expect} = require('@playwright/test');
const exp = require('constants');
const path = require('path');
const fs = require('fs/promises');

test("Capture Screenshot - HomePage(P) @PositiveFlow", async({browser})=> {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.angara.com/");
    try{
        await expect(page).toHaveScreenshot("angara-homepage.png");
        const passedPath = path.join(__dirname, 'passed_screenshots', `homepage_passed_${Date.now()}.png`);
        await page.screenshot({ path: passedPath});
    }catch(error){
        const failedPath = path.join(__dirname, 'failed_screenshots', `homepage_failed_${Date.now()}.png`);
        await page.screenshot({ path: failedPath, fullPage: true });
        console.log(`Failed image stored at: ${failedPath}`);
        throw error;
    }
});

test("Capture Screenshot - HomePage(N) @NegativeFlow", async({browser})=> {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.angara.com/in-en");
    try{
        await expect(page).toHaveScreenshot("angara-homepage.png");
        const passedPath = path.join(__dirname, 'passed_screenshots', `homepage_passed_${Date.now()}.png`);
        await page.screenshot({ path: passedPath});
    }catch(error){
        const failedPath = path.join(__dirname, 'failed_screenshots', `homepage_failed_${Date.now()}.png`);
        await page.screenshot({ path: failedPath, fullPage: true });
        console.log(`Failed image stored at: ${failedPath}`);
        throw error;
    }
});
describe('Basic user flow for Landing Page', () => {
    beforeAll(async () => {
        //Note this is a personal Live Server link. So, it will not work in general. 
        await page.goto('http://127.0.0.1:8000/source/prototyping/card-prototype.html');
    });

    test("Verify user cannot predict without cards", async () => {
      await page.click('#getTarot');
      const outputText = await page.$eval('#output', (text) => {
        return text.innerHTML;
      });
      expect(outputText).toBe('<p>You did not select enough cards!</p><p></p>');
    });

    
});

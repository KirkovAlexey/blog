import nightmare from 'nightmare';

describe('When visit the homapage', () => {

  it('Welcomes the user', async () => {
    let page = nightmare()
      .goto('http://localhost:3000');
    let text = await page.evaluate(() => (document.body.textContent)).end();
    expect(text).toContain('Thinknetica Blog');
  });

});

describe('When visit the edit blog page', () => {
  it('Edit Post', async () => {
    let page = nightmare()
      .goto('http://localhost:3000')
      .click('a[href="/posts/1/edit"]');

    let text = await page.evaluate(() => (document.body.textContent)).end();

    expect(text).toContain('Edit Post');
  });

  it('should validate lenght title', async () => {

    let page = nightmare({show: true})
      .goto('http://localhost:3000')
      .click('a[href="/posts/1/edit"]')
      .wait('input[name="title"]')
      .insert('input[name="title"]', '')
      .click('input[type="submit"]');

    let titleValidation = await page.evaluate(() => (document.querySelector('form').innerHTML)).end();
    expect(titleValidation).toContain('Длина заголовка не может быть меньше 5 символов');
  });
});

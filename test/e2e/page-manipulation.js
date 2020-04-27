import { Selector } from 'testcafe';

fixture `Page manipulation`
    .page('https://devexpress.github.io/testcafe/example/');

test('Reload the tested page', async t => {
    await t.typeText('#developer-name', 'Peter Parker');

    await t.eval(() => location.reload(true));

    await t
        .wait(3000)
        .expect(Selector('#developer-name').value).eql('');
});

test('Submit name (incorrect test by-design)', async t => {
    const welcomeMessage = Selector('#article-header').textContent;

    await t
        .typeText('#developer-name', 'Peter Parker')
        .click('#submit-button')
        .expect(welcomeMessage).eql('Thank you, Parker Peter!');
});

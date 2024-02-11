suite('About page Tests', function() {
  test('page should contain link to contact page', function() {

    console.log('I was here in "About page test" ');
    assert($('a[href="/contact"]').length);
  });
});
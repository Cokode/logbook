// import {it, describe} from "mocha";
// import { assert } from "chai";


suite('About page test', function() {
  test('it has a link to contact page', function() {
    const link = document.querySelector('a[href="/contact"]');

    assert.isNotNull(link, "The document has a link to contact page");
  });
});  
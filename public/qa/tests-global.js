import { assert } from "chai";
import {it, describe} from "mocha"

 describe('Global Tests', function() {
    it('page has a valid title', function() {
      assert(document.title && document.title.match(/\S/) && 
        document.title.toUpperCase() !== 'TODO');
    });

    it("should add two numbers correctly", function() {
      assert(4 * 3, 12);
    });
  });
import { assert } from "chai";
import {it, describe} from "mocha";

 describe('Global Tests', function() {
    it('page has a valid title', function() {
      assert(document.title && document.title.match(/\S/) && 
        document.title.toUpperCase() !== 'TODO');
    });
  });
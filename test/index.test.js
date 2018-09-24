import { Ant } from "./../src/index.version1";
import {expect} from "chai";

describe("Test object is observerable",function (){
    it("should change?",function (){}) 
})

let Object_ = { val: 1 }
const Ant_Vue = new Ant(Object_, function (obj) {
    console.log(`New value is ----> ${obj}`);
});
Object_.val = 213;
Object_.val = 312;
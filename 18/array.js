var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriestovisit = ["china", "brazil", "denmark", "argentina"];
console.log("original;", countriestovisit);
console.log("alpabatical order:", __spreadArray([], countriestovisit, true).sort());
console.log("still in original order", countriestovisit);
console.log("reverseorder", __spreadArray([], countriestovisit, true).reverse());
console.log("still in original order", countriestovisit);
console.log("original array reversed:", countriestovisit.reverse());
console.log("back to original order", countriestovisit.reverse());
console.log("sorted in alphabatical array", countriestovisit.sort());
console.log("original array reverse again", countriestovisit.reverse());

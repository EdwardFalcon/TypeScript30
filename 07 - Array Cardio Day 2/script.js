var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
];
var comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 },
];
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
var isAdult = people.some(function (person) { return new Date().getFullYear() - person.year >= 19; });
console.log(isAdult);
// Array.prototype.every() // is everyone 19 or older?
var allAdult = people.every(function (person) { return new Date().getFullYear() - person.year >= 19; });
console.log(allAdult);
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
var comment = comments.find(function (comment) { return comment.id === 823423; });
console.log(comment);
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
var index = comments.findIndex(function (comment) { return comment.id === 823423; });
console.log(index);
var newComments = __spreadArray(__spreadArray([], comments.slice(0, index), true), comments.slice(index + 1), true);
console.table(newComments);

// Q114
// iterating over amap student id name and log each pair to console
var students = new Map();
students.set(1, "sadaf");
students.set(2, "fatima");
students.set(3, "Ahmed");
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var _a = students_1[_i], id = _a[0], name_1 = _a[1];
    console.log("ID: ".concat(id, ", Name: ").concat(name_1));
}

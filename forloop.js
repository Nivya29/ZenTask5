const resume = {
    "personalInformation" : {
        "firstName": "B.Nivya",
        "lastName": "Dharshini",
        "email": "nividharsh@gmail.com",
        "phoneNumber": 1234567890,
        "address": {
            "street": "Bharathiyar",
            "area":"Madipakkam",
            "place": "Chennai"
        }
    },

    "education" : [
        {
            "degree" : "Bachelor of Engineering",
            "course" :"Computer Science",
            "college" : "St.Joseph's college",
            "graduationYear" : 2019
        }],
    "experience" : [
        {
            "position" : "Associate",
            "company" : "ABC",
            "yearsOfExperience" : 2
        }],
    "skills" : [
        "Html",
        "CSS",
        "Basics Of JavaScript"
    ]
};
const keys = Object.keys(resume);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = resume[key];
    console.log(key, value);
}


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
for (const key in resume) {
    console.log(key);
    if (Array.isArray(resume[key])) {
        for (const value of resume[key]) {
            console.log(value);
        }
    } else {
        console.log(resume[key]);
    }
}


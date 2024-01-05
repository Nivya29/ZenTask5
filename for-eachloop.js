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
for (const category in resume) {
    console.log(`${category}:`);
    if (Array.isArray(resume[category])) {
        resume[category].forEach(item => {
            console.log(item);
        });
    } else {
      
        console.log(resume[category]);
    }
    console.log("\n"); 
}

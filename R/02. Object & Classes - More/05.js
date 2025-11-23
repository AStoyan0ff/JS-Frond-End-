function schoolRegister(input) {

    let register = {};

    for (let iss of input) {

        // let name = iss.match(/Student name: ([^,]+)/)[1];
        // let grade = Number(iss.match(/Grade: (\d+)/)[1]);
        // let score = Number(iss.match(/average score: ([0-9.]+)/)[1]);

        let data = iss.split(', ');
        let name = data[0].split(': ')[1];
        let grade = Number(data[1].split(': ')[1]);
        let score = Number(data[2].split(': ')[1]);

        if (score < 3) continue;
        let nextGrade = grade + 1;

        if (!register[nextGrade]) {

            register[nextGrade] = { 
                students: [], 
                scores: [] 
            };
        }

        register[nextGrade].students.push(name);
        register[nextGrade].scores.push(score);
    }

    let sortGrades = Object.keys(register).sort((a, b) => a - b);

    for (let grade of sortGrades) {

        //let students = register[grade].students;
        //let scores = register[grade].scores;

        let { students, scores } = register[grade];
        let avgScore = (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2);

        console.log(`${grade} Grade`);
        console.log(`List of students: ${students.join(', ')}`);
        console.log(`Average annual score from last year: ${avgScore}`);
        
        console.log();
    }
}

schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);
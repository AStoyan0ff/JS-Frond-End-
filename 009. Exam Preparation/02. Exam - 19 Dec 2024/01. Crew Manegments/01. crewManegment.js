function solution(input) {

    let N = Number(input.shift());
    let astronauts = {};
    
    for (let idx = 0; idx < N; idx++) {

        let [name, section, str] = input.shift().split(" ");
        let skills = str.split(",");

        astronauts[name] = {
            section,
            skills
        };
    }
    
    for (let ss of input) {
        if (ss === "End") break;

        let parts = ss.split(" / ");
        let cmd = parts[0];
        let name = parts[1];
        
        if (cmd === "Perform") {

            let section = parts[2];
            let skill = parts[3];

            if (astronauts[name].section === section &&
                astronauts[name].skills.includes(skill)) {

                console.log(`${name} has successfully performed the skill: ${skill}!`);

            } else {
                console.log(`${name} cannot perform the skill: ${skill}.`);
            }
        }
        
        else if (cmd === "Transfer") {

            let newSection = parts[2];
            astronauts[name].section = newSection;
            console.log(`${name} has been transferred to: ${newSection}`);

        } else if (cmd === "Learn Skill") {
            let newSkill = parts[2];

            if (astronauts[name].skills.includes(newSkill)) {
                console.log(`${name} already knows the skill: ${newSkill}.`);

            } else {

                astronauts[name].skills.push(newSkill);
                console.log(`${name} has learned a new skill: ${newSkill}.`);
            }
        }
    }
    
    for (let name in astronauts) {

        let section = astronauts[name].section;
        let skills = astronauts[name].skills.slice().sort().join(", ");
        console.log(`Astronaut: ${name}, Section: ${section}, Skills: ${skills}`);
    }
}

solution([
  "3",
  "Tom engineering_bay construction,maintenance",
  "Sara research_lab analysis,sampling",
  "Chris command_module piloting,communications",
  "Perform / Tom / engineering_bay / construction",
  "Learn Skill / Sara / robotics",
  "Perform / Sara / research_lab / robotics",
  "Transfer / Chris / research_lab",
  "Perform / Chris / research_lab / piloting",
  "Learn Skill / Tom / diagnostics",
  "Perform / Tom / engineering_bay / diagnostics",
  "End"
]);
function solve(data) {

    let N = Number(data.shift());

    let manuscripts = [];
    let manuscriptMap = {};

    for (let pos = 0; pos < N; pos++) {

        let [title, topic, pres] = data.shift().split('-');
        let topics = topic.split(',');
        let preservation = Number(pres);

        let manuscript = {

            title,
            topics,
            preservation
        };

        manuscripts.push(manuscript);
        manuscriptMap[title] = manuscript;
    }


    for (let iss of data) {

        if (iss === "Restoration Complete!") {
            break;
        }

        let parts = iss.split(" & ");
        let cmd = parts[0];
        let title = parts[1];
        let manuscript = manuscriptMap[title];

        if (cmd === "Research") {

            let topic = parts[2];
            let required = Number(parts[3]);

            if (manuscript.topics.includes(topic) &&
                manuscript.preservation >= required) {

                manuscript.preservation -= required;

                console.log(
                    `${title} has been researched on ${topic} and now has ${manuscript.preservation} preservation level!`
                );

            } else {

                console.log(
                    `${title} cannot be researched on ${topic} or is in poor condition!`
                );
            }
        }

        else if (cmd === "Restore") {
            let effort = Number(parts[2]);

            if (manuscript.preservation === 100) {
                console.log(`${title} is already fully restored!`);

            } else {

                let before = manuscript.preservation;
                manuscript.preservation += effort;

                if (manuscript.preservation > 100) {
                    manuscript.preservation = 100;
                }

                let gained = manuscript.preservation - before;
                
                console.log(
                    `${title} has been restored and gained ${gained} preservation level!`
                );
            }
        }

        else if (cmd === "Catalog") {
            let newTopic = parts[2];

            if (manuscript.topics.includes(newTopic)) {
                console.log(
                    `${title} is already catalogued with ${newTopic}.`
                );

            } else {

                manuscript.topics.push(newTopic);

                console.log(
                    `${title} has been catalogued with ${newTopic}!`
                );
            }
        }
    }

    for (let script of manuscripts) {

        console.log(`Manuscript: ${script.title}`);
        console.log(`- Topics: ${script.topics.join(', ')}`);
        console.log(`- Preservation Level: ${script.preservation}`);
    }
}

solve([
"3",
"Codex Gigas-Demonology,Herbalism-80",
"Voynich Manuscript-Cryptography-10",
"Book of Kells-Illumination-60",
"Research & Codex Gigas & Herbalism & 30",
"Catalog & Book of Kells & Calligraphy",
"Catalog & Book of Kells & Calligraphy",
"Restoration Complete!"
]);

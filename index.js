#!/usr/bin/env node

import chalk from 'chalk'; 
import cfonts from 'cfonts';
import boxen from 'boxen';
import gradient from "gradient-string";
import { createSpinner } from "nanospinner";

const RitochitInfo = async function() {
    const spinner = createSpinner("Loading your info...").start();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    spinner.success({ text: "Here is my info:" });

    const newDate = new Date();
    const currentDate = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;
    const currentTime = `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;

    const header = cfonts.render('Welcome!', {
        font: 'block', 
        align: 'center', 
        gradient: ['gray', 'white'],
        background: 'transparent', 
        letterSpacing: 1, 
        lineHeight: 1, 
        space: true,
        maxLength: '0'
    }).string; 

    const welcomeMessage = gradient.pastel(`👋  Hey there, I am Ritochit Ghosh, a web developer, blog writer, and AI/ML enthusiast living in Kolkata. I am currently pursuing a BTech degree and am in my 1st year. I am passionate about collaborating on innovative tech projects and always eager to learn and grow in the field.`);


    const GitHub = chalk.blue("GitHub:") + " " + chalk.gray("https://github.com/RitochitGhosh");

    const twitter = chalk.blue("Twitter:") + " " + chalk.gray("https://x.com/18Ritochit");

    const linkedIn = chalk.blue("LinkedIn:") + " " + chalk.gray("https://www.linkedin.com/in/ritochit-ghosh-3861372a0/");

    const leetcode = chalk.blue("LeetCode:") + " " + chalk.gray("https://leetcode.com/u/ghosh_ritochit/");

    const hashNode = chalk.blue("Hashnode:") + " " + chalk.gray("https://hashnode.com/@Ritochit18");

    const instagram = chalk.blue("Instagram:") + " " + chalk.gray("https://www.instagram.com/_ritochit.ghosh_?igsh=OWgyZ2tkb3gzZTM2");

    const email = chalk.blue("Email:") + " " + chalk.gray("ghosh.18.ritochit12@gmail.com");

    const contact = chalk.yellowBright("You can contact me through my email: 📧  ") + chalk.whiteBright("ghosh.18.ritochit12@gmail.com");

    

    const footer = chalk.cyanBright(`Thank you for using \`npx ritochit\`. Have a great day!`);
    const time = chalk.gray(`${currentTime}     ${currentDate}`) 
    

    const message = `
    ${header}
    ${welcomeMessage}

    ${GitHub}
    ${twitter}
    ${linkedIn}
    ${leetcode}
    ${hashNode}
    ${instagram}
    ${email}

    ${contact}

    ${footer}

    ${time}
    `;

    const boxedMessage = boxen(message, {
        padding: 1, 
        margin: 1,
        borderStyle: "round",
        borderColor: "green",
    });

    console.log(boxedMessage);
}

RitochitInfo();

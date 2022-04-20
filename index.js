#!/usr/bin/node

import os, { hostname } from 'os';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';

const osName = os.hostname().toUpperCase();


const sleep = (ms = 4000) => new Promise((resolve) => setTimeout(resolve, ms));

async function dOs(){
    const rainbowTitle = chalkAnimation.rainbow(figlet.textSync(osName ));
  
    await sleep();
    console.log(`
    OS : ${osName}
    ${chalk.blue('Kernel')} : ${os.release()}
    Shell : ${os.userInfo().shell}
  
  `);

    rainbowTitle.stop();
  };


    
await dOs();

import os, { hostname } from 'os';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';

const osName = os.hostname().toUpperCase();

const sleep = (ms = 5000) => new Promise((resolve) => setTimeout(resolve, ms));

async function dOs(){
    const rainbowTitle = chalkAnimation.rainbow(figlet.textSync(osName ));
    await sleep();
    rainbowTitle.stop();
  };
    
await dOs();
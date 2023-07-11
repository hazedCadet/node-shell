// node operates on the 'process' object running on the machine which has lower level access!

// methods for the process obj:
//    https://nodejs.org/api/process.html



process.stdout.write(`prompt > `);

// testing process.stdin.on vs sans on
/*
process.stdin.on(`data`, (data) => {
    const cmd = data.toString().trim();

    process.stdout.write(`typed: ${cmd}`);
    process.stdout.write(`\nprompt > `);
});
*/

// program runs indefinitely..
// probably the stdin.on....
// testing now...
// sans on - FAILED!
// notes:
//    Note that our process doesn't immediately end this time. That's because we've registered a listener to stdin, so Node won't kill the process automatically, as it assumes you may want to keep waiting for more user input. If you want to quit your Node prompt, use ^C (CTRL+C is the Unix polite interrupt signal).

// which part was the listener?...
/*
process.stdin(`data`, (data) => {
    const cmd = data.toString().trim();

    process.stdout.write(`typed: ${cmd}`);
    process.stdout.write(`\nprompt > `);
});
*/

// implement pwd
// method used is cwd()

process.stdin.on(`data`, (data) => {
    const cmd = data.toString().trim();

    process.stdout.write(`typed: ${cmd}\n`);
    // process.stdout.write(`\nprompt > `); // listens for next command again!

    if (cmd === 'pwd'){
        // process.stdout.write(process.cwd() + `\n`);
        // return process.cwd() + '\n'; // didn't seem to register...
        process.stdout.write(process.cwd() + `\n`);

    }

    process.stdout.write(`\nprompt > `);
});


/*
$ npm install -g nodemon
And now run nodemon bash.js. Nodemon watches files in a directory, recursively, and if they change it stops the process and re-runs your original command. Voilà, instant refreshing prompt during development!
*/

const prompts = 'Welcome to Holberton School, what is your name?\n'

process.stdout.write(prompts)
process.stdin.on('readable', () => {
    let res = process.stdin.read()
    if (res) {
        process.stdout.write(`Your name is: ${res}`)
    }
});

process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n')
});
process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !==null) {
		var instruction = input.toString().trim();
		switch (instruction) {
			case '/ver':
			process.stdout.write(process.version + '\n');
			break;
			case '/sys':
			process.stdout.write(process.env.OS + '\n');
			break;
			case '/exit':
			process.stdout.write('Quitting app!\n');
			process.exit();
			break;
			default:
			process.stderr.write('Wrong instruction\n');
		}
	}
});
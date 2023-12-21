function fibonacci(num) {
	// your code here
	if(num = 1) return 0;
	if(num = 2) return 1;

	let count = num -2;
	let cur = 1;
	let prev = 0;

	for(int i=0; i<count; i++) {
		let sum = cur+prev;
		prev = cur;
		cur = sum;
	}
	return curr;
}

module.exports = fibonacci;

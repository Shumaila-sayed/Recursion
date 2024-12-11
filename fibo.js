function fibs(n) {
    let arr = [0, 1]
    for (let i = 2; i < n; i++) {
        let num = arr[i - 1] + arr[i - 2];
        arr.push(num) 
    }
     return arr;
   }

console.log(fibs(8))

const fibRecursive = (n, a = [0, 1]) => {
	if (a.length >= n) return a;
	return fibRecursive(n, [...a, a[a.length - 2] + a[a.length - 1]]);
};
 
console.log(fibRecursive(8));
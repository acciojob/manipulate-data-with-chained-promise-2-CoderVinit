//your JS code here. If required.
function processArray(){
	let outputDiv = document.getElementById("output");

	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve([1,2,3,4])
		},3000)
	})
	.then((arr)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				const filtereArr = arr.filter(num=>num%2===0)
				outputDiv.textContent = filtereArr.join(", ");
				resolve(filtereArr)
			},1000)
		})
	})
	.then((filteredArr)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				const multipliedArr = filteredArr.map(num=>num*2)
				outputDiv.textContent = multipliedArr.join(", ")
				resolve(multipliedArr)
			},2000)
		})
	})
}

processArray()


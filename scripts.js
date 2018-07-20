// Web Assembly Loader:

let squarer;

function loadWebAssembly(fileName) {
	return fetch(fileName)
		.then(response => response.arrayBuffer())
		.then(bits => WebAssembly.compile(bits))
		.then(module => { return new WebAssembly.Instance(module) });
};

loadWebAssembly('squarer.wasm')
	.then(instance => {
		squarer = instance.exports._Z7squareri;
		console.log('Finished compiling! Ready when you are...');
	});

// Event Handlers:

document.addEventListener('DOMContentLoaded',function() {

    document.querySelector('input[id="number-input"]').onchange=changeEventHandler;

}, false);

function changeEventHandler( e ) {
	document.getElementById("number-output").innerHTML = squarer(e.target.value);
}

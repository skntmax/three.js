import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 1, 1, 1 );

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const loader = new GLTFLoader();
camera.position.z = 5;

loader.load(
	// resource URL
	's15_origin_free.glb',
	// called when the resource is loaded
	function ( gltf ) {
		scene.add( gltf.scene );
		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

		// renderer.render( gltf.scene, camera );

		// function animate() {
		// 	requestAnimationFrame(animate);
		// }
		// animate();
	},
	 
	// called while loading is progressing
	
	function ( xhr ) {
		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);




let light = new THREE.DirectionalLight( 0xffffff,2 ,4)
light.position.set(2,2,5)
scene.add(light)


function animate() {
	requestAnimationFrame(animate);
	renderer.render( scene, camera );
}

animate();

















// loader.load( '/s15_origin_free.glb'  , function ( gltf ) {
// 	scene.add( gltf.scene );
// }, undefined, function ( error ) {

// 	console.error( error );

// } );


// import { fileURLToPath } from 'url';
// import path from 'path';
// import { dirname } from 'path';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { GLTFLoader } from '../node_modules/three/addons/loaders/GLTFLoader.js';

// Initialize Three.js components
let scene, camera, renderer, cube;

// Set up the environment
function init() {
    // Create the scene
    scene = new THREE.Scene();
    
    // Set up the camera
    camera = new THREE.PerspectiveCamera(
        75, // Field of view
        window.innerWidth / window.innerHeight, // Aspect ratio
        0.1, // Near plane
        1000 // Far plane
    );
    camera.position.z = 5;

    // Set up the renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create the cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ 
        color: 0x00ff00 // Green color
    });
    
    // Create the cube mesh and add it to the scene
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);
}

// Handle window resizing
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Add event listener for window resize
window.addEventListener('resize', onWindowResize, false);

// Initialize the scene and start the animation
init();
animate(); 
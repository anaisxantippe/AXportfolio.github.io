// --------------------------------------------------MY THREEjs SCENE --------------------------------------------------

//variables I will use and declare a bit later
var camera, scene, renderer,
    geometry, material, mesh;
//starts the visuals
init();
animate();

// ----------------------------------------------------- 3D CONTENT ----------------------------------------------------

//here come the shapes and the light of my scene
function init() {

    //renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    //scene
    scene = new THREE.Scene();

    //camera
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1000;
    scene.add( camera );

    //text
    textGeometry = new THREE.PlaneGeometry(300,300);
    THREE.ImageUtils.crossOrigin = ''; // <- this is to be able to add a texture hosted on another server
    textTexture = THREE.ImageUtils.loadTexture('https://i.ibb.co/cCdB6vJ/xantippelato.png');
    textMaterial = new THREE.MeshLambertMaterial({color: 0x12D2A0, opacity: 1, map: textTexture, transparent: true, blending: THREE.AdditiveBlending})
    text = new THREE.Mesh(textGeometry,textMaterial);
    text.position.z = 800;
    text.position.y = 20;
    scene.add(text);

    //light
    light = new THREE.DirectionalLight(0xffffff,0.8);
    light.position.set(-1,0,1);
    scene.add(light);

    //smoke effect
    smokeTexture = THREE.ImageUtils.loadTexture('https://i.ibb.co/n3wpy81/galaxy.png');
    smokeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, map: smokeTexture, transparent: true});
    smokeGeo = new THREE.PlaneGeometry(300,300);
    smokeParticles = [];
    //smoke's number of elements, position and rotation
    for (p = 0; p < 80; p++) {
        var particle = new THREE.Mesh(smokeGeo,smokeMaterial);
        particle.position.set(Math.random()*500-250,Math.random()*280-250,Math.random()*900-60);
        particle.rotation.z = Math.random() * 360;
        scene.add(particle);
        smokeParticles.push(particle);
    }

    //controls the timing so the animation has the same speed in every device
    clock = new THREE.Clock();

    //create a canvas where the renderer can output the visuals
    document.body.appendChild( renderer.domElement );

}

// ----------------------------------------------------- FUNCTIONS -----------------------------------------------------

//animate the smoke
function animate() {
    delta = clock.getDelta();
    requestAnimationFrame( animate );
    evolveSmoke();
    render();
}

// length of the circle of smoke
function evolveSmoke() {
    var sp = smokeParticles.length;
    while(sp--) {
        smokeParticles[sp].rotation.z += (delta * 0.2);
    }
}

//render the whole scene
function render() {
    renderer.render( scene, camera )
}



var canNowTurn = false
var isPlaying = true

// this contains the collection of meshes/geometries
var meshes = [];

var lastAdded;

// miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function 
// miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function 
// miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function // miscellanious function 

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | (r*255) << 16 | (g*255) << 8 | (b*255)).toString(16).slice(1);
}

// SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE v
// SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE 
// SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE // SCENE 

// Set up the scene, camera, and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // softer shadows
document.body.appendChild(renderer.domElement);

// DNA
var DNA = new THREE.Group();
scene.add(DNA)

// Create a ground plane to receive shadows
var planeGeometry = new THREE.PlaneGeometry(10, 10);
var planeMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true;
plane.rotation.x = -Math.PI / 2;
plane.position.y = -2;
scene.add(plane);

// Position the camera
camera.position.z = 5;

// Add ambient light
var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Add directional light for shadows
var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(5, 10, 7);
directionalLight.castShadow = true;
scene.add(directionalLight);

// SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS v
// SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS 
// SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS // SHAPE CREATIONS 

function createCylinder(newName, width, radius, selectedcolor, position, rotation, parent){
    var cylinderMainGeometry = new THREE.CylinderGeometry(radius, radius, width, 8);
    var cylinderMaterial = new THREE.MeshStandardMaterial({ color: selectedcolor });

    var cylinder = new THREE.Mesh(cylinderMainGeometry, cylinderMaterial);
    cylinder.name = newName
    cylinder.position.set(position[0], position[1], position[2]); // Adjusted position
    cylinder.rotation.set(rotation[0], rotation[1], rotation[2])
    parent.add(cylinder);

    lastAdded = cylinder
}

function createSphere(newName, radius, selectedcolor, position, rotation, parent){
    var sphereGeometry = new THREE.SphereGeometry(radius, 50, 30 );
    var sphereMaterial = new THREE.MeshStandardMaterial( { color: selectedcolor  } ); 

    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial); 
    sphere.name = newName;
    sphere.receiveShadow = true;
    sphere.position.set(position[0], position[1], position[2]); // Adjusted position
    sphere.rotation.set(rotation[0], rotation[1], rotation[2]);
    parent.add(sphere);

    lastAdded = sphere
}


// FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS V
// FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS 
// FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS // FUNCTIONS 

// Function to recursively collect meshes from a group and its children
function collectMeshes(group, meshes) {
    group.children.forEach(function(child) {
        if (child instanceof THREE.Mesh) {
            // If the child is a mesh, add it to the meshes array
            meshes.push(child);
        } else if (child instanceof THREE.Group) {
            // If the child is a group, recursively collect meshes from it
            collectMeshes(child, meshes);
        }
    });
}

function generateStrands(amounts){
    var spacing = 10
    var rotationalSpacing = -0.8
    var dnaWidth = 2
    var cylinderWidth = dnaWidth+3
    var circleRad = 1.5
    var smallerRad = 0.5

    for (var i = 0; i<amounts; i++){
        var Pairs = new THREE.Group();
        Pairs.name = "Pair"+i
        DNA.add(Pairs);

        var angleInDegrees = 90;
        var angleInRadians = THREE.MathUtils.degToRad(angleInDegrees);

        var ThymineCLR = 0xd631c3
        var AdenineCLR = 0x34cf74
        var UnimportantCLR = 0x888888
        var SugarCLR = 0xfff8a6
        var SugarCenterCLR = 0xff5100
        // since i dont know how to do blender, im going to create the DNA from the scratch
        

        //////////////////// middle part
            createCylinder("u1_"+i, cylinderWidth, 0.2, 0xffffff, [0, i*spacing, 0], [0,0,angleInRadians], Pairs)
            createCylinder("u1_"+i, cylinderWidth, 0.2, 0xffffff, [3, i*spacing, 0], [0,0,angleInRadians], Pairs)
            createCylinder("u1_"+i, cylinderWidth, 0.2, 0xffffff, [0, i*spacing, 4.6], [0,0,angleInRadians], Pairs)
            createCylinder("u1_"+i, cylinderWidth, 0.2, 0xffffff, [3, i*spacing, 4.6], [0,0,angleInRadians], Pairs)
            
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [7, i*spacing, 1.2], [0,-0.9,angleInRadians], Pairs)
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [7, i*spacing, 3.2], [0,0.9,angleInRadians], Pairs)

            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [-3, i*spacing, 1.2], [0,-2.2,angleInRadians], Pairs)
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [-3, i*spacing, 3.2], [0,-0.9,angleInRadians], Pairs)
            
            createSphere("uc1_"+i, circleRad, UnimportantCLR, [-dnaWidth, i*spacing, 0], [0,0,0], Pairs)
            createSphere("uc1_"+i, circleRad, UnimportantCLR, [6, i*spacing, 0], [0,0,0], Pairs)
            
            // little spheres
            //createSphere("us1_"+i, smallerRad, UnimportantCLR, [dnaWidth, i*spacing, 0], [0,0,0], Pairs)     
            //createSphere("us1_"+i, smallerRad, UnimportantCLR, [2, i*spacing, 4.6], [0,0,0], Pairs)
            //createSphere("us1_"+i, smallerRad, UnimportantCLR, [2, i*spacing, 9.1], [0,0,0], Pairs)
            
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [7, i*spacing, 6.2], [0,-0.9,angleInRadians], Pairs)
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [7, i*spacing, 8.2], [0,-2.2,angleInRadians], Pairs)

            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [-3, i*spacing, 6.2], [0,-2.2,angleInRadians], Pairs)
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [-3, i*spacing, 8.2], [0,-0.9,angleInRadians], Pairs)

            createCylinder("u1_"+i, cylinderWidth, 0.2, 0xffffff, [0, i*spacing, 9.1], [0,0,angleInRadians], Pairs)
            createCylinder("u1_"+i, cylinderWidth, 0.2, 0xffffff, [4, i*spacing, 9.1], [0,0,angleInRadians], Pairs)

            createSphere("uc1_"+i, circleRad, UnimportantCLR, [6, i*spacing, 9], [0,0,0], Pairs)
            createSphere("uc1_"+i, circleRad, UnimportantCLR, [-2, i*spacing, 9], [0,0,0], Pairs)

            // little stem Up
                //createSphere("us1_"+i, smallerRad, 0x1fff11, [7.5, i*spacing, -2], [0,0,0], Pairs)   
                //createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [6.6, i*spacing, -0.8], [0,0.9,angleInRadians], Pairs)
            
            // little stem Down
                //createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [6.6, i*spacing, 10.1], [0,2.2,angleInRadians], Pairs)     
                //createSphere("us1_"+i, smallerRad, 0x1fff11, [7.5, i*spacing, 11.2], [0,0,0], Pairs) 

        //////////////////////// hexagon left
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [-5, i*spacing, 2.4], [0,0,angleInRadians], Pairs)
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [-5, i*spacing, 7.1], [0,0,angleInRadians], Pairs)
            
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [-6.9, i*spacing, 6.1], [0,-0.9,angleInRadians], Pairs)
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [-6.9, i*spacing, 3.5], [0,-2.2,angleInRadians], Pairs)

            createSphere("uc1_"+i, circleRad, ThymineCLR, [-2, i*spacing, 4.5], [0,0,0], Pairs)
            createSphere("uc1_"+i, circleRad, ThymineCLR, [-3.8, i*spacing, 2.4], [0,0,0], Pairs)
            createSphere("uc1_"+i, circleRad, ThymineCLR, [-3.8, i*spacing, 7], [0,0,0], Pairs)

            createSphere("uc1_"+i, circleRad, ThymineCLR, [-6.4, i*spacing, 7], [0,0,0], Pairs) // connector
            createSphere("uc1_"+i, circleRad, ThymineCLR, [-7.7, i*spacing, 4.5], [0,0,0], Pairs)
            createSphere("uc1_"+i, circleRad, ThymineCLR, [-6.2, i*spacing, 2.5], [0,0,0], Pairs)

        //////////////////////// hexagon right
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [9, i*spacing, 2.4], [0,0,angleInRadians], Pairs)
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [9, i*spacing, 7.1], [0,0,angleInRadians], Pairs)

            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [11.2, i*spacing, 3.3], [0,-0.9,angleInRadians], Pairs)
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [11.2, i*spacing, 6.2], [0,-2.2,angleInRadians], Pairs)

            createSphere("uc1_"+i, circleRad, AdenineCLR, [5.9, i*spacing, 4.5], [0,0,0], Pairs)
            createSphere("uc1_"+i, circleRad, AdenineCLR, [8, i*spacing, 2.4], [0,0,0], Pairs)
            createSphere("uc1_"+i, circleRad, AdenineCLR, [7.8, i*spacing, 7], [0,0,0], Pairs)

            createSphere("uc1_"+i, circleRad, AdenineCLR, [10.5, i*spacing, 7], [0,0,0], Pairs)
            createSphere("uc1_"+i, circleRad, AdenineCLR, [10.5, i*spacing, 2.5], [0,0,0], Pairs)
            createSphere("uc1_"+i, circleRad, AdenineCLR, [12, i*spacing, 4.5], [0,0,0], Pairs) // connector
        
        /////////////////////// pentagon right
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [13, i*spacing, 4.5], [0,0,angleInRadians], Pairs)
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [12, i*spacing, 1.1], [0,0.8,angleInRadians], Pairs)
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [14, i*spacing, 1.1], [0,2.4,angleInRadians], Pairs)
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [14.7, i*spacing, 3.2], [0,1.2,angleInRadians], Pairs)
            
            createSphere("uc1_"+i, circleRad, AdenineCLR, [15, i*spacing, 2.3], [0,0,0], Pairs)
            createSphere("uc1_"+i, circleRad, AdenineCLR, [13, i*spacing, 0.3], [0,0,0], Pairs)
            createSphere("uc1_"+i, circleRad, AdenineCLR, [14.2, i*spacing, 4.5], [0,0,0], Pairs) //connector
            
        /////////////////////// pentagon left
        /**/
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [-8.5, i*spacing, 4.5], [0,0,angleInRadians], Pairs)
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [-7.6, i*spacing, 1.4], [0,2.4,angleInRadians], Pairs)
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [-9.5, i*spacing, 1.5], [0,-8.6,angleInRadians], Pairs)
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [-10.2, i*spacing, 3.5], [0,1.9,angleInRadians], Pairs)
            
            createSphere("uc1_"+i, circleRad, ThymineCLR, [-10.5, i*spacing, 2.3], [0,0,0], Pairs)
            createSphere("uc1_"+i, circleRad, ThymineCLR, [-8.4, i*spacing, 0.6], [0,0,0], Pairs)
            createSphere("uc1_"+i, circleRad, ThymineCLR, [-10, i*spacing, 4.5], [0,0,0], Pairs)

            
        /**/

        ///////////////////////// pentagon Left Connector
            var PConnectorLeft = new THREE.Group();
            PConnectorLeft.name = "PConnectorLeft"+i
            PConnectorLeft.position.set(0,6+(i*spacing),3)
            PConnectorLeft.rotation.set(1,0,0)

            Pairs.add(PConnectorLeft);

            createCylinder("u1_"+i, cylinderWidth, 0.2, 0xffffff, [-9.2, i*spacing, 7], [0,0,angleInRadians], Pairs)
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [-11, i*spacing, 5.8], [0,1,angleInRadians], Pairs)

            createCylinder("u1_"+i, cylinderWidth, 0.2, 0xffffff, [-13, 0, 5.2], [0,-1,angleInRadians], PConnectorLeft)
            createCylinder("u1_"+i, cylinderWidth, 0.2, 0xffffff, [-12.8, 0, 9.2], [0,-2.14,angleInRadians], PConnectorLeft)
            createCylinder("u1_"+i, cylinderWidth, 0.2, 0xffffff, [-16.4, 0, 10.2], [0,2.7,angleInRadians], PConnectorLeft)
            createCylinder("u1_"+i, cylinderWidth, 0.2, 0xffffff, [-18.6, 0, 6.7], [0,1.6,angleInRadians], PConnectorLeft)
            createCylinder("u1_"+i, cylinderWidth, 0.2, 0xffffff, [-16.5, 0, 3.8], [0,3.4,angleInRadians], PConnectorLeft)
            
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [-14.1, -0.3, 2.4], [-0.3, -1.57 ,angleInRadians], PConnectorLeft)
            createCylinder("u1_"+i, 3, 0.2, 0xffffff, [-15.5, -0.5, 1.3], [0,0,1.45], PConnectorLeft)
        
            //createSphere("uc1_"+i, circleRad, SugarCLR, [-17, -2, 0.2], [0,0,0], PConnectorLeft)
        /**/
        // Left Connector
            var leftEnd = new THREE.Group();
            leftEnd.name = "Pair"+i
            leftEnd.position.set(-1.9,-4.2, -1.9)
            leftEnd.rotation.set(0,0,0)
            PConnectorLeft.add(leftEnd);

            createCylinder("uc1_"+i, cylinderWidth, 0.2, 0xffffff, [-15.2, 1.7, 2.7], [-1.3, 1.7,angleInRadians], leftEnd)
            createCylinder("uc1_"+i, cylinderWidth, 0.2, 0xffffff, [-15.2, 1.49, 2.7], [-0.2, 2.9 ,angleInRadians], leftEnd)
            createCylinder("uc1_"+i, cylinderWidth, 0.2, 0xffffff, [-11.6, 4.4, 15.1], [-0.1, 1.8,angleInRadians], leftEnd)

            // balls
            /**/
            createSphere("uc1_"+i, circleRad, SugarCLR, [-15.6, -0.5, 1.8], [0,0,0], leftEnd)
            createSphere("uc1_"+i, circleRad, SugarCLR, [-17.7, 1.6, 1.8], [0,0,0], leftEnd)
            createSphere("uc1_"+i, circleRad, SugarCLR, [-12.8, 1.5, 3.4], [0,0,0], leftEnd)
            createSphere("uc1_"+i, circleRad, SugarCLR, [-15, 4.2, 3.8], [0,0,0], leftEnd)
            createSphere("uc1_"+i, circleRad, SugarCenterCLR, [-15.4, 1.8, 2.7], [0,0,0], leftEnd)
            
            createSphere("uc1_"+i, circleRad, SugarCLR, [-14, 0, 3.3], [0,0,0], PConnectorLeft)
            createSphere("uc1_"+i, circleRad, SugarCLR, [-19, 0, 4.3], [0,0,0], PConnectorLeft)
            createSphere("uc1_"+i, circleRad, SugarCLR, [-19, 0, 9.3], [0,0,0], PConnectorLeft)
            createSphere("uc1_"+i, circleRad, SugarCLR, [-11.9, 0, 7.3], [0,0,0], PConnectorLeft)
            createSphere("uc1_"+i, circleRad, SugarCLR, [-14, 0, 11.1], [0,0,0], PConnectorLeft)
            /**/  

        /**/
        ///////////////////////// pentagon Right Connector
        /**/
            var PConnectorRight = new THREE.Group();
            PConnectorRight.name = "PConnectorRight"+i
            PConnectorRight.position.set(0,-6+(i*spacing),3)
            PConnectorRight.rotation.set(-1,0,0)

            Pairs.add(PConnectorRight);

            createCylinder("u1_"+i, cylinderWidth, 0.2, 0xffffff, [13.8, i*spacing, 7], [0,0,angleInRadians], Pairs)
            createCylinder("ucys1_"+i, cylinderWidth/2, 0.2, 0xffffff, [15.2, i*spacing, 5.8], [0,2.2,angleInRadians], Pairs)

            createCylinder("u1_"+i, cylinderWidth, 0.2, 0xffffff, [16.7, 0, 9], [0,1.9,angleInRadians], PConnectorRight)
            createCylinder("u1_"+i, cylinderWidth, 0.2, 0xffffff, [19.7, 0, 10.1], [0,-2.64,angleInRadians], PConnectorRight)
            createCylinder("u1_"+i, cylinderWidth, 0.2, 0xffffff, [17.9, 0, 5], [0,0.9,angleInRadians], PConnectorRight)
            createCylinder("u1_"+i, cylinderWidth, 0.2, 0xffffff, [22.8, 0, 6.6], [0,1.2,angleInRadians], PConnectorRight)
            createCylinder("u1_"+i, cylinderWidth, 0.2, 0xffffff, [21.5, 0, 3.7], [0,2.9,angleInRadians], PConnectorRight)
    
            
            createCylinder("ucys1_"+i, cylinderWidth, 0.2, 0xffffff, [24.5, 0, 2], [0,-1.94 ,angleInRadians], PConnectorRight)
            createCylinder("u1_"+i, cylinderWidth, 0.2, 0xffffff, [25.9, 1.7, -2], [0.8,-1.8,angleInRadians], PConnectorRight)
            createCylinder("ucys1_"+i, cylinderWidth, 0.2, 0xffffff, [24.7, 4.8, -4.8], [1.1, 2.4, 1.4], PConnectorRight)

            createCylinder("uc1_"+i, 5, 0.2, 0xffffff, [20.9, -1.8, 10.4], [-0.7, 0, 2.7], PConnectorRight)
            
        /**/

        // Right Connector
        /**/  
            var rightEnd = new THREE.Group();
            rightEnd.name = "Pair"+i
            rightEnd.position.set(1.9,-4.2, -1.9)
            rightEnd.rotation.set(0,0,0)
            PConnectorRight.add(rightEnd);

            createCylinder("ucys1_"+i, cylinderWidth, 0.2, 0xffffff, [23.2, 9, -2.8], [1.9, -5.4, 0.8], rightEnd)

            createSphere("uc1_"+i, circleRad, SugarCLR, [16.1, 0, 7.3], [0,0,0], PConnectorLeft)
            createSphere("uc1_"+i, circleRad, SugarCLR, [17.5, 4.1, 5.3], [0,0,0], PConnectorLeft)
            createSphere("uc1_"+i, circleRad, SugarCLR, [22, 1.6, 6.1], [0,0,0], PConnectorLeft)
            createSphere("uc1_"+i, circleRad, SugarCLR, [19.8, -3.6, 8.8], [0,0,0], PConnectorLeft)
            createSphere("uc1_"+i, circleRad, SugarCLR, [23.9, -2.9, 8.1], [0,0,0], PConnectorLeft)
            
            
            
            createSphere("uc1_"+i, circleRad, SugarCLR, [24.5, 7.4, -0.9], [0,0,0], rightEnd)
            createSphere("uc1_"+i, circleRad, SugarCLR, [21.8, 7, -1.9], [0,0,0], rightEnd)
            
            createSphere("uc1_"+i, circleRad, SugarCLR, [24.5, 11.2, -3.6], [0,0,0], rightEnd)
            createSphere("uc1_"+i, circleRad, SugarCenterCLR, [23.2, 8.9, -2.9], [0,0,0], rightEnd)
            createSphere("uc1_"+i, circleRad, SugarCLR, [21, 10.4, -3.8], [0,0,0], rightEnd)

           



        // middlePoint 
        //createSphere("us1_"+i, 0.2, 0xf5e342, [0, 3, 0], [0,0,0], DNA)
        /**/



        Pairs.position.set(-2,0,-5.2)
        Pairs.rotation.set(0,i*rotationalSpacing,0)
    }
}

function initialize(){
    /*/
    camera.rotation.x = -1.55
    camera.position.z = 0;
    camera.position.x = 0;
    camera.position.y = 30;
    /**/

    /**/
    camera.position.x = 13;
    camera.position.y = 42;
    camera.position.z = 88;
    camera.rotation.x = 0
    camera.rotation.y = 0.09
    /**/

    /*Middle/
    camera.position.x = 4.6;
    camera.position.y = 50;
    camera.position.z = 2.89;
    camera.rotation.x = -1.5
    camera.rotation.y = 0.09
    /**/

    canNowTurn = true

    generateStrands(10)
    collectMeshes(DNA, meshes);
}

// ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE V
// ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE 
// ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE // ANIMATE 


function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    if (canNowTurn){
        DNA.rotation.y += 0.01;
    }

    // Render the scene
    renderer.render(scene, camera);
}


initialize();
animate();

// MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS 
// MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS 
// MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS // MOUSE CLICKS 

var movement = 1


document.addEventListener('keyup', function(event) {
    if (event.keyCode === 16) { // Up arrow key or "W" key
        movement = 1
    }
})

document.addEventListener('keydown', function(event) {
    console.log(event)

    if (event.keyCode === 16) { // Shift
        movement = 0.1
    }
    if (event.keyCode === 87) { // W
        lastAdded.position.z -= movement
        console.log(lastAdded.name, lastAdded.position.x, lastAdded.position.z);
    }

    if (event.keyCode === 83) { // S
        lastAdded.position.z += movement
        console.log(lastAdded.name, lastAdded.position.x, lastAdded.position.z);
    }

    if (event.keyCode === 65) { // A
        lastAdded.position.x -= movement
        console.log(lastAdded.name, lastAdded.position.x, lastAdded.position.z);
    }

    if (event.keyCode == 68) { // D
        lastAdded.position.x += movement
        console.log(lastAdded.name, lastAdded.position.x, lastAdded.position.z);
    }

    if (event.keyCode == 88) { // X
        lastAdded.position.y -= movement
        console.log(lastAdded.name, lastAdded.position.y);
    }

    if (event.keyCode == 67) { // X
        lastAdded.position.y += movement
        console.log(lastAdded.name, lastAdded.position.y);
    }

    // rotations

    if (event.keyCode == 81) { // Q
        lastAdded.rotation.y += movement/10
        console.log(lastAdded.name, lastAdded.rotation.y);
    }

    if (event.keyCode == 69) { // E
        lastAdded.rotation.y -= movement/10
        console.log(lastAdded.name, lastAdded.rotation.y);
    }
});

document.addEventListener('keydown', function(event) {
    
    // camera

    if (event.keyCode === 73) { //I
        anime({
            targets: camera.position,
            z: camera.position.z - movement*2,
            duration: 500
        })
        console.log("CameraPos:", camera.position)
    }

    if (event.keyCode === 75) { //K
        anime({
            targets: camera.position,
            z: camera.position.z + movement*2,
            duration: 500
        })
        console.log("CameraPos:", camera.position)
    }

    if (event.keyCode === 74) { //J
        anime({
            targets: camera.position,
            x: camera.position.x - movement*2,
            duration: 500
        })
        console.log("CameraPos:", camera.position)
    }

    if (event.keyCode === 76) { //L
        anime({
            targets: camera.position,
            x: camera.position.x + movement*2,
            duration: 500
        })
        console.log("CameraPos:", camera.position)
    }

    if (event.keyCode === 188) { // ,
        anime({
            targets: camera.position,
            y: camera.position.y + movement*2,
            duration: 500
        })
        console.log("CameraPos:", camera.position)
    }

    if (event.keyCode === 77) { // M
        anime({
            targets: camera.position,
            y: camera.position.y - movement*2,
            duration: 500
        })
        console.log("CameraPos:", camera.position)
    }

    // Rotations

    if (event.keyCode === 85) { // U
        camera.rotation.y = camera.rotation.y + movement/2,
        console.log("CameraPos:", camera.rotation)
    }   

    if (event.keyCode === 79) { // O
        camera.rotation.y = camera.rotation.y - movement/2,
        console.log("CameraPos:", camera.rotation)
    }  

    if (event.keyCode === 78) { // N
        camera.rotation.x = camera.rotation.x - movement/2,
        console.log("CameraPos:", camera.rotation)
    }  

    if (event.keyCode === 190) { // .
        camera.rotation.x = camera.rotation.x + movement/2,
        console.log("CameraPos:", camera.rotation)
    }  

});


/*
function onMouseClick(event) {
    // Calculate mouse position in normalized device coordinates
    var mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Create a raycaster
    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    
    // Check for intersections with the sphere
    var intersects = raycaster.intersectObjects(meshes);

    //console.log("Clicked", DNA.children, intersects)

    // If there is an intersection, log a message
    if (intersects.length > 0) {
        var selectedObject = intersects[0].object;
        if (selectedObject.name.includes("MiddlePart") != true){
            console.log('Huh ', selectedObject.name, selectedObject);

            var oldColor = {...selectedObject.material.color};
            console.log("Old Color is",oldColor)

            selectedObject.material.color.set(0xffffff);

            setTimeout(function(){
                console.log("Old Color is",)
                selectedObject.material.color.set(rgbToHex(oldColor.r, oldColor.g, oldColor.b))
                console.log("Returned")
            }, 100)
        }
    }            
}

// Add an event listener for mouse clicks
window.addEventListener('click', onMouseClick, false);
*/
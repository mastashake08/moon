function createCamera(scene,canvas){
var camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(1, 1, 2), scene);
camera.applyGravity=true
camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
    // Target the camera to scene origin.
    camera.setTarget(BABYLON.Vector3.Zero());

    // Attach the camera to the canvas.
    camera.attachControl(canvas, false);

camera.checkCollisions = true;

}


function createLight(scene){
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(1,1,0), scene);

    // Create a built-in "sphere" shape.
}


function createSphere(scene){
var sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {segments:16, diameter:2}, scene);

    // Move the sphere upward 1/2 of its height.
    sphere.position.y = 1;
     sphere.position.x = 0;
      sphere.position.z= 0;

    var sphereMaterial = new BABYLON.StandardMaterial("sphereMaterial", scene);
sphereMaterial.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
//sphereMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
sphereMaterial.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);
sphereMaterial.diffuseColor = new BABYLON.Color3(.6, .4, .9);
sphere.material=sphereMaterial
sphere.checkCollisions = true;


}
function createGround(scene){

}

function createBoxes(scene){
  var box1 = BABYLON.MeshBuilder.CreateBox("box1", {}, scene); // default box
  var box2 = BABYLON.MeshBuilder.CreateBox("box2", {}, scene); // default box
  var box3 = BABYLON.MeshBuilder.CreateBox("box3", {}, scene); // default box
  var box4 = BABYLON.MeshBuilder.CreateBox("box4", {}, scene); // default box
  box1.position.x=0
  box1.position.z=0
  box1.position.z=0
  box2.position.x=0
  box2.position.z=0
  box3.position.x=0
  box3.position.z=0
  box4.position.x=0
  box4.position.z=0
  var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
  myMaterial.diffuseColor = new BABYLON.Color3(1, 0, 1);
  box1.material=myMaterial
  box2.material=myMaterial
  box3.material=myMaterial
  box4.material=myMaterial
  box1.checkCollisions = true;
  box2.checkCollisions = true;
  box3.checkCollisions = true;
  box4.checkCollisions = true;
}
function createGround(scene){
  // Create a built-in "ground" shape.
  var ground = BABYLON.MeshBuilder.CreateGround('ground1', {height:10, width:10, subdivisions: 2}, scene);

var groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
groundMaterial.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
groundMaterial.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);
groundMaterial.diffuseColor = new BABYLON.Color3(0, .3, .6);
ground.material=groundMaterial
ground.checkCollisions = true;
}

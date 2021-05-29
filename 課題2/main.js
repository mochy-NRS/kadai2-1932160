var init = function() {

  var width = 1663,
      height = 800;

  // レンダラーを作成
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);

  // シーンを作成
  var scene = new THREE.Scene();

  // カメラを作成
  var camera = new THREE.PerspectiveCamera(50, width / height, 1, 1000);
  // camera.position.y = 10;

  // 箱を作成
  var geometry = new THREE.BoxGeometry(5, 5, 5);
  var material = new THREE.MeshPhongMaterial({ color: 0x6699ff });
  var box = new THREE.Mesh(geometry, material);
  box.position.z = -10;
  scene.add(box);

  //ドーナッツ
  var torusGeometry = new THREE.TorusGeometry( 1, 0.2, 12, 20 );
  //半径、ドーナッツの太さ、ドーナッツのチューブ方向の分割数、水平方向の分割数
  var torusMaterial = new THREE. MeshPhongMaterial( { color: 0x0000ff } );
  var torus = new THREE.Mesh( torusGeometry, torusMaterial );
  torus.position.set( 0, 0, -5);
  scene.add( torus );

  //球
  var sphereGeometry = new THREE.SphereGeometry( 0.7, 50, 50 ); 
  //半径、垂直方向の分割数、水平方向の分割数
  var sphereMaterial = new THREE. MeshPhongMaterial( {color: 0xff0000,wireframe: true} );
  var sphere1 = new THREE.Mesh( sphereGeometry, sphereMaterial );
  var sphere2 = new THREE.Mesh( sphereGeometry, sphereMaterial );
  var sphere3 = new THREE.Mesh( sphereGeometry, sphereMaterial );
  sphere1.position.set( 0, 0, -5 );
  sphere2.position.set( 3.1, 0, -5 );
  sphere3.position.set( -3.1, 0, -5 );
  scene.add( sphere1 );
  scene.add( sphere2 );
  scene.add( sphere3 );

  // 平行光源
  var directionalLight = new THREE.DirectionalLight(0xffffff);
  var spotLight = new THREE.SpotLight(0xffffff);
  directionalLight.position.set(1, 6, 1);
  spotLight.position.set(1, 1, 3);
  // シーンに追加
  scene.add(directionalLight);
  scene.add(spotLight);

  // 初回実行
  var update = function() {
    requestAnimationFrame(update);

    // 箱を回転させる
    // box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    torus.rotation.x += 0.02;
    // torus.rotation.y += 0.01;
    // sphere1.rotation.x += 0.01;
    sphere1.rotation.y += 0.01;
    sphere2.rotation.x += 0.02;
    sphere2.rotation.y += 0.03;
    sphere3.rotation.x += 0.02;
    sphere3.rotation.y += 0.03;

    torus.scale.x = 1.2
    torus.scale.y = 1.2
    torus.scale.z = 1.2

    renderer.render(scene, camera);
  };
  update();
}
window.addEventListener('DOMContentLoaded', init);
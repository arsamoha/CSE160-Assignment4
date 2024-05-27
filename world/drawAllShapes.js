function drawCat() {
  // Leg Joint 1
  var foot1leg = new Cube();
  foot1leg.color = [0.29, 0.29, 0.29, 1.0];
  foot1leg.matrix.translate(0.1, -0.43, -0.11);
  foot1leg.matrix.rotate(180, 1, 0, 0);
  foot1leg.matrix.rotate(g_legAngle1, 1, 0, 0);
  var leg1CoordintesMat = new Matrix4(foot1leg.matrix);
  foot1leg.matrix.scale(0.08, 0.3, 0.1);
  foot1leg.render();

  var foot1 = new Cube();
  foot1.color = [0.58, 0.565, 0.565, 1.0];
  foot1.matrix = leg1CoordintesMat;
  foot1.matrix.translate(-0.02, 0.21, -0.005);
  foot1.matrix.rotate(360, 1, 0, 0);
  foot1.matrix.rotate(g_footAngle1, 1, 0, 0);
  foot1.matrix.scale(0.12, 0.12, 0.11);
  foot1.render();

  // Leg Joint 2
  var foot2leg = new Cube();
  foot2leg.color = [0.29, 0.29, 0.29, 1.0];
  foot2leg.matrix.translate(-0.25, -0.45, -0.11);
  foot2leg.matrix.rotate(180, 1, 0, 0);
  foot2leg.matrix.rotate(g_legAngle2, 1, 0, 0);
  var leg2CoordintesMat = new Matrix4(foot2leg.matrix);
  foot2leg.matrix.scale(0.08, 0.3, 0.1);
  foot2leg.render();

  var foot2 = new Cube();
  foot2.color = [0.58, 0.565, 0.565, 1.0];
  foot2.matrix = leg2CoordintesMat;
  foot2.matrix.translate(-0.01, 0.19, -0.005);
  foot2.matrix.rotate(360, 1, 0, 0);
  foot2.matrix.rotate(g_footAngle2, 1, 0, 0);
  foot2.matrix.scale(0.12, 0.12, 0.11);
  foot2.render();

  // Leg Joint 3
  var foot3leg = new Cube();
  foot3leg.color = [0.29, 0.29, 0.29, 1.0];
  foot3leg.matrix.translate(0.1, -0.45, 0.33);
  foot3leg.matrix.rotate(180, 1, 0, 0);
  foot3leg.matrix.rotate(g_legAngle3, 1, 0, 0);
  var leg3CoordintesMat = new Matrix4(foot3leg.matrix);
  foot3leg.matrix.scale(0.08, 0.3, 0.1);
  foot3leg.render();

  var foot3 = new Cube();
  foot3.color = [0.58, 0.565, 0.565, 1.0];
  foot3.matrix = leg3CoordintesMat;
  foot3.matrix.translate(-0.01, 0.19, -0.005);
  foot3.matrix.rotate(360, 1, 0, 0);
  foot3.matrix.scale(0.12, 0.12, 0.11);
  foot3.render();

  // Leg Joint 4
  var foot4leg = new Cube();
  foot4leg.color = [0.29, 0.29, 0.29, 1.0];
  foot4leg.matrix.translate(-0.25, -0.45, 0.33);
  foot4leg.matrix.rotate(180, 1, 0, 0);
  foot4leg.matrix.rotate(g_legAngle4, 1, 0, 0);
  var leg4CoordintesMat = new Matrix4(foot4leg.matrix);
  foot4leg.matrix.scale(0.08, 0.3, 0.1);
  foot4leg.render();

  var foot4 = new Cube();
  foot4.color = [0.58, 0.565, 0.565, 1.0];
  foot4.matrix = leg4CoordintesMat;
  foot4.matrix.translate(-0.01, 0.19, -0.01);
  foot4.matrix.rotate(0, 1, 0, 0);
  foot4.matrix.scale(0.12, 0.12, 0.11);
  foot4.render();

  // Cat Body
  var body = new Cube();
  body.color = [0.58, 0.565, 0.565, 1.0];
  if (g_normalOn) body.textureNum = -3;
  body.matrix = leg2CoordintesMat;
  body.matrix.translate(-0.05, -2.9, -4);
  body.matrix.rotate(0, 1, 0, 0);
  var bodyCoordinatesMat = new Matrix4(body.matrix);
  body.matrix.scale(4, 2, 5);
  //   body.normalMatrix.setInverseOf(body.matrix).transpose();
  body.render();

  // Cat Head
  var head = new Cube();
  head.color = [0.58, 0.565, 0.565, 1.0];
  head.matrix.translate(-0.3, -0.3, -0.3);
  head.matrix.rotate(0, 1, 0, 0);
  head.matrix.scale(0.55, 0.4, 0.35);
  head.render();

  // Snout Area
  var snoutRect = new Cube();
  snoutRect.color = [0.831, 0.831, 0.831, 1.0];
  snoutRect.matrix.translate(-0.17, -0.25, -0.35);
  snoutRect.matrix.rotate(0, 1, 0, 0);
  snoutRect.matrix.scale(0.3, 0.1, 0.05);
  snoutRect.render();

  var snoutSq1 = new Cube();
  snoutSq1.color = [0.831, 0.831, 0.831, 1.0];
  snoutSq1.matrix.translate(-0.17, -0.28, -0.35);
  snoutSq1.matrix.rotate(0, 1, 0, 0);
  snoutSq1.matrix.scale(0.12, 0.12, 0.05);
  snoutSq1.render();

  var snoutSq2 = new Cube();
  snoutSq2.color = [0.831, 0.831, 0.831, 1.0];
  snoutSq2.matrix.translate(0.01, -0.28, -0.35);
  snoutSq2.matrix.rotate(0, 1, 0, 0);
  snoutSq2.matrix.scale(0.12, 0.12, 0.05);
  snoutSq2.render();

  var mouth = new Cube();
  mouth.color = [0.831, 0.831, 0.831, 1.0];
  var mouthOffset = -0.1 + (g_mouthAngle - -40) * (0.2 / (-31 - -40));
  mouth.matrix.translate(-0.08, mouthOffset, -0.35);
  mouth.matrix.rotate(0, 1, 0, 0);
  mouth.matrix.scale(0.12, 0.03, 0.05);
  mouth.render();

  // Nose
  var noseBridge = new Cube();
  noseBridge.color = [0.29, 0.29, 0.29, 1.0];
  noseBridge.matrix.translate(-0.08, -0.15, -0.35);
  noseBridge.matrix.rotate(0, 1, 0, 0);
  noseBridge.matrix.scale(0.12, 0.04, 0.05);
  noseBridge.render();

  var noseRect1 = new Cube();
  noseRect1.color = [0.831, 0.62, 0.588, 1.0];
  noseRect1.matrix.translate(-0.055, -0.17, -0.4);
  noseRect1.matrix.rotate(0, 1, 0, 0);
  noseRect1.matrix.scale(0.07, 0.04, 0.05);
  noseRect1.render();

  var noseRect2 = new Cube();
  noseRect2.color = [0.831, 0.62, 0.588, 1.0];
  noseRect2.matrix.translate(-0.001, -0.2, -0.4);
  noseRect2.matrix.rotate(90, 0, 0, 1);
  noseRect2.matrix.scale(0.07, 0.04, 0.05);
  noseRect2.render();

  // Eyes
  var leftEye = new Cube();
  leftEye.color = [0.0, 0.0, 0.0, 1.0];
  leftEye.matrix.translate(-0.13, -0.15, -0.32);
  leftEye.matrix.rotate(0, 1, 0, 0);
  leftEye.matrix.scale(0.08, 0.13, 0.05);
  leftEye.render();

  var rightEye = new Cube();
  rightEye.color = [0.0, 0.0, 0.0, 1.0];
  rightEye.matrix.translate(0.008, -0.15, -0.32);
  rightEye.matrix.rotate(0, 1, 0, 0);
  rightEye.matrix.scale(0.08, 0.13, 0.05);
  rightEye.render();

  var whiteLeftEye = new Cube();
  whiteLeftEye.color = [1.0, 1.0, 1.0, 1.0];
  whiteLeftEye.matrix.translate(-0.15, -0.15, -0.31);
  whiteLeftEye.matrix.rotate(0, 1, 0, 0);
  whiteLeftEye.matrix.scale(0.12, 0.15, 0.05);
  whiteLeftEye.render();

  var whiteRightEye = new Cube();
  whiteRightEye.color = [1.0, 1.0, 1.0, 1.0];
  whiteRightEye.matrix.translate(-0.01, -0.15, -0.31);
  whiteRightEye.matrix.rotate(0, 1, 0, 0);
  whiteRightEye.matrix.scale(0.12, 0.15, 0.05);
  whiteRightEye.render();

  var glintLeftEye = new Cube();
  glintLeftEye.color = [1.0, 1.0, 1.0, 1.0];
  glintLeftEye.matrix.translate(-0.11, -0.07, -0.322);
  glintLeftEye.matrix.rotate(0, 1, 0, 0);
  glintLeftEye.matrix.scale(0.02, 0.02, 0.05);
  glintLeftEye.render();

  var glintRightEye = new Cube();
  glintRightEye.color = [1.0, 1.0, 1.0, 1.0];
  glintRightEye.matrix.translate(0.03, -0.07, -0.322);
  glintRightEye.matrix.rotate(0, 1, 0, 0);
  glintRightEye.matrix.scale(0.02, 0.02, 0.05);
  glintRightEye.render();

  // Tail
  var bottomTail = new Cube();
  bottomTail.color = [0.29, 0.29, 0.29, 1.0];
  bottomTail.matrix = bodyCoordinatesMat;
  bottomTail.matrix.translate(1.5, 0.5, 1.2);
  bottomTail.matrix.rotate(180, 1, 0, 0);
  bottomTail.matrix.rotate(g_tailAngle, 0, 0, 1);
  var bottomTailCoordinatesMat = new Matrix4(bottomTail.matrix);
  bottomTail.matrix.scale(1, 4, 1);
  bottomTail.render();

  var topTail = new Cube();
  topTail.color = [0.58, 0.565, 0.565, 1.0];
  topTail.matrix = bottomTailCoordinatesMat;
  topTail.matrix.translate(-0.001, 0.2, 0.1);
  topTail.matrix.rotate(0, 1, 0, 0);
  topTail.matrix.scale(0.08, 0.28, 0.1);
  topTail.render();

  var cubePrism = new CubePrism();
  cubePrism.color = [0.29, 0.29, 0.29, 1.0];
  cubePrism.matrix.translate(0.05, 0.1, -0.2);
  cubePrism.matrix.rotate(0, 1, 0, 0);
  cubePrism.matrix.scale(0.2, 0.2, 0.1);
  cubePrism.render();

  var cubePrism = new CubePrism();
  cubePrism.color = [0.831, 0.62, 0.588, 1.0];
  cubePrism.matrix.translate(0.09, 0.1, -0.2);
  cubePrism.matrix.rotate(0, 1, 0, 0);
  cubePrism.matrix.scale(0.12, 0.12, 0.05);
  cubePrism.render();

  var cubePrism = new CubePrism();
  cubePrism.color = [0.29, 0.29, 0.29, 1.0];
  cubePrism.matrix.translate(-0.3, 0.1, -0.2);
  cubePrism.matrix.rotate(0, 1, 0, 0);
  cubePrism.matrix.scale(0.2, 0.2, 0.1);
  cubePrism.render();

  var cubePrism = new CubePrism();
  cubePrism.color = [0.831, 0.62, 0.588, 1.0];
  cubePrism.matrix.translate(-0.26, 0.1, -0.2);
  cubePrism.matrix.rotate(0, 1, 0, 0);
  cubePrism.matrix.scale(0.12, 0.12, 0.05);
  cubePrism.render();
}

function drawFurniture() {
  // Sofa
  var sofaleg = new Cube();
  sofaleg.color = [0.431, 0.243, 0.082, 1.0];
  sofaleg.matrix.translate(-2.8, -0.74, 2.5);
  sofaleg.matrix.rotate(360, 1, 0, 0);
  sofaleg.matrix.scale(0.12, 0.2, 0.11);
  sofaleg.render();

  var sofaleg2 = new Cube();
  sofaleg2.color = [0.431, 0.243, 0.082, 1.0];
  sofaleg2.matrix.translate(-2.8, -0.74, 3.9);
  sofaleg2.matrix.rotate(360, 1, 0, 0);
  sofaleg2.matrix.scale(0.12, 0.2, 0.11);
  sofaleg2.render();

  var sofaleg3 = new Cube();
  sofaleg3.color = [0.431, 0.243, 0.082, 1.0];
  sofaleg3.matrix.translate(0.9, -0.74, 2.5);
  sofaleg3.matrix.rotate(360, 1, 0, 0);
  sofaleg3.matrix.scale(0.12, 0.2, 0.11);
  sofaleg3.render();

  var sofaleg4 = new Cube();
  sofaleg4.color = [0.431, 0.243, 0.082, 1.0];
  sofaleg4.matrix.translate(0.9, -0.74, 3.9);
  sofaleg4.matrix.rotate(360, 1, 0, 0);
  sofaleg4.matrix.scale(0.12, 0.2, 0.11);
  sofaleg4.render();

  var base = new Cube();
  base.color = [0.651, 0.204, 0.133, 1.0];
  base.matrix.translate(-2.9, -0.53, 2);
  base.matrix.rotate(360, 1, 0, 0);
  base.matrix.scale(3.9, 0.5, 2.3);
  base.render();

  var rightside = new Cube();
  rightside.color = [0.651, 0.204, 0.133, 1.0];
  rightside.matrix.translate(-2.9, -0.2, 2);
  rightside.matrix.rotate(360, 1, 0, 0);
  rightside.matrix.scale(0.5, 0.5, 2.3);
  rightside.render();

  var leftside = new Cube();
  leftside.color = [0.651, 0.204, 0.133, 1.0];
  leftside.matrix.translate(0.5, -0.2, 2);
  leftside.matrix.rotate(360, 1, 0, 0);
  leftside.matrix.scale(0.5, 0.5, 2.3);
  leftside.render();

  var back = new Cube();
  back.color = [0.651, 0.204, 0.133, 1.0];
  back.matrix.translate(-2.9, -0.1, 3.7);
  back.matrix.rotate(360, 1, 0, 0);
  back.matrix.scale(3.9, 0.9, -0.2);
  back.render();

  // Painting
  var painting = new Cube();
  painting.color = [1.0, 0.0, 0.0, 1.0];
  painting.textureNum = 2;
  if (g_normalOn) painting.textureNum = -3;
  painting.matrix.translate(-2.9, 1, 4);
  painting.matrix.rotate(360, 1, 0, 0);
  painting.matrix.scale(3.9, 3.9, -0.2);
  //   painting.normalMatrix.setInverseOf(painting.matrix).transpose();
  painting.render();

  // Cat Tower
  var towerBase = new Cube();
  towerBase.color = [0.239, 0.153, 0.071, 1.0];
  towerBase.matrix.translate(1.5, -0.74, 2.8);
  towerBase.matrix.rotate(360, 1, 0, 0);
  towerBase.matrix.scale(2.5, 0.15, 1.5);
  towerBase.render();

  var cubicle = new Cube();
  cubicle.color = [0.941, 0.776, 0.494, 1.0];
  cubicle.matrix.translate(1.7, -0.7, 3);
  cubicle.matrix.rotate(360, 1, 0, 0);
  cubicle.matrix.scale(0.9, 1, 0.9);
  cubicle.render();

  var door = new Cube();
  door.color = [0, 0, 0, 1.0];
  door.matrix.translate(1.85, -0.61, 2.95);
  door.matrix.rotate(360, 1, 0, 0);
  door.matrix.scale(0.6, 0.8, 0.1);
  door.render();

  var longPole = new Cube();
  longPole.color = [0.988, 0.886, 0.714, 1.0];
  longPole.matrix.translate(2.1, -0.7, 3.2);
  longPole.matrix.rotate(360, 1, 0, 0);
  longPole.matrix.scale(0.2, 3, 0.2);
  longPole.render();

  var topBase = new Cube();
  topBase.color = [0.239, 0.153, 0.071, 1.0];
  topBase.matrix.translate(1.7, 2.3, 2.8);
  topBase.matrix.rotate(360, 1, 0, 0);
  topBase.matrix.scale(1, 0.15, 1);
  topBase.render();

  var shortPole = new Cube();
  shortPole.color = [0.988, 0.886, 0.714, 1.0];
  shortPole.matrix.translate(3.2, -0.7, 3.2);
  shortPole.matrix.rotate(360, 1, 0, 0);
  shortPole.matrix.scale(0.2, 1.8, 0.2);
  shortPole.render();

  var middleBase = new Cube();
  middleBase.color = [0.239, 0.153, 0.071, 1.0];
  middleBase.matrix.translate(1.5, 1.1, 2.8);
  middleBase.matrix.rotate(360, 1, 0, 0);
  middleBase.matrix.scale(2.5, 0.15, 1.5);
  middleBase.render();

  var bottomBase = new Cube();
  bottomBase.color = [0.239, 0.153, 0.071, 1.0];
  bottomBase.matrix.translate(2.9, 0.2, 2.8);
  bottomBase.matrix.rotate(360, 1, 0, 0);
  bottomBase.matrix.scale(0.7, 0.15, 0.7);
  bottomBase.render();

  // Rug
  var rug = new Cube();
  rug.color = [0.239, 0.153, 0.071, 1.0];
  rug.textureNum = 3;
  rug.matrix.translate(-3, -0.74, -2);
  rug.matrix.rotate(360, 1, 0, 0);
  rug.matrix.scale(4, 0.1, 4);
  rug.render();

  // Light
  var lightString = new Cube();
  lightString.color = [0.431, 0.431, 0.427, 1.0];
  lightString.matrix.translate(0, 2, -0.1);
  lightString.matrix.rotate(360, 1, 0, 0);
  lightString.matrix.scale(0.02, 1, 0.02);
  lightString.render();

  var metal = new Cube();
  metal.color = [0.431, 0.431, 0.427, 1.0];
  metal.matrix.translate(-0.04, 2, -0.15);
  metal.matrix.rotate(360, 1, 0, 0);
  metal.matrix.scale(0.1, 0.1, 0.1);
  metal.render();

  var casing = new CubePrism();
  casing.color = [0.624, 0.859, 0.4, 1.0];
  casing.matrix.translate(-0.23, 1.75, -0.3);
  casing.matrix.rotate(0, 1, 0, 0);
  casing.matrix.scale(0.5, 0.5, 0.4);
  casing.render();

  var light = new Cube();
  light.color = [0.945, 0.949, 0.153, 1.0];
  light.matrix.translate(-0.13, 1.69, -0.18);
  light.matrix.rotate(360, 1, 0, 0);
  light.matrix.scale(0.3, 0.05, 0.2);
  light.render();

  // Mouse Toy
  var mouseBody = new CubePrism();
  mouseBody.color = [0.38, 0.286, 0.239, 1.0];
  mouseBody.matrix.translate(0.5, -0.5, 2);
  mouseBody.matrix.rotate(-90, 0, 0, 1);
  mouseBody.matrix.scale(0.1, 0.5, 0.2);
  mouseBody.render();

  var mouseNose = new Cube();
  mouseNose.color = [1, 0.8, 0.98, 1.0];
  mouseNose.matrix.translate(0.7, -0.6, 2.05);
  mouseNose.matrix.scale(0.05, 0.05, 0.05);
  mouseNose.render();

  var mouseTail = new Cube();
  mouseTail.color = [0.38, 0.286, 0.239, 1.0];
  mouseTail.matrix.translate(0.4, -0.6, 2.05);
  mouseTail.matrix.scale(0.4, 0.02, 0.05);
  mouseTail.render();
}

function drawAllShapes() {
  // Pass light pos to GLSL
  gl.uniform3f(u_lightPos, g_lightPos[0], g_lightPos[1], g_lightPos[2]);
  //   gl.uniform3fv(u_lightPos, g_lightPos);
  //   gl.uniform3fv(u_cameraPos, g_camera.eye.elements);
  gl.uniform3f(
    u_cameraPos,
    g_camera.eye.elements[0],
    g_camera.eye.elements[1],
    g_camera.eye.elements[2]
  );
  gl.uniform1i(u_lightOn, g_lightOn);

  drawCat();
  drawFurniture();

  var light = new Cube();
  light.color = [2, 2, 0, 1];
  light.matrix.translate(g_lightPos[0], g_lightPos[1], g_lightPos[2]);
  light.matrix.scale(-0.1, -0.1, -0.1);
  light.matrix.translate(-0.5, -0.5, -0.5);
  light.render();

  var sphere = new Sphere();
  sphere.color = [0, 0, 0, 1];
  sphere.textureNum = -2;
  if (g_normalOn) sphere.textureNum = -3;
  sphere.matrix.translate(-0.7, 0.65, 0);
  sphere.matrix.scale(0.5, 0.5, 0.5);
  //   sphere.normalMatrix.setInverseOf(sphere.matrix).transpose();
  sphere.render();

  var sky = new Cube();
  sky.color = [0.0, 0.0, 1.0, 1.0];
  sky.textureNum = 0;
  if (g_normalOn) sky.textureNum = -3;
  sky.matrix.scale(50, 50, 50);
  sky.matrix.translate(-0.5, -0.5, -0.5);
  //   sky.normalMatrix.setInverseOf(sky.matrix).transpose();
  sky.render();

  var body = new Cube();
  body.color = [1.0, 0.0, 0.0, 1.0];
  body.textureNum = 1;
  body.matrix.translate(0, -0.75, 0.0);
  body.matrix.scale(10, 0, 10);
  body.matrix.translate(-0.5, 0, -0.5);
  body.render();
}

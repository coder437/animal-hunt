var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4cd4565e-fd02-469a-84d0-f56c2ed99a9b","17a9c7b4-f5ff-447e-8889-bbf151f2c05b","2a19888a-ef6f-49ef-9156-84bc4a4e6fec","66cd39dc-2a51-44af-8b91-da4716d5a4ef","52a9a92e-22e6-4b69-b7d9-fcd6bb9ef601","f9f65691-5e24-4de5-9674-3fa352023b17","ad96ad1d-dc73-4a2d-8dfc-4c35f0b73a8e","6e595c74-629d-4ac8-884a-680109c77634","a6105901-1290-4483-9fcb-a4aec5d6e9d7","59cf2114-d746-45ad-b1e0-d114359b9680","c2760585-e813-4b87-af40-7ae78339abcf","7f796859-4a94-44d8-860f-da2fcf8686bb","efdde215-24ce-4834-ae17-8e829a588d72","288c015d-e944-4092-a57f-4eb4091afd5a","6c8b210f-8211-434b-8056-6c747af69ece","15d0badc-9526-4bac-9b0b-f7c1d9a613a1"],"propsByKey":{"4cd4565e-fd02-469a-84d0-f56c2ed99a9b":{"name":"g","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"yOyuojMCI5pWDEqL_xStciK_4VJAFDWM","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/4cd4565e-fd02-469a-84d0-f56c2ed99a9b.png"},"17a9c7b4-f5ff-447e-8889-bbf151f2c05b":{"name":"g.jpg_1_copy_1","sourceUrl":null,"frameSize":{"x":200,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"vfQqUNT.NVOuiBj3GfNQab2vIMq6Xnij","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/17a9c7b4-f5ff-447e-8889-bbf151f2c05b.png"},"2a19888a-ef6f-49ef-9156-84bc4a4e6fec":{"name":"tree_island_1","sourceUrl":"assets/api/v1/animation-library/gamelab/IEKhHgoHXriTBaL.u6DyiFoc9JOvij4y/category_backgrounds/tree_island.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IEKhHgoHXriTBaL.u6DyiFoc9JOvij4y","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IEKhHgoHXriTBaL.u6DyiFoc9JOvij4y/category_backgrounds/tree_island.png"},"66cd39dc-2a51-44af-8b91-da4716d5a4ef":{"name":"a1","sourceUrl":null,"frameSize":{"x":50,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"be4BznulqZynPusOtJHk6Gk8RbPpP276","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":100},"rootRelativePath":"assets/66cd39dc-2a51-44af-8b91-da4716d5a4ef.png"},"52a9a92e-22e6-4b69-b7d9-fcd6bb9ef601":{"name":"a2","sourceUrl":null,"frameSize":{"x":100,"y":79},"frameCount":1,"looping":true,"frameDelay":12,"version":"nI8H62V9Ue4UnmTHgQNHPMFPQAWJsvLL","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":79},"rootRelativePath":"assets/52a9a92e-22e6-4b69-b7d9-fcd6bb9ef601.png"},"f9f65691-5e24-4de5-9674-3fa352023b17":{"name":"a3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"im9vwr.pRiwhSN8g8fTQAfBN_iZuaqkz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/f9f65691-5e24-4de5-9674-3fa352023b17.png"},"ad96ad1d-dc73-4a2d-8dfc-4c35f0b73a8e":{"name":"a4","sourceUrl":null,"frameSize":{"x":60,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"h4c.fCBK3dAcGAq3WU8PEKWtxoiBtPIc","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":200},"rootRelativePath":"assets/ad96ad1d-dc73-4a2d-8dfc-4c35f0b73a8e.png"},"6e595c74-629d-4ac8-884a-680109c77634":{"name":"a5","sourceUrl":null,"frameSize":{"x":50,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"vhyKTLXCy82coy6orJCkeP_InW6CjMu1","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":100},"rootRelativePath":"assets/6e595c74-629d-4ac8-884a-680109c77634.png"},"a6105901-1290-4483-9fcb-a4aec5d6e9d7":{"name":"a6","sourceUrl":null,"frameSize":{"x":80,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":".mnYcdt8QXT8La72YVOu52YJawc6Deyi","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":100},"rootRelativePath":"assets/a6105901-1290-4483-9fcb-a4aec5d6e9d7.png"},"59cf2114-d746-45ad-b1e0-d114359b9680":{"name":"a7","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"54cVbJU_7qoZFcMSmdZAXHAhhQAfTypI","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/59cf2114-d746-45ad-b1e0-d114359b9680.png"},"c2760585-e813-4b87-af40-7ae78339abcf":{"name":"a8","sourceUrl":null,"frameSize":{"x":130,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"1ciCJDNOQldZ7RoObSCdJ1oP1HYkR_gi","loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":100},"rootRelativePath":"assets/c2760585-e813-4b87-af40-7ae78339abcf.png"},"7f796859-4a94-44d8-860f-da2fcf8686bb":{"name":"a9","sourceUrl":null,"frameSize":{"x":200,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"JwILMQJcZ614R1h7lbAkfHw9mMs_bxrq","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":120},"rootRelativePath":"assets/7f796859-4a94-44d8-860f-da2fcf8686bb.png"},"efdde215-24ce-4834-ae17-8e829a588d72":{"name":"a10","sourceUrl":null,"frameSize":{"x":80,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"EOOLMZpqERNJMbr3k44kyG9zkDLLoUjn","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":100},"rootRelativePath":"assets/efdde215-24ce-4834-ae17-8e829a588d72.png"},"288c015d-e944-4092-a57f-4eb4091afd5a":{"name":"a11","sourceUrl":null,"frameSize":{"x":52,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"aWjT2.queJKLZGGlZA6ElkpSRkR8aswP","loadedFromSource":true,"saved":true,"sourceSize":{"x":52,"y":100},"rootRelativePath":"assets/288c015d-e944-4092-a57f-4eb4091afd5a.png"},"6c8b210f-8211-434b-8056-6c747af69ece":{"name":"a12","sourceUrl":null,"frameSize":{"x":65,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"0LG9YzNoVN8EClz56trD5XskRgXa0QjU","loadedFromSource":true,"saved":true,"sourceSize":{"x":65,"y":100},"rootRelativePath":"assets/6c8b210f-8211-434b-8056-6c747af69ece.png"},"15d0badc-9526-4bac-9b0b-f7c1d9a613a1":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":70,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"TcHMZ3lOFW5vnopeyu_odILwcyFwnEUM","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":70},"rootRelativePath":"assets/15d0badc-9526-4bac-9b0b-f7c1d9a613a1.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg = createSprite(200, 200);
bg.setAnimation("tree_island_1");
var gun = createSprite(340, 340);
gun.setAnimation("g");
 
var animal = createSprite(200, 200);
animal.setAnimation("a6");


var alert = createSprite(200, 200);
alert.setAnimation("animation_1");
function draw() {
  gun.pointTo(World.mouseX,World.mouseY)

  if (mouseDown("leftButton")) {
    gun.setAnimation("g.jpg_1_copy_1");
  playSound("assets/category_explosion/8bit_explosion.mp3");
    
  }
  alert.x = World.mouseX;
  alert.y = World.mouseY;
  if (mouseDown("leftButton")&&alert.isTouching(animal)) {
    animal.x = randomNumber(10, 390);
    animal.y = randomNumber(10, 390);
    playSound("assets/category_animals/pig.mp3");
    
        var s = randomNumber(1, 12);
    animal.setAnimation("a"+s);
    

  }
  
  if (mouseWentUp("leftButton")) {
    gun.setAnimation("g");
  }
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

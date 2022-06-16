import util2DScene from './util-2d-class.js';
import Animation from "./animation-class.js";
import _ from './utils-bezie.js';


const OBJECTS = Object.freeze({
  drop: {
    imageId: `drop`,
    x: 49,
    y: 71.5,
    size: 0.1,
    opacity: 0,
    transforms: {
      translateX: 0,
      translateY: 0,
      scaleX: 1,
      scaleY: 1
    }
  },
  flamingo: {
    imageId: `flamingo`,
    x: 45,
    y: 57,
    size: 2,
    opacity: 0,
    transforms: {
      translateX: 0,
      translateY: 0,
      rotate: 40,
    }
  },
  leaf: {
    imageId: `leaf`,
    x: 57,
    y: 55,
    size: 3,
    opacity: 0,
    transforms: {
      translateX: 0,
      translateY: 0,
      scaleX: 1,
      scaleY: 1,
      rotate: -50
    }
  },
  saturn: {
    imageId: `saturn`,
    x: 56,
    y: 62.5,
    size: 2,
    opacity: 0,
    transforms: {
      translateX: 0,
      translateY: 0,
      scaleX: 1,
      scaleY: 1,
      rotate: 60
    }
  },
  snowflake: {
    imageId: `snowflake`,
    x: 52,
    y: 59,
    size: 2,
    opacity: 0,
    transforms: {
      translateX: 0,
      translateY: 0,
      scaleX: 1,
      scaleY: 1,
      rotate: -60
    }
  },
  watermelon: {
    imageId: `watermelon`,
    x: 42,
    y: 62,
    size: 3,
    opacity: 0,
    transforms: {
      translateX: 0,
      translateY: 0,
      scaleX: 1,
      scaleY: 1,
      rotate: 60
    }
  },
});

const PATHS = Object.freeze({
  key: {
    centerX: 87,
    centerY: 84,
    radius: 84,
    startAngle: 135,
    endAngle: 48,
    x1: 144,
    y1: 147,
    x2: 172,
    y2: 292,
    x3: 0,
    y3: 292,
    x4: 30,
    y4: 147,
    size: 21,
    opacity: 0,
    transforms: {
      translateX: 40,
      translateY: 42,
      scaleX: 1,
      scaleY: 1,
    }
  },
  crocodile: {
    imageId: `crocodile`,
    x: 85,
    y: 48,
    size: 75,
    opacity: 1,
    transforms: {
      translateX: 0,
      translateY: 0,
      rotate: 0,
    }
  }
});

const IMAGES_URLS = Object.freeze({
  crocodile: `./img/module-4/lose-images/crocodile.png`,
  drop: `./img/module-4/lose-images/drop.png`,
  flamingo: `./img/module-4/lose-images/flamingo.png`,
  key: `./img/module-4/lose-images/key.png`,
  leaf: `./img/module-4/lose-images/leaf.png`,
  saturn: `./img/module-4/lose-images/saturn.png`,
  snowflake: `./img/module-4/lose-images/snowflake.png`,
  watermelon: `./img/module-4/lose-images/watermelon.png`
});

export default class Scene2DCrocodile extends util2DScene {
  constructor() {
    const canvas = document.getElementById(`crocodile-scene`);

    super({
      canvas,
      paths: PATHS,
      objects: OBJECTS,
      imagesUrls: IMAGES_URLS
    });

    this.updateSizeListener();
    this.initObjects(OBJECTS);
    this.initPaths();

    this.startAnimation();
    this.initSize();
  }

  initPaths() {
    this.paths = {
      key: {
        size: PATHS.key.size,
        centerX: PATHS.key.centerX,
        centerY: PATHS.key.centerY,
        radius: PATHS.key.radius,
        startAngle: PATHS.key.startAngle,
        endAngle: PATHS.key.endAngle,
        x1: PATHS.key.x1,
        y1: PATHS.key.y1,
        x2: PATHS.key.x2,
        y2: PATHS.key.y2,
        x3: PATHS.key.x3,
        y3: PATHS.key.y3,
        x4: PATHS.key.x4,
        y4: PATHS.key.y4,
        transforms: {
          translateX: PATHS.key.transforms.translateX,
          translateY: PATHS.key.transforms.translateY,
          scaleX: PATHS.key.transforms.scaleX,
          scaleY: PATHS.key.transforms.scaleY,
        },
        opacity: PATHS.key.opacity
      },

      crocodile: {
        imageId: PATHS.crocodile.imageId,
        x: PATHS.crocodile.x,
        y: PATHS.crocodile.y,
        size: PATHS.crocodile.size,
        transforms: {
          translateY: PATHS.crocodile.transforms.translateY,
          translateX: PATHS.crocodile.transforms.translateX,
          rotate: PATHS.crocodile.transforms.rotate
        },
        opacity: PATHS.crocodile.opacity,
      }
    };

  }

  drawSceneCrocodile() {

    this.clearScene();

    this.drawCrocodile();

    for (const name in this.objects) {


      if (Object.prototype.hasOwnProperty.call(this.objects, name)) {
        const object = this.objects[name];

        if (object.before && typeof object.before === `function`) {
          object.before();
        }

        this.draw(
            this.images[object.imageId],
            object
        );

        if (object.after && typeof object.after === `function`) {
          object.after();
        }
      }
    }
  }

  initAnimations() {

    this.animations.push(new Animation({
      func: () => {
        this.drawSceneCrocodile();
      },
      duration: `infinite`,
      fps: 60
    }));

    this.initKeyAnimations();
    this.initCrocodileAnimation();
    this.initFlamingoAnimations();
    this.initLeafAnimations();
    this.initSaturnAnimations();
    this.initSnowflakeAnimations();
    this.initWatermelonAnimations();
    this.initDropAnimations();
  }

  initCrocodileAnimation() {
    this.animations.push(new Animation({
      func: (progress) => {

        this.paths.crocodile.transforms.translateX = -34 * progress;
        this.paths.crocodile.transforms.translateY = 21 * progress;
        this.paths.crocodile.transforms.rotate = (-3 * Math.sin(progress));
      },
      duration: 566,
      delay: 700,
      easing: _.easeOutCubic
    }));
  }

  drawKey() {

    const key = this.paths.key;
    if (key.opacity === 0) {
      return;
    }

    let size = key.size;


    let startHeight = key.y3; // 292
    let startWidth = key.x2; // 172


    let width = this.size * (size / 100);
    let height = this.size * (size / 100) * startHeight / startWidth;

    if (key.transforms.scaleX) {
      let scX = key.transforms.scaleX;
      width *= scX;
    }

    if (key.transforms.scaleY) {
      let scY = key.transforms.scaleY;
      height *= scY;
    }

    let cX = width / 100 * (key.centerX / startWidth * 100);
    let cY = height / 100 * (key.centerY / startHeight * 100);

    let r = width / 100 * (key.radius / startWidth * 100);

    let stA = key.startAngle;
    let enA = key.endAngle;

    let x1 = width / 100 * (key.x1 / startWidth * 100);
    let y1 = height / 100 * (key.y1 / startHeight * 100);
    let x2 = width / 100 * (key.x2 / startWidth * 100);
    let y2 = height / 100 * (key.y2 / startHeight * 100);
    let x3 = width / 100 * (key.x3 / startWidth * 100);
    let y3 = height / 100 * (key.y3 / startHeight * 100);
    let x4 = width / 100 * (key.x4 / startWidth * 100);
    let y4 = height / 100 * (key.y4 / startHeight * 100);

    if (key.transforms) {
      let trX = key.transforms.translateX;
      let trY = key.transforms.translateY;

      cX += this.size * (trX / 100);
      cY += this.size * (trY / 100);

      x1 += this.size * (trX / 100);
      y1 += this.size * (trY / 100);
      x2 += this.size * (trX / 100);
      y2 += this.size * (trY / 100);
      x3 += this.size * (trX / 100);
      y3 += this.size * (trY / 100);
      x4 += this.size * (trX / 100);
      y4 += this.size * (trY / 100);

    }

    this.ctx.save();

    this.ctx.globalAlpha = key.opacity;
    this.ctx.fillStyle = `#a87ce4`;

    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.lineTo(x3, y3);
    this.ctx.lineTo(x4, y4);
    this.ctx.arc(cX, cY, r, ((Math.PI / 180) * stA), ((Math.PI / 180) * enA));

    this.ctx.fill();

    this.ctx.restore();
  }

  drawClipKey() {

    const key = this.paths.key;
    if (key.opacity === 0) {
      return;
    }

    let size = key.size;


    let startHeight = key.y3; // 292
    let startWidth = key.x2; // 172


    let width = this.size * (size / 100);
    let height = this.size * (size / 100) * startHeight / startWidth;

    let cX = width / 100 * (key.centerX / startWidth * 100);
    let cY = height / 100 * (key.centerY / startHeight * 100);

    let r = width / 100 * (key.radius / startWidth * 100);

    let enA = key.endAngle;


    let x1 = width / 100 * (key.x1 / startWidth * 100);
    let y1 = height / 100 * (key.y1 / startHeight * 100);
    let x2 = width / 100 * (key.x2 / startWidth * 100);
    let y2 = height / 100 * (key.y2 / startHeight * 100);


    if (key.transforms) {
      let trX = key.transforms.translateX;
      let trY = key.transforms.translateY;

      cX += this.size * (trX / 100);
      cY += this.size * (trY / 100);

      x1 += this.size * (trX / 100);
      y1 += this.size * (trY / 100);
      x2 += this.size * (trX / 100);
      y2 += this.size * (trY / 100);
    }

    this.ctx.save();

    this.ctx.beginPath();
    this.ctx.moveTo(x2, y2);
    this.ctx.lineTo(x1, y1);
    this.ctx.arc(cX, cY, r, ((Math.PI / 180) * enA), ((Math.PI / 180) * -90), true);

    this.ctx.lineTo(this.size * (15 / 100), this.size * (45 / 100));
    this.ctx.lineTo(this.size * (15 / 100), this.size * (90 / 100));
    this.ctx.lineTo(x2, this.size * (90 / 100));

    this.ctx.closePath();


    this.ctx.restore();
  }

  drawCrocodile() {
    this.ctx.save();
    this.drawKey();

    this.drawClipKey();
    this.ctx.clip();
    this.draw(
        this.images.crocodile,
        this.paths.crocodile
    );
    this.ctx.restore();
  }

  initKeyAnimations() {
    this.animations.push(new Animation({
      func: (progress) => {

        this.paths.key.transforms.scaleX = 0.3 * progress + 0.7;
        this.paths.key.transforms.scaleY = 0.3 * progress + 0.7;
        this.paths.key.transforms.translateX -= 0.03 * progress;
        this.paths.key.transforms.translateY -= 0.03 * progress;
        this.paths.key.opacity = progress;
      },
      duration: 250,
      delay: 250,
      easing: _.easeOutExpo
    }));
  }

  initFlamingoAnimations() {
    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.flamingo.opacity = progress;
      },
      duration: 100,
      delay: 150,
    }));
    this.animations.push(new Animation({
      func: (progress) => {


        this.objects.flamingo.transforms.scaleX = 8 * progress;
        this.objects.flamingo.transforms.scaleY = 8 * progress;
        this.objects.flamingo.transforms.translateX = -20 * progress;
        this.objects.flamingo.transforms.translateY = -7 * progress;

      },
      duration: 600,
      delay: 300,
      easing: _.easeOutExpo
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.flamingo.transforms.rotate = (-40 * Math.sin(progress)) + 30;

      },
      duration: 550,
      delay: 300,
      easing: _.easeOutExpo
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.flamingo.transforms.translateY += 8 * progress;
      },
      duration: 533,
      delay: 950,
      easing: _.easeInCubic
    }));
  }

  initLeafAnimations() {
    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.leaf.opacity = progress;
      },
      duration: 100,
      delay: 150,
    }));
    this.animations.push(new Animation({
      func: (progress) => {

        this.objects.leaf.transforms.translateX = 33 * progress;
        this.objects.leaf.transforms.translateY = -11 * progress;
        this.objects.leaf.transforms.scaleX = 6 * progress;
        this.objects.leaf.transforms.scaleY = 6 * progress;

      },
      duration: 566,
      delay: 300,
      easing: _.easeOutExpo
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.leaf.transforms.rotate = (50 * Math.sin(progress)) - 40;
      },
      duration: 500,
      delay: 300,
      easing: _.easeOutExpo
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.leaf.transforms.translateY += 8 * progress;
      },
      duration: 533,
      delay: 900,
      easing: _.easeInCubic
    }));
  }

  initSaturnAnimations() {
    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.saturn.opacity = progress;
      },
      duration: 100,
      delay: 150,
    }));
    this.animations.push(new Animation({
      func: (progress) => {

        this.objects.saturn.transforms.translateX = 29 * progress;
        this.objects.saturn.transforms.translateY = 19 * progress;
        this.objects.saturn.transforms.scaleX = 7 * progress;
        this.objects.saturn.transforms.scaleY = 7 * progress;

      },
      duration: 666,
      delay: 300,
      easing: _.easeOutExpo
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.saturn.transforms.rotate = (-60 * Math.sin(progress)) + 50;
      },
      duration: 600,
      delay: 300,
      easing: _.easeOutExpo
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.saturn.transforms.translateY += 5 * progress;
      },
      duration: 433,
      delay: 1000,
      easing: _.easeInCubic
    }));
  }

  initSnowflakeAnimations() {
    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.snowflake.opacity = progress;
      },
      duration: 100,
      delay: 150,
    }));
    this.animations.push(new Animation({
      func: (progress) => {

        this.objects.snowflake.transforms.translateX = 19 * progress;
        this.objects.snowflake.transforms.translateY = 4 * progress;
        this.objects.snowflake.transforms.scaleX = 6 * progress;
        this.objects.snowflake.transforms.scaleY = 6 * progress;

      },
      duration: 700,
      delay: 300,
      easing: _.easeOutExpo
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.snowflake.transforms.rotate = (60 * Math.sin(progress)) - 60;
      },
      duration: 650,
      delay: 300,
      easing: _.easeOutExpo
    }));

    this.animations.push(new Animation({
      func: (progress) => {

        this.objects.snowflake.transforms.translateY += 6 * progress;

      },
      duration: 500,
      delay: 1050,
      easing: _.easeInCubic
    }));
  }

  initWatermelonAnimations() {
    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.watermelon.opacity = progress;
      },
      duration: 100,
      delay: 150,
    }));
    this.animations.push(new Animation({
      func: (progress) => {

        this.objects.watermelon.transforms.translateX = -30 * progress;
        this.objects.watermelon.transforms.translateY = 15 * progress;
        this.objects.watermelon.transforms.scaleX = 5 * progress;
        this.objects.watermelon.transforms.scaleY = 5 * progress;

      },
      duration: 533,
      delay: 300,
      easing: _.easeOutCubic
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.watermelon.transforms.rotate = (-60 * Math.sin(progress)) + 50;
      },
      duration: 500,
      delay: 300,
      easing: _.easeOutExpo
    }));

    this.animations.push(new Animation({
      func: (progress) => {
        this.objects.watermelon.transforms.translateY += 5 * progress;

      },
      duration: 466,
      delay: 900,
      easing: _.easeInCubic
    }));
  }

  initDropAnimations() {

    this.animations.push(new Animation({
      func: (progress, details) => {
        this.objects.drop.transforms.translateX = -0.7 * Math.sin(2 * (details.currentTime - details.startTime) / 1000) - 0.2;
        this.objects.drop.transforms.translateY = 1.5 * Math.sin(4 - (2 * (details.currentTime - details.startTime) / 1000));
        this.objects.drop.transforms.scaleX = 20 * Math.sin(2 * (details.currentTime - details.startTime) / 1000) + 20;
        this.objects.drop.transforms.scaleY = 20 * Math.sin(2 * (details.currentTime - details.startTime) / 1000) + 20;

        this.objects.drop.opacity = 1 - Math.pow(1 - Math.sin((2 * (details.currentTime - details.startTime) / 1000) - 5), 5);
        if (this.objects.drop.opacity < 0) {
          this.objects.drop.opacity = 0;
        }

      },
      duration: `infinite`,
      delay: 1400
    }));
  }
}

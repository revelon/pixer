function log() {
    //console.log(arguments);
}

// create an array of assets to load
var assetsToLoad = ["background/lustrel.jpg", "background/calanques.jpg", "background/camarque.jpg", "gfx/water-splash.png", "gfx/music-icon.png", "gfx/banner-bended-glossy-ribbon-rectangular-orange.png", "gfx/crosshair.png"];
var sfxAssets = ["sfx/sb-16-40.mp3", "sfx/108167__robinhood76__02111-screamy-applause", "sfx/169727__qubodup__horror-sliding-transition", "sfx/186748__rombart__splash-eau-goudron1"];
// collect dynamically all assets necessary to load
var dedupl = {}
for (var i in levels) {
    if (levels.hasOwnProperty(i)) {
        if (levels[i].poster && !dedupl[levels[i].poster]) {
            assetsToLoad.push(levels[i].poster);
            dedupl[levels[i].poster] = 1;
        }
        for (var x = 0; x < levels[i].enemy.length; x++) {
            if (levels[i].enemy[x].texture && !dedupl[levels[i].enemy[x].texture]) {
                assetsToLoad.push(levels[i].enemy[x].texture);
                dedupl[levels[i].enemy[x].texture] = 1;
            }
        }
        for (var x = 0; x < levels[i].sfx.length; x++) {
            sfxAssets.push(levels[i].sfx[x]);
        }
    }
}
log("assetsToLoad", assetsToLoad, sfxAssets);
// create a new loader
loader = new PIXI.AssetLoader(assetsToLoad);
// use callback to begin the game itself
loader.onComplete = goGame;
//begin assets loading
loader.load();

// sfx loader loop
for (var i in sfxAssets) {
    new Howl({urls: [sfxAssets[i]]});
}

// game handler itself, triggered after assets are loaded
function goGame() {
    var score = 0, life = 30, level, levelEnemiesDone, running, count, last, secondToLast, nextAction, enemies, music, highScore;
    var viewWidth = 960;
    var viewHeight = 540;

    // Create a pixi renderer
    var renderer = PIXI.autoDetectRenderer(viewWidth, viewHeight);
    renderer.view.className = "rendererView";

    // add render view to DOM
    document.body.appendChild(renderer.view);

    // create an new instance of a pixi stage
    var stage = new PIXI.Stage(0xFFFFFF);

    // background image
    var bg = PIXI.Sprite.fromImage("background/calanques.jpg");
    stage.addChild(bg);

    // enemy intro image
    var enemyIntroImage = PIXI.Sprite.fromImage("gfx/sheep.png");
    
    // utility, primary for rendering SVG path based masks
    function renderPath(data) {
        var m = new PIXI.Graphics();
        m.beginFill(0x999955);
        var points = data.split(" ");
        for (var i = 0; i < points.length; i++) {
            var pair = points[i].split(",");
            if (!i) {
                m.moveTo(pair[0], pair[1]);
            } else {
                m.lineTo(pair[0], pair[1]);
            }
        }
        return m;
    }

    // method displaying start screen
    function startScreen() {
        bg.setTexture(PIXI.Texture.fromImage("background/calanques.jpg"));
        score = 0;
        life = 30;
        level = 0;
        levelEnemiesDone = 0;
        running = false;
        count = 0;
        clearEnemies();
        nextAction = levelScreen;
        levelText.setText("Provence\nAnimal Hunter");
        levelText.position.x = 110;
        //countText.setText("Count: " + count);
        enemyIntroImage.setTexture(PIXI.Texture.fromImage("gfx/crosshair.png"));
        enemyIntroImage.position.x = 192;
        enemyIntroImage.position.y = 124;
        enemyIntroImage.scale.x = enemyIntroImage.scale.y = 1;
        if (helpText.stage) {
            stage.removeChild(helpText);
        }
        stage.addChild(enemyIntroImage);        
        stage.addChild(levelText);
        stage.addChild(actionButton);
        copyText.setText("Photos by Jana Raidova, Code and Music by Marek Raida, SFX from freesound.org");
        stage.addChild(copyText)
        actionButton.interactive = true;
        renderer.render(stage);
    }
    
    // method displaying in-between-level screen
    function levelScreen() {
        // level done
        log("Level " + level, helpText);
        level++;
        if (!levels[level]) {
            levelText.setText("   You've Won!");
            levelText.position.x = 70;
            nextAction = startScreen;
            helpText.setText("You have defeated animals and are Provence's hero!");
            bg.setTexture(PIXI.Texture.fromImage("background/camarque.jpg"));
        } else {
            levelText.setText("    Level " + level);
            levelText.position.x = 170;
            nextAction = levelScreenGo;
            enemyIntroImage.setTexture(PIXI.Texture.fromImage(levels[level].intro.texture));
            enemyIntroImage.position.x = levels[level].intro.x;
            enemyIntroImage.position.y = levels[level].intro.y;
            enemyIntroImage.scale.x = enemyIntroImage.scale.y = levels[level].intro.scale;
            stage.addChild(enemyIntroImage);
            log(enemyIntroImage);
            helpText.setText("Tap or click " + levels[level].enemiesNo + " " + levels[level].intro.name + " before they spit on you!");
            bg.setTexture(PIXI.Texture.fromImage("background/lustrel.jpg"));
        }
        
        // shared actions
        if (copyText.stage) {
            stage.removeChild(copyText);
        }
        stage.addChild(levelText);
        stage.addChild(actionButton);
        stage.addChild(helpText);
        actionButton.interactive = false;
        setTimeout((function(){actionButton.interactive = true; renderer.render(stage);}.bind(this)), 200);
        //actionButton.interactive = true;
        running = false;
        clearEnemies();
        renderer.render(stage);
    }
    
    // method displaying in-between-level screen
    function levelScreenGo() {
        levelEnemiesDone = 0;
        actionButton.interactive = false;
        stage.removeChild(levelText);
        stage.removeChild(helpText);
        stage.removeChild(actionButton);
        stage.removeChild(enemyIntroImage);
        log("Level " + level + " started");
        bg.setTexture(PIXI.Texture.fromImage(levels[level].poster));
        // generate first enemy now and set flag
        clearEnemies();
        running = true;
        // and start animations
        requestAnimFrame(animate);
        renderer.render(stage);
    }

    // method displaying end screen
    function endScreen() {
        log("Game's end");
        levelText.setText("Game Over\nScore: " + score);
        if (score > highScore) {
            highScore = score;
            localStorage.setItem("highScore", highScore);
        }
        copyText.setText("                                                 High Score Achieved: " + highScore);
        bg.setTexture(PIXI.Texture.fromImage("background/camarque.jpg"));
        stage.addChild(levelText);
        stage.addChild(copyText);
        stage.addChild(actionButton);
        running = false;
        clearEnemies();
        actionButton.interactive = true;
        nextAction = startScreen;
        renderer.render(stage);
    }

    // helper method
    function clearEnemies() {
        for (var x in enemies) {
            if (enemies.hasOwnProperty(x)) {
                stage.removeChild(enemies[x]);
            }
        }
        enemies = [];
    }
    
    // sound control
    var snd = PIXI.Sprite.fromImage("gfx/music-icon.png");
    snd.position.x = 885; snd.position.y = 10;
    snd.scale.x = 0.25; snd.scale.y = 0.25;
    snd.interactive = true;
    stage.addChild(snd);
    // use the mouse-down and touch-start
    snd.mousedown = snd.touchstart = function(data) {
        // stop the default event...
        log("Sound event", data);
        data.originalEvent.preventDefault();
        if (music) {
            music = false;
            localStorage.setItem("music", music);
            realMusic.pause();
            snd.alpha = 0.4;
        } else {
            music = true;
            localStorage.setItem("music", music);
            realMusic.play();
            snd.alpha = 1;
        }
        renderer.render(stage);
    };

    // in-game music object
    var realMusic = new Howl({
        urls: ["sfx/sb-16-40.mp3"],
        buffer: true,
        loop: true,
        volume: 0.35
    });
    music = (localStorage.getItem("music") === "false") ? false : true;
    log("Music status", music);
    if (music) {
        realMusic.play();
        snd.alpha = 1;
    } else {
        realMusic.pause();
        snd.alpha = 0.4;
    }
    highScore = localStorage.getItem("highScore");
    highScore = (highScore) ? (1 * highScore) : 0;
    
    // mandatory status texts
    var lifeText = new PIXI.Text("Life: " + life, { font: "30px sans-serif", fill: "lightgreen", dropShadow: true, dropShadowDistance: 2 });
    lifeText.position.x = 5;
    lifeText.position.y = 8;
    stage.addChild(lifeText);

    var scoreText = new PIXI.Text("Score: " + score, { font: "30px sans-serif", fill: "lightblue", dropShadow: true, dropShadowDistance: 2 });
    scoreText.position.x = 5;
    scoreText.position.y = 40;
    stage.addChild(scoreText);

    /**var countText = new PIXI.Text("Count: " + count, { font: "13px sans-serif", fill: "white" });
    countText.position.x = 5;
    countText.position.y = 72;
    stage.addChild(countText);*/

    var levelText = new PIXI.Text("    Level " + level, { font: "120px sans-serif", stroke:"gold", strokeThickness:5, fill: "maroon", dropShadow: true, dropShadowDistance:10, align: "center" });
    levelText.position.x = 170;
    levelText.position.y = 125;
    stage.addChild(levelText);
1
    var helpText = new PIXI.Text("Tap the animals before they will spit on you", { font: "33px sans-serif", fill: "white", dropShadow: true, dropShadowDistance:4, align: "center" });
    helpText.position.x = 145;
    helpText.position.y = 295;
    
    var copyText = new PIXI.Text("Photos by Jana Raidova, Code and Music by Marek Raida, SFX from freesound.org", { font: "18px sans-serif", fill: "black", align: "center" });
    copyText.position.x = 135;
    copyText.position.y = 90;
    stage.addChild(copyText);
    
    
    var actionButton = new PIXI.DisplayObjectContainer();
    var actionText = new PIXI.Text("Continue", { font: "60px sans-serif", fill: "green", dropShadow: true, align: "center" });
    actionText.position.x = 375;
    actionText.position.y = 450;
    var banner = PIXI.Sprite.fromImage("gfx/banner-bended-glossy-ribbon-rectangular-orange.png");
    banner.position.x = 336; banner.position.y = 430;
    banner.scale.x = 0.5; banner.scale.y = 0.5;
    actionButton.interactive = true;
    actionButton.addChild(banner);
    actionButton.addChild(actionText);
    stage.addChild(actionButton);

    // use the mouse-down and touch-start in between levels
    actionButton.mousedown = actionButton.touchstart = function(data) {
        log("actionButton event", data);
        // stop the default event...
        data.originalEvent.preventDefault();
        nextAction();
    };

    // path coordination tester / level designer tool
    var lvl = 0;
    if (lvl) {
        for (var c = 0; c < levels[lvl].enemy.length; c++) {
            var msk = renderPath(levels[lvl].enemy[c].mask);
            msk.alpha = 0.5;
            stage.addChild(msk);
            var xx = PIXI.Sprite.fromImage(levels[lvl].enemy[c].texture);
            xx.position.x = levels[lvl].enemy[c].x;
            xx.position.y = levels[lvl].enemy[c].y;
            xx.scale.x = xx.scale.y = levels[lvl].enemy[c].scale;
            stage.addChild(xx);
        }
    }




    // show start screen for the first time
    startScreen();
    // render the stage itself for the first time
    renderer.render(stage);
   
    function createEnemy() {
        if (!running || (levelEnemiesDone === levels[level].enemiesNo)) return;
        // select new enemy, to be different than last two selected
        var selected = false;
        while (!selected) {
            var idx = Math.round(Math.random() * (levels[level].enemy.length-1));
            if (idx !== last && idx !== secondToLast) {
                selected = true;
                secondToLast = last;
                last = idx;
            }
        }
        var model = levels[level].enemy[last]; // testing individual enemies here by index
        log("Generating new enemy", model); 
        // create enemy visualization
        var enemy = new PIXI.DisplayObjectContainer();
        var enemyPic = PIXI.Sprite.fromImage(model.texture);
        enemy.addChild(enemyPic);
        if (model.rotate) {
            enemy.rotation = model.rotate;
        }
        
        enemy.model = model;
        // enable the enemy to be interactive.. this will allow it to respond to mouse and touch events
        enemy.interactive = true;

        // set enemy's anchor point to its centre
        enemyPic.anchor.x = 0.5;
        enemyPic.anchor.y = 0.5;
        // scale it to proper expected size
        enemy.scale.x = model.scale; // allow optional horizontal flipping of the texture
        enemy.scale.y = Math.abs(model.scale); // but not vertical one
        // set counter when will enemy begin fire
        enemy.counter = model.howMany;
        // and its current status
        enemy.status = "comming";
        // apply mask, if defined
        if (model.mask) {
            enemy.mask = renderPath(model.mask);
        }

        // use the mouse-down and touch-start
        enemy.mousedown = enemy.touchstart = function(data) {
            if (!running) return;
            log("Sprite Click Happened", this.status, data);
            // stop the default event...
            data.originalEvent.preventDefault();
            if (this.status !== "dying") {
                this.status = "dying";
                this.counter = 50; // fixed dying length
                score++;
                if (music) {
                    new Howl({urls:[levels[level].sfx[(Math.round(Math.random()*20)%2==0?1:0)]], 
                        volume:(Math.round(Math.random()*4+1)/5)}).play();
                }
                createEnemy(); // another
            }
        };

        // move the sprite to its designated starting position
        enemy.position.x = model.x;
        enemy.position.y = model.y;
        
        // add it to the stage
        stage.addChild(enemy);
        enemies.push(enemy);
        levelEnemiesDone++;
    }


    // main animation loop happens there
    function animate() {
        if (!running) return;

        // flag for killed enemy to re removed in this iteration
        var toRemove = null;
        for (var i in enemies) {
            if (!enemies.hasOwnProperty(i)) continue;
            if (enemies[i].status === "comming") {
                if (enemies[i].counter) {
                    enemies[i].position[enemies[i].model.axis] += enemies[i].model.speed;
                    enemies[i].counter--;
                } else {
                    enemies[i].status = "firing";
                    enemies[i].counter = 100; // fixed value for the moment
                    life--;
                    if (!enemies[i].fire) {
                        var fire = PIXI.Sprite.fromImage("gfx/water-splash.png");
                        fire.scale.x = fire.scale.y = 0.5;
                        fire.anchor.x = fire.anchor.y = 0.5;
                        enemies[i].addChild(fire);
                        enemies[i].fire = fire;
                        if (music) {
                            new Howl({urls:["sfx/186748__rombart__splash-eau-goudron1.mp3"]}).play();
                        }
                    }
                    fire.alpha = 1;
                }
            } else if (enemies[i].status === "firing") {
                 if (enemies[i].counter) {
                    enemies[i].counter--;
                    enemies[i].fire.alpha = (enemies[i].counter / 115);
                } else {
                    enemies[i].counter = 100; // fixed value for the moment
                    life--;
                }
            } else if (enemies[i].status === "dying") {
                if (enemies[i].counter) {
                    if (levels[level].dieStyle) {
                        enemies[i].position.y += 2;
                    } else {
                        if (enemies[i].model.scale < 0) {
                            enemies[i].scale.x -= (enemies[i].counter / 1000);
                        } else {
                            enemies[i].scale.x += (enemies[i].counter / 1000);
                        }
                        enemies[i].scale.y = (enemies[i].scale.y + (enemies[i].counter / 1000));
                        enemies[i].mask = null;
                        enemies[i].rotation += 0.2;
                    }
                    enemies[i].alpha = enemies[i].counter / 100;
                    enemies[i].counter--;
                } else {
                    toRemove = i;
                }
            }
        }
        // we have enemy to remove
        if (toRemove) {
            stage.removeChild(enemies[toRemove]);
            enemies.splice(toRemove, 1);
            toRemove = null;
        }
        
        // update screen statuses
        lifeText.setText("Life: " + life);
        scoreText.setText("Score: " + score);
        //countText.setText("Count: " + count);

        // check whether to continue animation or not
        if (life < 1) {
            if (music) {
                new Howl({urls:["sfx/169727__qubodup__horror-sliding-transition.mp3"]}).play();
            }
            endScreen();
        } else if (levelEnemiesDone === levels[level].enemiesNo && !enemies.length) {
            if (music) {
                new Howl({urls:["sfx/108167__robinhood76__02111-screamy-applause.mp3"]}).play();
            }
            levelScreen();
        } else {
            // add new enemy here with level offset
            if (!(count % (400 - ((level-1)*40)))) {
                createEnemy();
            }
            if (running) {
                requestAnimFrame(animate);
            }
        }
        // re-render the stage itself
        renderer.render(stage);
        // and increase counter
        count++;
    }

}

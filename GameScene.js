class GameScene extends Phaser.Scene {
    constructor(){
        super('GameScene');
    }
    preload() {
        this.load.image("background","Source/Assets/Background/Background.png");
        this.load.image("ground","Source/Assets/Background/ground.png");
        this.load.image("platform","Source/Assets/Background/platform.png");
        this.load.image("character","Source/Assets/Sprites/char.png");
    }
    create() {
        
        var i;
        // Initialise the world and sprites
        var back = this.physics.add.sprite(400,300,'background');
        var ground = this.physics.add.sprite(400,550,'ground');
        var platform = new Array();
        var plat;
        this.character = this.physics.add.sprite(400,50,'character');
        this.cursors = this.input.keyboard.createCursorKeys();

        //plat = this.physics.add.group();

        for(i=0;i<3;i++)
        {
            platform[i] = this.physics.add.sprite(400,300,'platform');
            //plat.add(platform);
        }

        //Physics

        this.physics.add.collider(ground,this.character);
        back.setImmovable();
        ground.setImmovable();
        this.character.setGravityY(200);
        
    }
   update() {

        this.movePlayerManager();
    }

    movePlayerManager(){

        if(this.cursors.left.isDown)
        {
            this.character.x -= 2; 
        }
        else if(this.cursors.right.isDown)
        {
            this.character.x += 2;
        }

        if(this.cursors.up.isDown)
        {
            this.character.y -= 4;
        }
    }

}
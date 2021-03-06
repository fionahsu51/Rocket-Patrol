//Rocket prefab
class Player2 extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y, texture, frame)
    {
        super(scene, x, y, texture, frame);

        //add sfx
        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx

        //add object to existing scene
        scene.add.existing(this);
        this.isFiring = false; 
        this.moveSpeed = 4; 
    }

    update()
    {
        //left/right movement
        if(!this.isFiring)
        {
        
            if(keyA.isDown&&this.x >= borderUISize + this.width)
            {
                this.x -= this.moveSpeed;
            }
            else if(keyD.isDown && this.x <= game.config.width - borderUISize - this.width)
            {
                this.x += this.moveSpeed;
            }
        
            
        }

        //fire button
        if(Phaser.Input.Keyboard.JustDown(keyS) && !this.isFiring)
        {
            this.isFiring = true;
            this.sfxRocket.play(); //play sfx
        }

        //if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding)
        {
            this.y -= this.moveSpeed;
        }

        //reset on miss
        if(this.y <= borderUISize * 3 + borderPadding)
        {
            this.isFiring = false;
            this.y = game.config.height - borderUISize - borderPadding;
        }
    }

    //reset rocket to "ground"
    reset()
    {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}
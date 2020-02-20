function preload()
{
    
}
function setup()
{
    createCanvas(2000, 2000);
    background(128);
    img = loadImage('images/people.jpg');
}

function draw()
{
    
}

let img;


function getPose(pose_result)
{
    image(img,0,0)
    for(let i=0; i<17; i++) {
        p=pose_result['keypoints'][i];
        console.log('pose array:',p);
     
        let x=p.position.x;
        let y=p.position.y;
        let score = p.score;
        if (score>0.5) {
            fill(0,255,0); circle(x, y, 10);
            textSize(25);
            fill(255,255,0);text(p.part+" \n"+ Number((p.score).toFixed(2)),x+30,y);
        }
        
    }

}
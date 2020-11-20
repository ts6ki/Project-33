const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base, particle;
var divisionHeight = 300;

var particles = [];
var plinkos = [];
var div = [];

var score = 0;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  base = new Ground(240,790,850,50);

}

function draw() {
  Engine.update(engine);
  background("black"); 

  textSize(35);
  fill("#FFFAFA");
  text("Score: " + score, 20, 40);

  text (" 100 ", 0, 550);
  text (" 200 ", 80, 550);
  text (" 300 ", 160, 550);
  text (" 300 ", 240, 550);
  text (" 200 ", 320, 550);
  text (" 100 ", 400, 550);
  

  base.display();

  barriers();
  plinko();
  balls();
  


}

function barriers()
{
  for (var k = 0; k<= width; k = k+80)
  {
    div.push(new Ground(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k < div.length; k++)
  {
    div[k].display();
  }
}

function plinko()
{
  for (var j = 40; j<= width; j = j+50)
  {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j<= width - 10; j = j+50)
  {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 40; j<= width; j = j+50)
  {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 15; j<= width - 10; j = j+50)
  {
    plinkos.push(new Plinko(j,375));
  }

  for (var j = 0; j < plinkos.length; j++)
  {
    plinkos[j].display();
  }
}

function balls()
{
  if(frameCount%60 === 0)
  {
    particle = new Ball(random(230, 250), 10, 10);
    particles.push(particle);

    if (160 <= particle.body.position.x <= 320 && particle.body.position.y > 400)
    {
      score = score + 300;
    }

    if (80 <= particle.body.position.x <= 160 || 320 <= particle.body.position.x <= 400 && particle.body.position.y > 400)
    {
      score = score + 200;
    }

    if (0 <= particle.body.position.x < 80 || 400 < particle.body.position.x <= 480 && particle.body.position.y > 400)
    {
      score = score + 100;
    }
  }

  for (var i = 0; i < particles.length; i++)
  {
    particles[i].display();
  }
}
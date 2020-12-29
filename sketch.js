var dog,sitdog,jumpdog, database, foodS, foodStock,foodimg,food;
function preload()

{
sitdog=loadImage("sit.png");
jumpdog=loadImage("drink.png");
foodimg=loadImage("images.png");
}

function setup() {
  createCanvas(700, 700);

  database=firebase.database();
  foodStock=database.ref('Food');
   foodStock.on("value",readStock);

dog=createSprite(350,450);
dog.addImage(jumpdog);
dog.scale=0.3;

food=createSprite(200,520);
food.addImage(foodimg);

} 
function draw(){
background(46, 139, 87);
drawSprites();
textSize(30);
fill("white");
text("Food Packs: "+foodS,20,40);
textSize(18);
text("Note:Press Up Arrow Key to feed Fudge(dog) the milk",20,70);

function writeStock(x){
if(x<=0){
  x=0
}else{
x=x-1
}
database.ref('/').update({
  Food:x
})
}
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
dog.addImage(sitdog);
}
if(keyWentUp(UP_ARROW)){
dog.addImage(jumpdog);
}
}
function readStock(data){
  foodS=data.val();
};

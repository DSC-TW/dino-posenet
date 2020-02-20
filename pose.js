let pose_result=[]
var flipHorizontal = false;

var imageElement = document.getElementById('cat');
let setting={
    architecture: 'ResNet50'
}
posenet.load().then(function(net) {
  const pose = net.estimateSinglePose(imageElement, {
    flipHorizontal: true
  });
  return pose;
}).then(function(pose){
  console.log(pose);
  getPose(pose);
})


function serverDelay(){
  return new Promise((resolve,reject)=>{
    setTimeout(resolve,2000);
  });
}
async function getData(){
  await serverDelay();
  console.log("data recieved");
}
getData();
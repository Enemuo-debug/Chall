let chi = ['kk', 'll']
function liker(list){
  let chick = '';
  for (object in list){
    chick += `${list[object]}, `
  }
  console.log(`${chick} liked this`);
}
liker(chi)
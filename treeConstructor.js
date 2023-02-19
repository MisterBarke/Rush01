function treeConstructor(strArr) {
    var children = {};
    var parents = {};
  
    for (var i = 0; i < strArr.length; i++) {
      var cordonnees = strArr[i].replace(/[()]/g,'').split(',');
      var child = cordonnees[0];
      var boss = cordonnees[1];
  
      if (parents[boss]) {
        parents[boss].push(child)
      }else{
        parents[boss]=[child];
      }
      if (parents[boss].length>2){
        return false
      }
      if(children[child]){
        return false;
      }else{
        children[child]=boss;
      }
  
      
    }
  
    return true;
  }
  
 
  
  console.log(treeConstructor(  ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));
  console.log(treeConstructor(  ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]));

  module.exports = treeConstructor
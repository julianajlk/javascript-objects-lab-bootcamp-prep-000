var recipes = {
  cake: ['flour', 'chocolate']
};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({[key]:value}, recipes);
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({[key]:value}, recipes); 
  delete newObj[key];
  return newObj;
}

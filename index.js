var recipes = {
  cake: ['flour', 'chocolate']
};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, recipes);
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  obj[key] = value;
  return object;
}

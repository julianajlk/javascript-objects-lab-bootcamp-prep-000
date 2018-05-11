var recipes = {
  cake: ['flour']
};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, recipes);
  return newObj;
}

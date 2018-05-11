var recipes = {
  cake: [ prop: 1, prop2: 2]
};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, recipes);
  return newObj;
}

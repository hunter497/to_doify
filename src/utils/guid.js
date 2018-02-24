import uuidv1 from 'uuid/v1';

var getNewId = () => {
  var newId = uuidv1();
  return newId;
};

export { getNewId };

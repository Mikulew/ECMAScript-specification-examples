let defaultObjectBehaviour = {
  name: "defaultObjectBehaviour",
  value: 42
};

Object.defineProperty(defaultObjectBehaviour, "name", {
  configurable: false
});

console.log(
  "'value' in defaultObjectBehaviour",
  "value" in defaultObjectBehaviour
);

let deletedValueProperty = delete defaultObjectBehaviour.value;
console.log("deletedValueProperty", deletedValueProperty);
console.log(
  "'value' in defaultObjectBehaviour",
  "value" in defaultObjectBehaviour
);

/* 
  let deletedNameProperty = delete defaultObjectBehaviour.name;
  because 'name' property sets configurable to false throws
  TypeError: Cannot delete property 'name' of #<Object>
*/

let target = {
  name: "target",
  value: 42
};

let proxy = new Proxy(target, {
  deleteProperty(trapTarget, key) {
    if (key === "value") {
      return false;
    } else {
      return Reflect.deleteProperty(trapTarget, key);
    }
  }
});

console.log("'value' in proxy", "value" in proxy);

/*
  let deletedProxyProperty = delete proxy.value;
  becausae 'value' property has been configured in deleteProperty trap method throws
  TypeError: 'deleteProperty' on proxy: trap returned falsish for property 'value'
*/

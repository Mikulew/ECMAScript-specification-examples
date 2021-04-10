let target = {
  name: "target"
};

let { proxy, revoke } = Proxy.revocable(target, {});

console.log(proxy.name);

revoke();

console.log(proxy.name); // TypeError: Cannot perform 'get' on a proxy that has been revoked

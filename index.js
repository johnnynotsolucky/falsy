module.exports = function falsy(obj, options) {
  options = options || { ws: false };
  
  if(!!options.ws && !!obj && typeof obj === 'string') {
    return !obj.trim();
  }

  return !!!obj;
}

// rename transpose shader function to avoid conflict with built-in GLES 3.0 function
module.exports = function(THREE){
  for (var chunk in THREE.ShaderChunk) THREE.ShaderChunk[chunk] = THREE.ShaderChunk[chunk].replace('transpose', 'transpose2');
  return THREE;
}

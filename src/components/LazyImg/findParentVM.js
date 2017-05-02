/**
 * Find parent vm by name
 * @param  {[Vue Component]} vm [The beginning component instance]
 * @param  {[String]} name [Target's name]
 * @return {[Vue Component || undefined]} [The Result]
 */
function findParentVM (vm, name) {
  if (!vm.$parent) return
  if (vm.$parent.$options.name === name) {
    return vm.$parent
  }
  return findParentVM(vm.$parent, name)
}

export default findParentVM

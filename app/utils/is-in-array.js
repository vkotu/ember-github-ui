import Ember from 'ember';

const { computed } = Ember;

export default function isInArray(itemKey, listKey) {
  return computed(itemKey,`${listKey}.[]`,function() {
    const item = this.get(itemKey);
    const list = this.get(listKey);
    //debugger;
    return list.indexOf(item) >= 0;
  });
};

//export default function checkTestVar(testKey){
//  return computed(testKey,function() {
//    return this.get(testKey);
//  })
//}

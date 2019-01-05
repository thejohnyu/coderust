var o = { 
  a: {
    b: 2
  }
}; 
// 2 objects are created. One is referenced by the other as one of its properties.
// The other is referenced by virtue of being assigned to the 'o' variable.
// Obviously, none can be garbage-collected


var o2 = o; // the 'o2' variable is the second thing that 
            // has a reference to the object
o = 1;      // now, the object that was originally in 'o' has a unique reference
            // embodied by the 'o2' variable

var oa = o2.a; // reference to 'a' property of the object.
               // This object now has 2 references: one as a property, 
               // the other as the 'oa' variable

o2 = 'yo'; // The object that was originally in 'o' has now zero
           // references to it. It can be garbage-collected.
           // However its 'a' property is still referenced by 
           // the 'oa' variable, so it cannot be freed

oa = null; // The 'a' property of the object originally in o 
           // has zero references to it. It can be garbage collected.
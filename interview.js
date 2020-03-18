/**
 * Strings --> immuntable + primitives, once you create it you cant change it
 * split()
 * toLowerCase()
 * subString()
 * startsWith()
 *
 * Generally its useful to turn into an array and then manipulate it.
 */

function reverseString(str) {
    return str
      .split('')
      .reverse()
      .join('');
  }
  
  function reverseString2(str) {
      let newString = ''

      for(let i = str.length - 1; i >= 0; i--) {
          newString += str[i]
      }

      return newString;
  }
  function removeDuplicates(str) {
        const arr = str.split(' ')
        const set = new Set(arr)
        const newString = [...set].join(' ')
    return newString
  }

  function flatten(arr) {
      // We iterate over the array until we hit an array, then we concatenate by
      // recursively calling our own function, because we know eventually,
      // this will return in array or it'll return a flattened array. 
      return arr.reduce((acc, cur) => {
        if (Array.isArray(cur)) {
            acc = acc.concat(flatten(cur))
        } else {
            acc.push(cur)
        }

        return acc;
      }, [])
  }
 
  function bind(fn, context) {
      // bound to the contextr you apply in
      // but in this case we wanna make sure that when this function is invoked
      // we wanna make sure this is accessible, 
      return function() {
        //   fn.call(context)
        //   fn.apply(context, [...args])
      }
  }

  function debounce(fn, time) {
    let setTimeoutId;

    return function() {
        if (setTimeoutId) {
            clearTimeout(setTimeoutId)
        }

        setTimeoutId = setTimeout(() => {
            fn.apply(this, ...args)

            setTimeoutId = null
        }, time)
    }
  }

  function throttle(fn, time) {
    let setTimeoutId;

    return function() {
        if (setTimeoutId) {
            // there is already something running and the time hasnt expired yet
            return
        }

        setTimeoutId = setTimeout(() => {
            fn.apply(this, ...args)

            setTimeoutId = null
        }, time)
    }
  }

  // We have 2 identical DOM trees, A and B. For DOM tree A, we have
  // the location of an element. Create a function to find that same element
  // in tree B.

  function reversePath(element, root) {
      const path = []
      let pointer = element

      while (pointer.parent) {
          const index = pointer.parent.children.indexOf(pointer)

          path.push(index)

          pointer = pointer.parent
      }

      pointer = root

      while(path.length) {
          pointer = children[path.pop()]
      }
  }

  // create a function to move an element. The function arguments are,
  // distance, duration, and the element to move
  // REQUEST ANIMATION FRAME ---> IF YOU WANT TO DO ANY MOVEMENT
  function moveElement(duration, distance, element) {
      function move(currentTime) {
        const elapsed = currentTime - StaticRange;
        // how much has the time elasped in the total duration
        // so whats the ratio of how much time has been spent verus how much time we want to spend
        // that gives us the progress
        const progress = elapsed / duration
        const amountToMove = progress * distance
        
        element.style.transform = `translateX(${amountToMove}px)`
        // amount to move is less than the distance that we're actually supposed to move, then call it again
        // and once that amountToMove has gone over
        if () {
            requestAnimationFrame(move)
        }
      }
      // used to animate something
      requestAnimationFrame(move)
  }

  // Promise is a proxy for value that's not necessarily known when the promise is created.
  // TLDR; A promise is something that will eventually return something (pending, success, error)

 // Create a sleep function that takes one parameter (time) 
 // and will wait "time" ms

 function sleep(time) {
     return new Promise((resolve) => {
         setTimeout(()=> {
            resolve()
         }, time)
     })
 }

 // how to chain a bunch of callbacks with promises

 // You have a function that you will eventually return a function
 // then when you invoke that, it's gonna be a Promise, so you can chain it
 // So it's a function that takes a function that returns another function and returns a promise
 // that promise is just gonna resolve, and then you call that.
 // and you concat all the arguments together with the last one being the callback function
 // So it calls the callback once the promise resolves
 function promisify(fn) {
     return function(...args) {
         return new Promise( function(resolve, reject) {
             function cb(result) {
                 resolve(result)
             }

             fn.apply(this, args.concat(cb))
         })
     }
 }
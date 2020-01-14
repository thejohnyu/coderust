
### Motivation
- Given some tree, you have to find some optimal solution for it
- Question: what are the 'patterns' we can use and how can we justify these patterns

- Given that it's a tree, we have couple approaches to iterating through a tree
- inorder traversal
- preorder traversal
- postorder traversal


### inorder traversal intuition

```
               G
         D              K
     B     E        I       M
  A    C    F    H    J   L   N

let A be the root whose children is X, Y

imagine that this is an apple tree and gravity takes place
and all the apple falls down to the floor


                G
         D      |        K
     B   | E    |    I   |   M
  A  | C | | F  | H  | J | L | N
  |  | | | | |  | |  | | | | | |
  |  | | | | |  | |  | | | | | |
  |  | | | | |  | |  | | | | | |
  |  | | | | |  | |  | | | | | |
-------------------------------- (ground)
  A  B C D E F  G H  I J K L M N

next, once all the apples are on the floor,
you go from left to the right and pick them up

then we get:
--------------------------->
A,B,C,D,E,F,G,H,I,J,K,L,M,N

does this look like its 'inorder' to you?

```

### preorder traversal intuition
```
               G
         D                K
     B      E        I         M
  A    C     F    H    J    L    N


let this be the output of the preorder traversal:
[G,D,B,A,C,E,F,K,I,H,J,M,L,N]

if you take a look at the output:
this seems to be a top-down output where we
start from the node, then work on all the left tree 
pertaining to a node, then right


but there is an interesting pattern from this traversal
GDBA|C|E|F|KIH|J|ML|N

so if you take a look at each group

[GDBA] | [C] | [E] | [F] | [KIH] | [J] | [ML] | [N]

these groups follow a validation where
the previous element is always greater
[G > D > B > A]  (for GDBA)
[K > I > H]      (for KIH)
[M > L]          (for ML)

visually, you can imagine grouping the left-spine
of all the binary tree together in a left-diagonal fashion
  
   / [GDBA]                       
  /                           /[KIH]       
 /       / [E]               /        /[ML]      
/  /[C]        / [F]        /        /         /[N]
  

we will abuse this property of this type of validation for future
problems but think property and 'validation' will help us later

but for now, we should think about do we need a top-down solution?

```

### postorder traversal intuition
```

               G
         D                K
     B      E        I         M
  A    C     F    H    J    L    N


[A,C,B,F,E,D,H,J,I,L,N,M,K,G]

lets try to parse this output:
first lets take a look at the first 3 output: [A,C,B]

before we hit [B], we must first visit [A], [C]

   [B]
  /   \  
[A]   [C] 

lets take a look at the next 2: [F,E]
where.... E doesnt have a left child

Again, before we hit [E],
[E] needs to wait for a response from its child [F]
hence the order [F, E]

we apply this same logic all the way to the right subtree

let's take a look at the last 3 output

[A,C,B,F,E,D,H,J,I,L,N,M,K,G]
           ^             ^ ^ 
           |             | |
           |             | |
           |             | |
           --------------  |
                 |---------
               (dependencies)

So we were able to discover the 'physics' of this computation
everything seems to be propagting from upwards from the bottom level
to the top

typically, when we think of post-order traversal:
we want to think of: 'Do we want to build our result'
in a 'BOTTOM-UP' fashion

in your world, you can think of these as a series of pipe

pipe(A,C) -> B
pipe(F) -> E
pipe(B, E) -> G
pipe(H, J) -> I
pipe(L, N) -> M
pipe(D, K) -> G [done]


```

### Corollary
```
Now that we have defined the traversals and took a dive at its implications
and given some statement,
we need to ask ourself...
    - okay does it make sense to traverse the tree inorder
        or ... do we want to build up our result in bottom-up fashion or top-down?
```

### Going back to the maximum average subtree problem
```
- So far...
1.  we have defined the algorithm
2. explored their implications and properties of it

Going back to this problem,
Given a binary tree, we want to find the maximum average of 
a subtree of it (inclusive of the root)

- lets list the type of traversals we can do onto the tree
#1. inorder traversal
    - well, it doesnt make sense to do this because if we imagine the
        tree as an apple tree and we pick up all the apples from left to right,
        this doesnt help us compute the average
    - so we get rid of this

#2. preorder traversal

                 [1] 
          [2]          [5]
       [3]  [4]     [6]  [7]

given this tree...
if we execute the preorder traversal then
we can get the average for the subtree:

[1], [2], [3], [4], [5], [6], [7]

- this means that we find max average for subtree related to
   [1], then for [2], then for [3], then for [4]
- we can do this buy counting the sum of the values of a tree and the number of nodes it has
    - however, as we're doing things topdown..
        - we see a dependency where [1]'s count and [1]'s sum depends on [2]'s count and sum and [5]'s count and sum
        - this also means that we're redoing computation and same work for [2]'s subtree and [5]'s subtree if
          we do things top-down

#3. this brings us to postorder traversal
- if we do things bottom-up....
   - then we can pipe the 'count' and 'sum' upwards so we avoid the same computation

```

### Implementation
```
now that we have chosen #3 as our strategy,
there are few tips and tricks we can use

#1 since we need to find max-average-subtree...
    - we can keep a global variable that will call max
      on each of the subtree as we're recursing
    - downside: we're using global
    - upside: easier to code

#2 if we do find a new maximum... we just simply
    propagate that change upwards
    - downside: use more memory because we using additional number
    - upside: no globals

```

### Approach 1. Keeping a 'global' max as we're propagating the result upwards
```javascript
function maximumAverageSubtree(root) {
    if (root === null) return 0;
    
    let result = 0;
    
    function dfs(node) {
        if (node === null) return [0, 0];
        
        const [leftSum, leftCount] = dfs(node.left);
        const [rightSum, rightCount] = dfs(node.right);
        
        const currSum = (leftSum + rightSum + node.val);
        const currCount = (leftCount + rightCount + 1);
        const currAverage = currSum / currCount;
        result = Math.max(result, currAverage);

        return [currSum, currCount];
    }
    
    dfs(root);
    return result;
};
```

### Approach 2. Include the result while we're propagating the average and count
```javascript
function maximumAverageSubtree(root) {
    if (root === null) return 0;
    
    
    function dfs(node) {
        if (node === null) return [0, 0, 0];
        
        const [leftAverage, leftSum, leftCount] = dfs(node.left);
        const [rightAverage, rightSum, rightCount] = dfs(node.right);
        
        const currSum = (leftSum + rightSum + node.val);
        const currCount = (leftCount + rightCount + 1);
        const currAverage = currSum / currCount;

        let result = Math.max(currAverage, leftAverage, rightAverage);
        return [result, currSum, currCount];
    }
    
    let [globalMax, treeSum, treeCount] = dfs(root);
    return globalMax;
};
```
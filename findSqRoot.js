/* Given a perfect square n, find the square root of n 
Time complexity: O(n)
*/

var sqRoot = findSqRoot(36);
console.log(sqRoot);
var sqRootOptimized = findSqRootOptimised(36);
console.log(sqRootOptimized);

function findSqRoot(n){
   for(var i=1; i<=n; i++){
       if(i*i == n){
           return i;
       }
   }
}

/* Time complexity: O(sqroot(n))*/

function findSqRootOptimised(n){
    for(var i=1; i*i<=n; i++){
        if(n%i == 0 && i==n/i){
            return i;
        }
    }
 }

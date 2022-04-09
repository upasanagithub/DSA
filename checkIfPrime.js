/*Prime no.:- A no. havving exactly two factors, 1 and itself.
Time Complexity:- O(sqroot(n))*/

var isPrime = checkIfPrime(7);
console.log(isPrime);

function checkIfPrime(n){
    var c = 0;
    for(var i=2; i*i<n; i++){
        if(n%i == 0){
            c++;
           if(i!=n/i){//optional, add if you want to print the factors apart from 1 and itself
                c++;
            }
        }
    }
    if(c>0){
        return false;
    }
    return true;
}
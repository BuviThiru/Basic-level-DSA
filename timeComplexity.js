/*practice ques -
let  a = 0, b = 0;
for (i = 0; i < N; i++) {
    a = a + Math.random();
}
for (j = 0; j < M; j++) {
    b = b + Math.random();
}

1.O(N+M)
----------------------------
let a = 0;
for (i = 0; i < N; i++) {
    for (j = N; j > i; j--) {
        a = a + i + j;
    }
}
2. O(N^2) ///doubt

------------------------------
let i, j, k = 0;
for (i = n / 2; i <= n; i++) {
    for (j = 2; j <= n; j = j * 2) {
        k = k + n / 2;
    }
}
i = n/2 times so its n
j = logn
3.O(n logn)
--------------------------
let a = 0, i = N;
while (i > 0) {
    a += i;
    i /= 2;
}
4. O(logn)
---------------------------
for(var i=0;i<n;i++)
    i*=k
 5.   O(log(base k)n)
-----------------------------
    var value = 0;
for(var i=0;i<n;i++)
    for(var j=0;j<i;j++)
    value += 1;
i loop = (N)
j loop =0+1+2+3+....+n n(n+1)/2= (n^2)
T = n+n^2 = O(n^2)

*/
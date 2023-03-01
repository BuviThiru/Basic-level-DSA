function solve(a,b){
    var obj={}
    for(let i=0;i<b.length;i++){
        if(obj[b[i]]){
            obj[b[i]]++
        }
        else{
            obj[b[i]]=1
        }
    }
    console.log(obj)
    var ans=[]
    for(let i=0;i<a.length;i++){
    
    
        if(obj[a[i]]){
            for(let k=1;k<=obj[a[i]];k++)
            ans.push(a[i])
        }
    }
    return ans;
    }
    
    const a= '2356481790';
    const b= [1, 2, 9, 3, 1, 5, 6, 2, 8, 9, 0];
    console.log(solve(a,b))
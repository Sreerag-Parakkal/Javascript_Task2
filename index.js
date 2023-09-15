let promise = () => {
     return new Promise(function(resolve,reject){
         reject(new Error("Rejected"));

     })
 }
 promise().then(function(result){
     console.log(result);
 },function(err){
     console.log(err.message);
 })

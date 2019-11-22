

let sleep2=(d)=>{
    for(var t = Date.now();Date.now() - t <= d;);
  }
   
export {sleep2}
      
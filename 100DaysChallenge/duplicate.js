 const originalData = [3,4,5,3,2,8,7,4,4,5,6];

 const removeDuplicates = () => {
    const uniqueElements = originalData.filter((val,index)=>originalData.indexOf(val)===index)
    console.log(uniqueElements);
 }

 removeDuplicates();
 
 
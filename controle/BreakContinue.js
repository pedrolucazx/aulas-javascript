const nums = [1,2,3,4,5,6,7,8,9,10];

for (x in nums){
    if (x == 5){
        break
    }
    console.log(`${x} = ${nums[x]}`);
}

for (x in nums){
    if (x == 5){
        continue
    }
    console.log(`${x} = ${nums[x]}`);
}
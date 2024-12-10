export const random = (len: number)=>{
    const option = "sdkbasbhdqsjqwguwq09982676dwuihdqwiub";
    const length = option.length;
    let ans = "";

    for(let i = 0; i< len; i++) {
        ans += option[Math.floor((Math.random() * length))]
    }

    return ans;
}
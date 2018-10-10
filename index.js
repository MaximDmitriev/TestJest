function getFriendlyNumbers(start, end) {
    if(end < start || end <= 0 || start <= 0 ||start == null ||  end == null || typeof(start) =='string' || typeof(end) == 'string'
         || (Math.ceil(start) - start > 0) || (Math.ceil(end) - end > 0)) {
    
         return false;
      }

      let arr = []; // суммы собственных делителей
      let couples = []; // набор пар
      let ans = []; // сами пары
      
      for (let i = start; i < end+1; i++){
        let sum = 0;
        
        for(let j = 1; j < i; j++){
          if (i % j == 0){
            sum += j;
          }
        }
        arr.push(sum);
      }
      for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
          
          if (arr[i] == (start + j) && arr[j] == (start + i) ){
              
              ans.push(arr[i]);
              ans.push(arr[j]);
              ans.sort(function(a, b){return a - b;});
              couples.push(ans);
              ans = [];
          }
        }
      }

    return couples;
  }
    
    


module.exports = {
    firstName: 'Maxim',
    secondName: 'Dmitriev',
    task: getFriendlyNumbers
}


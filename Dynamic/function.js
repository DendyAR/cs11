class schedule {
    constructor(learning) {
      this.learning = learning;
      this.cache = []
    }
    loopingLearning(n = 0) {
      if(this.cache[n]!== undefined) {return this.cache[n]}
      let max = 0
      let isData = this.learning
      let isResult = []
      for(let i = 0; i < isData.length; i ++){
        let isStart = isData[i].start
        if(isStart >= n ){console.log('This Looping... :', isData[i])
        let container = isData[i]
        let newResult = this.loopingLearning(isData[i].end)
        let merge 
        if(newResult == undefined){
          merge =[container]
        }else{
          merge =[container, ...newResult]
        }
        isResult[i] = merge
        if(isResult[max] === undefined){
          max = i
        }else if(isResult[max].length < merge.length){
          max = i
        }
        }
        }
        this.cache[n]=isResult[max] 
        return isResult[max]
        }
        }
  
  module.exports = schedule;
  
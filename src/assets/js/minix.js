let analyze = function(lyric) {
  let lrc = lyric.split('\n')
  let lrcJson = {}
  for (let line of lrc)  {
    if (line.trim() && !isNaN(line.match(/\[.*\]/)[0].slice(1,-1).split(':')[0]*60)) {
      let beforeTime = line.match(/\[.*\]/)[0].slice(1,-1).split(':') // eg ["00", "00.00"]
      let M_TO_SECOND = beforeTime[0]*60 // 分->秒
      let SECOND = Math.round(parseFloat(beforeTime[1])) // 秒
      let lrcIndex = line.indexOf(']')
      let lyric = line.slice(lrcIndex+1).trim() // 歌词
      lrcJson[M_TO_SECOND+SECOND] = lyric
    }
  }
  return lrcJson
}
let addZero = function (num) {
  if(num<10){
    return '0' + num
  }else{
    return num
  }
}
export {analyze,addZero}

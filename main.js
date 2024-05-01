function solution(text, markers) {
    let setLine = text.split('\n') //split up to lines so it will be easier to use
    
    for (let i = 0; i < markers.length; i++){ //Check for each marker
      for (let j = 0; j < setLine.length; j++){ //Check marker in each line
        if (setLine[j].includes(markers[i]))
          {
            setLine[j] = setLine[j].slice(0, setLine[j].indexOf(markers[i]))
          }
      }
    }
    for (let k = 0; k < setLine.length; k++){ //Remove end spaces in each line
      setLine[k] = setLine[k].trimEnd()
    }
    
    return setLine.join('\n')
  }
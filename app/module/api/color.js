export function checkColor(red, green, blue, flag){
  let rgb = ''
  // red > green ? red>blue:
  if(red > green && red > blue){
    rgb = `rgb(${red+flag}, ${green}, ${blue})`
  }else if(red > green && red < blue){
    rgb = `rgb(${red}, ${green}, ${blue+flag})`
  }else if(red< green && red >blue){
    rgb = `rgb(${red}, ${green+flag}, ${blue})`
  }else if(red<green && red<blue && green > blue){
    rgb = `rgb(${red}, ${green+flag}, ${blue})`
  }else if(red<green && red<blue && green < blue){
    rgb = `rgb(${red}, ${green}, ${blue+flag})`
  }
  return rgb
}
import fs from 'fs'

export const readSvg = (path: string) => {
  try {
    return fs.readFileSync(path, 'utf8')
  } catch (e) {
    return []
  }
}

export const readStreamSvg = async (path: string) => {
  const reader = fs.createReadStream(path)
  let r=''
  await reader.on('data', function(chunk) {
    r=chunk.toString()
  })
  return r
}

export const writeData = (path: string, data: any) => {
  try {
    let jsonData = JSON.stringify(data)
    fs.writeFile(path, jsonData, { encoding: 'utf8' }, () => {
    })
    return data
  } catch (e) {
    return null
  }
}

export const writeStreamSvg = (path: string, data: string) => {
  const writer = fs.createWriteStream(path)
  for (const d of data) {
    writer.write(d)
  }
}

export const stringReader = (data: string) => {
  let result = ''
  for (const d of data) {
    result = result + d.toString()
  }
  return result
}


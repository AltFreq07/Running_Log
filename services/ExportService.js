import * as brotliPromise from 'brotli-wasm';
import {
  encode, trim, decode
} from 'url-safe-base64'
import * as PasteService from '@/services/PasteService';

async function brotliCompress(string) {
  const brotli = await brotliPromise;
  const compressedData = brotli.compress(Buffer.from(string));
  return compressedData;
}

async function brotliDecompress(buffer) {
  const brotli = await brotliPromise;
  const decompressedData = brotli.decompress(buffer);
  return Buffer.from(decompressedData).toString('utf8');
}

function brotliToB64(uint8Array) {
  return Buffer.from(uint8Array).toString('base64');
}

function B64ToBuffer(base64) {
  return Buffer.from(base64, 'base64');
}

async function getSafeB64String(caseData) {
  return trim(encode(brotliToB64(await brotliCompress(JSON.stringify(caseData)))))
}

export async function getDataFromHTML(data) {
  const decompressed = await brotliDecompress(B64ToBuffer(decode(data)))
  return JSON.parse(decompressed)
}

function sortDate(data) {
  const obj = [...data]
  return obj.sort((a, b) => {
    const dateA = new Date(a.timestamp)
    const dateB = new Date(b.timestamp)
    if (dateA < dateB) return -1
    if (dateA > dateB) return 1
    return 0
  })
}

function getUTCString(date) {
  const newDate = new Date(date)
  // console.log(newDate.toUTCString())
  newDate.setHours(
    newDate.getHours() + (newDate.getTimezoneOffset() / 60) * -1
  )
  return (
    newDate.toUTCString().substring(0, newDate.toUTCString().length - 3) +
    ' UTC'
  )
}


export async function getHTMLData(protocol, host, caseData) {
  const data =
    `<!DOCTYPE html>
<html>

<head>
  <title>${caseData.title}</title>
  <script>
      document.location = "${protocol}//${host}/unencrypted/report/#${await getSafeB64String(caseData)}"
  </script>
</head>
</html>
    `
  return data
}
export async function getMarkdownData(caseData) {
  let data = ''

  data += `
  ## `+ caseData.title === '' ? caseData.id : caseData.title + `
  
  `

  data += `| `
  for (const col of caseData.columns.filter(column => column.export === true)) {
    data += col.text + ' | '
  }
  data += `
  `
  data += `| `
  for (let i = 0; i < caseData.columns.filter(column => column.export === true).length; i++) {
    data += ' ----------- |'
  }

  for (const row of sortDate(caseData.data)) {
    console.log(row)
    data += `
`
    data += `| `
    for (const col of caseData.columns.filter(column => column.export === true)) {
      // if col type is "Screenshots" then add data to data
      if (col.type === 'Screenshots' && row[col.value] !== undefined && row[col.value].length > 0) {
        for (const img of row[col.value]) {
          const resized = await PasteService.resizeImage(PasteService.toBlob(img), 100, 100)
          data += `[![Screenshot](${resized})](${img})`
        }
        data += ' |'
      } else if (col.type === 'DateTime' && row[col.value] !== undefined) {
        data += `${getUTCString(row[col.value])}` + ' | '
      } else {
        data += (row[col.value] !== undefined ? row[col.value] : '') + ' | '
      }
    }
  }
  return data
}

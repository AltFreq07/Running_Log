import * as brotliPromise from 'brotli-wasm';
import Compressor from 'compressorjs';
import {
  // encode, trim
  decode
} from 'url-safe-base64'
import * as PasteService from '@/services/PasteService';

// async function brotliCompress(string) {
//   const brotli = await brotliPromise;
//   const compressedData = brotli.compress(Buffer.from(string));
//   return compressedData;
// }

async function brotliDecompress(buffer) {
  const brotli = await brotliPromise;
  const decompressedData = brotli.decompress(buffer);
  return Buffer.from(decompressedData).toString('utf8');
}

// function brotliToB64(uint8Array) {
//   return Buffer.from(uint8Array).toString('base64');
// }

function B64ToBuffer(base64) {
  return Buffer.from(base64, 'base64');
}

// async function getSafeB64String(caseData) {
//   return trim(encode(brotliToB64(await brotliCompress(JSON.stringify(caseData)))))
// }

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
  console.log(newDate.toUTCString().substring(0, newDate.toUTCString().length - 3) +
    ' UTC')
  return (
    newDate.toUTCString().substring(0, newDate.toUTCString().length - 3) +
    ' UTC'
  )
}

// function blobToDataURL(blob) {
//   return new Promise((resolve, reject) => {
//     const a = new FileReader();
//     a.onload = function (e) { resolve(e.target.result); }
//     a.onerror = function (e) { reject(e); }
//     a.readAsDataURL(blob);
//   })
// }
function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

export function toBlob(base64) {
  const byteCharacters = atob(base64.split(',')[1]);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: 'image/webp' });
  return blob
}


function webPBlobToPNG(blob) {
  return new Promise(function (resolve, reject) {
    /* eslint-disable no-new */
    new Compressor(blob, {
      quality: 1,
      mimeType: 'image/jpeg',
      async success(result) {
        // console.log(result)
        const base64 = await toBase64(result)
        resolve(base64)
        // // this.$emit('pushCaseData', base64)
      },
      error(err) {
        reject(err.message);
      },
    })

  });
}

function dateSorted(data) {
  console.log('sorting')
  const obj = [...data]
  return obj.sort((a, b) => {
    //  FIX TODO get date or input col
    const dateA = new Date(a.timestamp)
    const dateB = new Date(b.timestamp)
    if (dateA < dateB) return -1
    if (dateA > dateB) return 1
    return 0
  })
}

export async function getHTMLData(caseData) {
  //  sort caseData by caseData.data.date
  const newData = { ...caseData }
  for (const col of newData.columns.filter(column => column.export === true && column.type === 'Screenshots')) {
    for (let i = 0; i < newData.data.length; i++) {
      if (newData.data[i][col.value]) {
        for (let j = 0; j < newData.data[i][col.value].length; j++) {
          const jpg = await webPBlobToPNG(toBlob(newData.data[i][col.value][j]))
          newData.data[i][col.value][j] = jpg
        }
      }
    }
  }
  console.log(newData)


  newData.data = dateSorted(newData.data)

  console.log(newData)
  const data = `<!DOCTYPE html>
<html>
<head>
  <title>${newData.title}</title>
  <style>
  table {
    border: 1px solid black;
    border-collapse: collapse;
    width:900px
    table-layout: fixed;
  }
  thead {
    max-width:900px;
  }
  th {
    max-width:900px;
  }
  table td {
    border: 1px solid black;
    white-space:pre-line;
    padding: 10px;
    max-width:900px;
    word-wrap: break-word;
  }
  table tr {
    max-width:900px;
  }
  img{
    max-width:900px;
    max-height:300px
  }
  </style>
</head>
<body>
  <h1>${newData.title}</h1>
  <table>
  <thead>
  <tr>
    ${newData.columns.filter(header => header.export === true && header.type !== 'Screenshots').map(header => `<th style="width:${header.width}">${header.text}</th>`).join('')}
  </tr>
  </thead>
  <tbody>
  ${newData.data.map(data => {
    return `<tr>
  ${newData.columns.filter(column => column.export === true && column.type !== 'Screenshots').map(column => `<td>${column.type === 'DateTime' ? getUTCString(data[column.value]) : (data[column.value] || '')}</td>`).join('')}
  </tr>${newData.columns.filter(column => column.export === true && column.type === 'Screenshots').map(column => data[column.value] ? `<tr><td colspan="${newData.columns.filter(column => column.export === true && column.type !== 'Screenshots').length}">${
      //  create a function to loop through data[column.value] and convert to png using webPtoPNG
      (function () {
        let str = ''
        for (const img of data[column.value]) {
          str += `<img src="${img}">`
        }
        return str
      })()
      }</td></tr>` : ``)}`
  }
  ).join('')}
  </tbody>
</body>
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
      console.log(col.type)
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

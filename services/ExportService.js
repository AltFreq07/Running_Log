import * as brotliPromise from 'brotli-wasm';
import {
  encode, trim, decode
} from 'url-safe-base64'

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

export async function getHTMLData(protocol, host, caseData) {
  const data =
    `<!DOCTYPE html>
<html>

<head>
  <title>${caseData.title}</title>
  <script>
      document.location = "${protocol}//${host}/unencrypted/report?data=${await getSafeB64String(caseData)}"
  </script>
</head>
</html>
    `
  return data
}
export function getMarkdownData(caseData) {
  let data = ''

  data += `
  ## `+ caseData.title === '' ? caseData.id : caseData.title + `
  
  `

  data += `| `
  for (const col of caseData.columns.filter(column => column.export === true && column.type !== "Screenshots")) {
    data += col.text + ' | '
  }
  data += `
  `
  data += `| `
  for (let i = 0; i < caseData.columns.filter(column => column.export === true && column.type !== "Screenshots").length; i++) {
    data += ' ----------- |'
  }

  for (let i = 0; i < caseData.data.length; i++) {
    data +=
      `
| `
    for (const col of caseData.columns.filter(column => column.export === true && column.type !== "Screenshots")) {
      data += caseData.data[i][col.value] + ' | '
    }
  }
  return data
}

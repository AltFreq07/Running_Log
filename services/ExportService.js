export function getHTMLData(protocol, host, caseData) {
  const data =
    `<!DOCTYPE html>
<html>

<head>
  <title>` +
    caseData.title +
    `</title>
</head>

<body>
  <form action="` +
    protocol +
    `//` +
    host +
    `/unencrypted/report" method="post" id="form" enctype="multipart/form-data">
      <input type="hidden" value="" name='data' id="data">
  </form>
</body>
<script>
      const basicObject = ` +
    JSON.stringify(caseData) +
    `
window.onload = function (e) {
     document.querySelector('#data').value = JSON.stringify(basicObject)

      document.querySelector('#form').submit()
  }
  </script>
</html>
    `
  return data
}
export function getMarkdownData(caseData) {
  let data = ''

  data += `
  ## `+ caseData.title + `
  
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

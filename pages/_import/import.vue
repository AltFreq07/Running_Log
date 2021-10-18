<template>
  <div>
    <h1>{{ importType }}</h1>
    <h2>{{ caseID }}</h2>
    <h2>{{ caseData }}</h2>
  </div>
</template>

<script>
export default {
  asyncData({ req, params }) {
    const importType = params.import
    let body = ''
    let temp = ''
    while ((temp = req.read())) {
      body += temp
    }
    body = JSON.parse(body.split('\n')[3])

    return { importType, caseID: body.id, caseData: body }
  },
}
</script>
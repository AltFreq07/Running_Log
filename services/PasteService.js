import Compressor from 'compressorjs';

export function GetImageBase64(e, callback) {
    for (let i = 0; i < e.clipboardData.items.length; i++) {
        const item = e.clipboardData.items[i]
        if (item.type.includes('image')) {
            const file = item.getAsFile();
            // console.log(file);
            /* eslint-disable no-new */
            new Compressor(file, {
                quality: 0.5,
                mimeType: 'image/webp',
                async success(result) {
                    // console.log(result)
                    const base64 = await toBase64(result)
                    callback(base64)
                    // // this.$emit('pushCaseData', base64)
                },
                error(err) {
                    console.log(err.message);
                },
            });
            // const blob = await new Response(file).blob()
            // const path = window.URL.createObjectURL(blob)
        }
    }
}

function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
    })
}
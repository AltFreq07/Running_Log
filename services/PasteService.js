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

export function toBlob(base64) {
    const byteCharacters = atob(base64.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/png' });
    return blob
}

export function resizeImage(file, maxWidth, maxHeight) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = window.URL.createObjectURL(file)
        img.onload = () => {
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')
            const ratio = Math.min(maxWidth / img.width, maxHeight / img.height)
            canvas.width = img.width * ratio
            canvas.height = img.height * ratio
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
            const dataUrl = canvas.toDataURL('image/jpeg')
            resolve(dataUrl)
        }
    })
}

function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
    })
}
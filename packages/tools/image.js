export function convertToJPEGBase64(file) {
    return new Promise(resolve => {
        function convert() {
            URL.revokeObjectURL(this.src);

            const canvas = document.createElement('canvas'),
                ctx = canvas.getContext('2d');

            canvas.width = this.width;
            canvas.height = this.height;
            ctx.drawImage(this, 0, 0);

            resolve(canvas.toDataURL('image/jpeg', 0.7));
        }

        const img = new Image();
        img.onload = convert;
        img.src = URL.createObjectURL(file);
    });
}

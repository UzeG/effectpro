export function getImg(name: string) {
    return new URL(`../assets/imgs/${name}`, import.meta.url).href;
}

export function getVideo(name: string) {
    return new URL(`../assets/videos/${name}`, import.meta.url).href;
}

export function getAudio(name: string) {
    return new URL(`../assets/audios/${name}`, import.meta.url).href;
}

export function getEffect(name: string) {
    return new URL(`../assets/effects/${name}`, import.meta.url).href;
}

export function gotoLink(url: string) {
    window.open(url, '_blank');
}

export function __Array_copy2dim<T>(target: [T, T][], template: [T, T][]) {
    target.splice(0, target.length);
    template.forEach(e => {
        target.push([e[0], e[1]]);
    })
}

export function __Array_copy3dim<T>(target: [T, T, T][], template: [T, T, T][]) {
    target.splice(0, target.length);
    template.forEach(e => {
        target.push([e[0], e[1], e[2]]);
    })
}

export function __Array_deleteIndexes<T>(arr: T[], indexes: number[], tag: any = null) {
    indexes.forEach(i => {
        if (i < 0 || i > arr.length - 1)
            return;
        // @ts-ignore
        arr[i] = tag;
    })
    arr = arr.filter(e => e != tag);
}

export function __Array_isSame(arr1: number[], arr2: number[]) {
    const l1 = arr1.length;
    if (l1 !== arr2.length)
        return false;
    for (let i = 0; i < l1; i++) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
}

export function getCanvasImageBase64(canvas: HTMLCanvasElement) {
    return canvas.toDataURL('image/png');
}

export function imageToBase64(imgUrl: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
            // 创建 Canvas 元素并设置宽高
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            // 获取 Canvas 2D 上下文
            const ctx = canvas.getContext('2d');

            const fileSize = img.width * img.height * 4 / 1024 / 1024;

            if (fileSize > 1) {
                canvas.width = 1000;
                canvas.height = 1000 * img.height / img.width;
            }

            // 绘制 img 到 Canvas
            ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
            // 将 Canvas 转为 Base64 编码图片数据
            const dataURL = canvas.toDataURL('image/png');
            resolve(dataURL);
        };
        img.onerror = (error) => {
            reject(error);
        };
        img.src = imgUrl;
    });
}
import { writable } from 'svelte/store';
export const ImageInfo = writable('');
export function handleFileChange(image){
    let reader = new FileReader();
    reader.readAsDataURL(image[0]);
    reader.addEventListener("load",function (){
        ImageInfo.update(f => reader.result as string)
    });
}
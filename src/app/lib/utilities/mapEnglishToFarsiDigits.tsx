export function mapEnglishToFarsiDigits(str:string) {
    return str.replace(/[0-9]/g, function (d) {
        return String.fromCharCode(d.charCodeAt(0) + 1728);
    });
}

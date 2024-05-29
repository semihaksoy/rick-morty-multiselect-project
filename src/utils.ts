export function highlightString(str: string, substr: string) {
    const strRegExp = new RegExp(`(${substr})`, 'gi');
    return str.replace(strRegExp, '<b style="color:#475569;">$1</b>');
}
export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    return haystack.findIndex((val) => val === needle) !== -1;
}

const dfs = (head: BinaryNode<number> | null, arr: number[]) => {
    if (!head) {
        return;
    }

    dfs(head.left, arr);
    arr.push(head.value);
    dfs(head.right, arr);
};

export default function in_order_search(head: BinaryNode<number>): number[] {
    const arr: number[] = [];
    dfs(head, arr);
    return arr;
}

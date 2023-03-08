const dfs = (head: BinaryNode<number> | null, arr: number[]) => {
    if (!head) {
        return;
    }

    arr.push(head.value);
    dfs(head.left, arr);
    dfs(head.right, arr);
};

export default function pre_order_search(head: BinaryNode<number>): number[] {
    const arr: number[] = [];
    dfs(head, arr);
    return arr;
}

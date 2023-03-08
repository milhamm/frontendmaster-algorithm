const dfs = (head: BinaryNode<number> | null, arr: number[]) => {
    if (!head) {
        return;
    }

    dfs(head.left, arr);
    dfs(head.right, arr);
    arr.push(head.value);
};

export default function post_order_search(head: BinaryNode<number>): number[] {
    const arr: number[] = [];
    dfs(head, arr);
    return arr;
}

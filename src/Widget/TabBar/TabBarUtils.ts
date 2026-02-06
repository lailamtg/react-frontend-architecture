export const mapIndexToPath = (index: number) => {
    switch (index) {
        case 0:
            return '/';
        case 1:
            return '/tasks';
        case 2:
            return '/posts';
        default:
            return '/';
    }
};

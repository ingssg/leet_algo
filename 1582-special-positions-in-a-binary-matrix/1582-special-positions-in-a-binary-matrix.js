var numSpecial = function(mat) {
    let row = new Array(mat.length).fill(0);
    let col = new Array(mat[0].length).fill(0);
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[0].length; j++) {
            if(mat[i][j] === 1) {
                row[i]++;
                col[j]++;
            }
        }
    }
    let res = 0;
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[0].length; j++) {
            if(mat[i][j] === 1 && row[i] === 1 && col[j] === 1) {
                res++;
            }
        }
    }
    return res;
};
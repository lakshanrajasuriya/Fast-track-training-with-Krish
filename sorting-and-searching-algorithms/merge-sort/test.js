function mergeSort(a, p, r) {
    let q;
    if (p < r) {
        q = (p + r) / 2;
        mergeSort(a, p, q);
        mergeSort(a, q + 1, r);
        merge(a, p, q, r);
    }
}

// function to merge the subarrays
function merge(a, p, q, r) {
    let b;   //same size of a[]
    let k = 0;
    let i = p;
    let j = q + 1;
    while (i <= q && j <= r) {
        if (a[i] < a[j]) {
            b[k++] = a[i++];    // same as b[k]=a[i]; k++; i++;
        }
        else {
            b[k++] = a[j++];
        }
    }

    while (i <= q) {
        b[k++] = a[i++];
    }

    while (j <= r) {
        b[k++] = a[j++];
    }

    for (i = r; i >= p; i--) {
        a[i] = b[--k];  // copying back the sorted list to a[]
    }
}


module.exports = { mergeSort }
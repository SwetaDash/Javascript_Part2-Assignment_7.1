var n1 = 78,
    n2 = 56,
    n3 = -1,
    n4 = 78,
    n5 = 33;

if (n1 >= n2 && n1 >= n3 && n1 >= n4 && n1 >= n5)
    max(n1);
else if (n2 >= n1 && n2 >= n3 && n2 >= n4 && n2 >= n5)
    max(n2);
else if (n3 >= n1 && n3 >= n2 && n3 >= n4 && n3 >= n5)
    max(n3);
else if (n4 >= n1 && n4 >= n2 && n4 >= n3 && n4 >= n5)
    max(n4);
else
    max(n5);

function max(num) {
    console.log(num + " is the largest number");
}



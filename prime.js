let n, i;

n = 7;
i = 2;

if (n > 1) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            alert("given number is Not Prime");
        }
        else {
            alert("Given number is Prime ");

        }
    }


}
else if (n == 1) {
    alert("It is neither prime or Composite number");
}
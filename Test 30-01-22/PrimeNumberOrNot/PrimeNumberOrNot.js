var n, i, flag = true;
              
            n = prompt("Enter any number");
            n = parseInt(n)
            for(i = 2; i <= n/2; i++)
                if (n % i == 0) {
                    flag = false;
                    break;
                }
                  
        
            if (flag == true)
                alert(n + " is prime");
            else
                alert(n + " is not prime");
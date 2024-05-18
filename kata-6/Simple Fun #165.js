function withdraw(n) {
    for (var i=0; i<=100; ++i)
        for (var j=0; j<=100; ++j)
            for (var k=0; k<=100; ++k)
                if (k*100+j*50+i*20==n)
                    return [k,j,i];
}

const add = m => n => {
    [m,n]=[m,n].map(s=>[...s].reverse());
    var t = 1n;
    for (let i=0, z=1n; i<m.length; i++, z*=2n) t+=(m[i]-1?2n:1n)*z;
    for (let i=0, z=1n; i<n.length; i++, z*=2n) t+=(n[i]-1?2n:1n)*z;
    return t.toString(2).slice(1).replace(/\d/g,c=>+c+1);
};

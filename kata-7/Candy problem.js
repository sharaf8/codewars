Code:
    function candies(kids){
        if(kids.length <= 1) return -1;

        const maxCandy = Math.max(...kids);
        let total = 0;

        for(const candyes of kids){
            total += maxCandy - candyes;
        }
        return total;
    }


        slidecounts = 2;
        slideheight = document.getElementById("body").scrollHeight / slidecounts;
        currentslide = 0;

        direction = true;
        handler = null;

        function OnScroll(){


            if(handler != null)
            {
                clearTimeout(handler);
                handler = null;
            }
            handler = setTimeout(Exec, 500);
            direction = this.oldScroll > this.scrollY
            this.oldScroll = this.scrollY;
        }

        function Exec(){

            if(direction)
            {
                if(currentslide >= 1)
                {
                    currentslide = currentslide - 1;
                }
                console.log("Stopped up: " + currentslide);
            }
            else{
                if(currentslide < slidecounts-1)
                {
                    currentslide = currentslide + 1;
                }
                console.log("Stopped down: " + currentslide);
            }
            //console.log((slideheight +" * "+ currentslide) + " and " + this.scrollY + " also " + this.innerHeight + " consider " + );
            this.scrollTo(0, (slideheight * currentslide));
        }
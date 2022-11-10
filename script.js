// Get the current dt object
        var dt = new Date();
        document.getElementById("date").innerHTML = dt.toDateString();

        // function to render the calendar
        function renderDate() {
            dt.setDate(1);
            var day = dt.getDay();
            var today = new Date();
            var endDate = new Date(
                dt.getFullYear(),
                dt.getMonth() + 1,
                0
            ).getDate();
         
            // Get the current month and year
            var prevDate = new Date(
                dt.getFullYear(),
                dt.getMonth(),
                0//zero means last day of previous month
            ).getDate();

            //object to get the month name
            var months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ]
           
            document.getElementById("month").innerHTML = months[dt.getMonth()];//getMonth() method returns the month of the dt (0-January :: 11-December)
            document.getElementById("date_str").innerHTML = dt.toDateString();//toDateString() method converts a dt to a more readable format
            var cells = "";

            //the previous month days will be displayed in the calendar
            for (x = day; x > 0; x--) {
                cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
            }
            console.log(day);
            //the current month days will be displayed in the calendar
            for (i = 1; i <= endDate; i++) {
                if (i == today.getDate() && dt.getMonth() == today.getMonth()) cells += "<div class='today'>" + i + "</div>";
                else
                    cells += "<div>" + i + "</div>";
            }
            //getElementsByClassName() method returns a collection of all elements in the document with the specified class name, as a NodeList object.
            document.getElementsByClassName("days")[0].innerHTML = cells;

        }


        //moveDate() function will be called when the user clicks on the next or previous button
        function moveDate(para) {
            if(para == "prev") {
                dt.setMonth(dt.getMonth() - 1);
            } else if(para == 'next') {
                dt.setMonth(dt.getMonth() + 1);
            }
            renderDate();
        }



       
 
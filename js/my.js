Month = prompt('Month(1-12)');
    startDate = prompt('Start Day(1-7)'); 
    startDate--; //-1 because I will use index of something later on 
     
    if (Month == 1 && startDate >=0){
        monthName = 'January';
        Days = 31;
    }else if(Month == 2 && startDate >=0){
        monthName = 'February';
        Days = 28;
    }else if(Month == 3 && startDate >=0){
        monthName = 'March';
        Days = 31;
    }else if(Month == 4 && startDate >=0){
        monthName = 'April';
        Days = 30;
    }else if(Month == 5 && startDate >=0){
        monthName = 'May';
        Days = 31;
    }else if(Month == 6 && startDate >=0){
        monthName = 'June';
        Days = 30;
    }else if(Month == 7 && startDate >=0){
        monthName = 'July';
        Days = 31;
    }else if(Month == 8 && startDate >=0){
        monthName = 'August';
        Days = 31;
    }else if(Month == 9 && startDate >=0){
        monthName = 'September';
        Days = 31;
    }else if(Month == 10 && startDate >=0){
        monthName = 'October';
        Days = 31;
    }else if(Month == 11 && startDate >=0){
        monthName = 'November';
        Days = 30;
    }else if(Month == 12 && startDate >=0){
        monthName = 'December';
        Days = 31;
    }else{
        monthName = ' ';
        
    }

    if(Month < 0 || Month > 12 || startDate < 0 || startDate > 6){
        document.write('<h1>Invalid Input</h1>');
    }
    
    // Month Name in a Box
    var tbl = document.createElement("table");
    tbl.setAttribute('id', 'myTable');
    document.body.appendChild(tbl);
    var row = tbl.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = monthName;

    //Actual Calendar - thead and th 
    var tbl2 = document.createElement("table");
    tbl2.setAttribute('id', 'myCalendar');
    document.body.appendChild(tbl2);

    var thead = document.createElement("thead");
    thead.setAttribute('id', 'thead');
    document.getElementById('myCalendar').appendChild(thead);
    
    console.log(thead);
    var row = thead.insertRow(0);
    for(x=0;x<7;x++){
        var cell = row.insertCell(x);
        if(x==0){
            cell.outerHTML = "<th>Sun</th>";
        }else if(x==1){
            cell.outerHTML = "<th>Mon</th>";
        }else if(x==2){
            cell.outerHTML = "<th>Tue</th>";
        }else if(x==3){
            cell.outerHTML = "<th>Wed</th>";
        }else if(x==4){
            cell.outerHTML = "<th>Thu</th>";
        }else if(x==5){
            cell.outerHTML = "<th>Fri</th>";
        }else{
            cell.outerHTML = "<th>Sat</th>";
        }
    }

    
    var a = 1;//dayys
    var b = 5;// + 1 row limit if needed

    //Actual Calendar - tbody and beyond
    var tbody = document.createElement("tbody");
    tbody.setAttribute('id', 'tbody');
    document.getElementById('myCalendar').appendChild(tbody);
    if(Month > 12 || startDate <0 || startDate >6){
        console.log("balls")
    }else{
        if(startDate >= 5 && Days == 31){
            b+=1;
        }else if(startDate == 6 && Days == 30){
            b+=1;
        }

        for(var i=0; i<b; i++){
        var tr = tbody.insertRow(i);
        for(var j=0; j<7; j++){
            var td = tr.insertCell(j);
            
            if(startDate >= 0 && startDate < 7){
                //start putting date numbers afer j becomes >= startDate
                if(i == 0 && j>=startDate && a <= Days){
                    td.innerHTML = a;
                    a+=1;
                }else if(i>0 && a <= Days){
                    td.innerHTML = a;
                    a+=1;
                }
            }else{
                console.log("invalid")
            }
        }
    }
    }

    console.log(myCalendar);
    console.log(tbody);
    console.log(startDate);
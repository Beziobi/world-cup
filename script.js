// insert button 
var grt1 = document.getElementById("grt1");
grt1.addEventListener("click", displayDetails);
// display row 
var row_1 = 2;
// array to store the elements 
var team_1 = [];
var ptn_1 = [];

// function to store the elements 
function displayDetails() {
    var team = document.getElementById("team_1").value;
    var ptn = document.getElementById("ptn_1").value;



    if(!team || !ptn) {
        alert("please fill the info");
        return;
    }
    // push in to the array 
    team_1.push(team);
    ptn_1.push(ptn);

    // display the elements 
    var display = document.getElementById("display_1");
    var newRow = display.insertRow(row_1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = team;
    cell2.innerHTML = ptn;
    row_1++;

}
// chart button 
var gr1 = document.getElementById("gr1");
gr1.addEventListener("click", displaychart1);

function displaychart1(){
     // highchart

     const chart = Highcharts.chart('container', {
        title: {
        text: 'Group A'
        },
        xAxis: {
        categories:team_1
        },
        series: [{
        type: 'column',
        name: 'Unemployed',
        colorByPoint: true,
        data: ptn_1.map(Number),
        showInLegend: false
        }]
    });

    document.getElementById('plain').addEventListener('click', () => {
    chart.update({
          chart: {
            inverted: false,
            polar: false
        },
        });
    });
  
    document.getElementById('inverted').addEventListener('click', () => {
        chart.update({
        chart: {
            inverted: true,
            polar: false
        },
        subtitle: {
            text: 'Chart option: Inverted | Source: ' +
            '<a href="https://www.nav.no/no/nav-og-samfunn/statistikk/arbeidssokere-og-stillinger-statistikk/helt-ledige"' +
            'target="_blank">NAV</a>'
        }
        });
    });
  
    document.getElementById('polar').addEventListener('click', () => {
        chart.update({
        chart: {
            inverted: false,
            polar: true
        },
        });
    });

}


// insert button 2  
var grt2 = document.getElementById("grt2");
grt2.addEventListener("click", displayDetails2);
// display row 
var row_2 = 2;
// array to store the elements 
var team_2 = [];
var ptn_2 = [];

// function to store the elements 
function displayDetails2() {
    var team = document.getElementById("team_2").value;
    var ptn = document.getElementById("ptn_2").value;



    if(!team || !ptn) {
        alert("please fill the info");
        return;
    }
    // push in to the array 
    team_2.push(team);
    ptn_2.push(ptn);

    // display the elements 
    var display = document.getElementById("display_2");
    var newRow = display.insertRow(row_1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = team;
    cell2.innerHTML = ptn;
    row_2++;

}
// chart button 2
var gr2 = document.getElementById("gr2");
gr2.addEventListener("click", displaychart2);

function displaychart2(){
     // highchart

     const chart = Highcharts.chart('container', {
        title: {
        text: 'Group A'
        },
        xAxis: {
        categories:team_2
        },
        series: [{
        type: 'column',
        name: 'Unemployed',
        colorByPoint: true,
        data: ptn_2.map(Number),
        showInLegend: false
        }]
    });

    document.getElementById('plain').addEventListener('click', () => {
    chart.update({
          chart: {
            inverted: false,
            polar: false
        },
        });
    });
  
    document.getElementById('inverted').addEventListener('click', () => {
        chart.update({
        chart: {
            inverted: true,
            polar: false
        },
        subtitle: {
            text: 'Chart option: Inverted | Source: ' +
            '<a href="https://www.nav.no/no/nav-og-samfunn/statistikk/arbeidssokere-og-stillinger-statistikk/helt-ledige"' +
            'target="_blank">NAV</a>'
        }
        });
    });
  
    document.getElementById('polar').addEventListener('click', () => {
        chart.update({
        chart: {
            inverted: false,
            polar: true
        },
        });
    });

}


// insert button 3 
var grt3 = document.getElementById("grt3");
grt3.addEventListener("click", displayDetails3);
// display row 
var row_3 = 2;
// array to store the elements 
var team_3 = [];
var ptn_3 = [];

// function to store the elements 
function displayDetails3() {
    var team = document.getElementById("team_3").value;
    var ptn = document.getElementById("ptn_3").value;



    if(!team || !ptn) {
        alert("please fill the info");
        return;
    }
    // push in to the array 
    team_3.push(team);
    ptn_3.push(ptn);

    // display the elements 
    var display = document.getElementById("display_3");
    var newRow = display.insertRow(row_3);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = team;
    cell2.innerHTML = ptn;
    row_3++;

}
// chart button 3
var gr3 = document.getElementById("gr3");
gr3.addEventListener("click", displaychart3);

function displaychart3(){
     // highchart

     const chart = Highcharts.chart('container', {
        title: {
        text: 'Group A'
        },
        xAxis: {
        categories:team_3
        },
        series: [{
        type: 'column',
        name: 'Unemployed',
        colorByPoint: true,
        data: ptn_3.map(Number),
        showInLegend: false
        }]
    });

    document.getElementById('plain').addEventListener('click', () => {
    chart.update({
          chart: {
            inverted: false,
            polar: false
        },
        });
    });
  
    document.getElementById('inverted').addEventListener('click', () => {
        chart.update({
        chart: {
            inverted: true,
            polar: false
        },
        subtitle: {
            text: 'Chart option: Inverted | Source: ' +
            '<a href="https://www.nav.no/no/nav-og-samfunn/statistikk/arbeidssokere-og-stillinger-statistikk/helt-ledige"' +
            'target="_blank">NAV</a>'
        }
        });
    });
  
    document.getElementById('polar').addEventListener('click', () => {
        chart.update({
        chart: {
            inverted: false,
            polar: true
        },
        });
    });

}


// insert button 4  
var grt4 = document.getElementById("grt4");
grt4.addEventListener("click", displayDetails4);
// display row 
var row_4 = 2;
// array to store the elements 
var team_4 = [];
var ptn_4 = [];

// function to store the elements 
function displayDetails4() {
    var team = document.getElementById("team_4").value;
    var ptn = document.getElementById("ptn_4").value;



    if(!team || !ptn) {
        alert("please fill the info");
        return;
    }
    // push in to the array 
    team_4.push(team);
    ptn_4.push(ptn);

    // display the elements 
    var display = document.getElementById("display_4");
    var newRow = display.insertRow(row_4);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = team;
    cell2.innerHTML = ptn;
    row_4++;

}
// chart button 4
var gr4 = document.getElementById("gr4");
gr4.addEventListener("click", displaychart4);

function displaychart4(){
     // highchart

     const chart = Highcharts.chart('container', {
        title: {
        text: 'Group A'
        },
        xAxis: {
        categories:team_4
        },
        series: [{
        type: 'column',
        name: 'Unemployed',
        colorByPoint: true,
        data: ptn_4.map(Number),
        showInLegend: false
        }]
    });

    document.getElementById('plain').addEventListener('click', () => {
    chart.update({
          chart: {
            inverted: false,
            polar: false
        },
        });
    });
  
    document.getElementById('inverted').addEventListener('click', () => {
        chart.update({
        chart: {
            inverted: true,
            polar: false
        },
        subtitle: {
            text: 'Chart option: Inverted | Source: ' +
            '<a href="https://www.nav.no/no/nav-og-samfunn/statistikk/arbeidssokere-og-stillinger-statistikk/helt-ledige"' +
            'target="_blank">NAV</a>'
        }
        });
    });
  
    document.getElementById('polar').addEventListener('click', () => {
        chart.update({
        chart: {
            inverted: false,
            polar: true
        },
        });
    });

}












const courses =[
    {
        coursename:"Higher Certificate of Information Technology",
        courseid:"HC151",
        description: "Introductory course to the world of IT",
        Credits: 360,
        NQF: 5,
        startDate: "",
        duration: "1 year",
        view: 'Course views/#',
        venues:["Pretoria", "Stellenbosch", "Kempton Park"],
        modules:[{
            core:
            {moduleid: "MATH151",
            },
            electives:
             {moduleid:'SWA151'}
        }

        ],
    },
  {
        coursename:"Diploma of Information Technology",
        courseid:"DIT161",
        description: "Intermediate course to the world of IT",
        Credits: 360,
        NQF: 6,
        startDate: "",
        duration: "2 1/2 year and 6 months of Training",
        view: 'Course views/Course-Structure_Diploma-in-Information-Technology.pdf',
        venues:["Pretoria", "Stellenbosch", "Kempton Park"],
        modules:[
            {
                core:
                {moduleid: "MATH161",
                },
                electives:
                 {moduleid:'SWA161'}
            }

        ]
    },

    {
        coursename:"Bachelor of Information Technology",
        courseid:"BIT171",
        description: " Intermidate course to the world of IT",
        Credits: 360,
        NQF: 7,
        startDate: "",
        duration: "3 years",
        view: 'Course views/#',
        venues:["Pretoria", "Stellenbosch", "Kempton Park"],
        modules:[
            {
                core:
                {moduleid: "MATH171",
                },
                electives:
                 {moduleid:'SWA161'}
            }

        ],
    },
 {
        coursename:"Bachelor of Computing",
        courseid:"BCOM181",
        description: "Ulimate course to the world of IT",
        Credits: 360,
        NQF: 8,
        startDate: "",
        duration: "3 year",
        view: 'Course views/#',
        venues:["Pretoria", "Stellenbosch", "Kempton Park"],
        modules:[
            {
                core:
                {moduleid: "MATH181",
                },
                electives:
                 {moduleid:'SWA181'}
            }

        ]
    },
]
class Structure{
    constructor(){
        this.courses =[];
        this.CompletedMods= new Set();
        this.DisplayCoursesDets();
        this.DisplayCourses();
    }
}
DisplayCourses(){
    this.courses.push(new)
}

getAllCourses(){
    return this.courses;
}

searchCourses(query){
    query= query.toLowerCase();
    return this.courses.filter(course =>
        courses.coursename.toLowerCase().includes(query) || courses.courseid.toLowerCase(query));
    
}

 // Function to generate table from  data
 let Data = courses.modules[0]; 
 function generateTable(Data) {
    const tableHeader = document.getElementById('table-header');
    const tableBody = document.getElementById('table-body');

    // Get headers from  keys
    const headers = Object.keys(Data[0].);

    // Create table header
    headers.forEach(header => {
        const th = document.createElement('th');
        th.innerText = header.charAt(0).toUpperCase() + header.slice(1);
        tableHeader.appendChild(th);
    });

    // Create table rows
    Data.forEach(item => {
        const tr = document.createElement('tr');
        headers.forEach(header => {
            const td = document.createElement('td');
            td.innerText = item[header];
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}

// Call the function to generate the table
generateTable(Data);

const higherCertStart = new Date(2024, 8, 1);
const diplomaStart = new Date(2024,9,1);
const bachelorITStart = new Date(2024,10,1);
const bachelorOfCompStart = new Date(2024,11,1);


document.getElementById("enroll-form").addEventListener('submit', function(event) {
    event.preventDefault(); 
    var selectedCourse = document.getElementById('courseSelect').value;
    CountDown(selectedCourse);
});

function CountDown(fselectedCourse) {
    clearInterval(window.countdownInterval);
    var countDownContainer =document.getElementById("countDown-section"); 
    countDownContainer.innerHTML="";
    var timer= document.createElement("p");
    countDownContainer.appendChild(timer);

    function updateCount() {
        var currentTime = new Date();
        var timeDifference;
        if (fselectedCourse=="BComp") {
        timeDifference= bachelorOfCompStart - currentTime;
        }
        else if (fselectedCourse=="BIT") {
            timeDifference= bachelorITStart - currentTime;
        }
        else if (fselectedCourse=="DIT") {
            timeDifference= diplomaStart - currentTime;
        }
        else if (fselectedCourse=="HC") {
            timeDifference= higherCertStart- currentTime;
        }
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

       
        if (timeDifference > 0) {
            timer.textContent= `There are ${days}d ${hours}h ${minutes}m ${seconds}s remaining until the ${fselectedCourse} course starts`;
        }
        else  {
            clearInterval(window.countdownInterval);
            timer.textContent = "You may not enroll for this course because it has already begun.";
        }
    }
    updateCount();
    window.countdownInterval = setInterval(updateCount, 1000);
}

function PrintCourseDetails() {
    var currentPage = window.location.href; //extracts whole url
    var fileName = currentPage.substring(currentPage.lastIndexOf('/') + 1); //extracts only teh filename from url
    var newWindow = window.open('', '_blank', 'width=800,height=600');
    var courseDetails;
    switch (fileName) {
        case "HC.html":
            courseDetails =  document.getElementById("hcModules").innerHTML;
            break;
        case "BIT.html":
            courseDetails =  document.getElementById("bitModules").innerHTML;
            break;

        case "BCOM.html":
            courseDetails =  document.getElementById("bcomModules").innerHTML;
            break;
        
        case "DIT.html":
            courseDetails =  document.getElementById("ditModules").innerHTML;
             break;       
        default:
            break;
    }     
    newWindow.document.write('<html><head><title>Print Course Details</title>');
    newWindow.document.write('<style>body{font-family:Arial, sans-serif;}</style>');
    newWindow.document.write('</head><body >');
    newWindow.document.write(courseDetails);
    newWindow.document.write('</body></html>');

    newWindow.document.close();
    newWindow.print();
    newWindow.close();
}3
let course = [
    {
        free: 0,
        time: "0:00-0501",
        name: "課程名稱",
        teacher: "高偉君",
        date: "2023, 05, 01",
        target: "這邊放連結",
    },
    {
        free: 1,
        time: "0:00-0512",
        name: "課程名稱",
        teacher: "高偉君",
        date: "2023, 05, 12",
        target: "這邊放連結",
    },
    {
        free: 1,
        time: "0:00-0612",
        name: "課程名稱",
        teacher: "高偉君",
        date: "2023, 06, 12",
        target: "這邊放連結",
    },
    {
        free: 1,
        time: "0:00-0712",
        name: "課程名稱",
        teacher: "高偉君",
        date: "2023, 07, 12",
        target: "這邊放連結",
    },
    {
        free: 1,
        time: "0:00-0312",
        name: "課程名稱",
        teacher: "高偉君",
        date: "2023, 03, 12",
        target: "這邊放連結",
    }
]

let day = new Array;
// let events = new Array;
for(let i=0; i<course.length; i++) {
    day[i] = new Date(course[i].date);
    // events[i] = {'Date': day[i], 'Title': 'fff'};
}

var events = [
    {'Date': day[0]},
    {'Date': day[1]},
    {'Date': day[2]},
    {'Date': day[3]},
    {'Date': day[4]},
];

var settings = {
    DateTimeFormat: 'dateformat',
};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);


let todayMonth;
let monthData = new Array;
function set(){
    $(function(){
        let j=0;
        for(let i=0; i<day.length; i++) {
            todayMonth = $(".cld-datetime").find(".today").attr("data-month");
            let dayGetMonth = day[i].getMonth() + 1;
            if(dayGetMonth == todayMonth) {
                monthData[j] = {
                    free: course[i].free,
                    time: course[i].time,
                    name: course[i].name,
                    teacher: course[i].teacher,
                    target: course[i].target,
                }
                console.log("monthData[" +j + "]=" + monthData[j].free + "," + monthData[j].time + "," + monthData[j].name + "," + monthData[j].teacher + "," + monthData[j].target);
                j=j+1;
            }
        }
        for(let i=0; i<monthData.length; i++){
            let calanderCourse = $("<div class='calander_course'></div>");
            let badge;
            if (monthData[i].free == 0) {
                badge = $("<div class='badge badge-blue'>免費</div>")
            }else {
                badge = $("<div class='badge badge-red'>付費</div>")
            }
            let link = $("<a class='d-block font-18px'></a>").attr("href",monthData[i].target);
            let time = monthData[i].time;
            let br = $("<br>");
            let name = $("<span class='mr-2'></span>").text(monthData[i].name);
            let teacher = monthData[i].teacher;
            link.append(time,br,name,teacher);
            calanderCourse.append(badge, link);

            $(".cld-title").eq(i).append(calanderCourse);

        }
        // console.log("monthData=" + monthData[0].free);
    })
}
// set();

$(document).on("click",".cld-nav",function(){
    console.log("click!!!")
    set();
})
// $(function(){
//     $(".cld-nav").each(function(){
//         $(this).click(function(){
//             console.log("click!!!")
//             set();
//         })
//     })
// })
    set();

//   $('#calendarModal').on('shown.bs.modal', function (event) {
//   })
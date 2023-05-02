let course = [
    {
        free: 0,
        time: "0:00",
        name: "課程名稱",
        teacher: "高偉君",
        date: "2023, 05, 01",
        target: "這邊放連結",
    },
    {
        free: 1,
        time: "0:00",
        name: "課程名稱",
        teacher: "高偉君",
        date: "2023, 05, 12",
        target: "這邊放連結",
    },
    {
        free: 1,
        time: "0:00",
        name: "課程名稱",
        teacher: "高偉君",
        date: "2023, 06, 12",
        target: "這邊放連結",
    },
    {
        free: 1,
        time: "0:00",
        name: "課程名稱",
        teacher: "高偉君",
        date: "2023, 07, 12",
        target: "這邊放連結",
    }
]

let day = new Array;
let events = new Array;
for(let i=0; i<course.length; i++) {
    day[i] = new Date(course[i].date);
    events[i] = {'Date': day[i], 'Title': ''};
}

// var events = [
//     {'Date': new Date(course[0].date), 'Title': ''},
//     {'Date': new Date(course[1].date), 'Title': ''},
//     {'Date':  new Date(course[2].date), 'Title': ''},
// ];
var settings = {
    DateTimeFormat: 'dateformat',
};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);

    
// let weekName = ["日","一","二","三","四","五","六"];
// $(".cld-labels").find(".cld-label").each(function(i){
//     $(this).text(weekName[i]);
// })

let todayMonth = $(".cld-datetime").find(".today").attr("data-month");
function set(){
    $(function(){
        for(let i=0; i<day.length; i++) {
            let dayGetMonth = day[i].getMonth() + 1;
            if(dayGetMonth == todayMonth) {
                let calanderCourse = $("<div class='calander_course'></div>");
                let badge;
                if (course[i].free == 0) {
                    badge = $("<div class='badge badge-blue'>免費</div>")
                }else {
                    badge = $("<div class='badge badge-red'>付費</div>")
                }
                let link = $("<a class='d-block font-18px'></a>").attr("href",course[i].target);
                let time = course[i].time;
                let br = $("<br>");
                let name = $("<span class='mr-2'></span>").text(course[i].name);
                let teacher = course[i].teacher;
                link.append(time,br,name,teacher);
                calanderCourse.append(badge, link);
    
                $(".cld-title").eq(i).append(calanderCourse);
            }else {
                // console.log("#########");
            }
        }
    })
}
// set();

$(function(){
    $(".cld-nav").each(function(){
        $(this).click(function(){
            console.log("click!!!")
            set();
        })
    })
})

  $('#calendarModal').on('shown.bs.modal', function (event) {
    set();
  })
let course = [
    {
        free: 0,
        time: "0:00",
        name: "課程名稱",
        teacher: "高偉君",
        date: "2023,04,01",
        target: "這邊放連結",
    },
    {
        free: 1,
        time: "0:00",
        name: "課程名稱",
        teacher: "高偉君",
        date: "2023,04,14",
        target: "這邊放連結",
    }
]

var events = [
    {'Date': new Date(course[0].date), 'Title': "ll"},
    {'Date': new Date(2023, 3, 18), 'Title': 'New Garfield movie comes out!', 'Link': 'https://garfield.com'},
    {'Date': new Date(2023, 4, 27), 'Title': '25 year anniversary', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},
];
var settings = {
    DateTimeFormat: 'dateformat',
};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);

    
let weekName = ["日","一","二","三","四","五","六"];
$(".cld-labels").find(".cld-label").each(function(i){
    $(this).text(weekName[i]);
})

function set(){
    $(function(){
        $(".cld-title").each(function(i){
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

            $(this).append(calanderCourse);
        })
    })
}
set();
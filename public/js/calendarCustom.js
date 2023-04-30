let course = [
    {
      free: 0,
      time: "0:00",
      name: "課程名稱",
      teacher: "高偉君",
      date: "2023-04-01",
      target: "這邊放連結",
    },
    {
      free: 1,
      time: "0:00",
      name: "課程名稱",
      teacher: "高偉君",
      date: "2023-04-14",
      target: "這邊放連結",
    }
  ]



  var calendarEl;
  var calendar;
  function calendarInt() {
    calendarEl = document.getElementById("calendar");
    calendar = new FullCalendar.Calendar(calendarEl, {
      locale: 'zh-tw',
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "prev",
        center: "title",
        right: "next",
      },
      events: [
        {title: "111", start: course[0].date, end: course[0].date ,color:"transparent" },
        {title: "222", start: course[1].date, end: course[1].date ,color:"transparent" }
      ],
      height:700,
    });
    calendar.render();
  }
  calendarInt();


  document.addEventListener('DOMContentLoaded', function() {
    calendarInt();
  });

  // $('#calendarModal').on('shown.bs.modal', function (event) {
  //   calendarInt();
  //   set();
  // })

  function set(){
    $(function(){
      $(".fc-event-title.fc-sticky").each(function(i){
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
  // $(document).on("click",".fc-next-button, .fc-prev-button",function(){
    // set();
  // })
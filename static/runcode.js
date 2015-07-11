data = [
   "MiLimin",
   "blackfox1983@163.com",
   "QQ:115519153",
   "Changping District",
   "Beijing, China",
   "",
   "Education",
   "",
   "M.S. at College of Computer Science and Technology at University of Jilin - Changchun, Jilin",
   "September 1, 2007 to July 1, 2010",
   "- Studied theory of Computer Science, e.g. Computability & Complexity",
   "- Researched of BotNet",
   "- Did Projects, e.g. Web, Desktop Softwares on  Windows and Servers on Linux",
   "",
   "B.S. at College of Computer Science and Technology at University of Jilin - Changchun, Jilin",
   "September 1, 2002 to July 1, 2006",
   "- Focused on the theory of Computer Science",
   "- Taught myself Network Security and practice",
   "- Programing on Joj(JiLin University Online Judge System)",
   "",
   "Employment",
   "",
   "R&D, Baidu, Inc. - Beijing",
   "April 13, 2011 to Now",
   "- Developed several modules and libraries",
   "- Provided design work for Baidu-Spider's and WebMaster-Platform's launch",
   "",
   "Software Engineer, Kingsoft, Inc. - Dalian, Liaoning",
   "June 01, 2010, to March 25, 2011",
   "- Developed Realm-Server",
   "- Maintained libraries(e.g. network, db-query) running in all Game-Servers",
]
var cur = 0;
var x = 0;
var msg = "";
var timer_id;
function run_code() {
   if(document.getElementById("output_content")){
       if(cur == 0){
           document.getElementById("output_content").innerHTML = "";
       }
       var m = data[cur];
       document.getElementById("output_content").innerHTML = msg + m.substring(0, x++) + "_";
       if (x == m.length + 1) {
           x = 0;
           cur++;
           if (cur > data.length - 1) {
               cur = 0;
               x = 0;
               msg = "";
               clearTimeout(timer_id);
               return;
           }
           timer_id = setTimeout("run_code()", 200);
           msg += m + "<br/>";
       } else {
           setTimeout("run_code()", 50);
       }
   }
}

function NeatDialog(title) {
   window.output_dialog = null; //全局变量
   this.elt = null; //类成员变量
   if (document.createElement && document.getElementById){
       var dg = document.createElement("div");
       dg.className = "neat-dialog";
       if (title) {
           dg.innerHTML = '<div class="neat-dialog-title">' + title +
           '<img src="/images/dialog_close.png" class="neat-dialog-close" onclick="window.output_dialog.close()"/></div>\n'
           + '<p id="output_content"></p>';
       }
       var dbg = document.createElement("div");
       dbg.id = "nd-bdg";
       dbg.className = "neat-dialog-bg";

       var dgc = document.createElement("div");
       dgc.className = "neat-dialog-cont";
       dgc.appendChild(dbg);
       dgc.appendChild(dg);

       if (document.body.offsetLeft > 0){
           dgc.style.marginLeft = document.body.offsetLeft + "px";
       }
       document.body.appendChild(dgc);
       this.elt = dgc;
       window.output_dialog = this;
   }
}
NeatDialog.prototype.close = function() {
   if (this.elt) {
       this.elt.style.display = "none";
       this.elt.parentNode.removeChild(this.elt);
   }
   window.output_dialog = null;
   cur = 0;
   x = 0;
   msg = "";
}

function show_output() {
   new NeatDialog("About Me!");
   run_code();
}

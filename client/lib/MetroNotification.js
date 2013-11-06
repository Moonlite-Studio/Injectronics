// Metro Notification V5
// 
// Changes:
// - Smallboxes now has animation before disappear
// - New property for small boxes. Now, can change live the backgroun color 
// - Firefox sound now supported
// - Esthetic changes on Big boxes
// - Massive changes on Metro Messagebox, but functions and callbacks still the same
// - New Metro Messagebox properties
//    - Opacity
//    - backgroundcolor
//    - backgroundcontent
//    - changeback
//    - changecontent
// - Mayor updates to the loading plugin.
// - New Loading Properties
//    - backgroundcolor
//    - backgroundcontent
//    - opacity
//    - colortime
//    - colors
//    - changeback
//    - changecontent

metroNotifications = function(){
(function(a,b){function m(a,b,c){var d=h[b.type]||{};return a==null?c||!b.def?null:b.def:(a=d.floor?~~a:parseFloat(a),isNaN(a)?b.def:d.mod?(a+d.mod)%d.mod:0>a?0:d.max<a?d.max:a)}function n(b){var c=f(),d=c._rgba=[];return b=b.toLowerCase(),l(e,function(a,e){var f,h=e.re.exec(b),i=h&&e.parse(h),j=e.space||"rgba";if(i)return f=c[j](i),c[g[j].cache]=f[g[j].cache],d=c._rgba=f._rgba,!1}),d.length?(d.join()==="0,0,0,0"&&a.extend(d,k.transparent),c):k[b]}function o(a,b,c){return c=(c+1)%1,c*6<1?a+(b-a)*c*6:c*2<1?b:c*3<2?a+(b-a)*(2/3-c)*6:a}var c="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",d=/^([\-+])=\s*(\d+\.?\d*)/,e=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1]*2.55,a[2]*2.55,a[3]*2.55,a[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],f=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e)},g={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},h={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},i=f.support={},j=a("<p>")[0],k,l=a.each;j.style.cssText="background-color:rgba(1,1,1,.5)",i.rgba=j.style.backgroundColor.indexOf("rgba")>-1,l(g,function(a,b){b.cache="_"+a,b.props.alpha={idx:3,type:"percent",def:1}}),f.fn=a.extend(f.prototype,{parse:function(c,d,e,h){if(c===b)return this._rgba=[null,null,null,null],this;if(c.jquery||c.nodeType)c=a(c).css(d),d=b;var i=this,j=a.type(c),o=this._rgba=[],p;d!==b&&(c=[c,d,e,h],j="array");if(j==="string")return this.parse(n(c)||k._default);if(j==="array")return l(g.rgba.props,function(a,b){o[b.idx]=m(c[b.idx],b)}),this;if(j==="object")return c instanceof f?l(g,function(a,b){c[b.cache]&&(i[b.cache]=c[b.cache].slice())}):l(g,function(b,d){var e=d.cache;l(d.props,function(a,b){if(!i[e]&&d.to){if(a==="alpha"||c[a]==null)return;i[e]=d.to(i._rgba)}i[e][b.idx]=m(c[a],b,!0)}),i[e]&&a.inArray(null,i[e].slice(0,3))<0&&(i[e][3]=1,d.from&&(i._rgba=d.from(i[e])))}),this},is:function(a){var b=f(a),c=!0,d=this;return l(g,function(a,e){var f,g=b[e.cache];return g&&(f=d[e.cache]||e.to&&e.to(d._rgba)||[],l(e.props,function(a,b){if(g[b.idx]!=null)return c=g[b.idx]===f[b.idx],c})),c}),c},_space:function(){var a=[],b=this;return l(g,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(a,b){var c=f(a),d=c._space(),e=g[d],i=this.alpha()===0?f("transparent"):this,j=i[e.cache]||e.to(i._rgba),k=j.slice();return c=c[e.cache],l(e.props,function(a,d){var e=d.idx,f=j[e],g=c[e],i=h[d.type]||{};if(g===null)return;f===null?k[e]=g:(i.mod&&(g-f>i.mod/2?f+=i.mod:f-g>i.mod/2&&(f-=i.mod)),k[e]=m((g-f)*b+f,d))}),this[d](k)},blend:function(b){if(this._rgba[3]===1)return this;var c=this._rgba.slice(),d=c.pop(),e=f(b)._rgba;return f(a.map(c,function(a,b){return(1-d)*e[b]+d*a}))},toRgbaString:function(){var b="rgba(",c=a.map(this._rgba,function(a,b){return a==null?b>2?1:0:a});return c[3]===1&&(c.pop(),b="rgb("),b+c.join()+")"},toHslaString:function(){var b="hsla(",c=a.map(this.hsla(),function(a,b){return a==null&&(a=b>2?1:0),b&&b<3&&(a=Math.round(a*100)+"%"),a});return c[3]===1&&(c.pop(),b="hsl("),b+c.join()+")"},toHexString:function(b){var c=this._rgba.slice(),d=c.pop();return b&&c.push(~~(d*255)),"#"+a.map(c,function(a,b){return a=(a||0).toString(16),a.length===1?"0"+a:a}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),f.fn.parse.prototype=f.fn,g.hsla.to=function(a){if(a[0]==null||a[1]==null||a[2]==null)return[null,null,null,a[3]];var b=a[0]/255,c=a[1]/255,d=a[2]/255,e=a[3],f=Math.max(b,c,d),g=Math.min(b,c,d),h=f-g,i=f+g,j=i*.5,k,l;return g===f?k=0:b===f?k=60*(c-d)/h+360:c===f?k=60*(d-b)/h+120:k=60*(b-c)/h+240,j===0||j===1?l=j:j<=.5?l=h/i:l=h/(2-i),[Math.round(k)%360,l,j,e==null?1:e]},g.hsla.from=function(a){if(a[0]==null||a[1]==null||a[2]==null)return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2],e=a[3],f=d<=.5?d*(1+c):d+c-d*c,g=2*d-f,h,i,j;return[Math.round(o(g,f,b+1/3)*255),Math.round(o(g,f,b)*255),Math.round(o(g,f,b-1/3)*255),e]},l(g,function(c,e){var g=e.props,h=e.cache,i=e.to,j=e.from;f.fn[c]=function(c){i&&!this[h]&&(this[h]=i(this._rgba));if(c===b)return this[h].slice();var d,e=a.type(c),k=e==="array"||e==="object"?c:arguments,n=this[h].slice();return l(g,function(a,b){var c=k[e==="object"?a:b.idx];c==null&&(c=n[b.idx]),n[b.idx]=m(c,b)}),j?(d=f(j(n)),d[h]=n,d):f(n)},l(g,function(b,e){if(f.fn[b])return;f.fn[b]=function(f){var g=a.type(f),h=b==="alpha"?this._hsla?"hsla":"rgba":c,i=this[h](),j=i[e.idx],k;return g==="undefined"?j:(g==="function"&&(f=f.call(this,j),g=a.type(f)),f==null&&e.empty?this:(g==="string"&&(k=d.exec(f),k&&(f=j+parseFloat(k[2])*(k[1]==="+"?1:-1))),i[e.idx]=f,this[h](i)))}})}),f.hook=function(b){var c=b.split(" ");l(c,function(b,c){a.cssHooks[c]={set:function(b,d){var e,g,h="";if(a.type(d)!=="string"||(e=n(d))){d=f(e||d);if(!i.rgba&&d._rgba[3]!==1){g=c==="backgroundColor"?b.parentNode:b;while((h===""||h==="transparent")&&g&&g.style)try{h=a.css(g,"backgroundColor"),g=g.parentNode}catch(j){}d=d.blend(h&&h!=="transparent"?h:"_default")}d=d.toRgbaString()}try{b.style[c]=d}catch(d){}}},a.fx.step[c]=function(b){b.colorInit||(b.start=f(b.elem,c),b.end=f(b.end),b.colorInit=!0),a.cssHooks[c].set(b.elem,b.start.transition(b.end,b.pos))}})},f.hook(c),a.cssHooks.borderColor={expand:function(a){var b={};return l(["Top","Right","Bottom","Left"],function(c,d){b["border"+d+"Color"]=a}),b}},k=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);


$(document).ready(function() {      
        // Plugins placing
        $("body").append("<div id='divSmallBoxes'></div>");
        $("body").append("<div id='divMiniIcons'></div><div id='divbigBoxes'></div>");

        //$(".OpenSideBar").pageslide({ direction: "left" });

    });


//Closing Rutine for Loadings
function MetroUnLoading() 
{

    $(".divMessageBox").fadeOut(300,function(){
        $(this).remove();
    });

    $(".LoadingBoxContainer").fadeOut(300,function(){
        $(this).remove();
    });    
}


// Messagebox
var ExistMsg = 0;
var MetroMSGboxCount = 0;
var PrevTop =  0;

var MsgCounter = 0;

(function ($) 
{
    $.MetroMessageBox = function (settings,callback) 
    {
        var MetroMSG, Content;
        settings = $.extend({
            title: "",
            content: "",
            NormalButton: undefined,
            ActiveButton: undefined,
            buttons: undefined,
            sound: true,
            input: undefined,
            placeholder: "",
            options: undefined,
            backgroundcolor: "#000000",
            backgroundcontent: "#232323",
            opacity: 0.7,
            colortime: 1500,
            colors: undefined,
            changeback: true,
            changecontent: true,
        }, settings);

        // <div class="divMessageBox animated fadeIn fast">
        //     <div class="MessageBoxContainer">
        //         <div class="MessageBoxMiddle">
        //             <h2>Hola Mundo</h2>
        //             <p class="pText">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        //             tempor incididunt ut labore et dolore magna aliqua. </p>
        //             <input type='text' id='' placeholder='Hola Mundo'/><br/><br/>
        //             <div class="MessageBoxButtonSection">
        //                 <button>Aceptar</button>
        //                 <button>Cancelar</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        var PlaySound = 0;

        PlaySound =1;
        //Messagebox Sound

        // Messagebox Sound
        if(settings.sound===true)
        {
            if(isIE8orlower() == 0)
            {
                var audioElement = document.createElement('audio');
                if (navigator.userAgent.match('Firefox/'))
                    audioElement.setAttribute('src', 'static/sound/messagebox.ogg');
                else
                    audioElement.setAttribute('src', 'static/sound/messagebox.mp3');
                

                $.get();
                audioElement.addEventListener("load", function() {
                    audioElement.play();
                }, true);

                audioElement.pause();
                audioElement.play();
            }
        }

        

        MetroMSGboxCount = MetroMSGboxCount + 1;
        MsgCounter +=1;

        // if(ExistMsg==0)
        // {
        //     ExistMsg = 1;
        //     MetroMSG = "<div class='divMessageBox animated fadeIn fast' id='MsgBoxBack'></div>";
        //     $("body").append(MetroMSG);

        //     if(isIE8orlower() == 1)
        //     {
        //         $("#MsgBoxBack").addClass("MessageIE");
        //     }
        // }
        MetroMSG = "<div class='divMessageBox' id='MsgBoxBack" + MsgCounter + "'></div>";
        $("body").append(MetroMSG);

        var ThisBackground = $("#MsgBoxBack" + MsgCounter);

        ThisBackground.css({
                backgroundColor: settings.backgroundcolor,
                opacity: 0
            });

        ThisBackground.animate({
            opacity: settings.opacity,
        },300);


        var InputType="";
        var HasInput = 0;
        if(settings.input != undefined)
        {
            HasInput = 1;
            settings.input = settings.input.toLowerCase();

            switch(settings.input)
            {
            case "text":
              InputType = "<input type='"+ settings.input +"' id='txt"+ MetroMSGboxCount +"' placeholder='"+ settings.placeholder +"'/><br/><br/>";
              break;
            case "password":
              InputType = "<input type='"+ settings.input +"' id='txt"+ MetroMSGboxCount +"' placeholder='"+ settings.placeholder +"'/><br/><br/>";
              break;

            case "select":
                if(settings.options == undefined)
                {
                    alert("For this type of input, the options parameter is required.");
                }
                else
                {
                    InputType  = "<select id='txt"+ MetroMSGboxCount+"'>";
                    for (var i = 0; i <= settings.options.length-1; i++) 
                    {
                        if(settings.options[i]=="[")
                        {
                            Name = "";
                        }
                        else
                        {
                            if(settings.options[i]=="]")
                            {
                                NumBottons = NumBottons + 1;
                                Name = "<option>"+ Name +"</option>";
                                InputType += Name;
                            }
                            else
                            {
                                Name += settings.options[i];
                            }
                        }
                    };
                    InputType += "</select>"
                }

             break;
            default:
              alert("That type of input is not handled yet");
            }

            
        }


        Content  = "<div class='MessageBoxContainer' id='Msg"+ MsgCounter +"'>";
        Content += "<div class='MessageBoxMiddle' id='MsgMiddle"+ MsgCounter +"'>";
        Content += "<span class='MsgTitle'>"+ settings.title +"</span class='MsgTitle'>";
        Content += "<p class='pText'>" + settings.content + "</p>";
        Content += InputType;
        Content += "<div class='MessageBoxButtonSection'>";

        if(settings.buttons == undefined)
        {
            settings.buttons = "[Accept]";
        }

        settings.buttons =  $.trim(settings.buttons);
        settings.buttons = settings.buttons.split('');
        
        var Name = "";
        var NumBottons = 0;
        if(settings.NormalButton == undefined)
        {
            settings.NormalButton = "#232323";   
        }

        if(settings.ActiveButton == undefined)
        {
            settings.ActiveButton = "#ed145b";   
        }


        for (var i = 0; i <= settings.buttons.length-1; i++) 
        {

            if(settings.buttons[i]=="[")
            {
                Name = "";
            }
            else
            {
                if(settings.buttons[i]=="]")
                {
                    NumBottons = NumBottons + 1;
                    Name = "<button id='bot"+ NumBottons +"-Msg"+ MetroMSGboxCount +"' class='botTempo' style='background-color: "+ settings.NormalButton +";'> " + Name + "</button>";
                    Content += Name;
                }
                else
                {
                    Name += settings.buttons[i];
                }
            }
        };

        Content += "</div>"; //MessageBoxButtonSection
        Content += "</div>"; //MessageBoxMiddle
        Content += "</div>"; //MessageBoxContainer

        // alert(MetroMSGboxCount);
        // if(MetroMSGboxCount > 1)
        // {
        //     $(".MessageBoxContainer").hide();
        //     $(".MessageBoxContainer").css("z-index", 99999);
        // }

        // $(".divMessageBox").append(Content);
        $("body").append(Content);

        var Windowheight = $(window).height();
        var WindowWidth = $(window).width();

        var MsgContentBox = $("#MsgMiddle" + MsgCounter);
        var MsgContentBoxHeight = MsgContentBox.height();


        var MiddlePoint = (Windowheight / 2) - (MsgContentBoxHeight/2);

        var MsgContentBoxContainer = $("#Msg"+MsgCounter);
        MsgContentBoxContainer.css({
            "z-index":100001,
            top: MiddlePoint+ "px",
            opacity: 0,
            backgroundColor: settings.backgroundcontent,
        });

        MsgContentBoxContainer.animate({
            opacity: 1
        },300);
    
         // Color Functionality
        var ColorTimeInterval;
        var BothChange = false;
        if(settings.colors !=undefined && settings.colors.length>0){ 
        
        if(settings.changeback == true && settings.changecontent == true){
            MsgContentBoxContainer.css("background-color",settings.backgroundcolor);
            ThisBackground.css("background-color",settings.backgroundcolor);

            BothChange = true;
        }

            MsgContentBoxContainer.attr("colorcount","0");

            ColorTimeInterval = setInterval(function(){

                var ColorIndex = MsgContentBoxContainer.attr("colorcount");

                if(settings.changecontent == true){
                    MsgContentBoxContainer.animate({
                        backgroundColor: settings.colors[ColorIndex].color,
                    });

                }
                
                var Buttons = MsgContentBoxContainer.find(".botTempo");
                Buttons.animate({
                    backgroundColor: settings.colors[ColorIndex].color,
                });

                ThisBackground.animate({
                    backgroundColor: settings.colors[ColorIndex].color,
                });


                settings.NormalButton = settings.colors[ColorIndex].color;


                if(ColorIndex < settings.colors.length-1){
                    MsgContentBoxContainer.attr("colorcount",((ColorIndex*1)+1));
                }else{
                    MsgContentBoxContainer.attr("colorcount",0);
                }

            },settings.colortime);
        }




        // Focus
        if(HasInput==1)
        {
            $("#txt"+MetroMSGboxCount).focus();
        }


        $('.botTempo').hover(function()
        {
            var ThisID = $(this).attr('id');
            // alert(ThisID);
            $("#"+ThisID).css("background-color", settings.ActiveButton);
        },function(){
            var ThisID = $(this).attr('id');
            $("#"+ThisID).css("background-color", settings.NormalButton);
        });

        // Callback and button Pressed
        $(".botTempo").click(function()
        {
            // Closing Method
            var ThisID = $(this).attr('id');
            var MsgBoxID  = ThisID.substr(ThisID.indexOf("-")+1);
            var Press = $.trim($(this).text());

            if(HasInput==1)
            {
                if (typeof callback == "function") 
                {   
                    var IDNumber = MsgBoxID.replace("Msg","");
                    var Value = $("#txt"+IDNumber).val();
                    if(callback) callback(Press, Value);
                }
            }
            else
            {
                if (typeof callback == "function") 
                {   
                    if(callback) callback(Press);
                }
            }

            ThisBackground.animate({
                opacity: 0,
            },300,function(){
                $(this).remove();
            });

            MsgContentBoxContainer.animate({
                opacity: 0,
            },300,function(){
                $(this).remove();
            });

            // $("#"+MsgBoxID).addClass("animated fadeOut fast");
            // MetroMSGboxCount = MetroMSGboxCount -1;

            // if(MetroMSGboxCount==0)
            // {
            //     $("#MsgBoxBack").removeClass("fadeIn").addClass("fadeOut").delay(300).queue(function()
            //     {
            //         ExistMsg = 0;
            //         $(this).remove();
            //     });
            // }
        });
            
    }

})(jQuery);

// Loading Screen
var Point = 1;
var MetroLoadingTimer = 0;
var PointText = "";
var MetroExist = false;

var LoadingCount = 0;

(function ($) 
{
    $.MetroLoading = function (settings,callback) 
    {
        var Content;

        settings = $.extend({
            title: undefined,
            content: undefined,
            img: undefined,
            timeout: undefined,
            special: undefined,
            backgroundcolor: "#000000",
            backgroundcontent: "#232323",
            opacity: 0.7,
            colortime: 1500,
            colors: undefined,
            changeback: true,
            changecontent: true,
        }, settings);

        MetroMSGboxCount = MetroMSGboxCount + 1;

        // if(ExistMsg==0)
        // {
        //     ExistMsg = 1;
        //     MetroMSG = "<div class='divMessageBox animated fadeIn fast' id='MsgBoxBack'></div>";
        //     $("body").append(MetroMSG);

        //     if(isIE8orlower() == 1)
        //     {
        //         $("#MsgBoxBack").addClass("MessageIE");
        //     }
        // }
        LoadingCount +=1;

        Content = "<div class='divMessageBox' id='LoadingBox"+ LoadingCount +"'></div>";
        $("body").append(Content);

        var ThisBackLoading = $("#LoadingBox" + LoadingCount);
        ThisBackLoading.css({
            "background-color": settings.backgroundcolor,
            opacity: settings.opacity,
            display: "none"
        });

        ThisBackLoading.fadeIn(300);


        if(settings.title == undefined)
        {
            settings.title = "Loading";
        }

        if(settings.content == undefined)
        {
            settings.content = "Please wait.";
        }

        var NoImage="";
        if(settings.img == undefined)
        {
            settings.img = "";
            NoImage = "<br/><br/><br/><br/><br/>"; 
        }
        else
        {
            settings.img = "<img src='"+ settings.img +"' class='animated fadeIn'/>";
        }


        var BodyLoading ="";
        BodyLoading += "<div class='LoadingBoxContainer' id='LoadingContainer" + LoadingCount + "'>";
        BodyLoading += "<div class='LoadingBoxMiddle'>";
        BodyLoading += "<div align='center'>";
        BodyLoading += "<br/><br/>"; 
        BodyLoading += settings.img;
        BodyLoading += "<br/><br/><br/>"; 

        if(settings.special == true)
        {
            // Special Loading type
            BodyLoading += "<span class='MsgTitle animated fadeIn' id='lblSpecialTitle'>"+ settings.title +"</span>";
        }
        else
        {
            // Normal loading
            BodyLoading += "<br/><span class='MsgTitle animated fadeIn'>"+ settings.title +"<span id='LoadingPoints'>.</span></span>";
            BodyLoading += "<p class='pText animated fadeIn'>"+ settings.content +"</p>";

        }

        BodyLoading += NoImage;
        BodyLoading += "</div>";
        BodyLoading += "</div>";
        BodyLoading += "</div>";

        
        // $(".divMessageBox").append(BodyLoading);
        $("body").append(BodyLoading);

        var Windowheight = $(window).height();
        var WindowWidth = $(window).width();

        var LoadingContentbox = $("#LoadingContainer" + LoadingCount);
        var LoadingContentboxHeight = LoadingContentbox.height();


        var MiddlePoint = (Windowheight / 2) - (LoadingContentboxHeight / 2);

        LoadingContentbox.css({
            "z-index":100001,
            backgroundColor: settings.backgroundcontent,
            top: MiddlePoint+ "px",
            opacity: 0,
            // backgroundColor: settings.backgroundcontent,
        });

        LoadingContentbox.animate({
            opacity: 1
        },300);


    
         // Color Functionality
        var ColorTimeInterval;
        var BothChange = false;
        if(settings.colors !=undefined && settings.colors.length>0){ 
        
        if(settings.changeback == true && settings.changecontent == true){
            LoadingContentbox.css("background-color",settings.backgroundcolor);
            ThisBackLoading.css("background-color",settings.backgroundcolor);

            BothChange = true;
        }

            LoadingContentbox.attr("colorcount","0");

            ColorTimeInterval = setInterval(function(){

                var ColorIndex = LoadingContentbox.attr("colorcount");

                if(settings.changecontent == true){
                    LoadingContentbox.animate({
                        backgroundColor: settings.colors[ColorIndex].color,
                    });
                }

                ThisBackLoading.animate({
                    backgroundColor: settings.colors[ColorIndex].color,
                });



                if(ColorIndex < settings.colors.length-1){
                    LoadingContentbox.attr("colorcount",((ColorIndex*1)+1));
                }else{
                    LoadingContentbox.attr("colorcount",0);
                }

            },settings.colortime);
        }




        var PointAnimation;
        clearInterval(PointAnimation);
        PointAnimation = setInterval(function()
        {

            if ($(".LoadingBoxContainer").length > 0)
            {
                // If loading exists
            }
            else
            {
                // If loading do not exist.
                window.clearInterval(PointAnimation);
            }

            if(settings.special == true)
            {
                // Special Loading
                if(MetroLoadingTimer==2)
                {
                    $("#lblSpecialTitle").removeClass("fadeIn").addClass("fadeOut").delay(300).queue(function()
                    {
                        $(this).text(settings.content);
                        $(this).clearQueue();
                        $(this).removeClass("fadeOut");
                        $(this).addClass("fadeIn");

                    });

                    MetroLoadingTimer += 1;
                }
                else
                {
                    if(MetroLoadingTimer == 5)
                    {
                        $("#lblSpecialTitle").removeClass("fadeIn").addClass("fadeOut").delay(300).queue(function()
                        {
                            $(this).text(settings.title);
                            $(this).clearQueue();
                            $(this).removeClass("fadeOut");
                            $(this).addClass("fadeIn");

                        });
                        MetroLoadingTimer = 0;
                    }
                    else
                    {
                        MetroLoadingTimer += 1;    
                    }
                }
               

            }
            else
            {
                // Normal Loading
                if(Point==0)
                {
                    PointText = ".";
                    Point +=1;
                }else if(Point == 1)
                {
                    PointText = "..";
                    Point +=1;
                }else if(Point == 2)
                {
                    PointText = "...";
                    Point += 1;
                }else if(Point == 3)
                {
                    PointText = "....";
                    Point = 0;
                }
                $("#LoadingPoints").text(PointText);
            }


        },750);

        
        if(settings.timeout != undefined){
            setTimeout(function() 
            {
                //Closing Rutine
                LoadingContentbox.fadeOut(300,function(){
                    $(this).remove();
                });

                ThisBackLoading.fadeOut(300,function(){
                    $(this).remove();
                });
                
                clearInterval(PointAnimation);

                if (typeof callback == "function") 
                {   
                    if(callback) callback();
                }
            }, settings.timeout);
        }

    
    }
})(jQuery);


// BigBox
var BigBoxes = 0;

(function ($) 
{
    $.bigBox = function (settings,callback) 
    {
        var boxBig, content;
        settings = $.extend({
            title: "",
            content: "",
            img: undefined,
            number: undefined,
            color: undefined,
            sound: true,
            timeout: undefined,
            colortime: 1500,
            colors:undefined
        }, settings);

        // bigbox Sound
        if(settings.sound === true)
        {
            if(isIE8orlower() == 0)
            {
                var audioElement = document.createElement('audio');

                if (navigator.userAgent.match('Firefox/'))
                    audioElement.setAttribute('src', '/sounds/bigbox.ogg');
                else
                    audioElement.setAttribute('src', '/sounds/bigbox.mp3');
                
                $.get();
                audioElement.addEventListener("load", function() {
                audioElement.play();
                }, true);

                audioElement.pause();
                audioElement.play();
            }    
        }
        
         


        
        // <div class="bigBox animated fadeInUp">
        // <span>Hola Mundo</span>
        // <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        // tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        // quis nostrud exercitation ullamco. </p>
        // <div class="bigboxicon">
        //     <img src="static/img/cloud.png">
        // </div>
        // <div class="bigboxnumber">
        //     3
        // </div>
        // </div>
        BigBoxes = BigBoxes + 1;
        
        boxBig =  "<div id='bigBox"+BigBoxes+"' class='bigBox animated fadeIn fast'><div id='bigBoxColor"+ BigBoxes+"'><img class='botClose' id='botClose"+ BigBoxes +"' src='/img/close.png'>";
        boxBig +=  "<span>"+ settings.title +"</span>";
        boxBig +=  "<p>"+settings.content +"</p>";
        boxBig +=  "<div class='bigboxicon'>";

        if(settings.img == undefined)
        {
            settings.img = "/img/smallcloud.png";
        }
        boxBig +=  "<img src='"+ settings.img +"'>";
        boxBig +=  "</div>";

        boxBig +=  "<div class='bigboxnumber'>";
        if(settings.number != undefined)
        {
            boxBig +=  settings.number;
        }
        boxBig +=  "</div></div>";
        boxBig +=  "</div>";


        // stacking method
        $("#divbigBoxes").append(boxBig);
       

        if(settings.color == undefined)
        {
            settings.color = "#004d60";
        }
        $("#bigBox"+BigBoxes).css("background-color", settings.color );


        $("#divMiniIcons").append("<div id='miniIcon"+BigBoxes+"' class='cajita animated fadeIn' style='background-color: "+settings.color+";'><img src='"+ settings.img +"'/></div>");


        //Click Mini Icon
         $("#miniIcon"+BigBoxes).bind('click', function() 
         {
            var FrontBox = $(this).attr('id');
            var FrontBigBox = FrontBox.replace("miniIcon","bigBox");
            var FronBigBoxColor = FrontBox.replace("miniIcon","bigBoxColor");

            $(".cajita").each(function( index ) 
            {   
                var BackBox = $(this).attr('id');
                var BigBoxID = BackBox.replace("miniIcon","bigBox");
                
                $("#"+BigBoxID).css("z-index", 9998);
            });

            $("#"+FrontBigBox).css("z-index", 9999);
            $("#"+FronBigBoxColor).removeClass("animated fadeIn").delay(1).queue(function()
            {
                $(this).show();
                $(this).addClass("animated fadeIn");
                $(this).clearQueue();

            });
                
            
         });

         var ThisBigBoxCloseCross = $("#botClose"+BigBoxes);
         var ThisBigBox = $("#bigBox"+BigBoxes);
         var ThisMiniIcon = $("#miniIcon"+BigBoxes);

        // Color Functionality
        var ColorTimeInterval;
        if(settings.colors !=undefined && settings.colors.length>0){
            ThisBigBoxCloseCross.attr("colorcount","0");

            ColorTimeInterval = setInterval(function(){

                var ColorIndex = ThisBigBoxCloseCross.attr("colorcount");

                ThisBigBoxCloseCross.animate({
                    backgroundColor: settings.colors[ColorIndex].color,
                });

                ThisBigBox.animate({
                    backgroundColor: settings.colors[ColorIndex].color,
                });

                ThisMiniIcon.animate({
                    backgroundColor: settings.colors[ColorIndex].color,
                });

                if(ColorIndex < settings.colors.length-1){
                    ThisBigBoxCloseCross.attr("colorcount",((ColorIndex*1)+1));
                }else{
                    ThisBigBoxCloseCross.attr("colorcount",0);
                }

            },settings.colortime);
        }


         //Close Cross
         ThisBigBoxCloseCross.bind('click', function() 
         {
            clearInterval(ColorTimeInterval);
            if (typeof callback == "function") 
            {   
                if(callback) callback();
            }

            var FrontBox = $(this).attr('id');
            var FrontBigBox = FrontBox.replace("botClose","bigBox");
            var miniIcon = FrontBox.replace("botClose","miniIcon");

            $("#"+FrontBigBox).removeClass("fadeIn fast");
            $("#"+FrontBigBox).addClass("fadeOut fast").delay(300).queue(function()
            {
                $(this).clearQueue();
                $(this).remove();
            });

            $("#"+miniIcon).removeClass("fadeIn fast");
            $("#"+miniIcon).addClass("fadeOut fast").delay(300).queue(function()
            {
                $(this).clearQueue();
                $(this).remove();
            });

            
         });

         if(settings.timeout != undefined)
        {
            var TimedID = BigBoxes;
            setTimeout(function() 
            {
                clearInterval(ColorTimeInterval);              
                $("#bigBox"+TimedID).removeClass("fadeIn fast");
                $("#bigBox"+TimedID).addClass("fadeOut fast").delay(300).queue(function()
                {
                    $(this).clearQueue();
                    $(this).remove();
                });

                $("#miniIcon"+TimedID).removeClass("fadeIn fast");
                $("#miniIcon"+TimedID).addClass("fadeOut fast").delay(300).queue(function()
                {
                    $(this).clearQueue();
                    $(this).remove();
                });

            }, settings.timeout); 
        }

    }
})(jQuery);

// .BigBox


// Small Notification
var SmallBoxes = 0;
var SmallCount = 0;
var SmallBoxesAnchos = 0;

(function ($) {
    $.smallBox = function (settings,callback) 
    {
        var BoxSmall, content;
        settings = $.extend({
            title: "",
            content: "",
            img: undefined,
            icon: undefined,
            sound: true,
            color: undefined,
            timeout: undefined,
            colortime: 1500,
            colors:undefined
        }, settings);


        // SmallBox Sound
        if(settings.sound===true)
        {
            if(isIE8orlower() == 0)
            {
                var audioElement = document.createElement('audio');

                if (navigator.userAgent.match('Firefox/'))
                    audioElement.setAttribute('src', 'static/sound/smallbox.ogg');
                else
                    audioElement.setAttribute('src', 'static/sound/smallbox.mp3');
                
                
                $.get();
                audioElement.addEventListener("load", function() {
                audioElement.play();
                }, true);
                audioElement.pause();
                audioElement.play();
            }
        }
         

        SmallBoxes = SmallBoxes + 1;

        BoxSmall = ""

        

        // <div class="SmallBox animated fadeInRight fast">
        //     <div class="foto">
        //         <img src="static/img/pic1.png"> 
        //     </div>

        //     <div class="textoFoto">
        //         <span>Hola Mundo</span>
        //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. lorem</span>
        //     </div>
        //     <div class='miniIcono'>
        //           <img class='miniPic' src='static/img/talk.png'>
        //     </div>
        // </div>
        var IconSection ="";
        var CurrentIDSmallbox = "smallbox"+SmallBoxes;

        if(settings.icon == undefined)
        {
            IconSection = "<div class='miniIcono'></div>";
        }
        else
        {
            IconSection = "<div class='miniIcono'><img class='miniPic' src='"+ settings.icon +"'></div>";
        }

        if(settings.img == undefined)
        {
            BoxSmall = "<div id='smallbox"+ SmallBoxes +"' class='SmallBox animated fadeInRight fast'><div class='textoFull'><span>"+ settings.title +"</span><p>"+ settings.content +"</p></div>"+ IconSection +"</div>";   
        }
        else
        {
            BoxSmall = "<div id='smallbox"+ SmallBoxes +"' class='SmallBox animated fadeInRight fast'><div class='foto'><img src='"+ settings.img +"'></div><div class='textoFoto'><span>"+ settings.title +"</span><p>"+ settings.content +"</p></div>"+ IconSection +"</div>";
        }

        if(SmallBoxes == 1)
        {
            $("#divSmallBoxes").append(BoxSmall);
            SmallBoxesAnchos = $("#smallbox"+SmallBoxes).height() + 40;
        }
        else
        {
            var MetroExist = $(".SmallBox").size();
            if(MetroExist==0)
            {
                $("#divSmallBoxes").append(BoxSmall);
                SmallBoxesAnchos = $("#smallbox"+SmallBoxes).height() + 40;
            }
            else
            {
                $("#divSmallBoxes").append(BoxSmall);
                $("#smallbox"+SmallBoxes).css("top", SmallBoxesAnchos );
                SmallBoxesAnchos = SmallBoxesAnchos + $("#smallbox"+ SmallBoxes).height() + 20;
                
                $(".SmallBox").each(function( index ) 
                {   

                    if(index == 0)
                    {
                        $(this).css("top", 20 );
                        heightPrev = $(this).height() + 40;
                        SmallBoxesAnchos = $(this).height() + 40;
                    }
                    else
                    {
                        $(this).css("top", heightPrev );
                        heightPrev = heightPrev + $(this).height() + 20;
                        SmallBoxesAnchos = SmallBoxesAnchos + $(this).height() + 20;
                    }

                });
                
            } 
        }

        var ThisSmallBox = $("#smallbox"+SmallBoxes);
        

        // IE fix
        // if($.browser.msie)
        // {
        //     // alert($("#"+CurrentIDSmallbox).css("height"));
        // }



        if(settings.color == undefined)
        {
            ThisSmallBox.css("background-color", "#004d60" );
        }
        else
        {
            ThisSmallBox.css("background-color", settings.color );
        }


        var ColorTimeInterval;
        if(settings.colors !=undefined && settings.colors.length>0){
            ThisSmallBox.attr("colorcount","0");

            ColorTimeInterval = setInterval(function(){

                var ColorIndex = ThisSmallBox.attr("colorcount");

                ThisSmallBox.animate({
                    backgroundColor: settings.colors[ColorIndex].color,
                });

                if(ColorIndex < settings.colors.length-1){
                    ThisSmallBox.attr("colorcount",((ColorIndex*1)+1));
                }else{
                    ThisSmallBox.attr("colorcount",0);
                }

            },settings.colortime);
        }


        if(settings.timeout != undefined)
        {

            setTimeout(function() 
            {
                clearInterval(ColorTimeInterval);
                var ThisHeight = $(this).height() + 20;
                var ID = CurrentIDSmallbox;
                var ThisTop = $("#"+CurrentIDSmallbox).css('top');

                // SmallBoxesAnchos = SmallBoxesAnchos - ThisHeight;
                // $("#"+CurrentIDSmallbox).remove();

                if ($("#"+CurrentIDSmallbox+":hover").length != 0) {
                    //Mouse Over the element
                    $("#"+CurrentIDSmallbox).on("mouseleave",function(){
                        SmallBoxesAnchos = SmallBoxesAnchos - ThisHeight;
                        $("#"+CurrentIDSmallbox).remove();
                        if (typeof callback == "function") 
                        {   
                            if(callback) callback();
                        }
                        
                        var Primero = 1;
                        var heightPrev = 0;
                        $(".SmallBox").each(function( index ) 
                        {   

                            if(index == 0)
                            {
                                $(this).animate({
                                    top: 20 
                                },300);

                                heightPrev = $(this).height() + 40;
                                SmallBoxesAnchos = $(this).height() + 40;
                            }
                            else
                            {
                                $(this).animate({
                                    top: heightPrev 
                                },350);

                                heightPrev = heightPrev + $(this).height() + 20;
                                SmallBoxesAnchos = SmallBoxesAnchos + $(this).height() + 20;
                            }

                        });
                    });
                }
                else
                {
                    clearInterval(ColorTimeInterval);
                    SmallBoxesAnchos = SmallBoxesAnchos - ThisHeight;
                    
                    if (typeof callback == "function") 
                    {   
                        if(callback) callback();
                    }

                    $("#"+CurrentIDSmallbox).removeClass().addClass("SmallBox").animate({
                        opacity: 0
                    },300, function(){

                        $(this).remove();
                        
                         var Primero = 1;
                            var heightPrev = 0;
                            $(".SmallBox").each(function( index ) 
                            {   

                                if(index == 0)
                                {
                                    $(this).animate({
                                        top: 20 
                                    },300);

                                    heightPrev = $(this).height() + 40;
                                    SmallBoxesAnchos = $(this).height() + 40;
                                }
                                else
                                {
                                    $(this).animate({
                                        top: heightPrev 
                                    });

                                    heightPrev = heightPrev + $(this).height() + 20;
                                    SmallBoxesAnchos = SmallBoxesAnchos + $(this).height() + 20;
                                }

                            });  
                    })
                }
                


            }, settings.timeout); 
        }
        
        // Click Closing
         $("#smallbox"+SmallBoxes).bind('click', function() 
         {
            clearInterval(ColorTimeInterval);
            if (typeof callback == "function") 
            {   
                if(callback) callback();
            }

            var ThisHeight = $(this).height() + 20;
            var ID = $(this).attr('id');
            var ThisTop = $(this).css('top');

            SmallBoxesAnchos = SmallBoxesAnchos - ThisHeight;
            

            $(this).removeClass().addClass("SmallBox").animate({
                opacity: 0
            },300,function(){
                $(this).remove();

                var Primero = 1;
                var heightPrev = 0;

                $(".SmallBox").each(function( index ) 
                {   

                    if(index == 0)
                    {
                        $(this).animate({
                            top: 20,
                        },300);
                        heightPrev = $(this).height() + 40;
                        SmallBoxesAnchos = $(this).height() + 40;
                    }
                    else
                    {
                        $(this).animate({
                            top:heightPrev 
                        },350);
                        heightPrev = heightPrev + $(this).height() + 20;
                        SmallBoxesAnchos = SmallBoxesAnchos + $(this).height() + 20;
                    }

                });  
            })



            
         });
            
        
    }
})(jQuery);



// .Small Notification

// Closing function for iPad and other tablets
function CloseSide()
{
    $.pageslide.close();
}
// Sounds



/*
 * jQuery pageSlide
 * Version 2.0
 * http://srobbin.com/jquery-pageslide/
 *
 * jQuery Javascript plugin which slides a webpage over to reveal an additional interaction pane.
 *
 * Copyright (c) 2011 Scott Robbin (srobbin.com)
 * Dual licensed under the MIT and GPL licenses.
*/

;(function($){
    // Convenience vars for accessing elements
    var $body, $pageslide;

    $(function(){
        $body = $('body'), $pageslide = $('#pageslide');

        // If the pageslide element doesn't MetroExist, create it
        if( $pageslide.length == 0 ) {
             $pageslide = $('<div />').attr( 'id', 'pageslide' )
                                      .css( 'display', 'none' )
                                      .appendTo( $('body') );
        }

        /* Events */
            
        // Don't let clicks to the pageslide close the window
        $pageslide.click(function(e) {
            e.stopPropagation();
        });
    
        // Close the pageslide if the document is clicked or the users presses the ESC key, unless the pageslide is modal
        $(document).bind('click keyup', function(e) {
            // If this is a keyup event, let's see if it's an ESC key
            if( e.type == "keyup" && e.keyCode != 27) return;
            
            // Make sure it's visible, and we're not modal      
            if( $pageslide.is( ':visible' ) && !$pageslide.data( 'modal' ) ) {          
                $.pageslide.close();
            }
        });
    });
    
    var _sliding = false,   // Mutex to assist closing only once
        _lastCaller;        // Used to keep track of last element to trigger pageslide

    /*
     * Private methods 
     */
    function _load( url, useIframe ) {
        // Are we loading an element from the page or a URL?
        if ( url.indexOf("#") === 0 ) {                
            // Load a page element                
            $(url).clone(true).appendTo( $pageslide.empty() ).show();
        } else {
            // Load a URL. Into an iframe?
            if( useIframe ) {
                var iframe = $("<iframe />").attr({
                                                src: url,
                                                frameborder: 0,
                                                hspace: 0
                                            })
                                            .css({
                                                width: "100%",
                                                height: "100%"
                                            });
                
                $pageslide.html( iframe );
            } else {
                $pageslide.load( url );
            }
            
            $pageslide.data( 'localEl', false );
            
        }
    }
    
    // Function that controls opening of the pageslide
    function _start( direction, speed ) {
        var slideWidth = $pageslide.outerWidth( true ),
            bodyAnimateIn = {},
            slideAnimateIn = {};
        
        // If the slide is open or opening, just ignore the call
        if( $pageslide.is(':visible') || _sliding ) return;         
        _sliding = true;
                                                                    
        switch( direction ) {
            case 'left':
                $pageslide.css({ left: 'auto', right: '-' + slideWidth + 'px' });
                bodyAnimateIn['margin-left'] = '-=' + slideWidth;
                slideAnimateIn['right'] = '+=' + slideWidth;
                break;
            default:
                $pageslide.css({ left: '-' + slideWidth + 'px', right: 'auto' });
                bodyAnimateIn['margin-left'] = '+=' + slideWidth;
                slideAnimateIn['left'] = '+=' + slideWidth;
                break;
        }
                    
        // Animate the slide, and attach this slide's settings to the element
        $body.animate(bodyAnimateIn, speed);
        $pageslide.show()
                  .animate(slideAnimateIn, speed, function() {
                      _sliding = false;
                  });
    }
      
    /*
     * Declaration 
     */
    $.fn.pageslide = function(options) {
        var $elements = this;
        
        // On click
        $elements.click( function(e) {
            var $self = $(this),
                settings = $.extend({ href: $self.attr('href') }, options);
            
            // Prevent the default behavior and stop propagation
            e.preventDefault();
            e.stopPropagation();
            
            if ( $pageslide.is(':visible') && $self[0] == _lastCaller ) {
                // If we clicked the same element twice, toggle closed
                $.pageslide.close();
            } else {                 
                // Open
                $.pageslide( settings );

                // Record the last element to trigger pageslide
                _lastCaller = $self[0];
            }       
        });                   
    };

    /*
     * Default settings 
     */
    $.fn.pageslide.defaults = {
        speed:      200,        // Accepts standard jQuery effects speeds (i.e. fast, normal or milliseconds)
        direction:  'right',    // Accepts 'left' or 'right'
        modal:      false,      // If set to true, you must explicitly close pageslide using $.pageslide.close();
        iframe:     true,       // By default, linked pages are loaded into an iframe. Set this to false if you don't want an iframe.
        href:       null        // Override the source of the content. Optional in most cases, but required when opening pageslide programmatically.
    };

    /*
     * Public methods 
     */

    // Open the pageslide
    $.pageslide = function( options ) {     
        // Extend the settings with those the user has provided
        var settings = $.extend({}, $.fn.pageslide.defaults, options);

        // Are we trying to open in different direction?
        if( $pageslide.is(':visible') && $pageslide.data( 'direction' ) != settings.direction) {
            $.pageslide.close(function(){
                _load( settings.href, settings.iframe );
                _start( settings.direction, settings.speed );
            });
        } else {                
            _load( settings.href, settings.iframe );
            if( $pageslide.is(':hidden') ) {
                _start( settings.direction, settings.speed );
            }
        }
        
        $pageslide.data( settings );
    }

    // Close the pageslide
    $.pageslide.close = function( callback ) {
        var $pageslide = $('#pageslide'),
            slideWidth = $pageslide.outerWidth( true ),
            speed = $pageslide.data( 'speed' ),
            bodyAnimateIn = {},
            slideAnimateIn = {}
                        
        // If the slide isn't open, just ignore the call
        if( $pageslide.is(':hidden') || _sliding ) return;          
        _sliding = true;
        
        switch( $pageslide.data( 'direction' ) ) {
            case 'left':
                bodyAnimateIn['margin-left'] = '+=' + slideWidth;
                slideAnimateIn['right'] = '-=' + slideWidth;
                break;
            default:
                bodyAnimateIn['margin-left'] = '-=' + slideWidth;
                slideAnimateIn['left'] = '-=' + slideWidth;
                break;
        }
        
        $pageslide.animate(slideAnimateIn, speed);
        $body.animate(bodyAnimateIn, speed, function() {
            $pageslide.hide();
            _sliding = false;
            if( typeof callback != 'undefined' ) callback();
        });
    }
})(jQuery);


function getInternetExplorerVersion() {
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}
function checkVersion() {
    var msg = "You're not using Windows Internet Explorer.";
    var ver = getInternetExplorerVersion();
    if (ver > -1) {
        if (ver >= 8.0)
            msg = "You're using a recent copy of Windows Internet Explorer."
        else
            msg = "You should upgrade your copy of Windows Internet Explorer.";
    }
    alert(msg);
}

function isIE8orlower() {
    var msg = "0";
    var ver = getInternetExplorerVersion();
    if (ver > -1) {
        if (ver >= 9.0)
            msg = 0
        else
            msg = 1;
    }
    return msg;
    // alert(msg);
}
}
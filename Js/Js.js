// mouse control circle
const mousevalue = document.querySelector('body');
mousevalue.addEventListener('mousemove',(e)=>{
    document.querySelector('.mouse-box').setAttribute('style',`visibility:visible;left:${e.clientX}px;top:${e.clientY+20}px;`);
});
// Home Image background
const homeimg = document.querySelector('.home-image');
let intervalmin=0;
let interval=0;
window.setInterval(()=>{
    interval = intervalmin+interval;
    homeimg.setAttribute("style",`background-image: conic-gradient(from ${interval}deg,#262B40 0%,#262B40 10%,#59B2F4 20%,#59B2F4 40%,#d1cd5d 60%,#d1cd5d 80%,#262B40 90%)`);
    interval++;
},10);


// Home Animating Text
const ultag = document.querySelector('ul');
let String = "";
let String1 = "Full-Stack Developer.";
let String2 = "Responsive Designer.";
let String3 = "Programmer/Cooder.";
let String4 = "Frontend Developer.";
const datavalue = [String1,String2,String3,String4];
let b =0;
let string1 = "";
window.setInterval(()=>{

    String = datavalue[b];
    if(b==0){
        b=1;
    }
    else if(b==1){
        b=2;
    }
    else if(b==2){
        b=3;
    }
    else{
        b=0;
    }

    let i =1;
    const timevalue = setInterval(()=>{
        if(String.length >= i){
            string1 = String.slice(0,i);
            const span1 = document.querySelectorAll('span');
            span1.forEach(element => {
                element.remove();
            }); 
            Array.from(string1).forEach(e =>{
                let tag = document.createElement("span");
                let value = document.createTextNode(e);
                tag.appendChild(value);
                ultag.appendChild(tag);
            });
            let tag1 = document.createElement("span");
            tag1.setAttribute("style","border-right:4px solid #59B2F4;border-radius:10px;")
            ultag.appendChild(tag1);

        }
        else{
            clearInterval(timevalue);
            setTimeout(()=>{setInterval(timevalue1,100)},800);
            
        }
        
        i++;
    },100);

    let j=String.length;
    let k=0;
    const timevalue1 = function myfuncs(){
        if(k <= j){
            string1 = String.slice(0,j);
            const span2 = document.querySelectorAll('span');
            span2.forEach(element => {
                element.remove();
            }); 
            Array.from(string1).forEach(e =>{
                let tag = document.createElement("span");
                let value = document.createTextNode(e);
                tag.appendChild(value);
                ultag.appendChild(tag);
            });
            let tag1 = document.createElement("span");
            tag1.setAttribute("style","border-right:4px solid #59B2F4;border-radius:10px;")
            ultag.appendChild(tag1);

        }
        else{
            clearInterval(timevalue1);
            
        }
        
        j--;
    };
},5500);


// Navbar toggle
const icon = document.getElementById('menu-icon');
const navbar = document.querySelector('.nav-toggle');
icon.addEventListener('click',()=>{
    navbar.classList.toggle('toggle-action-button');
});
const anchortagcolor = ()=>{
    anchortag.forEach(f=>{
        f.setAttribute("class","");
    });
}

// Navbar control
const anchortag = document.querySelectorAll('.navbar a');
Array.from(anchortag).forEach(e=>{
    
    e.addEventListener('click',()=>{
       anchortagcolor(); 
        e.classList.add('active');
        navbar.classList.toggle('toggle-action-button');
    })
    
})
const screenup = document.querySelector('.scroll-up');
window.addEventListener('scroll',()=>{
    if(window.scrollY>200){
        screenup.setAttribute('style','visibility: visible;');
        screenup.classList.remove('scrollup-animate');
        screenup.addEventListener('click',()=>{
       
            
            window.scrollTo(0,0);
            anchortagcolor();
            anchortag[0].classList.add('active');
            anchortag[5].classList.add('active');
        })
    }
    else{
        screenup.classList.add('scrollup-animate');
        screenup.setAttribute('style','visibility: collapse ;');
        
    }
})


// About section
const aboutbtn = document.getElementById('about-more');
let about = 0; 
let aboutid = 0;
const aboutsection = document.querySelectorAll('.about-paragraph');
aboutsection.forEach(a=>{
    a.setAttribute('id',about); //After any other usage to target specific section
    a.style.display = "none";
    aboutid=about++;
});
aboutsection[0].setAttribute('style','display:block');
let aboutiddisplay = 1;
aboutbtn.addEventListener('click',()=>{
    if(aboutid>=aboutiddisplay){
        for(let t=0;t<=aboutid;t++){
            aboutsection[t].setAttribute('style','display:none');    
        }
        aboutsection[aboutiddisplay].setAttribute('style','display:block');
        aboutiddisplay=aboutiddisplay+1;
        if(aboutid+1==aboutiddisplay){
            aboutiddisplay=0;
        }
        
    }
})

// Experience Section
const expskill = document.querySelectorAll('.skilltre');
window.addEventListener('scroll',()=>{
    if(window.innerWidth>776){
        if(window.scrollY>1250 && window.scrollY<1900){
            setTimeout(()=>{
                expskill.forEach(s=>{
                    s.setAttribute("style","animation:progress 0.5s ease 0s;");
                    });
            },300);
            
        }
        else{
            expskill.forEach(s=>{
                s.setAttribute("style","background:none;animation:none;");
                });
        }
    }
})

// Certificate image zoom-in
const certificatezoom = document.querySelector('.skills .skill-image');
certificatezoom.addEventListener('click',()=>{
    document.querySelector('.experiance-section-certificate').setAttribute('style','transform:translateY(0px);visibility:visible;')
})
// Certificate image zoom-out
const certificate = document.querySelector('.experiance-section-certificate .exp-img i');
certificate.addEventListener('click',()=>{
    document.querySelector('.experiance-section-certificate').setAttribute('style','transform:translateY(-1000px);visibility:collapse;transition: all 2s ease 0s;')
})


// Project Section
const projectmover = document.querySelectorAll('.boxes');
projectmover.forEach(element=>{
    element.addEventListener('mouseenter',()=>{
        const targetsection = element.querySelector('.boxes-content');
        targetsection.setAttribute('style','transform: translateX(0px);')
    })
    element.addEventListener('mouseleave',()=>{
        const targetsection = element.querySelector('.boxes-content');
        targetsection.setAttribute('style','transform: translateX(-400px);')
    })
})


// Form data collect
const form = document.querySelector('form');

let data = 0;

const warningalert = ()=>{
    const forminpput = document.querySelectorAll('form .form-first input,form .form-first textarea');
    const formdata = [];
    forminpput.forEach(event=>{
        formdata.push(event.value);
        event.addEventListener('click',()=>{
            // warningalert();
            event.setAttribute('style','border:unset;')
        })  
    })    

    for(let formi = 0; formi<formdata.length; formi++){

        if(formdata[formi] == ''){

            forminpput[formi].setAttribute('style','border:1px solid #fff;');
            data =1;
        }
        else{

            forminpput[formi].setAttribute('style','border:unset;');
            data =0;
            if(formdata[2].length !=10){
                data =1;
                forminpput[2].setAttribute('style','border:1px solid #fff;');
            }
            
            
        }
    }    

    if(data == 0)
    {
        const wait = document.querySelector('.form-forth input');
        wait.setAttribute('disabled','');
        document.querySelector('.spinner').setAttribute('style','display:block;');
     
            $.ajax({
            url: "Database/data.php",
            type: 'Post',
            data:$('form').serialize(),
            success:function(data)
            {
                
                if(data =='1')
                {
                    setTimeout(()=>{
                        wait.removeAttribute('disabled');
                        document.querySelector('.spinner').setAttribute('style','display:none;');
                        document.querySelector('.formsubmit-result').setAttribute('style','visibility: visible;');
                        let backgroundvalue = 0;
                        let pop = setInterval(()=>{
                            document.querySelector('.formsubmit-result .formbox1').setAttribute('style',`background-size:${backgroundvalue}%;`);
                            backgroundvalue++;
                            // console.log(backgroundvalue);
                            if(backgroundvalue==100){
                                document.querySelector('.formsubmit-result').setAttribute('style','visibility: collapse;');
                                clearInterval(pop);
                            }
                        },30);
                    },1000);
                    
                }
            },
            error:function(data)
            {
                console.log(data);
            }
            
        });



    }
}


form.addEventListener('submit',(formevent)=>{
    formevent.preventDefault();
    warningalert();
})


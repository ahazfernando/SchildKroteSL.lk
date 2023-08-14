const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");
const sladult = document.getElementById("sladult");
const slchild = document.getElementById("slchild");
const fadult = document.getElementById("fadult");
const fchild = document.getElementById("fchild");
const infant = document.getElementById("infant");
const ai = document.querySelector(".a");
const ab = document.querySelector(".ab");
const abc = document.querySelector(".abc");
const abcd = document.querySelector(".abcd");
const abcde = document.querySelector(".abcde");
const pricez = document.getElementById("totalbook");

    let a = 1;
    let b = 1;
    let c = 1;
    let d = 1;
    let e = 1;

    let f = 6;
    let g = 3;
    let h = 13;
    let i = 8;





    plus.addEventListener("click",()=>
    {
        a++;
        f +=6;
        num.innerText = a;
        sladult.innerText = a;
        ai.innerText = "$"+f;
        console.log("a");
        calculateTotalPrice();
    });
    minus.addEventListener("click",()=>
    {
       if(a>1)
       {
        a--;
        f -=6;
        a = (a < 10)? "0" + a : a;
        num.innerText = a;
        sladult.innerText = a;
        ai.innerText = "$"+f;
        console.log("a");
        calculateTotalPrice();
       }
    });

const plusb=document.querySelector(".plusb");
const minusb=document.querySelector(".minusb");
const numb=document.querySelector(".numb");

    plusb.addEventListener("click",()=>
    {
        b++;
        g += 3;
        numb.innerText = b;
        slchild.innerText = b;
        ab.innerText = "$"+g;
        console.log("b");
        calculateTotalPrice();
    });
    minusb.addEventListener("click",()=>
    {
       if(b>1)
       {
        b--;
        g -= 3;
        b = (b < 10)? "0" + b : b;
        numb.innerText = b;
        slchild.innerText = b;
        ab.innerText = "$"+g;
        console.log("b");
        calculateTotalPrice();
       }
    });

    const plusc=document.querySelector(".plusc");
const minusc=document.querySelector(".minusc");
const numc=document.querySelector(".numc");
    plusc.addEventListener("click",()=>
    {
        c++;
        h += 13;
        numc.innerText = c;
        fadult.innerText = c;
        abc.innerText = "$"+h;
        console.log("c");
        calculateTotalPrice();
    });
    minusc.addEventListener("click",()=>
    {
       if(c>1)
       {
        c--;
        h -= 13;
        c = (c < 10)? "0" + c : c;
        numc.innerText = c;
        fadult.innerText = c;
        abc.innerText = "$"+h;
        console.log("c");
        calculateTotalPrice();
       }
    });
    const plusd=document.querySelector(".plusd");
    const minusd=document.querySelector(".minusd");
    const numd=document.querySelector(".numd");
    plusd.addEventListener("click",()=>
    {
        d++;
        i += 8;
        numd.innerText = d;
        fchild.innerText = d;
        abcd.innerText = "$"+i;
        console.log("d");
        calculateTotalPrice();
    });
    minusd.addEventListener("click",()=>
    {
       if(d>1)
       {
        d--;
        i -=8;
        d = (d < 10)? "0" + d : d;
        numd.innerText = d;
        fchild.innerText = d;
        abcd.innerText = "$"+i;
        console.log("d");
        calculateTotalPrice();
       }
    });
    const pluse=document.querySelector(".pluse");
    const minuse=document.querySelector(".minuse");
    const nume=document.querySelector(".nume");
    pluse.addEventListener("click",()=>
    {
        e++;
        
        nume.innerText = e;
        infant.innerText = e;
        console.log("e");
    });
    minuse.addEventListener("click",()=>
    {
       if(e>1)
       {
        e--;
        e = (e < 10)? "0" + e : e;
        nume.innerText = e;
        sladult.innerText = e;
        console.log("e");
       }
    });


    function calculateTotalPrice() {
      const aValue= parseFloat(ai.textContent.substring(1)); // Remove "$" and convert to number
      const abValue = parseFloat(ab.textContent.substring(1));
      const abcValue = parseFloat(abc.textContent.substring(1));
      const abcdValue = parseFloat(abcd.textContent.substring(1));
      
      const total = aValue + abValue + abcValue + abcdValue;
      pricez.textContent = "$" + total.toFixed(2); // Update total ticket price label
    }
    
    calculateTotalPrice();


    document.addEventListener("DOMContentLoaded", function() {
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
        const monthYear = document.getElementById("monthYear");
        const datesContainer = document.querySelector(".dates");
        
        let currentDate = new Date();
        
        function renderCalendar() {
          const year = currentDate.getFullYear();
          const month = currentDate.getMonth();
          const firstDay = new Date(year, month, 1).getDay();
          const lastDate = new Date(year, month + 1, 0).getDate();
          
          monthYear.textContent = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(currentDate);
          
          datesContainer.innerHTML = "";
          
          for (let i = 0; i < firstDay; i++) {
            const emptyDate = document.createElement("div");
            datesContainer.appendChild(emptyDate);
          }
          
          for (let i = 1; i <= lastDate; i++) {
            const date = document.createElement("div");
            date.textContent = i;
            date.addEventListener("click", selectDate);
            
            if (currentDate.getDate() === i) {
              date.classList.add("selected");
            }
            
            datesContainer.appendChild(date);
          }
        }
        
        function selectDate(event) {
          const selectedDate = event.target;

          const selectedDates = document.querySelectorAll(".selected");
          const datebooking = document.getElementById("datebooking");
          datebooking.innerHTML=selectedDate  
          selectedDates.forEach(date => {
          
            date.classList.remove("selected");
          });
          
          selectedDate.classList.add("selected");
        }
        
        prevBtn.addEventListener("click", function() {
          currentDate.setMonth(currentDate.getMonth() - 1);
          renderCalendar();
        });
        
        nextBtn.addEventListener("click", function() {
          currentDate.setMonth(currentDate.getMonth() + 1);
          renderCalendar();
        });
        
        renderCalendar();
      });

       
      function selectDate(event) {
        const selectedDate = event.target;
      
        const selectedDates = document.querySelectorAll(".selected");
        const datebooking = document.getElementById("datebooking");
        datebooking.textContent = selectedDate.textContent;
      
        selectedDates.forEach(date => {
          date.classList.remove("selected");
        });
      
        selectedDate.classList.add("selected");
      }
      
      // Add event listener to the datesContainer
      datesContainer.addEventListener("click", function(event) {
        if (event.target.tagName === "DIV") {
          selectDate(event);
        }
      });

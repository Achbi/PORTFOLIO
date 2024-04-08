import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import PointsList from "./list";
import CoreList from "./exprience";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            $ whoami
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          Hello! My name is Harshit Bahety.
          I grew up in Kolkata and currently am studying at IIIT BHAGALPUR ,ECE branch. I love programming and can be found near my laptop on any given day, learning something new in one of the 100s of tabs open on my browser.

          I like programming, learning new stuff, playing badminton and table tennis, reading books and playing FPS   games like Halo and Call of Duty and ofcourse Chess.

          I am an introvert. Believe me, writing this section took more time than coding up rest of the website. I hope to overcome this problem soon.
          </p>
          <p className=" text-xs md:text-lg text-left w-full capitalize">
            <li>CLASS 10 - 95%</li>
            <li>CLASS 12 - 90%</li>
            <li>CGPA - 8.8</li>
            <li>3 STAR - CODECHEF</li>
            <li>PUPIL - CODEFORCES</li>

          
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
          IIIT BHAGALPUR<sub className="font-semibold text-base"> 2022-2026</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            APEEJAY SCHOOL SALTLAKE{" "}
            <sub className="font-semibold text-base">2008 - 2022</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
                <b>$ tree -L 1 ~/skills/ </b>

        
        </ItemLayout>


        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
        <b>$ more ~/experience</b>

   
        </ItemLayout>



        <ItemLayout
          className={
            

          

            "col-span-full sm:col-span-6 md:col-span-4 !p-0"



          }
        >
    
    <div className="font-light  text-xs sm:text-sm md:text-base   " >
  <li>Python</li>
  <li>c</li>
  <li>c++</li>
  <li>javascript</li>
  <li>Machine learning</li>
  <li>Node-Js</li>
  <li>React-Js</li>
  <li>MongoDB</li>
  <li>Postgres SQL</li>
  <li>Docker</li>
  <li>MySql</li>
  <li>Full Stack Development(MERN)</li>
  <li>Flask</li>
  <li>Django</li>
  {/* Add more points as needed */}
</div>

</ItemLayout>
<ItemLayout className="col-span-full md:col-span-8 !p-0">
<div className="font-light  text-xs sm:text-sm md:text-base   " > 
        <li>CORE MEMBER OF TECHNICAL BOARD OF IIIT BHAGALPUR</li>
        <li>BACKEND TEAM MEMBER OF IIIT BHAGALPUR GYMKHANA WEBSITE</li>
        <li>CORE LEAD MEMEBR OF DEV C ,OFFICIAL WEB DEVELOPMENT CLUB OF IIIT BHAGALPUR</li>
        <li>ENYUGMA TECHINCAL GROUP</li> 
        <li>MEMBER OF EBSB CLUB IIIT BHAGALPUR</li>
        <li>STUDENT MENTOR IIIT BHAGALPUR</li>
        </div>
       </ItemLayout>



      
   
          

       

    
      </div>
    </section>
  );
};

export default AboutDetails;

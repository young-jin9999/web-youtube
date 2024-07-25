import { BsYoutube } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { MdDeveloperBoard } from "react-icons/md";
import { SiWebtrees } from "react-icons/si";
import { BiMoviePlay } from "react-icons/bi";
import { IoIosPaper } from "react-icons/io";
import { CiYoutube } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export const headerMenu =[
{
    title:"MY Youtube",
    icon:<BsYoutube></BsYoutube>,
    src:"/"
},
{
    title:"추천 영상",
    icon:<FaListUl></FaListUl>,
    src:"/today"
},
{
    title:"추천 개발자",
    icon:<MdDeveloperBoard></MdDeveloperBoard>,
    src:"/developer"
},
{
    title:"웹디자인",
    icon:<SiWebtrees></SiWebtrees>,
    src:"/webd"
},
{
    title:"GSAP",
    icon:<BiMoviePlay></BiMoviePlay>,
    src:"/gsap"
},
{
    title:"포트폴리오 사이트",
    icon:<IoIosPaper></IoIosPaper>,
    src:"/port"
},
{
    title:"유튜브 사이트",
    icon:<CiYoutube></CiYoutube>,
    src:"/youtube"
}

];

export const searchkeyword=[
    {
        title:"MY Youtube",
        src:"/search/myyoutube"
    },
    {
        title:"HTML",
        src:"/search/html"
    },
    {
        title:"CSS",
        src:"/search/css"
    },
    {
        title:"JavaScript",
        src:"/search/javascript"
    },
    {
        title:"React.js",
        src:"/search/react.js"
    },
    {
        title:"JAVA",
        src:"/search/java"
    },
    {
        title:"Oracle",
        src:"/search/oracle"
    },
    {
        title:"Spring",
        src:"/search/spring"
    },
    {
        title:"Music",
        src:"/search/music"
    },
    { 
        title:"Vue.js",
        src:"/search/vue.js"
    },
];

export const snsLink=[
    {
        title:"github",
        url:"https://github.com/young-jin9999/web-youtube",
        icon:<AiFillGithub></AiFillGithub>
    },
    {
        title:"youtube",
        url:"https://www.youtube.com",
        icon:<AiFillYoutube></AiFillYoutube>
    },
    {
        title:"google",
        url:"https://www.google.com",
        icon:<AiFillGoogleCircle></AiFillGoogleCircle>
    },
    {
        title:"instagram",
        url:"https://www.instagram.com",
        icon:<AiFillInstagram></AiFillInstagram>
    },
]
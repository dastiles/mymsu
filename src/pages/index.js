
import { AiFillAlert, AiOutlineBook, AiOutlineCalendar, AiOutlineCloud, AiOutlineHome, AiOutlineRead, AiOutlineSafetyCertificate, AiOutlineTrademark } from 'react-icons/ai'
import { FaMoneyBillAlt, FaMoneyCheck, } from 'react-icons/fa'

import SubmitReceipts from "../../components/SubmitReceipts"
import ProgramContainer from "../../components/ProgramContainer"
import MobileNavBar from "../../components/MobileNavBar"
import SideBar from "../../components/SideBar"
import Financials from "../../components/Financials"

const Home = () => {


  return (
    <div className="h-[100vh]  lg:flex ">
      <SideBar />
      <div>
        <main className="lg:w-[80vw] w-[100vw]  relative">
          <MobileNavBar />
          <div className="lg:w-[70vw] w-[90vw] mx-auto py-5 -z-10">
            <h1 className="text-2xl font-bold tracking-wide">Dashboard</h1>

            {/* residence banner  */}
            <div className="bg-red-700 rounded text-sm text-white px-5 py-2 mt-2">
              <p className="font-semibold flex gap-2 items-center"> <AiFillAlert />On campus residence is now full.</p>
            </div>

            {/* submit receipts banner */}
            <SubmitReceipts />
            {/* youtube container */}
            <div className="bg-white shadow-md mt-2 px-5 py-2 rounded-sm -z-1000">
              <p className="font-bold text-sm lg:text-md mb-2">MIDLANDS STATE UNIVERITY GRADUATION 2022</p>
              <div className="w-full">
                <video src="./assets/demo.mp4" controls={true} className="w-full lg:w-[50%] -z-1000"></video>
              </div>
            </div>
            {/* work related learning */}
            <div className="bg-white shadow-md border-blue-600 border-solid border-l-[4px] pl-5 my-10 py-4 rounded mx-5 font-bold text-sm">
              <p className="">Manage your Related Learning Details <span className="bg-blue-600 text-white px-2 py-1 rounded-lg "> Click Here</span></p>
            </div>
            {/* Programm container */}
            <ProgramContainer />
            {/* registration content */}
            <div className="my-10  grid grid-cols-1 lg:grid-cols-3 gap-5">
              {/* registration */}
              <div className="bg-[#4CAF50]  shadow-md rounded-md h-[40vh]">
                <p className="font-bold text-sm text-white text-center py-2 flex items-center justify-center gap-2"><AiOutlineTrademark /> Registration Status</p>
                <div className="border-white border-solid border-t-[1px] border-b-[1px] text-center text-white text-3xl pt-[5vh] pb-[15vh]">
                  <p>Registered</p>

                </div>
                <div className="text-center text-white font-bold text-[12px] flex justify-evenly py-4">
                  <p>Registration Record</p>
                  <p>Fees Structure</p>
                </div>
              </div>
              {/* fees */}
              <div className="bg-white  shadow-md rounded-md h-[40vh]">
                <p className="font-bold text-sm text-black text-center py-2 flex items-center justify-center gap-2"> <FaMoneyBillAlt />Fees</p>
                <div className="border-gray-200 border-solid border-t-[1px] border-b-[1px] text-center text-black text-3xl pt-[5vh] pb-[9vh]">
                  <p className="flex items-center justify-center gap-5">-$290,000.00 <span className="text-white bg-blue-600 text-[12px] h-[20px] text-center flex items-center justify-center font-bold px-1 rounded">RTGS</span></p>
                  <p className="flex items-center justify-center gap-5">-$0.00 <span className="text-white bg-blue-600 text-[12px] h-[20px] text-center flex items-center justify-center font-bold px-1 rounded">USD</span></p>
                </div>
                <div className="text-center text-black font-bold text-[12px] flex justify-evenly py-4">
                  <p>ZWL Statement</p>
                  <p>USD Statement</p>
                  <p>Pay Fees</p>
                </div>
              </div>
              {/* gold card */}
              <div className="bg-white  shadow-md rounded-md h-[40vh]">
                <p className="font-bold text-sm text-black text-center py-2 flex items-center justify-center gap-2"> <FaMoneyCheck />Gold Card</p>
                <div className="border-gray-200 border-solid border-t-[1px] border-b-[1px] text-center text-black text-3xl pt-[5vh] pb-[15vh]">
                  <p className="">$290,000.00 </p>

                </div>
                <div className="text-center text-black font-bold text-[12px] flex justify-evenly py-4">
                  <p>Statement</p>
                  <p>Transfer From Fees</p>

                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {/* financials */}
              <Financials />
              {/* Academics */}
              <div className="bg-white shadow-md  rounded-md pb-8 px-5 ">
                <p className="font-bold text-sm text-black pb-8 pt-2 items-center flex gap-2"> <AiOutlineBook /> Academics</p>

                <div>

                  <p className="border-gray-200 border-solid border-[1px] py-3 px-2 items-center  text-sm items-center flex gap-2 hover:bg-[#EFEFF6] cursor-pointer"><AiOutlineRead />Continuous Assessment</p>
                  <p className="border-gray-200 border-solid border-[1px] py-3 px-2 items-center  text-sm  items-center flex gap-2 hover:bg-[#EFEFF6] cursor-pointer"><AiOutlineCalendar />Exam Timetable</p>
                  <p className="border-gray-200 border-solid border-[1px] py-3 px-2 items-center  text-sm  items-center flex gap-2 hover:bg-[#EFEFF6] cursor-pointer"><AiOutlineCalendar />Teaching Timetable</p>
                  <p className="border-gray-200 border-solid border-[1px] py-3 px-2 items-center  text-sm  items-center flex gap-2 hover:bg-[#EFEFF6] cursor-pointer"><AiOutlineCloud />Online Classes</p>
                  <p className="border-gray-200 border-solid border-[1px] py-3 px-2 items-center  text-sm items-center flex gap-2 hover:bg-[#EFEFF6] cursor-pointer"><AiOutlineBook />Library</p>
                </div>

              </div>
              {/* accommodation */}
              <div className="bg-white  shadow-md rounded-md pb-5">
                <p className="font-bold text-sm text-black px-5 py-2 flex items-center gap-2"> <AiOutlineHome /> Accomodation</p>
                <div className="border-gray-200 border-solid border-t-[1px] border-b-[1px] text-center text-black text-3xl h-[10vh]">


                </div>

              </div>
              {/* medical aid */}
              <div className="bg-white  shadow-md rounded-md pb-5 my-10">
                <p className="font-bold text-sm text-black px-5 py-2 flex items-center gap-2"> <AiOutlineSafetyCertificate /> Medical Aid</p>
                <div className="border-gray-200 border-solid border-t-[1px] border-b-[1px] text-black py-5 px-5 h-[10vh]">

                  <p className="text-red-600 font-bold">You are not yet covered</p>
                </div>

              </div>
            </div>
          </div>
        </main>
        <footer className="bg-white py-2 px-5 ">
          <ul className="flex justify-around items-center font-bold text-sm py-2">
            <li>Credits</li>
            <li>Security Settings</li>
            <li>Logout</li>
          </ul>
          <p className="text-center">Cloned by <span className="font-bold">Charles Madhuku (Stiles)</span></p>
        </footer>
      </div>
    </div>
  )
}

export default Home
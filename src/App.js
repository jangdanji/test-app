import { useEffect, useState } from 'react';
import './App.css';

import { FaUser } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";

import fetchData from './commons/axios'

import { BENEFIT_REMITTANCE_URL } from './constant/index'

function App() {

  const [myData, setMyData] = useState([])

  const api = async() => {
    const response = await fetchData(BENEFIT_REMITTANCE_URL);
    if (response.data.code === 200) setMyData(response.data.data.list);
  }

  useEffect(() => {
    api()
  }, [])
  
  return (
    <div className="App">

      <header className="header">
          <ul className='menu-list'>
            <li>로그인</li>
            <li>회원가입</li>
            <li>급여 지급 내역</li>
            <li>헤헤</li>
          </ul>

          <div className='view-more-btn'>
            <MdOutlineSearch />
            <MdOutlineMenu />
          </div>
      </header>

      <div className='app-container'>

        <div className='user-container'>
          <h2 className='user-menu-title'>급여 지급 내역</h2>
         {
            myData.map((v, index) => {
              return(
                <>
                  <div className='user-data'>
                    <div className='user-icon'>
                      <FaUser />
                    </div>
                    
                    <ul className='payment-detail-01'>
                      <li className='user-name'>{v.userName} ({v.payingBankName} {v.accountNo})</li>
                      <li>{v.paymentDate}</li>
                    </ul>

                    <ul className='payment-detail-02'>
                      <li>소득세 : {v.incomeTax}</li>
                      <li>지방 소득세 : {v.localIncomeTax}</li>
                      <li>세후 : {v.actualPayout}</li>
                    </ul>

                  </div>
                </>
              )
            })
          }
        </div>
      </div>

    </div>
  );
}

export default App;

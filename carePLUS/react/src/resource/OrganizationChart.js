import '../css/OrganizationChart.css';
import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const OrganizationChart = () => {
    const navigate = useNavigate();
    useEffect(() => {
        // 로그인 여부를 확인하고, 로그인되지 않은 경우에는 알림을 표시하고 로그인 페이지로 리다이
        console.log("access:"+sessionStorage.getItem('accessToken'));
        if (!sessionStorage.getItem('accessToken')) {
            alert('로그인이 필요합니다.');
            navigate('/login');
        }
    }, []);
    return (<>
        <div className="background">
            <div id="Lbox">
                <br/>
                <div className="boxHeader">
                <h3 id="sboxHeader" style={{marginLeft:"30px",fontSize:"20px"}}>
                    <img id="boxIcons" src="./img/organ.png"/>&nbsp;&nbsp;조직도</h3>
                </div>

                <div className="organ" style={{marginTop:"70px"}}>
                    <div className="jang">
                        <p id="jang">이사장</p>
                    </div>
                   <div id="line1"></div>
                    <div className="jang">
                        <p id="jang">병원장</p>
                    </div>
                    <div id="line1"></div>
                    <div id="line2"></div>
                    <div className="liner">
                    <div id="line4"></div>
                    <div id="line3"></div>
                    <div id="line3"></div>
                    <div id="line3"></div>
                    </div>
                    <div className="department">
                        <div className="dept">
                    <p id="dep">진료부</p>
                        </div>
                        <div className="dept">
                    <p id="dep">간호부</p>
                        </div>
                        <div className="dept">
                    <p id="dep">진료부</p>
                        </div>
                        <div className="dept">
                    <p id="dep">행정부</p>
                        </div>
                    </div>
                    <div className="liner">
                    <div id="line4"></div>
                    <div id="line3"></div>
                    <div id="line3"></div>
                    <div id="line3"></div>
                    </div>
                    <div className="wow">
                    <div className="doctor">
                        <div className="depts">
                            <p id="dep">산부인과</p>
                        </div>
                        <div className="depts">
                            <p id="dep">정형외과</p>
                        </div>
                        <div className="depts">
                            <p id="dep">신경외과</p>
                        </div>
                        <div className="depts">
                            <p id="dep">흉부외과</p>
                        </div>
                        <div className="depts">
                            <p id="dep">신경과</p>
                        </div>
                    </div>

                    <div className="nurse">
                        <div className="depts">
                            <p id="dep">병동과</p>
                        </div>
                        <div className="depts">
                            <p id="dep">진료과</p>
                        </div>
                    </div>
                    
                    <div className="technician">
                        <div className="depts">
                            <p id="dep">CT</p>
                        </div>
                        <div className="depts">
                            <p id="dep">MRI</p>
                        </div>
                        <div className="depts">
                            <p id="dep">X-ray</p>
                        </div>
                    </div>

                    <div className="task">
                        <div className="depts">
                            <p id="dep">원무팀</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default OrganizationChart;
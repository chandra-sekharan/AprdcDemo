import React from "react";
import photo from './images/logo.png'

const Teaching =()=>{

    const Faculty = [
        [
            {
                "id": "1",
                "Name of the Employee": "Y.N.S.CHAUDHARY",
                "Qualification": "M.A., UGC NET",
                "Subject": "Political Science",
                "Phone No": "7382033300",
                "Photo" : photo,
            },
            {
                "id": "2",
                "Name of the Employee": "Dr.S.L.D.SARMA",
                "Qualification": "M.A.,Ph.D.,",
                "Subject": "Sanskrit",
                "Phone No": "9441002806",
                "Photo" : photo,
            },
            {
                "id": "3",
                "Name of the Employee": "P.RAVINDRANATH",
                "Qualification": "M.A.,SET",
                "Subject": "Economics",
                "Phone No": "9490050228",
                "Photo" : photo,
            },
            {
                "id": "4",
                "Name of the Employee": "Dr.M.SURESH BABU",
                "Qualification": "M.Sc.,Ph.D.",
                "Subject": "Physics",
                "Phone No": "9849029976",
                "Photo" : photo,
            },
            {
                "id": "5",
                "Name of the Employee": "Dr.E.MALLIKARJUNA GOUD",
                "Qualification": "M.Sc.,M.Phil.,Ph.D.",
                "Subject": "Mathematics",
                "Phone No": "9440272213",
                "Photo" : photo,
            },
            {
                "id": "6",
                "Name of the Employee": "Dr.M.Parappa",
                "Qualification": "M.Sc.,M.Phil,Ph.D.,",
                "Subject": "Mathematics",
                "Phone No": "8500041651",
                "Photo" : photo,
            },
            {
                "id": "7",
                "Name of the Employee": "Dr.B.VENKATRAMANA",
                "Qualification": "M.Com.,Ph.D.,",
                "Subject": "Commerce",
                "Phone No": "9441730700",
                "Photo" : photo,
            },
            {
                "id": "8",
                "Name of the Employee": "Dr.SK.MOHAMMED BASHA",
                "Qualification": "M.A.,Ph.D.,",
                "Subject": "English",
                "Phone No": "9441083540",
                "Photo" : photo,
            },
            {
                "id": "9",
                "Name of the Employee": "Dr.P.SUDHAKAR",
                "Qualification": "M.Sc.,Ph.D.",
                "Subject": "Physics",
                "Phone No": "8500243342",
                "Photo" : photo,
            },
            {
                "id": "10",
                "Name of the Employee": "CH.MADHAVI LATHA",
                "Qualification": "M.Sc.,UGC NET,SET",
                "Subject": "Computer Science",
                "Phone No": "9494354385",
                "Photo" : photo,
            },
            {
                "id": "11",
                "Name of the Employee": "D.VIJAY KUMAR",
                "Qualification": "MCA.,UGC NET",
                "Subject": "Computer Science",
                "Phone No": "7382789601",
                "Photo" : photo,
            },
            {
                "id": "12",
                "Name of the Employee": "CH.CHANDRA SEKHAR",
                "Qualification": "M.Sc.,M.Tech",
                "Subject": "Computer Science",
                "Phone No": "9440949983",
                "Photo" : photo,
            },
            {
                "id": "13",
                "Name of the Employee": "N.SATISH BABU",
                "Qualification": "M.Sc.,B.Ed.,",
                "Subject": "Statistics",
                "Phone No": "9440900528",
                "Photo" : photo,
            },
            {
                "id": "14",
                "Name of the Employee": "V.UDAYA KUMAR",
                "Qualification": "M.Sc.,Ph.D.",
                "Subject": "Statistics",
                "Phone No": "9848264780",
                "Photo" : photo,
            },
            {
                "id": "15",
                "Name of the Employee": "M.SRINIVASA RAO",
                "Qualification": "M.A.,APSET",
                "Subject": "English",
                "Phone No": "9160661788",
                "Photo" : photo,
            },
            {
                "id": "17",
                "Name of the Employee": "Y.CHINNA MEERA VALI",
                "Qualification": "M.Sc.,",
                "Subject": "Mathematics",
                "Phone No": "8886294470",
                "Photo" : photo,
            },
            {
                "id": "18",
                "Name of the Employee": "K.V.KONDAIAH",
                "Qualification": "M.Sc.,",
                "Subject": "Phisics",
                "Phone No": "",
                "Photo" : photo,
            },
            {
                "id": "19",
                "Name of the Employee": "P.REVATHI DEVI",
                "Qualification": "M.Sc.,APSET",
                "Subject": "Chemistry",
                "Phone No": "8500465944",
                "Photo" : photo,
            },
            {
                "id": "20",
                "Name of the Employee": "C.GANGADHAR",
                "Qualification": "M.Sc.,APSET",
                "Subject": "Chemistry",
                "Phone No": "8500233284",
                "Photo" : photo,
            },
            {
                "id": "21",
                "Name of the Employee": "T.RAMANJANEYULU",
                "Qualification": "M.Sc.,APSET",
                "Subject": "Chemistry",
                "Phone No": "9666119513",
                "Photo" : photo,
            },
            {
                "id": "22",
                "Name of the Employee": "K.RAMA KRISHNA",
                "Qualification": "M.A.,APSET",
                "Subject": "Economics",
                "Phone No": "9347496278",
                "Photo" : photo,
            },
            {
                "id": "23",
                "Name of the Employee": "V.RANI",
                "Qualification": "M.A.,APSET",
                "Subject": "History",
                "Phone No": "9440392877",
                "Photo" : photo,
            },
            {
                "id": "24",
                "Name of the Employee": "I.SUDARSANA RAO",
                "Qualification": "M.A.,UGC NET",
                "Subject": "History",
                "Phone No": "8008414593",
                "Photo" : photo,
            },
            {
                "id": "25",
                "Name of the Employee": "CH.KIRAN KUMAR",
                "Qualification": "M.A.,Ph.D.,",
                "Subject": "Political Science",
                "Phone No": "",
                "Photo" : photo,
            },
            {
                "id": "26",
                "Name of the Employee": "P.VEERANJANEYA REDDY",
                "Qualification": "M.Com.,UGC NET,APSET",
                "Subject": "Commerce",
                "Phone No": "9010371505",
                "Photo" : photo,
            },
            {
                "id": "27",
                "Name of the Employee": "V.SOWRI BABU",
                "Qualification": "M.Com.,UGC NET,APSET",
                "Subject": "Commerce",
                "Phone No": "9154715755",
                "Photo" : photo,
            },
            {
                "id": "28",
                "Name of the Employee": "G.SRINIVASA REDDY",
                "Qualification": "M.Com",
                "Subject": "Commerce",
                "Phone No": "9000377551",
                "Photo" : photo,
            },
            {
                "id": "29",
                "Name of the Employee": "S.CHINNA CHENNAIAH",
                "Qualification": "M.L.Science",
                "Subject": "Library Science",
                "Phone No": "9966426920",
                "Photo" : photo,
            },
            {
                "id": "30",
                "Name of the Employee": "P.RAMA KRISHNA",
                "Qualification": "M.P.Ed",
                "Subject": "Physical Education",
                "Phone No": "9704672014",
                "Photo" : photo,

            }
        ]
    ]

    
    return(
        <>
        <div className="faculty">
        <h1>A.P.RESIDENTIAL DEGREE COLLEGE, NAGARJUNASAGAR
TEACHING STAFF PARTICULARS</h1><br></br><br></br>

         <table>
            <tr>
                <th>Name of the Employee</th>
                <th>Qualification</th>
                <th>Subject</th>
                <th>Phone No</th>
                <th>Photo</th>
            </tr>
            {Faculty[0].map(data =>
            <tr>
             <td>{data["Name of the Employee"]}</td>
             <td>{data.Qualification}</td>
             <td>{data.Subject}</td>
             <td>{data["Phone No"]}</td>
             <td><img src={data.Photo} alt=""/></td>
            </tr>    
            )}

         </table>
        </div>
        </>
    );
}
export default Teaching
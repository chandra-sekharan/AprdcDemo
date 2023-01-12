import React from "react";
import './styles/about.css'

const Principal = () =>{
   const principals =  [
        [
            "1",
            "Sri M.Srinivasa Reddy, M.A, M.Ed",
            "Principal, FAC",
            "01-09-1982",
            "14-09-1982"
        ],
        [
            "2",
            "Sri P.S.Ramachandra Rao, M.Sc",
            "Principal",
            "15-09-1982",
            "10-05-1983"
        ],
        [
            "3",
            "Sri C.Ramaiah, M.Sc, B.Ed",
            "Principal, FAC",
            "11-05-1983",
            "21-11-1983"
        ],
        [
            "4",
            "Sri M.Srinivasa Reddy, M.A, M.Ed",
            "Principal, FAC",
            "22-11-1983",
            "29-12-1983"
        ],
        [
            "5",
            "Dr.J.Murali Mohan, M.Sc, Ph.D",
            "Principal",
            "30-12-1983",
            "05-09-1985"
        ],
        [
            "6",
            "Sri Y.Venkata Reddy, M.A, LL.B",
            "Principal",
            "06-09-1985",
            "22-08-1990"
        ],
        [
            "7",
            "Sri J.Joseph, M.A, B.Ed",
            "Principal, FAC",
            "26-08-1990",
            "31-12-1991"
        ],
        [
            "8",
            "Sri T.Narasimha Rao, M.A, B.Ed",
            "Principal, FAC",
            "01-01-1992",
            "31-12-1995"
        ],
        [
            "9",
            "Sri M.Ramachary, M.Sc",
            "Principal, FAC",
            "01-01-1996",
            "07-03-1996"
        ],
        [
            "10",
            "Sri J.Joseph, M.A, B.Ed",
            "Principal, FAC",
            "08-03-1996",
            "30-06-1997"
        ],
        [
            "11",
            "Dr.K.Suryanarayana, M.Sc, D.I.I.T, Ph.D",
            "Principal, FAC",
            "01-07-1997",
            "01-09-1998"
        ],
        [
            "12",
            "Sri M.Ramachary, M.Sc",
            "Principal, FAC",
            "02-09-1998",
            "31-05-2002"
        ],
        [
            "13",
            "Sri V.Bhaskara Rao, M.Com",
            "Principal, FAC",
            "01-06-2002",
            "31-05-2003"
        ],
        [
            "14",
            "Dr.G.Seetharama Rao, M.Sc, Ph.D",
            "Principal, FAC",
            "01-06-2003",
            "13-09-2003"
        ],
        [
            "15",
            "Dr.C.V.L.N.Murthy, M.Sc, Ph.D",
            "Principal, FAC",
            "14-09-2003",
            "09-05-2006"
        ],
        [
            "16",
            "Dr.C.V.Raghavacharyulu, M.A, Ph.D, Dis",
            "Principal, FAC,Principal",
            "10-05-2006",
            "31-08-2007"
        ],
    
        [
            "17",
            "Dr.G.Seetharama Rao, M.Sc, Ph.D",
            "Principal, FAC",
            "01-09-2007",
            "15-06-2010"
        ],
    
        [
            "18",
            "Dr.C.V.L.N.Murthy, M.Sc, Ph.D",
            "Principal, FAC",
            "16-06-2010",
            "31-03-2014"
        ],
    
        [
            "19",
            "Sri P.Narayana Reddy, M.A, MPhil",
            "Principal, FAC",
            "01-04-2014",
            "27-07-2015"
        ],
        [
            "20",
            "Sri A.Nabi Khan, M.Com, B.Ed",
            "Principal, FAC",
            "28-07-2015",
            "31-08-2020"
        ],
        [
            "21",
            "Sri Y.N.S.Chaudhary, M.A",
            "Principal, FAC",
            "01-09-2020",
            ""
        ]
    ]
    console.log(principals[0][1])
    return(
        <div className="principals">
            <table>
                <tr>
                    <th>SI.No</th>
                    <th>NAME</th>
                    <th>DESIGNATION</th>
                    <th>From</th>
                    <th>To</th>
                </tr>
                {principals.map(data=>
                <tr>
                    <td>{data[0]}</td>
                    <td>{data[1]}</td>
                    <td>{data[2]}</td>
                    <td>{data[3]}</td>
                    <td>{data[4]}</td>
                </tr>
                )}
            </table>
        </div>
    )
}

export default Principal
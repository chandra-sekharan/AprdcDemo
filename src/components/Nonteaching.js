import React from "react";
import './styles/Administration.css';
import college from './images/college.jpg';

const Nonteaching = ()=>{

   const Nonteaching = [ 
        [1,"A.SUDHA RANI ","Fulltime Staff Nurse", 8985898148  ],
        [2,"A.MARUTHI","Senior Assistant",9494344743  ],
        [3,"P.VAMSI KRISHNA","Junior Assistant",9490500422  ],
        [4,"N.MURALI KRISHNA","Junior Assistant",9494998224  ],
        [5,"G. HANUMATHA RAO","Junior Assistant",9441083619  ],
        [6,"B.DANIEL","Junior Assistant",9441595542  ],
        [7,"K.R.K.A.V. PRASAD","Record Asst",8143559621  ],
        [8,"G.NARSI REDDY","Gas Machanic",9441502452  ],
        [9,"B.PADMASEKHAR RAO","Record Asst",9493448460  ],
        [10,"K.KOTESWARA RAO","Record Asst",8019504255  ],
        [11,"D.MARK","Record Asst",9490960608  ],
        [12,"M.SUDHAKAR","MPW",9492860362  ],
        [13,"K.RAVI KUMAR","MAN POWER",9494755193  ],
        [14,"G.RAMA KRISHNA","MAN POWER",9441646501  ],
        [15,"E.S.P.CHAKRAVARTHI","MAN POWER",7330623730  ],
        [16,"D.MURALI MOHAN","MAN POWER",9441025807  ],
        [17,"B.GOPALA KRISHNA","MAN POWER",9618999106  ],
        [18,"B. THANGA RAJU","MAN POWER",9441025431  ],
        [19,"SHAIK MOHAMMED IBRAHEEM","MAN POWER",9441025431  ],
        [20,"N.VIJAY KANTH","MAN POWER",9494459743  ],
        [21,"DANALA RAJU","MAN POWER",9494879558  ],
        [22,"P.MARIYAMMA","MAN POWER",8885763489  ],
        [23,"A.RAJESWARA RAO","MAN POWER",7382330374  ],
        [24,"K.RAJESH","MAN POWER",8500075125  ],
        [25,"D.VENKATA SIVANAGESWARA RAO","MAN POWER",9490563801  ],
        [26,"SD.MOULALI","MAN POWER",8179219170  ],
        [27,"J.RAM BABU","MAN POWER",8125863728  ],
        [28,"P.APPA RAO","MAN POWER",9949862845  ],
        [29,"M.SATYA VARAPRASAD","MAN POWER",9493555566  ],
        [30,"V.NARAYANA RAO","MAN POWER",8985144709  ],
        [31,"M.NARESH","MAN POWER",7899557046  ]
      ]   
          
      

    return(
        <div className="nontec">
          <div className="clg_img">
            <img src={college} alt="" />
          </div>
          <h1>A.P.RESIDENTIAL DEGREE COLLEGE, NAGARJUNASAGAR LIST OF NON TEACHING STAFF</h1>
          <div className="nonteaching">
            <table>
                <tr>
                    <th>SI.No</th>
                    <th>Name of the staff</th>
                    <th>Designation</th>
                    <th>Phone</th>
                </tr>
                {Nonteaching.map(data =>
                <tr>
                    <td>{data[0]}</td>
                    <td>{data[1]}</td>
                    <td>{data[2]}</td>
                    <td>{data[3]}</td>
                </tr>
                 )}
            </table>
          </div>
        </div>
    )
}

export default Nonteaching;
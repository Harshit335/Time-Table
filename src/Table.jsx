import React, {useState} from 'react';

const initialValues = {
  monday1: "",
  monday2: "",
  link: "",
  date: "",
  note: "",
};


function Table() {

    const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

    return (
      <div>

<table border="5" cellspacing="0" align="center"> 
        <tr> 
            <td align="center" height="50" 
                width="100">
                <b>Day/Period</b> 
            </td> 
            <td align="center" height="50" 
                width="100"> 
                <b>I9:30-10:20</b> 
            </td> 
            <td align="center" height="50" 
                width="100"> 
                <b>II 10:20-11:10</b> 
            </td> 
            <td align="center" height="50" 
                width="100"> 
                <b>III 11:10-12:00</b> 
            </td> 
            <td align="center" height="50" 
                width="100"> 
                <b>12:00-12:40</b> 
            </td> 
            <td align="center" height="50" 
                width="100"> 
                <b>IV 12:40-1:30</b> 
            </td> 
            <td align="center" height="50" 
                width="100"> 
                <b>V 1:30-2:20</b> 
            </td> 
            <td align="center" height="50" 
                width="100"> 
                <b>VI 2:20-3:10</b> 
            </td> 
            <td align="center" height="50" 
                width="100"> 
                <b>VII 3:10-4:00</b> 
            </td> 
        </tr> 
        <tr> 
            <td align="center" height="50"> 
                <b>Monday</b></td> 
            <td align="center" height="50">
       <input 
           onChange={handleChange}
           type="text" 
           value={values.monday1}
           name="monday1"
           width="10"
        /></td> 
            <td align="center" height="50">
       <input 
           onChange={handleChange}
           type="text" 
           value={values.monday2}
           name="monday2"
        /></td> 
            <td align="center" height="50">Che</td> 
            <td rowspan="6" align="center" height="50"> 
                <h2>L<br/>U<br/>N<br/>C<br/>H</h2> 
            </td> 
            <td colspan="3" align="center" 
                height="50">LAB</td> 
            <td align="center" height="50">Phy</td> 
        </tr> 
        <tr> 
            <td align="center" height="50"> 
                <b>Tuesday</b> 
            </td> 
            <td colspan="3" align="center" 
                height="50">LAB 
            </td> 
            <td align="center" height="50">Eng</td> 
            <td align="center" height="50">Che</td> 
            <td align="center" height="50">Mat</td> 
            <td align="center" height="50">SPORTS</td> 
        </tr> 
        <tr> 
            <td align="center" height="50"> 
                <b>Wednesday</b> 
            </td> 
            <td align="center" height="50">Mat</td> 
            <td align="center" height="50">phy</td> 
            <td align="center" height="50">Eng</td> 
            <td align="center" height="50">Che</td> 
            <td colspan="3" align="center" 
                height="50">LIBRARY 
            </td> 
        </tr> 
        <tr> 
            <td align="center" height="50"> 
                <b>Thursday</b> 
            </td> 
            <td align="center" height="50">Phy</td> 
            <td align="center" height="50">Eng</td> 
            <td align="center" height="50">Che</td> 
            <td colspan="3" align="center" 
                height="50">LAB 
            </td> 
            <td align="center" height="50">Mat</td> 
        </tr> 
        <tr> 
            <td align="center" height="50"> 
                <b>Friday</b> 
            </td> 
            <td colspan="3" align="center" 
                height="50">LAB 
            </td> 
            <td align="center" height="50">Mat</td> 
            <td align="center" height="50">Che</td> 
            <td align="center" height="50">Eng</td> 
            <td align="center" height="50">Phy</td> 
        </tr> 
        <tr> 
            <td align="center" height="50"> 
                <b>Saturday</b> 
            </td> 
            <td align="center" height="50">Eng</td> 
            <td align="center" height="50">Che</td> 
            <td align="center" height="50">Mat</td> 
            <td colspan="3" align="center" 
                height="50">SEMINAR 
            </td> 
            <td align="center" height="50">SPORTS</td> 
        </tr> 
    </table> 


          <h1>TIME TABLE</h1> 
    <table border="5" cellspacing="0" align="center"> 
        <tr> 
            <td align="center" height="50" 
                width="100">
                <b>Day/Period</b> 
            </td> 
            <td align="center" height="50" 
                width="100"> 
                <b>I9:30-10:20</b> 
            </td> 
            <td align="center" height="50" 
                width="100"> 
                <b>II 10:20-11:10</b> 
            </td> 
            <td align="center" height="50" 
                width="100"> 
                <b>III 11:10-12:00</b> 
            </td> 
            <td align="center" height="50" 
                width="100"> 
                <b>12:00-12:40</b> 
            </td> 
            <td align="center" height="50" 
                width="100"> 
                <b>IV 12:40-1:30</b> 
            </td> 
            <td align="center" height="50" 
                width="100"> 
                <b>V 1:30-2:20</b> 
            </td> 
            <td align="center" height="50" 
                width="100"> 
                <b>VI 2:20-3:10</b> 
            </td> 
            <td align="center" height="50" 
                width="100"> 
                <b>VII 3:10-4:00</b> 
            </td> 
        </tr> 
        <tr> 
            <td align="center" height="50"> 
                <b>Monday</b></td> 
            <td align="center" height="50">{values.monday1}</td> 
            <td align="center" height="50">{values.monday2}</td> 
            <td align="center" height="50">Che</td> 
            <td rowspan="6" align="center" height="50"> 
                <h2>L<br/>U<br/>N<br/>C<br/>H</h2> 
            </td> 
            <td colspan="3" align="center" 
                height="50">LAB</td> 
            <td align="center" height="50">Phy</td> 
        </tr> 
        <tr> 
            <td align="center" height="50"> 
                <b>Tuesday</b> 
            </td> 
            <td colspan="3" align="center" 
                height="50">LAB 
            </td> 
            <td align="center" height="50">Eng</td> 
            <td align="center" height="50">Che</td> 
            <td align="center" height="50">Mat</td> 
            <td align="center" height="50">SPORTS</td> 
        </tr> 
        <tr> 
            <td align="center" height="50"> 
                <b>Wednesday</b> 
            </td> 
            <td align="center" height="50">Mat</td> 
            <td align="center" height="50">phy</td> 
            <td align="center" height="50">Eng</td> 
            <td align="center" height="50">Che</td> 
            <td colspan="3" align="center" 
                height="50">LIBRARY 
            </td> 
        </tr> 
        <tr> 
            <td align="center" height="50"> 
                <b>Thursday</b> 
            </td> 
            <td align="center" height="50">Phy</td> 
            <td align="center" height="50">Eng</td> 
            <td align="center" height="50">Che</td> 
            <td colspan="3" align="center" 
                height="50">LAB 
            </td> 
            <td align="center" height="50">Mat</td> 
        </tr> 
        <tr> 
            <td align="center" height="50"> 
                <b>Friday</b> 
            </td> 
            <td colspan="3" align="center" 
                height="50">LAB 
            </td> 
            <td align="center" height="50">Mat</td> 
            <td align="center" height="50">Che</td> 
            <td align="center" height="50">Eng</td> 
            <td align="center" height="50">Phy</td> 
        </tr> 
        <tr> 
            <td align="center" height="50"> 
                <b>Saturday</b> 
            </td> 
            <td align="center" height="50">Eng</td> 
            <td align="center" height="50">Che</td> 
            <td align="center" height="50">Mat</td> 
            <td colspan="3" align="center" 
                height="50">SEMINAR 
            </td> 
            <td align="center" height="50">SPORTS</td> 
        </tr> 
    </table> 
    <button style={{margin: "20px", width: "100px"}} >
        Download
    </button>
      </div>
    );
  }
  
  export default Table;
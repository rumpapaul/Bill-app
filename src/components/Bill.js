import React ,{useState} from "react";

export default function Bill() {
    // for lipstick
   
const [lip11,setlip11]= useState('')
const [lip22,setlip22]= useState('')
const [lip33,setlip33]= useState('')
const lip1handlechange =event=>{
    setlip11(event.target.value)
}
const lip2handlechange =event=>{
    setlip22(event.target.value)
}
// for foundation

const [foun11,setfoun11]= useState('')
const [foun22,setfoun22]= useState('')
const [foun33,setfoun33]= useState('')
const foun1handlechange =event=>{
    setfoun11(event.target.value)
}
const foun2handlechange =event=>{
    setfoun22(event.target.value)
}
// for primer

const [prime11,setprime11]= useState('')
const [prime22,setprime22]= useState('')
const [prime33,setprime33]= useState('')
const prime1handlechange =event=>{
    setprime11(event.target.value)
}
const prime2handlechange =event=>{
    setprime22(event.target.value)
}
// for toner

const [ton11,setton11]= useState('')
const [ton22,setton22]= useState('')
const [ton33,setton33]= useState('')
const ton1handlechange =event=>{
    setton11(event.target.value)
}
const ton2handlechange =event=>{
    setton22(event.target.value)
}
// for gloss

const [glos11,setglos11]= useState('')
const [glos22,setglos22]= useState('')
const [glos33,setglos33]= useState('')
const glos1handlechange =event=>{
    setglos11(event.target.value)
}
// for total amount
const [amount,setamount]= useState('')

const glos2handlechange =event=>{
    setglos22(event.target.value)
}
   const item1 =()=>{
   
const lip=lip11*lip22
setlip33(lip)
    }
   const item2 =()=>{
const foun =foun11*foun22
setfoun33(foun)
    }
   const item3 =()=>{
    const prime =prime11*prime22
    setprime33(prime)
    }
   const item4 =()=>{
    const ton =ton11*ton22
    setton33(ton)
    }
   const item5 =()=>{
    const glos =glos11*glos22
    setglos33(glos)
    }
   const total =()=>{
const amount= lip33+foun33+prime33+ton33+glos33
setamount(amount)

    }
  return (
    <>
      <div className="bill-container">
        <div className="bill">
          <table>
            <thead>
              <tr>
                <div className="items">
                  <th>Items</th>
                </div>
                <div className="item-no">
                  <th>No. of Items</th>
                </div>
                <div className="price">
                  <th>Price</th>
                </div>
                <div className="total-price">
                  <th>Total-Price</th>
                  {/* <input type="button" className='multi' value="" />*/}
                </div>
              </tr>
            </thead>
            <tbody>
              <tr>
                <div className="coloums-item">
                  <td>Lipstick</td>
                </div>
                <div className="coloums-item-no item1">
                  <td>
                    <input type="number" onChange={lip1handlechange} name="" className="input-no lip1" id="" />
                  </td>
                </div>
                <div className="coloums-item-price">
                  <td>
                    <input
                      type="number"
                      onChange={lip2handlechange}
                      name=""
                      className="input-price lip2"
                      id=""
                    />
                  </td>
                </div>
                <div className="btn">
                  <td>
                    <input type="button" onClick={item1} className="multi" value="=" />
                  </td>
                </div>
                <div className="coloums-item-price">
                  <td>
                    <input
                      type="text"
                      name=""
                      value={lip33}
                      className="input-price"
                      id=""
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="coloums-item">
                  <td>Foundation</td>
                </div>
                <div className="coloums-item-no item2">
                  <td>
                    <input type="number" onChange={foun1handlechange} name="" className="input-no foun1" id="" />
                  </td>
                </div>
                <div className="coloums-item-price">
                  <td>
                    <input
                      type="number"
                      onChange={foun2handlechange}
                      name=""
                      className="input-price foun2"
                      id=""
                    />
                  </td>
                </div>
                <div className="btn">
                  <td>
                    <input type="button" onClick={item2} className="multi" value="=" />
                  </td>
                </div>
                <div className="coloums-item-price">
                  <td>
                    <input
                      type="text"
                      name=""
                      value={foun33}
                      className="input-price"
                      id=""
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="coloums-item">
                  <td>Primer</td>
                </div>
                <div className="coloums-item-no item3">
                  <td>
                    <input type="number" onChange={prime1handlechange}  name="" className="input-no prime1" id="" />
                  </td>
                </div>
                <div className="coloums-item-price">
                  <td>
                    <input
                      type="number"
                      onChange={prime2handlechange}
                      name=""
                      className="input-price prime2"
                      id=""
                    />
                  </td>
                </div>
                <div className="btn">
                  <td>
                    <input type="button" onClick={item3} className="multi" value="=" />
                  </td>
                </div>
                <div className="coloums-item-price">
                  <td>
                    <input
                      type="text"
                      value={prime33}
                      name=""
                      className="input-price"
                      id=""
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="coloums-item">
                  <td>Toner</td>
                </div>
                <div className="coloums-item-no item4">
                  <td>
                    <input type="number" onChange={ton1handlechange}  name="" className="input-no ton1" id="" />
                  </td>
                </div>
                <div className="coloums-item-price">
                  <td>
                    <input
                      type="number"
                      onChange={ton2handlechange}
                      name=""
                      className="input-price ton2"
                      id=""
                    />
                  </td>
                </div>
                <div className="btn">
                  <td>
                    <input type="button" onClick={item4} className="multi" value="=" />
                  </td>
                </div>
                <div className="coloums-item-price">
                  <td>
                    <input
                      type="text"
                      value={ton33}
                      name=""
                      className="input-price"
                      id=""
                    />
                  </td>
                </div>
              </tr>
              <tr>
                <div className="coloums-item">
                  <td>Lip-gloss</td>
                </div>
                <div className="coloums-item-no item5">
                  <td>
                    <input type="number" onChange={glos1handlechange}  name="" className="input-no glos1" id="" />
                  </td>
                </div>
                <div className="coloums-item-price">
                  <td>
                    <input
                      type="number"
                      onChange={glos2handlechange}
                      name=""
                      className="input-price glos2"
                      id=""
                    />
                  </td>
                </div>
                <div className="btn">
                  <td>
                    <input type="button" onClick={item5} className="multi" value="=" />
                  </td>
                </div>
                <div className="coloums-item-price">
                  <td>
                    <input
                      type="text"
                      value={glos33}
                      name=""
                      className="input-price"
                      id=""
                    />
                  </td>
                </div>
              </tr>
            </tbody>
          </table>
          <hr />
          <div className="total-bill">
           <p className="text-pay"> <b> Total Amounts to pay ::</b></p> 
            <input type="button" className="total" onClick={total} value="Click"/>
            <input type="text" value={amount} className="total-amount" name="" id=""/>
          </div>
        </div>
      </div>
    </>
  );
}

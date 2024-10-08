import React from 'react'

function Card({username , para = "#1"}){            //para = #1 means we pass para from app.jsx and #1 is the default value of para
  // console.log("props",props)
  console.log(username)
    return(
        <div className="flex flex-col rounded-xl  p-4"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h2 className="font-RubikBold ">{username}</h2>
            <h2 className="font-bold font-RubikBold">Price</h2>
          </div>
          <div className="flex  justify-between font-mono">
            <p>{para}</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
    )
}
export default Card
import { callCounterContract } from "../services/CallCounter"
import React, { useEffect, useState } from "react"
import "./Calls.css"



export const totalCalls = async () => {
  return await callCounterContract.getCallers()
}

const count = (k, array) => array.filter(v => v==k).length

export default function Calls(props) {
  const [callers, setCallers] = useState(props.addr)

  useEffect(() => {
    const listener = (item) => {
      setCallers(old => [item.addr, ...old])
    }
    callCounterContract.on("newCall", listener);
  })

  return (
    <div className="callMainContainer">
      <h3>Called me {callers.length} times!</h3>
      {
        [...new Set(callers)].map((addr, index) => {
          return (
            <div className="caller" key={index}>
            {addr} call me {count(addr, callers)} times !
            </div>
          )
        })
      }
    </div>
  )
}
















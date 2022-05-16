import { callCounterContract } from "../../services/CallCounter"
import React, { useEffect, useState } from "react"
import "./Calls.css"


const count = (k, array) => array.filter(v => v==k).length

export default function Calls() {
  const [callers, setCallers] = useState([])

  useEffect(async () => {
    const listener = async (item) => {
      setCallers([item, ...await callCounterContract.getCallers()])
    }
    callCounterContract.on("newCall", listener);
  }, [])

  return (
    <div className="callMainContainer">
      <h3>Called me {callers.length} times!</h3>
      {
        [...new Set(callers)].map((addr, index) => {
          if (!addr) return
          return (
            <div className="caller" key={index}>
            {addr} call me {count(addr, callers)} times !
            </div>
          )
        }).reverse()
      }
    </div>
  )
}
















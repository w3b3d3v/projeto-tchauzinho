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
      <h3>Já me chamaram {callers.length} vezes!</h3>
      {
        [...new Set(callers)].map((addr, index) => {
          if (!addr) return
          return (
            <div className="caller" key={index}>
            <a
            className="link"
            href={`https://goerli.etherscan.io/address/${addr}`}
            target="_blank"
            >{addr}</a>&nbsp;me chamou {count(addr, callers)} vezes !
            </div>
          )
        }).reverse()
      }
    </div>
  )
}
















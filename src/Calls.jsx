// const [callers, setCallers] = useState(props.addr)

// useEffect(() => {
//   const listener = (item) => {
//     // setCallers(old => [item.addr, ...old.reverse()])
//     console.log("event")
//   }
//   callCounterContract.on("newCall", listener);
//   return () => {
//     callCounterContract.off("newCall", listener)
//   }
// }, [])
// const counterCallers = (array) => {
//   return [...new Set(array)].map((address, index) => {
//     const explorer = `https://rinkeby.etherscan.io/address/${address}`
//     const counter = array.filter(addr => address == addr).length
//     return (
//       <div key={index}>
//         <br/>
//         <strong><a className="link" target="_blank" href={explorer}>{address}</a></strong> call me <strong>{counter}</strong> times!
//       </div>
//       )
//   })
// }
import {callCounterContract} from "./App"



export const totalCalls = async () => {
  let calls = await callCounterContract.getCalls()
  let callers = await callCounterContract.getCallers()

  console.log(`Called me ${calls.toNumber()} times`)
  console.log("List of callers")
  callers.map(caller => console.log(caller))
}

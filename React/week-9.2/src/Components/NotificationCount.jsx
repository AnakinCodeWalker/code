import { useState } from "react"
function NotificationCount({ Name }) { //prop passing
    const [count, SetCount] = useState(1) //useState

    function increaseCount() {
        SetCount(count => count + 1) // altering the state variable
    }
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div>

                Hi ! {Name} your Notification count is
            </div>
            <div style={{
                margin: 10
            }}>

                {count % 2 == 0 ? count : 0}  {/*conditional rendering */}

            </div>
            <button onClick={increaseCount}>Push me</button>
        </div>
    )
}
export default NotificationCount
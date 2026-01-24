
const ButtonComponent = ({socket}) => {
    return (
        <>
            <div>
                <label style={{
                    marginRight: 10
                }} htmlFor="name">Enter ping</label>

                <input style={{
                    marginBottom: 10
                }} type="text" />


            </div>
            <button style={{
                backgroundColor: "#aff",
                borderRadius: 10,
                marginTop: 5,
                padding: 7
            }} onClick={function () {
socket.send("ping")
            }}>Click me</button>
        </>
    )
}

export default ButtonComponent

const ButtonComponent = ({socket}:{socket:WebSocket|null}) => {
  
    //  another example fro this one
    //   { name, age }: { name: string; age: number }
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
                
                if(socket==null)
                    return

                socket.send("ping")

}}>Click me</button>
        </>
    )
}

export default ButtonComponent
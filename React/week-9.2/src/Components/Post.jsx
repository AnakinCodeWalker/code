export function Post({ name, Age }) {  /* Prop passed */


    return <div>

        <div style={{
            margin: "0",
            padding: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
            backgroundColor: "grey",
            borderRadius: "10",
            borderColor: "gray",
            borderWidth: "1"
        }}>
            <div style={{
               
                margin: "30",
                textAlign: "center",
                padding: "10",
                width: 70,
                height: 70,
                backgroundColor: "white",
                paddingLeft: "10",
                borderRadius: "10",
                border: "2px solid black"
            }}>
                {/* Using the Prop */}
                hi there {name}

            </div>
            <div style={{
                backgroundColor: "pink",
                margin: 10,
                padding: 10,
                borderRadius: 50
            }}>
                {/* Using the Prop */}
                Age is {Age} 
            </div>
        </div>


    </div>

}
//  building one way communication - sender can send and receiver will receive it 
//  3 msg -  createoffer() createAnswer()  iceCandidate()
//  whenever one provides a ice candidate send it to other side 


const  rtpc  = async  () => {
const pc = new RTCPeerConnection();
const offer = await pc.createOffer(); // creates a sdp
pc.setLocalDescription(offer)

const pc2 = new RTCPeerConnection();
pc2.setRemoteDescription(offer)   // sets  the sdp of the other side
const answer = await pc2.createAnswer(); // creates a sdp
pc2.setLocalDescription(answer)

pc.setRemoteDescription(answer) // sets the sdp of the other side
}
// local means this is my offer remote means this is their offer.
console.log(rtpc);



//   how sender can send data to multiple sneder
//  how can we both of them can send data to each other
// implement the sfu logic as well later on .. 
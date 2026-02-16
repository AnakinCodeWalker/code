
export const upload = async (req,res) => {
    
    console.log(`${req.file}`);
    return res.status(200).json({
    success: true,
    message: "uploaded"
  })
}

const login = async (req, res) => {
  const { userName, password } = req.body

  if (!userName || !password) {
    return res.status(400).json({
      success: false,
      message: "invalid data"
    })
  }
console.log(`${userName} ${password}`);
  return res.status(200).json({
    success: true,
    message: "login ok"
  })
}

export default login

/*
req aya ussey middleware chala multer ka 
fir diskstorage mai save hua uske req.file mila 
now controller mai req.file access milega

*/
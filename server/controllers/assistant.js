import User from "../models/User.js";
import Task from "../models/Task.js";


// add employee 
export const register_employee = async (req, res) => {
    try {
        const {userId} = req.body;
      const {
        name,
        email,
        password,
        mobile,
        role
      } = req.body;
       const user = await User.findById(userId);
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        name,
        email,
        password: passwordHash,
        mobile,
        role,
        department:user.department
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  // get all task

  export const getAllTaskByDepartment=async(req,res)=>{
    try{
      const {status,type}=req.params;
      const data=Task.find({type:type,status:status});
      res.send(200).json(data);
    }catch(err){
        res.status(404).json({message: err.message});
    }
};

// assign a worker

export const assignWorker = async(req,res)=>{
    try{
        const {workerId,taskIdarray} = req.body;
        taskIdarray.forEach(element => {
            const update = Task.findByIdAndUpdate(element,{
                workerId:workerId
            })
        });

    } catch(err){
        res.status(404).json({message: err.message});
    }
}

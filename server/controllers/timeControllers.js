import Time from "../models/time.js"

export async function getTime(req, res){
    try {
        const time = await Time.findOne();
        res.json(time);
    } catch (error) {
        
    }
}

export const getTimeById = async (req, res) => {
    try {
        const elapse = await Time.findById(req.params,id);
        if(!elapse) return res.status(404).json({message: "elapse not found"});
        res.json(elapse);
    } catch (error) {
        res.status(500).json({err: error.message});
    }
};

export const updateTime = async (req, res) => {
    try {
        const {id} = req.params;
        const { currentElapse } = req.body;

        const time = await Time.findById(id);

        time.totalElapse += currentElapse;
        time.currentElapse = 0;
        await time.save();
        res.status(200).json(time);
    } catch (error) {
        res.status(500).json({ message: error.message });        
    }
};
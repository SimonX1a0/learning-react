import Time from "../models/time.js"

export async function getTimeById(req, res){
    try {
        const { id } = req.params
        const time = await Time.findById(id);
        if(!time) return res.status(404).json({ message: "time not found"});
        res.status(200).json(time);
    } catch (error) {
        res.status(500).json({ message: error});
    }
}

export async function start(req, res){
    try {
        const id = req.params.id;
        const body = req.body;
        const time = await Time.findById(id);

        if(!time) return res.status(404).json({ message: "timer not found" });

        time.startTime = body.startTime;
        time.isRunning = body.isRunning;
        await time.save()
        res.json(time);
    } catch (error) {
        res.status(500).json({ message: "error starting timer: ", error});
    }
}

export async function stop(req, res){
    try {
        const id = req.params.id;
        const time = await Time.findById(id);
        if(!time) return res.status(404).json({ message: "timer not found" });
        time.isRunning = req.body.isRunning;
        await time.save();
        res.status(201).json(time);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export async function reset(req, res){
        try {
        const id = req.params.id;
        const time = await Time.findById(id);
        if(!time) return res.status(404).json({ message: "timer not found" });
        time.isRunning = req.body.isRunning;
        time.totalElapse += req.body.currentElapse;
        await time.save();
        res.status(201).json(time);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
const express = require('express');


const app= app.use('express');


const id = 1;


app.post('/v1/tasks', async (req, res) => {

    const task = await task.create(req.body);

    res.status(201).json({
        status: success,
        id: id + 1,
        data: task
    })
})

app.get('/v1/tasks', async (req, res) => {

    const task = await task.find([task]);

    res.status(200).json({
        status: success,
        data: task
    })
})


app.get('/v1/tasks/{id}', async (req, res) => {

    const task = await task.findone(id == req.params.id);

    res.status(200).json({
        status: success,
        data: task
    })
    if (id !== req.params.id) {
        res.status(404).json({
            status: failed,
            error: "There is no task at that id"
        })
    }
})


app.delete('/v1/tasks/{id}', async (req, res) => {

    const task = await task.deleteone(id == req.params.id);
    res.status(204).json({
        status: success
    })
   
})


app.put('/v1/tasks/{id}', async (req, res) => {

    const task = await task.updateone(req.body);
    res.status(204).json({
        status: success
    });

    if (id !== req.params.id) {
        res.status(404).json({
            status: failed,
            error: "There is no task at that id"
        })
    }
   
})

app.post('/v1/tasks', async (req, res) => {

    const tasks = await task.create([req.body]);
    res.status(201).json({
        status: success,
        id: id +1,
        data: tasks
    })
})



app.delete('/v1/tasks/{id}', async (req, res) => {

    const task = await task.deletemany([req.params.id]);
    res.status(204).json({
        status: success
    })
   
})






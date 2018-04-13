'use strict';

const Example = require('../models/example');

module.exports = {
    getEntries(req, res) {
        Example.find({}, (err, docs) => {
            if (err) return res.status(500)
                .json({
                    type: 'get_entries',
                    err: err
                })

            return res.status(200)
                .json({
                    type: 'get_entries',
                    data: docs
                })
        })
    },
    storeEntry(req, res) {
        let newExample = new Example()
        newExample.name = req.body.name;
        newExample.number = req.body.number;

        newExample.save(err => err ? res.status(500).json({
            type: 'store_entry',
            err: err
        }) : res.status(200).json({
            type: 'store_entry',
            status: 'completed'
        }))
    },
    updateEntry(req, res) {
        let id = req.body.id,
            name = req.body.name,
            number = req.body.number

        if (!id || !name || !number) return res.status(401).json({
            type: 'update_entry',
            err: 'some params are missing'
        })

        process.nextTick(() => {

            Example.findOneAndUpdate({
                _id: id
            }, {
                name: name,
                number: number
            }, {
                overwrite: true
            }, (err, docs) => {
                if (err) return res.status(500)
                    .json({
                        type: 'update_entry',
                        err: err
                    })
                
                    return res.status(200)
                        .json({
                            type: 'update_entry',
                            status: 'completed'
                        })
            })

        })
    },
    deleteEntry(req, res) {
        let id = req.body.id;

        Example.findOneAndRemove({
            _id: id
        }, err => err ? res.status(500).json({
            type: 'delete_entry',
            err: err
        }) : res.status(200).json({
            type: 'delete_entry',
            status: 'completed'
        }))

    }
}
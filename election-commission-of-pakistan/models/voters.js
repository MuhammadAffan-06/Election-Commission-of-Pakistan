const mongoose = require('mongoose');

const voter = mongoose.Schema(
    {
        full_name:
        {
            type: 'String',
            required: true
        },
        username:
        {
            type: 'String',
            required: true
        },
        password:
        {
            type: 'String',
            required: true
        },
        gender:
        {
            type: 'String',
            enum: ['Male', 'Female'],
            required: true
        },
        age:
        {
            type: 'Number',
            required: true
        },
        province:
        {
            type: 'String',
            enum: ['Sindh', 'Punjab', 'Balochistan', 'KPK'],
            required: true
        },
        party:
        {
            type: 'String',
            enum: ['PML(N)', 'PPPP', 'MQM', 'TLP'],
            required: true
        }
    }
)
const voter_info = mongoose.model('voter_info',voter);
module.exports = voter_info;
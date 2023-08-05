import mongoose from "mongoose"
import TypingDataModel from "../model/typingData.model.js"


const addParagraph = async (req, res)=>{
    const {title, paragraph} = req.body
    try {
        await TypingDataModel.create({title, paragraph})
    res.status(200).json({
        success: true,
        msg: "Paragraph Added Successfully"
    })
    } catch (error) {
        res.status(400).json({
            success: false,
            msg: error.message
        })
    }
}

const deleteParagraph = async (req, res)=>{
    const {id} = req.body;
    try {
        await TypingDataModel.findByIdAndDelete({id})
        res.status(200).json({
            success: true,
            msg: "Paragraph Deleted Successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: true,
            msg: ErrorEvent.message
        })
    }
}

const getdata = async (req, res)=>{
    try {
        const data = await TypingDataModel.find({})
        res.status(200).json({
            success: true,
            msg: "Got Data Successfully",
            data
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: error.message
        })
    }
}

export {
    addParagraph,
    deleteParagraph,
    getdata
}
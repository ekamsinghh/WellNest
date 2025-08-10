const Session = require('../models/Session');
const mongoose = require('mongoose');
class SessionRepository{
    constructor(){
        this.session = Session;
    }

    async create(data){
        try{
            const session = await this.session.create(data);
            return session;
        }
        catch(err){
            throw err;
        }
    }

    async toggle(data){
        try{
            const response = await this.session.findOneAndUpdate({ _id: data.id },{ 
                status: data.status
             }, { new: true });
            return response;
        }
        catch(err){
            throw err;
        }
    }
    async getSessionById(id){
        try{
            const session = await this.session.findById(id);

            if(!session){
                throw new Error("Session Not Found");
            }
            return session;
        }
        catch(err){
            throw err;
        }
    }

    async deleteSession(id){
        try{
            const response = await this.session.findByIdAndDelete(id);
            return response;
        }
        catch(err){
            throw err;
        }
    }

    async getPublishedSessions(userId){
        try{
            const response = await this.session
                .find({ user: userId, status: "published" })
                .sort({ createdAt: -1 });
            // Sorting will be done based on the createdAt field but in descending order
            return response;
        }
        catch(err){
            throw err;
        }
    }
    async getMySessions(userId){
        try{
            const response = await this.session.find({user:userId}).sort({createdAt:-1});
            // Sorting will be done based on the createdAt field but in descending order
            return response;
        }
        catch(err){
            throw err;
        }
    }
}

module.exports = SessionRepository;
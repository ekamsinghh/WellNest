const SessionRepository = require('../repository/sessionRepository');

class SessionService{
    constructor(){
        this.sessionRepository = new SessionRepository();
    }

    async createSession(data){
        try{
            const session = await this.sessionRepository.create({
                user:data.user,
                title:data.title,
                tags:data.tags,
                json_file_url: data.json_file_url? data.json_file_url:"",
                status:data.status
            });
            return session;
        }
        catch(err){
            throw err;
        }
    }

    async getSessionById(id){
        try{
            const session = await this.sessionRepository.getSessionById(id);
            return session;
        }
        catch(err){
            throw err;
        }
    }

    async deleteSession(sessionId,userId){
        try{
            const session = await this.sessionRepository.getSessionById(sessionId);
            if(!session){
                throw new Error("Session Not Found");
            }
            if(userId!=session.user){
                throw new Error("User is not associated with thiis session");
            }
            const response = await this.sessionRepository.deleteSession(sessionId);
            return response;
        }
        catch(err){
            throw err;
        }
    }

    async getMySessions(id){
        try{
            const sessions = await this.sessionRepository.getMySessions(id);
            return sessions;
        }
        catch(err){
            throw err;
        }
    }
}

module.exports = SessionService;
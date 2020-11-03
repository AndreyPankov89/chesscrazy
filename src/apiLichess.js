export default class ApiLichess {
    constructor() {
        this._base = 'https://lichess.org/api/'
    }

    async getResource(url){
        const resource = await fetch(`${this._base}${url}`);


        if (!resource.ok){
            throw new Error(resource.status);
        }

        return resource.json();
    }

    async getRating (user){
        let userInfo;
        
        await this.getResource(`user/${user}`)
            .then((res)=>{
                userInfo = res;
                
            })
        console.log(userInfo);
        return userInfo.perfs.rapid.rating//['rapid']['rating']
    }
}
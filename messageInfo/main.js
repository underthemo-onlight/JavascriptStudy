"use strict"

let message = {
    msg: "디버깅 용도로 많이사용합니다",
    time: this.nowDate,

    reaction: {
        thumbUp: 9
    },

    user: {
        name: "12. 장유진",
        img: "🐣"
    },
    
    nowDate: function() {
        var date = new Date()
        let time = date.toLocaleString()
        return time
    }
}

console.log(`${message.user.img} ${message.user.name} ${message.nowDate()}`)
console.log(`${message.msg}`)
console.log(`👍 ${message.reaction.thumbUp}`)